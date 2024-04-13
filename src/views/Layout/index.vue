<script setup>
// import LayoutPreloader from './components/LayoutPreloader.vue';
import LayoutRightSlider from './components/LayoutRightSlider.vue';
//import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import SupportBtn from './components/SupportBtn.vue';
import ChatBOT from './components/ChatBOT.vue';
import RealChatBOT from '@/components/RealChatBOT.vue';
import LayoutFooter from './components/LayoutFooter.vue';

// import GoBack from '@/components/GoBack.vue';


</script>

<template>
    <!-- <LayoutPreloader /> -->
    <LayoutRightSlider />
    <!-- <LayoutHeader /> -->
    <LayoutNav />
    <!-- 二級路由 -->
    <RouterView />

    <!-- 回上一頁 -->
    <!-- <GoBack /> -->

    <!-- <ChatBOT /> -->
    <RealChatBOT />

    <SupportBtn />
    <LayoutFooter />
</template>