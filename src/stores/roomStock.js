import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCheckRoomData } from '@/apis/Room';
import dayjs from 'dayjs';

export const useRoomStoke = defineStore('roomStock', () => {
    //1.定義state = cartList
    const stock = ref([]);
    const checkInDate = ref(dayjs().format('YYYY/MM/DD'));
    const checkOutDate = ref(dayjs().add(1, 'day').format('YYYY/MM/DD'));


    //2.定義action = 
    const getStock = async () => {
        const res = await getCheckRoomData(checkInDate.value, checkOutDate.value);
        stock.value = res;
    };


    return {
        stock,
        checkInDate,
        checkOutDate,
        getStock,
    };
})