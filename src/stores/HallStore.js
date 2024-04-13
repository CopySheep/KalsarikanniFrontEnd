import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getHallItem } from '@/apis/HallItem';



//pinia練習
export const useHallStore = defineStore('hall', () => {

    const HallList = ref([]);

    const getHall = async ()=>{
        const res = await getHallItem();
        HallList.value = res;
    }

    return{
        HallList,
        getHall,
    }
})
