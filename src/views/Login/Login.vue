<template>
    <!-- Page title -->
    <PageTitle :content="content" />
    <!-- /Page title -->

    <!-- 未登入時顯示 -->
    <div v-if="login.token === '' || login.token === undefined">
        <div class="centered">
            <div class="editform">
                <div class="mt-3 ml_5 w_95">
                    <TextInput ref="InputPhone" InputId="phone" Label="帳號" @CheckInputData="checkerror" />
                </div>
                <div class="mt-3 ml_5 w_95">
                    <TextInput ref="InputPwd" InputId="pwd" Label="密碼" Type="password" @CheckInputData="checkerror" />
                </div>
                <div class="mt-3 ml_5 w_95">
                    <a type="button" style="font-size: 15px;text-decoration: underline;color: blue;"
                        data-bs-toggle="modal" data-bs-target="#exampleModal">忘記密碼</a>
                    <a type="button" style="font-size: 15px;text-decoration: underline;color: blue;margin-left: 15px;"
                        @click="GotoNewMember">註冊會員</a>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">忘記密碼</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <EditPWD />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                        @click="ResetPwd">重設密碼</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                        @click="ResetPwdclose">關閉</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-info btn-sm mx-3" @click="AutoLogin">Demo</button>
                    <button class="btn btn-info btn-sm" @click="platinumMember">白金蝦會員</button>
                </div>
                <div class="centered">
                    <button @click="GotoMember" class="mt-3 mb-3 btn btn-primary">登入</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 未登入時顯示 -->

    <!-- 已登入時顯示 -->
    <div v-else>
        <div class="centered">
            <div class="editform">
                <div class="centered mt-3" style="font-size: 30px;">
                    您好 "{{ data.member.name }}" ~目前已是登入狀態
                </div>
                <div class="centered">
                    <button @click="login.Logout()" class="mt-3 mb-3 btn btn-danger">登出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 已登入時顯示 -->

</template>

<script setup>
import PageTitle from '../Contact/components/PageTitle.vue'
import router from '@/router';
import TextInput from '../CreateMember/form/Input.vue';
import EditPWD from '../MemberDashboard/components/EditForm/EditPassword/EditPWD.vue'
import axios from 'axios';
import theme from '/public/static/js/theme'

import { ref, onMounted } from "vue";
import { MemberLogin } from '@/stores/memberlogin';
import { MemberData } from '@/stores/member';
import { EditPwd } from '@/stores/editpwd';
import { CipherEngine } from '@/stores/CipherEngine';

const cipher = CipherEngine();
const login = MemberLogin();
const data = MemberData();
const resetPassword = EditPwd();
const content = ref("會員登入");
const status = ref(true);

const InputPhone = ref(null);
const InputPwd = ref(null);

const key = CryptoJS.enc.Utf8.parse('1234567890123456');
// 定义初始向量
const iv = CryptoJS.enc.Utf8.parse('1234567890123456');

const checkerror = (e) => {
    status.value = e.value
};


//當點選登入Button時進行
const GotoMember = async () => {
    InputPhone.value.CheckInputData();
    InputPwd.value.CheckInputData();

    if (InputPhone.value.IsValue == true && InputPwd.value.IsValue == true) {
        console.log(phone.value, pwd.value);
        await login.Login(phone.value, pwd.value);
        if (login.token != "" || login.token != undefined) {
            await data.checkdata(login.token);
        }
        router.replace({ path: '/' });
    }
    else {
        alert("輸入訊息不完整，請重新輸入。");
    }
}

const AutoLogin = () => {
    status.value = true;
    // InputPhone.value.InputData = '1234567890';
    InputPhone.value.InputData = '0955746385';
    InputPwd.value.InputData = '12345678';
    InputPhone.value.CheckInputData();
    InputPwd.value.CheckInputData();
}

const platinumMember = () => {
    status.value = true;
    InputPhone.value.InputData = '0971759807';
    InputPwd.value.InputData = '0971759807';
    InputPhone.value.CheckInputData();
    InputPwd.value.CheckInputData();
}

const GotoNewMember = () => {
    router.replace({ path: '/createmember' })
}

const ReloadLogin = () => {
    router.replace({ path: '/Login' })
}

const ResetPwd = async () => {
    const encryptedString = cipher.encryptString(resetPassword.editpwd.phone);
    console.log(encryptedString);

    const url = new URL('https://localhost:7245/api/SendResetPwdEmail');
    url.searchParams.append('toEmail', resetPassword.editpwd.email);
    url.searchParams.append('url', `http://localhost:5173/editpwd?string=${encryptedString}`);

    await axios.post(url);
    alert('請到信箱收取修改密碼的信件');
}

const ResetPwdclose = () => {
    resetPassword.editpwd.email = null;
    resetPassword.editpwd.phone = null;
}

onMounted(() => theme.init())
</script>

<style>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

.editform {
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 700px;
    margin: 30px;
}

.w_95 {
    width: 95%;
}

.ml_5 {
    margin-left: 5%;
}
</style>