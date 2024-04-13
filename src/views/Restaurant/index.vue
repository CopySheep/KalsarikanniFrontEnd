<script setup>
import Theme from '/public/static/js/theme';
import HomeHero from './components/HomeHero.vue';
import SlideCheck from '@/views/OtherServices/components/SlideCheck.vue';
import About from './components/About.vue';
import { onMounted, ref } from 'vue';
const subTitle = "餐廳實景"

const title = "靜謐山丘"

const objs = ref([
    {
        id: 1,
        img: "/assets/img/slidecheck/restaurant/scene1.jpg"
    },
    {
        id: 2,
        img: "/assets/img/slidecheck/restaurant/scene2.jpg"
    },
    {
        id: 3,
        img: "/assets/img/slidecheck/restaurant/scene3.jpg"
    },
    {
        id: 4,
        img: "/assets/img/slidecheck/restaurant/scene4.jpg"
    },
]);


onMounted(() => {
    Theme.init();
});
</script>

<template>
    <HomeHero />
    <About />
    <SlideCheck :subTitle="subTitle" :title="title" :objs="objs" />


</template>