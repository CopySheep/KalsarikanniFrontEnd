<script setup>
import CheckRoomTop from './CheckRoomTop.vue';
import HeroCarousel from './HeroCarousel.vue'

const objs = [
  {
    img: '/assets/img/hero/h1.jpg',
    p: 'Hotel & Room',
    h4: '賓至如歸、瓊樓玉宇',
    href: '#',
  },
  {
    img: '/assets/img/hero/h2.jpg',
    p: 'Lobby & Reception',
    h4: '雕梁畫棟、光彩奪目',
    href: '#',
  },
  {
    img: '/assets/img/hero/h3.jpg',
    p: 'Suite & Amenities',
    h4: '別具一格、金碧輝煌',
    href: '#',
  },
];

const span = 'Explore now';
</script>

<template>
    <!-- Hero -->
  <section id="hero">
    <!-- Hero Carousel -->
    <HeroCarousel :objs="objs" :span="span"/>
    <!-- /Hero Carousel -->
    <!-- Check rooms -->
    <CheckRoomTop />
    <!-- /Check rooms -->
  </section>
        <!-- /Hero -->
</template>