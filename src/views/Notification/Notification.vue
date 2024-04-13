<script setup>
import "@/apis/Notification.js";
import { onMounted, ref } from "vue";
import { sendNotification } from "@/apis/Notification.js";
import { MemberLogin } from "@/stores/memberlogin";

const notificationContents = ref([]);

const loginInfo = MemberLogin();

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7245/notificationHub")
    .build();

const connectionStart = async () => {
    try {
        await connection.start();
    }
    catch (err) {
        console.log(err);
    }
}

const dateDiff = function (date1, date2) {
    // 顯示幾天前傳送
    let days = Math.floor(((date1 - date2) / 1000 / 60 / 60 / 24));
    let msg = `${days}天前傳送`;

    // 天數 < 1，顯示幾小時傳送
    if (days < 1) {
        let hours = Math.floor(((date1 - date2) / 1000 / 60 / 60));
        msg = `${hours}小時前傳送`;

        // 小時數 < 1，顯示幾分鐘前傳送
        if (hours < 1) {
            let miuntues = Math.floor(((date1 - date2) / 1000 / 60 / 60));
            msg = `${miuntues}分鐘前傳送`;
        }
    }
    return msg;
};


connection.on("SendNotification", (msgs) => {
    notificationContents.value = msgs;
});

onMounted(async () => {
    await connectionStart();
    if (loginInfo.token != "" && loginInfo.token != undefined) {
        sendNotification();
    }
});

</script>

<template>
    <ul class="dropdown-menu border-0 mt-xl-8" data-bs-popper="static">
        <a class="dropdown-item fw-medium" style="font-size: medium;">最新通知</a>
        <hr class="dropdown-divider">
        <li v-for="content in notificationContents" v-bind:key="content.id">
            <a class="dropdown-item fw-medium" style="font-size: large;">{{ content.notificationTitle }}</a>
            <a class="dropdown-item fw-medium" style="font-size: medium;">
                <i class="hicon hicon-bold hicon-menu-inbox"></i>
                {{ content.notificationDescription.substring(0, 5) }} · · ·
            </a>
            <a class="dropdown-item fw-medium" style="font-size: small;">
                <i class="hicon hicon-bold hicon-bold-time-icon"></i>
                {{ dateDiff(new Date(), new Date(content.pushTime)) }}
            </a>
            <hr class="dropdown-divider">
        </li>
        <router-link class="dropdown-item fw-medium" to="/checknotification">
            <i class="hicon hicon-bold hicon-ycs-dashboard"></i>查看所有通知
        </router-link>
    </ul>
</template>