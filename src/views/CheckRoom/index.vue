<script setup>
import HeroCarousel from './components/HeroCarousel.vue';
import HomeHero from './components/HomeHero.vue';
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import RoomBooking from './components/RoomBooking.vue';
// import checkRoomTop from './components/CheckRoomTop.vue';
// onMounted(() => 
// Theme.init()
// );

</script>

<template>
    <HomeHero />
    <RoomBooking />
</template>



<style></style>