<template>
    <div class="centered">
        <h3>
            <label>基本資料</label>
            <label type="button" class="text" @click="InputEdit">編輯</label>
        </h3>
    </div>
    <!-- 姓名 -->
    <div class="row">
        <TextInput class="col-6" ref="InputName" InputId="Name" Label="姓名" v-model="Name" :isReadOnly="EditRead" />
        <TextInput class="col-6" ref="InputFirstName" InputId="FirstName" Label="姓氏" v-model="FirstName"
            :isReadOnly="EditRead" />
    </div>
    <TextInput ref="InputBirthdate" InputId="Birthdate" Label="生日" v-model="Birthdate" Type="date"
        :isReadOnly="EditRead" />
    <TextInput ref="InputEmail" InputId="Email" Label="信箱" v-model="Email" :isReadOnly="EditRead" />
    <TextInput ref="InputAddress" InputId="Address" Label="地址" v-model="Address" :isReadOnly="EditRead" />

    <Modal v-if="!EditRead" Title="修改密碼" Type="a">確認要修改密碼嗎?</Modal>
    <hr>

    <TextInput ref="InputGender" InputId="Gender" Label="性別" v-model="Gender" isReadOnly :Color="!EditRead" />
    <TextInput ref="InputPhone" InputId="Phone" Label="手機" v-model="Phone" isReadOnly :Color="!EditRead" />
    <TextInput ref="InputLevel" InputId="Level" Label="會員等級" v-model="Level" isReadOnly :Color="!EditRead" />


    <div v-if="EditRead === false" class="centered" style="margin: 10px;">
        <button class="btn btn-danger editbtn" @click="EditData">修改設定</button>
        <button class="btn btn-primary editbtn" @click="InputEdit">取消修改</button>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { MemberData } from '@/stores/member';
import { MemberLogin } from '@/stores/memberlogin'
import { EditPwd } from '@/stores/editpwd';

import TextInput from '../../../CreateMember/form/Input.vue'
import Modal from '../Modal.vue'
import axios from 'axios';
import theme from '/public/static/js/theme'

const editpwd = EditPwd();
const memberdata = MemberData();
const login = MemberLogin();
const EditRead = ref(true);

const InputName = ref(null);
const InputFirstName = ref(null);
const InputBirthdate = ref(null);
const InputEmail = ref(null);
const InputAddress = ref(null);
const InputGender = ref(null);
const InputPhone = ref(null);
const InputLevel = ref(null);

const DataEdit = ref({
    name: null,
    birthDay: null,
    identityNumber: null,
    gender: null,
    phone: null,
    email: null,
    address: null,
    level: null,
    ban: null
});

const check = () => {
    DataEdit.name = `${Name.value} ${FirstName.value}`;
    DataEdit.birthDay = Birthdate.value;
    DataEdit.identityNumber = memberdata.member.identityNumber;
    DataEdit.gender = memberdata.member.gender;
    DataEdit.phone = memberdata.member.phone;
    DataEdit.email = Email.value;
    DataEdit.address = Address.value;
    DataEdit.level = memberdata.member.level;
    DataEdit.ban = memberdata.member.ban;
    console.log(DataEdit);

}

const reload = () => {
    InputName.value.InputData = memberdata.member.name.split(' ')[0];
    InputFirstName.value.InputData = memberdata.member.name.split(' ')[1];
    InputBirthdate.value.InputData = memberdata.member.birthDay.split("T")[0];
    InputEmail.value.InputData = memberdata.member.email;
    InputAddress.value.InputData = memberdata.member.address;
    InputGender.value.InputData = memberdata.member.gender;
    InputPhone.value.InputData = memberdata.member.phone;
    InputLevel.value.InputData = memberdata.member.level;

    CheckInputLog();
}

const EditData = async () => {
    check();
    const url = "https://localhost:7245/api/Members";
    const status = await axios.put(url, DataEdit);
    await memberdata.checkdata(login.token);
    alert(status.data);
    location.reload();

}

const resetpwd = () => {
    editpwd.editpwd.oldpwd = null;
    editpwd.editpwd.newpwd = null;
    editpwd.editpwd.confirmpwd = null;
}

const EditPassword = async () => {
    const editpwddata = {
        phone: memberdata.member.phone,
        oldpwd: editpwd.editpwd.oldpwd,
        newpwd: editpwd.editpwd.newpwd,
        confirmpwd: editpwd.editpwd.confirmpwd
    }

    const url = "https://localhost:7245/api/Members/EditPwd";
    const status = await axios.put(url, editpwddata);
    alert(status.data);

    resetpwd();
}

const CheckInputLog = () => {
    InputName.value.CheckInputData();
    InputFirstName.value.CheckInputData();
    InputBirthdate.value.CheckInputData();
    InputEmail.value.CheckInputData();
    InputAddress.value.CheckInputData();
    InputGender.value.CheckInputData();
    InputPhone.value.CheckInputData();
    InputLevel.value.CheckInputData();
}



// 開啟修改資料功能
const InputEdit = () => {
    if (EditRead.value == true) EditRead.value = false;
    else EditRead.value = true;
    console.log(EditRead.value);
    reload();
}

onMounted(() => {
    setTimeout(reload, 100);
});

onMounted(() => theme.init())

</script>

<style>
.editbtn {
    margin: 5px;
    border-radius: 5px;
}

.text {
    font-size: 15px;
    color: blue;
    text-decoration: underline;
}
</style>