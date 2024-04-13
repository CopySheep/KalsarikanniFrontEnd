<script setup>
import HeroCarousel from '@/views/Home/components/HeroCarousel.vue';


const carouselObjs = [
    {
        img: '/assets/img/hero/s62.jpg',
        p: 'Banquet & Reception',
        h4: '永浴愛河、白首成約',
        href: '#',
    },
    {
        img: '/assets/img/hero/s63.jpg',
        p: 'Party & Catering',
        h4: '狂歡慶祝、熱烈歡呼',
        href: '#',
    },
    {
        img: '/assets/img/hero/s64.jpg',
        p: 'Venue & Ballroom',
        h4: '大展鴻圖、多彩豐富',
        href: '#',
    },
];



const span = '立即預約';
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
