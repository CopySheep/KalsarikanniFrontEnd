<script setup >
import HeroCarousel from './components/HeroCarousel.vue';
import RoomAbout from './components/RoomAbout.vue';
import RoomAmenities from './components/RoomAmenities.vue';
import HomeHero from './components/HomeHero.vue';
import { onMounted,ref } from 'vue';
import Theme from '/public/static/js/theme';

onMounted(() => 
Theme.init());

</script>

<template>
<HomeHero />
<RoomAbout />
<RoomAmenities/>
</template>



<style>

</style>