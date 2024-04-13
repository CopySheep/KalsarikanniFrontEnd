<template>
    <!-- Heading -->
    <div class="mt-30 text-center">
        <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Dispatch Service</span>
        <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">我的行程</h2>
        <BreadCrumb :bread-crumb="breadCrumb" />
    </div>
    <!-- /Heading -->
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue';
import { ref } from 'vue';

const breadCrumb = ref("Dispatch Service");
</script>

<style></style>