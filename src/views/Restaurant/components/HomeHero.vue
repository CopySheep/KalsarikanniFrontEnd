<script setup>
import HeroCarousel from '@/views/Home/components/HeroCarousel.vue';


const carouselObjs = [
    {
        img: '/assets/img/hero/restaurant/sushi.jpg',
        p: ' Fresh & Tasty',
        h4: '鮮活滋味、驚艷味蕾',
        href: '#',
    },
    {
        img: '/assets/img/hero/restaurant/steak.jpg',
        p: 'Fascinatig & Scrumptious',
        h4: '舌尖饗宴、細膩入味',
        href: '#',
    },
    {
        img: '/assets/img/hero/restaurant/pizza.jpg',
        p: ' Brilliant & Enjoyable',
        h4: '品味精彩、享受生活',
        href: '#',
    },
];



const span = '立即探索';
</script>

<template>
    <!-- Hero -->
    <section id="hero">
        <!-- Hero Carousel -->
        <HeroCarousel :objs="carouselObjs" :span="span" />
        <!-- /Hero Carousel -->
    </section>
    <!-- /Hero -->
</template>
