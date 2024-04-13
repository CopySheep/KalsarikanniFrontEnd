<template>
    <div class="centered">
        <div class="formstyle">
            <div style="margin: 25px;">
                <Inputvue InputId="newPwd" Label="請輸入新密碼" v-model="newPwd" Type="password" />
                <Inputvue InputId="confirmPwd" Label="再次確認新密碼" v-model="confirmPwd" Type="password" />
            </div>
            <div class="centered">
                <button class="btn btn-primary" @click="ResetPwd">重設密碼</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Inputvue from '@/views/CreateMember/form/Input.vue';
import axios from 'axios';
import router from '@/router';

const key = CryptoJS.enc.Utf8.parse('1234567890123456');
// 定义初始向量
const iv = CryptoJS.enc.Utf8.parse('1234567890123456');

import { EditPwd } from '@/stores/editpwd';
import { useRouter } from 'vue-router';

const userouter = useRouter();
const EidtPassword = EditPwd();

const ResetPwd = async () => {
    const query = userouter.currentRoute.value.query;

    console.log(query.string);
    console.log(decryptString(query.string));

    const url = new URL(`https://localhost:7245/api/Members/EditPwd/`);

    const editdata = {
        phone: decryptString(query.string),
        oldPwd: "",
        newPwd: newPwd.value,
        confirmPwd: confirmPwd.value
    }

    console.log(editdata);
    const status = await axios.put(url, editdata);
    alert(status.data);
    if (status.data == "更新成功") {
        EidtPassword.editpwd.phone = null;
        EidtPassword.editpwd.email = null;
    }
    router.replace({ path: '/login' });
}


function decryptString(encryptedText) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key, { iv: iv });
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}

</script>

<style>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

.formstyle {
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 25px;
    width: 70svh;
}
</style>