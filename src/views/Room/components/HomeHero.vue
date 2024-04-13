<script setup>
import CheckRoomTop from './CheckRoomTop.vue';
import HeroCarousel from './HeroCarousel.vue'

const objs = [
  {
    img: '/assets/img/room/rt1.jpg',
    p: 'The Luxury Hotel ',
    h4: '品質生活，從客房開始 ',
    href: '#',
  },
  {
    img: '/assets/img/room/rt2.jpg',
    p: 'The Suite Collection',
    h4: '尊貴禮遇，盡在每個細節',
    href: '#',
  },
  {
    img: '/assets/img/room/rt19.jpg',
    p: 'The room space',
    h4: '舒適至上，享受城市風情 ',
    href: '#',
  },
];

const span = 'Explore now';
</script>

<template>
  <!-- Hero -->
  <section id="hero">
    <!-- Hero Carousel -->
    <HeroCarousel :objs="objs" :span="span" />
    <!-- /Hero Carousel -->
    <!-- Check rooms -->
    <CheckRoomTop />
    <!-- /Check rooms -->
  </section>
  <!-- /Hero -->
</template>