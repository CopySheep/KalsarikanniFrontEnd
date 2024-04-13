<script setup>
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import PageTitle from './components/PageTitle.vue';
import { generalEmailApi } from '@/apis/Email';

const sendGeneralEmail = () => {
    try {
        generalEmailApi(emailContent.value.subject, emailContent.value.title, emailContent.value.content, emailContent.value.toEmail);
        alert("寄送成功");
    } catch (error) {
        alert("寄送失敗");
    }
}


const content = ref("寄送信件");

const emailDemo = () => {
    emailContent.value = {
        subject: "寄信測試",
        title: "寄信功能測試",
        content: "此信件用於測試寄信功能",
        toEmail: "fuen31wf@gmail.com",
    }
}

const emailContent = ref({
    subject: "",
    title: "",
    content: "",
    toEmail: "",
});

onMounted(() => Theme.init());
</script>

<template>
    <!-- Page title -->
    <PageTitle :content="content" />
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
                        <h2 class="h5 text-uppercase ls-1 h-sub-font">寄送文字訊息</h2>
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
                                <input id="subject" type="input" name="subject" class="form-control shadow-sm"
                                    placeholder="Email" required="" v-model="emailContent.subject">
                                <label for="subject">主旨 *</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-5">
                                <input id="email" type="email" name="email" class="form-control shadow-sm"
                                    placeholder="Email" required="" v-model="emailContent.toEmail">
                                <label for="email">Email *</label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating mb-5">
                                <input id="form_subject" type="text" name="subject" class="form-control shadow-sm"
                                    placeholder="Subject" required="" v-model="emailContent.title">
                                <label for="form_subject">標題 *</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating mb-5">
                                <textarea id="content" name="content" class="form-control shadow-sm"
                                    placeholder="Content" style="height: 150px" required=""
                                    v-model="emailContent.content"></textarea>
                                <label for="content">內容 *</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                </div>
                                <div class="col-12 col-md-6 text-start text-md-end">
                                    <button v-on:click="emailDemo" class="btn btn-primary shadow-sm mx-3">
                                        <i class="hicon hicon-email-envelope"></i>
                                        <span> 測試：寄信</span>
                                    </button>
                                    <button v-on:click="sendGeneralEmail" class="btn btn-primary shadow-sm">
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