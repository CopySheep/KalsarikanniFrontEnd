<script setup>
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import PageTitle from '../Contact/components/PageTitle.vue';

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7245/liveCustomerServiceHub")
    .build();

const connectionStart = async () => {
    try {
        await connection.start();
    }
    catch (err) {
        console.log(err);
    }
}

const userInfo = ref({
    userId: ""
});

const inputUserId = ref("");

const msg = ref("");

const onLoginClick = async () => {
    await connection.invoke("LoadUserInfo", userInfo.value);
    console.log("Data send successfully");
};

const onSendClick = async () => {
    try {
        await connection.invoke("SendToConnection", inputUserId.value, msg.value)
        console.log("Msg sent successfully");
    }
    catch (err) {
        console.log(err);
    }
};

connection.on("StringDataTransfer", (response) => {
    console.log("Received Msg", response);
});

onMounted(async () => {
    Theme.init();
    await connectionStart();
});
</script>

<template>
    <!-- Page title -->
    <PageTitle />
    <!-- /Page title -->
    <!-- Contact -->
    <section id="contact" class="pt-16 pb-14">
        <div class="container">
            <div class="row" data-cues="fadeIn">
                <div class="col-12 col-xl-4">
                    <!-- Contact Information -->
                    <div class="mb-4">
                        <h2 class="h5 text-uppercase ls-1 h-sub-font">聯絡資訊</h2>
                        <div class="row">
                            <div class="col-12 col-xl-12 col-lg-4">
                                <div class="mb-4">
                                    <div class="mb-1">
                                        <i class="hicon hicon-flights-pin"></i>
                                        <span class="fw-medium"> 地址：</span>
                                    </div>
                                    <div class="fw-bold-2">320 桃園市中壢區新生路二段421號</div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-12 col-lg-4 col-md-6">
                                <div class="mb-4">
                                    <div class="mb-1">
                                        <i class="hicon hicon-telephone"></i>
                                        <span class="fw-medium"> 電話：</span>
                                    </div>
                                    <div class="fw-bold-2">+886 2-2592-6998 (Ext: 10405)</div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-12 col-lg-4 col-md-6">
                                <div class="mb-4">
                                    <div class="mb-1">
                                        <i class="hicon hicon-email-envelope"></i>
                                        <span class="fw-medium"> Email:</span>
                                    </div>
                                    <div class="fw-bold-2">KalsariHotel@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Contac Information -->
                </div>
                <div class="col-12 col-xl-8">
                    <!-- Contact Form -->
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h2 class="h5 text-uppercase ls-1 h-sub-font">登入</h2>
                        <span class="text-danger">* 為必填項目</span>
                    </div>
                    <!-- form message -->
                    <div class="row">
                        <div class="col-12">
                            <div class="alert d-none" role="alert" id="msg_alert"></div>
                        </div>
                    </div>
                    <!-- /form message -->
                    <div class="row gx-4">
                        <div class="col-md-6">
                            <div class="form-floating mb-5">
                                <input id="userId" type="text" name="userId" class="form-control shadow-sm"
                                    placeholder="使用者 ID" v-model="userInfo.userId">
                                <label for="form_firstname">使用者 ID {{ userInfo.userId }}</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 text-start text-md-end">
                            <button class="btn btn-primary shadow-sm" v-on:click="onLoginClick">
                                <i class="hicon hicon-email-envelope"></i>
                                <span> 登入</span>
                            </button>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-5">
                                <input id="inputUserId" type="text" name="inputUserId" class="form-control shadow-sm"
                                    placeholder="輸入使用者 ID" v-model="inputUserId">
                                <label for="form_email">輸入使用者 ID </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-5">
                                <input id="sendMessage" type="text" name="sendMessage" class="form-control shadow-sm"
                                    placeholder="輸入訊息" v-model="msg">
                                <label for="form_lastname">輸入訊息</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-md-6 text-start text-md-end">
                                    <button class="btn btn-primary shadow-sm" v-on:click="onSendClick">
                                        <i class="hicon hicon-email-envelope"></i>
                                        <span> 寄送</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Contact Form -->
                </div>
            </div>
        </div>
    </section>
    <!-- /Contact -->
</template>

<style scoped></style>