import { ref } from "vue";
import { defineStore } from "pinia";
import { useCartStore } from "./cartStore";
import { MemberData } from "@/stores/member";
import { mergeCartAPI } from "@/apis/cart";
import router from '@/router';
import { notificationStore } from "./notificationStore";

export const MemberLogin = defineStore(
    'memberlogin',
    () => {
        const token = ref("");
        // 使用 cartStore
        const cartStore = useCartStore();
        const memberdata = MemberData();

        const useNotificationStore = notificationStore();

        const getCookie = () => {
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookiestring = decodedCookie.split('=')[1];
            token.value = cookiestring;
        }

        const setCookie = (cookieName, cookieValue, expirationhour) => {
            var d = new Date();
            d.setTime(d.getTime() + (expirationhour * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        }

        //呼叫API取得會員資訊
        const Login = async (phone, pwd) => {
            const url = new URL('https://localhost:7245/api/Members/Login')
            url.searchParams.append('phone', phone)
            url.searchParams.append('pwd', pwd)

            const response = await fetch(url);
            token.value = await response.text();
            if (token.value === "登入失敗") {
                token.value = "";
                alert("帳號或密碼錯誤");
            }
            else {
                // //儲存到Cookie
                setCookie("token", token.value, 1);
            }


            // 合併本地端購物車及資料庫購物車
            await mergeCartAPI(cartStore.cartList.map(item => {
                console.log(item)
                return {
                    uid: item.uid,
                    selected: item.selected,
                    typeId: item.typeId,
                    roomId: item.roomId,
                    checkInDate: item.checkInDate,
                    checkOutDate: item.checkOutDate,
                    remark: item.remark,
                };
            }));

            // 更新當前購物車
            cartStore.updateNewList();

            await useNotificationStore.loadNotification();
        }

        const Logout = () => {
            //更改Cookie儲存的值
            //將名稱為token存的值改成"" & 時間改成負的(已超時)
            token.value = "";
            setCookie("token", token.value, -1);
            //清空購物車
            cartStore.clearCart();
            //清除會員資料
            memberdata.deldata();
            // 清除通知資料
            useNotificationStore.clearNotification();

            router.replace({ path: '/login' });
        }

        return {
            token,
            Login,
            Logout,
            getCookie,
        };
    },
    {
        persist: true
    })