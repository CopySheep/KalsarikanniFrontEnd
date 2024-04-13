<script setup>
import { onMounted, ref } from 'vue';
import { sendNotification } from '@/apis/Notification';

const levels = ref([]);
const types = ref([]);

const loadLevels = async () => {
    const response = await fetch("https://localhost:7245/api/Notification/GetLevels");

    const datas = await response.json();

    levels.value = datas;
};

const loadTypes = async () => {
    const response = await fetch("https://localhost:7245/api/Notification/GetTypes");

    const datas = await response.json();

    types.value = datas;
}

const allMembers = () => {
    notificationForm.value = {
        notificationId: 0,
        notificationTitle: "全體會員通知",
        notificationDescription: "此通知用於測試推播至全體會員",
        pushTime: "",
        image: null,
        levelId: null,
        typeId: 1
    }
}

const platiumMembers = () => {
    notificationForm.value = {
        notificationId: 0,
        notificationTitle: "白金蝦會員通知",
        notificationDescription: "此通知用於測試推播至白金蝦會員",
        pushTime: "",
        image: null,
        levelId: 10,
        typeId: 1
    }
}

const notificationForm = ref({
    notificationId: 0,
    notificationTitle: "",
    notificationDescription: "",
    pushTime: "",
    image: null,
    levelId: null,
    typeId: 0
});
const createNotification = async () => {
    const response = await fetch("https://localhost:7245/api/Notification/Create", {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(notificationForm.value),
        method: "POST"
    });
    const datas = await response.text();
    alert(datas);
};

const clickHandler = async () => {
    await createNotification();
    await sendNotification();
    location.reload();
};

onMounted(async () => {
    loadLevels();
    loadTypes();
});
</script>

<template>
    <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h5 text-uppercase ls-1 h-sub-font">新增通知</h2>
        <span class="text-danger">* 為必填項目</span>
    </div>
    <div class="row gx-4">
        <div class="col-md-6">
            <div class="form-floating mb-5">
                <input id="title" type="text" name="title" class="form-control shadow-sm" placeholder="使用者 ID" v-model="notificationForm.notificationTitle">
                <label for="title">標題</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-5">
                <select name="types" id="level" class="form-select" v-model="notificationForm.typeId">
                    <option v-bind:value="null" v-bind:disabled="true">請選擇通知類型</option>
                    <option v-for="item in types" v-bind:key="item.id" v-bind:value="item.id">
                        {{ item.name }}
                    </option>
                </select>
                <label for="types">通知類型</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-5">
                <input id="sendMessage" type="datetime-local" name="sendMessage" class="form-control shadow-sm" placeholder="輸入訊息" v-model="notificationForm.pushTime">
                <label for="form_lastname">發送時間</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-5">
                <select name="level" id="level" class="form-select" v-model="notificationForm.levelId">
                    <option v-bind:value="null" v-bind:disabled="true">請選擇會員等級</option>
                    <option v-bind:value="null">所有會員</option>
                    <option v-for="level in levels" v-bind:key="level.id" v-bind:value="level.id">
                        {{ level.name }}
                    </option>
                </select>
                <label for="level">發送對象</label>
            </div>
        </div>
        <div class="col-12">
            <div class="form-floating mb-5">
                <textarea id="form_message" name="message" class="form-control shadow-sm" placeholder="Message" style="height: 150px" v-model="notificationForm.notificationDescription"></textarea>
                <label for="form_message">內容 *</label>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-12 text-center mb-3">
                    <button class="btn btn-primary shadow-sm" v-on:click="clickHandler">
                        <i class="hicon hicon-bell-alerts"></i>
                        <span> 發送通知</span>
                    </button>
                </div>
                <div class="col-12 text-center">
                    <button class="btn btn-primary shadow-sm mx-3" v-on:click="allMembers">
                        <span> 測試：全體會員</span>
                    </button>
                    <button class="btn btn-primary shadow-sm" v-on:click="platiumMembers">
                        <span> 測試：白金蝦會員</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>