import {defineStore} from "pinia";
import { MemberLogin } from "./memberlogin";
import { computed,ref } from "vue";
import { sendNotification } from "@/apis/Notification";

export const notificationStore = defineStore("notification", () => {
    const logninInfo = MemberLogin();

    const isLogined = computed(() => logninInfo.token());

    const notificationList = ref([]);

    const loadNotification = async() => {
        const res = await sendNotification();
        notificationList.value = res;
    }

    const clearNotification = () => {
        notificationList.value = null;
    }

    return{
        notificationList,
        loadNotification,
        clearNotification
    }
},{
    persist: true,
});