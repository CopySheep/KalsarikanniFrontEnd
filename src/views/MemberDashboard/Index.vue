<template>
    <!-- Page title -->
    <PageTitle :content="content" />
    <!-- /Page title -->
    <!-- Body -->
    <MemberBody />
    <!-- Body -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { MemberLogin } from "@/stores/memberlogin";
import router from "@/router";

import PageTitle from '../Contact/components/PageTitle.vue'
import MemberBody from '../MemberDashboard/components/body.vue'

const content = ref("會員中心");
const Login = MemberLogin();

if (Login.token == "" || Login.token == undefined) {
    router.replace({ path: '/Login' });
}

</script>

<style></style>