<script setup>
import { sendAllNotification } from '@/apis/Notification';
import { onMounted, ref } from 'vue';

const notifications = ref([]);
const totalPages = ref(1);
const thePage = ref(1);

const loadNotification = async () => {
    const datas = await sendAllNotification(thePage.value);
    notifications.value = datas.notiftications
    totalPages.value = datas.totalPages
}
const clickHandler = (page) => {
    thePage.value = page;
    loadNotification();
};

onMounted(async () => {
    loadNotification();
})
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="">{{ thePage }}/{{ totalPages }}</div>
    </div>
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist" data-cue="fadeIn" data-show="true"
        style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
        <li class="nav-item" role="presentation" v-for="(value, index) in totalPages" v-bind:key="index"
            v-on:click="clickHandler(value)">
            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4 active" id="facial-tab"
                data-bs-toggle="tab" data-bs-target="#facial-tab-pane" type="button" role="tab"
                aria-controls="facial-tab-pane" aria-selected="true"> {{ value }} </button>
        </li>
    </ul>
    <div class="tab-content bg-body p-8 p-lg-10 border-end border-start border-bottom" id="myTabContent"
        data-cue="fadeIn" data-show="true"
        style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
        <div class="tab-pane fade active show" id="facial-tab-pane" role="tabpanel" aria-labelledby="facial-tab"
            tabindex="0">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="item in notifications">
                    <h6>{{ item.notificationTitle }}</h6>
                    <p><i class="hicon hicon-bold hicon-menu-inbox"></i>&nbsp;{{ item.notificationDescription }}</p>
                    <p><i class="hicon hicon-bold hicon-bold-time-icon"></i>&nbsp;{{ new
            Date(item.pushTime).toLocaleString() }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>