//封裝購物車 store
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { MemberLogin } from './memberlogin'
// import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
import { findNewCartListAPI, insertCartAPI, delCartAPI, selectedItemAPI, checkAllAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = MemberLogin()
    const isLogin = computed(() => userStore.token)
    // 1. 定义state - cartList
    const cartList = ref([]);

    // 2. 定義 action()
    // 取得最新購物車列表 action
    const updateNewList = async () => {
        const res = await findNewCartListAPI();
        cartList.value = res;
        //console.log(cartList.value);
    }

    // 取得最新購物車列表 action
    const addCart = async (product) => {
        // console.log(isLogin.value)
        // const { skuId, count } = goods;
        if (isLogin.value) {
            // 登入之後的加入購物車邏輯
            await insertCartAPI(product);
            updateNewList();
        } else {
            // console.log(product)
            // 添加購物車操作
            // 已添加過 count + 1
            // 沒有添加過 直接 push
            // 透過匹配傳遞過來的商品物件 skuid 能不能在 cartList 中找到, 找到就是添加過
            //const item = cartList.value.find(item => item.skuId === product.skuId);
            //if (item) {
            // 找到了
            //item.count += product.count;
            //console.log('find');
            //} else {
            // 沒找到
            cartList.value.push(product);
            //console.log('no find');
            //}
        }
    };

    // 刪除購物車項目
    const delCart = async (uid) => {
        if (isLogin.value) {
            //     // 調用 API 實現接口購物車中的刪除功能
            const form = new FormData();
            form.append('uid', uid);
            await delCartAPI(form);
            updateNewList();
        } else {
            // 1. 找到要刪除項的下標值: splice
            const index = cartList.value.findIndex(item => item.uid === uid);
            cartList.value.splice(index, 1);
            // 2. 使用陣列的過濾方法: filter
            // cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        }
    };

    // 清除購物車
    const clearCart = () => {
        cartList.value = [];
    }

    // 單選功能
    const singleCheck = async (uid, selected) => {
        if (isLogin.value) {
            await selectedItemAPI({ uid, selected });
            updateNewList();
        } else {
            const item = cartList.value.find(item => item.uid === uid);
            item.selected = selected;
        }
    };

    // 全選功能
    const allCheck = async (selected) => {
        if (cartList.value.length == 0) return;

        if (isLogin.value) {
            const form = new FormData();
            form.append('selected', selected);
            await checkAllAPI(form);
            updateNewList();
        } else {
            cartList.value.forEach(item => item.selected = selected);
        }
    }

    // 計算屬性
    // // 1. 總的數量 所有項目的 count 總和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    // 2. 總價 所有項目的 count * price 總和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));

    // //是否全選
    const isAll = computed(() => cartList.value.every(item => item.selected));

    // // 已選擇數量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0));

    // // 已選擇價格合計
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0));

    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        clearCart,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        updateNewList
    }
}, {
    persist: true,
})