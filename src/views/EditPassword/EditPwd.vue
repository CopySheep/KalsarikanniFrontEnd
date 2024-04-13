<template>
    <!-- Page title -->
    <PageTitle :content="content" />
    <!-- /Page title -->
    <EditPwd />
</template>

<script setup>
import { ref, onMounted } from "vue";

import PageTitle from '../Contact/components/PageTitle.vue'
import EditPwd from './Form/EditPWD_Member.vue'
import theme from '/public/static/js/theme'

const content = ref("重設密碼")

onMounted(() => theme.init())
</script>

<style></style>