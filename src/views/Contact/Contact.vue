<script setup>
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import PageTitle from './components/PageTitle.vue';

const content = ref("聯絡我們");
const isChecked = ref(false);

const contactForm = ref({
    surname: "",
    givenName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
                    <form class="needs-validation mb-4" method="post" novalidate="">
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
                                    <input id="form_firstname" type="text" name="firstname" class="form-control shadow-sm" placeholder="First Name" v-model="contactForm.surname" required="">
                                    <label for="form_firstname">姓 *</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-5">
                                    <input id="form_lastname" type="text" name="lastname" class="form-control shadow-sm" placeholder="Last Name" required="" v-model="contactForm.givenName">
                                    <label for="form_lastname">名 *</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-5">
                                    <input id="form_email" type="email" name="email" class="form-control shadow-sm" placeholder="Email" required="" v-model="contactForm.email">
                                    <label for="form_email">Email *</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-5">
                                    <input id="form_phone" type="number" name="phone" class="form-control shadow-sm" placeholder="Phone" required="" v-model="contactForm.phone">
                                    <label for="form_phone">電話 *</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating mb-5">
                                    <input id="form_subject" type="text" name="subject" class="form-control shadow-sm" placeholder="Subject" required="" v-model="contactForm.subject">
                                    <label for="form_subject">主旨 *</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating mb-5">
                                    <textarea id="form_message" name="message" class="form-control shadow-sm" placeholder="Message" style="height: 150px" required="" v-model="contactForm.message"></textarea>
                                    <label for="form_message">內容 *</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-check mb-5">
                                            <input class="form-check-input shadow-sm" type="checkbox" value="" id="invalidCheck" required="" v-model="isChecked">
                                            <label class="form-check-label" for="invalidCheck">我同意<a href="#" class="hover">使用條款及隱私權政策</a>. </label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 text-start text-md-end">
                                        <button type="submit" class="btn btn-primary shadow-sm" v-bind:disabled="!isChecked">
                                            <i class="hicon hicon-email-envelope"></i>
                                            <span> 寄送</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- /Contact Form -->
                </div>
            </div>
        </div>
    </section>
    <!-- /Contact -->
</template>

<style scoped></style>