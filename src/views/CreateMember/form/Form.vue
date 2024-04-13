<template>
    <div>
        <div class="mt-5 ml_5">
            <div class="row">
                <div class="col-6">
                    <TextInput InputId="Name" Label="姓名" v-model="Name" @CheckInputData="checkerror" />
                </div>
                <div class="col-6">
                    <TextInput InputId="FirstName" Label="姓氏" v-model="FirstName" @CheckInputData="checkerror" />
                </div>
            </div>
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="Birthdate" Label="生日" v-model="Birthdate" Type="date" />
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="IdentityNumber" Label="身分證號碼" v-model="IdentityNumber" @CheckInputData="checkerror" />
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="Phone" Label="手機" v-model="Phone" @CheckInputData="checkerror" />
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="Password" Label="密碼" v-model="Password" Type="password" @CheckInputData="checkerror" />
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="ConfirmPassword" Label="確認密碼" v-model="ConfirmPassword" Type="password"
                @CheckInputData="checkerror" />
        </div>

        <!-- 要再改 -->
        <div class="row mt-3 ml_5">
            <div class="col-3">性別：</div>
            <div class="col-9">
                <input type="radio" id="male" name="gender" value="male" v-model="SelectGender">
                <label for="male" style="margin-left: 5px;">男性</label>
                <input type="radio" id="female" name="gender" value="female" style="margin-left: 25px;"
                    v-model="SelectGender">
                <label for="female" style="margin-left: 5px;">女性</label>
            </div>
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="Email" Label="信箱" v-model="Email" @CheckInputData="checkerror" />
        </div>

        <div class="mt-3 ml_5">
            <TextInput InputId="Address" Label="地址" v-model="Address" @CheckInputData="checkerror" />
        </div>
    </div>

    <div class="mb-5" style="margin: 10px auto; width: fit-content;">
        <button class="btn btn-primary" type="submit" @click="addmember">註冊會員</button>
        <button class="btn btn-danger" @click="gohome" style="margin-left: 10px;">取消</button>
    </div>
</template>

<script setup>
import TextInput from './Input.vue';
import router from '@/router';
import axios from 'axios';
import { ref } from "vue";


const status = ref(true);

const checkerror = (e) => {
    status.value = e.value
};

const SelectGender = ref(null);

const gohome = () => {
    router.replace({ path: '/' });
}

const check = () => {
    memberdata.name = `${Name.value} ${FirstName.value}`;
    memberdata.birthDay = Birthdate.value;
    memberdata.identityNumber = IdentityNumber.value;
    memberdata.phone = Phone.value;
    memberdata.password = Password.value;
    if (SelectGender.value == "male") memberdata.gender = true;
    else if (SelectGender.value == "female") memberdata.gender = false;
    else memberdata.gender = null;

    memberdata.email = Email.value;
    memberdata.address = Address.value;

    console.log(memberdata);
}

const memberdata = ref({
    name: null,
    birthDay: null,
    identityNumber: null,
    phone: null,
    password: null,
    gender: true,
    email: null,
    address: null
});

const addmember = async () => {
    check();

    if (Password.value == ConfirmPassword.value) {
        const url = "https://localhost:7245/api/Members";
        await axios.post(url, memberdata)
            .then(function (response) {
                // 請求成功時的處理
                alert('成功：', response.data);
            })
            .catch(function (error) {
                // 請求失敗時的處理
                alert('失敗：', error);
            });;
        router.replace({ path: '/login' });
    }
    else {
        alert("密碼與確認密碼不相同");
    }

}
</script>

<style>
.w_95 {
    width: 95%;
}

.ml_5 {
    margin-left: 5%;
}

label {
    margin-left: 25px;
}
</style>