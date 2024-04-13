<template>
    <Inputvue InputId="Phone" Label="手機號碼" v-model="EditPhone" @input="phonechange" />
    <Inputvue InputId="Email" Label="信箱" v-model="EditEmail" @input="emailchange" />
</template>

<script setup>
import { ref } from 'vue';
import Inputvue from '../../../../CreateMember/form/Input.vue';
import { EditPwd } from '@/stores/editpwd'

const editpwd = EditPwd();
const EditPhone = ref(""), EditEmail = ref("");

const phonechange = () => {
    editpwd.editpwd.phone = Phone.value;
}
const emailchange = () => {
    editpwd.editpwd.email = Email.value;
}

defineExpose({ EditPhone, EditEmail });

</script>