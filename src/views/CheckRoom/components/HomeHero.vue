<script setup>
import CheckRoomTop from './CheckRoomTop.vue';
import HeroCarousel from './HeroCarousel.vue'

const objs = [
  {
    img: '/assets/img/hero/h1.jpg',
    p: 'The Luxury Hotel ',
    h4: 'Spectacular City Views ',
    href: '#',
  },
  {
    img: '/assets/img/hero/h2.jpg',
    p: 'The Suite Collection',
    h4: 'Palatial Signature Suites',
    href: '#',
  },
  {
    img: '/assets/img/hero/h3.jpg',
    p: 'The room space',
    h4: 'Spacious & comfortable ',
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