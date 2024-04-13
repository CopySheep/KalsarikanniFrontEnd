<script setup>
const props = defineProps({
    breadCrumb: String
});
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ breadCrumb }}</li>
        </ol>
    </nav>
</template>