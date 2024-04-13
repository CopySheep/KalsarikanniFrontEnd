import { defineStore } from "pinia";
import { findNewOrderListAPI, delOrderAPI } from '@/apis/Dispatch'
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useOrderStore=defineStore("dispatch", ()=>{
    // 1. 定义state - orderList
    const orderList = ref([]);
    const formatString = "YYYY/M/D A HH:mm:ss"; // 指定输入日期字符串的格式

    const history = ref([]);
    const toCome = ref([]);
    const deleteResult =ref("");

    // const history = computed(() => orderList.value.filter(o => dayjs(o.endTime, formatString).toDate() < Date.now()));
    // const toCome = computed(() => orderList.value.filter(o => dayjs(o.startTime, formatString).toDate() > Date.now()));

    // 2. 定義 action()
    // 取得最新訂單列表 action
    const getOrderList = async () => {
        const res = await findNewOrderListAPI();
        orderList.value = res;
        if(orderList.value.length) {
            history.value = orderList.value.filter(o => dayjs(o.endTime, formatString).toDate() < Date.now());
            toCome.value = orderList.value.filter(o => dayjs(o.startTime, formatString).toDate() >= Date.now());
        }
    }

    const deleteOrder= async(id)=>{
        Swal.fire({
            title: "您確定要取消此行程嗎?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "確定",
            cancelButtonText: "取消"
          }).then((result) => {
            if (result.isConfirmed) {
                const res = delOrderAPI(id);
        deleteResult.value=res;
              Swal.fire({
                title: "已取消!",
                text: "您的行程已被取消，即將刷新頁面...",
                icon: "success"
              });
              setTimeout(() => {
                window.location.href = '/carOrderList'
            }, 3000)
            }
          });
    }

    return{
        orderList,
        history,
        toCome,
        deleteResult,
        getOrderList,
        deleteOrder
    }
})