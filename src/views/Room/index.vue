<script>
import HomeHero from './components/HomeHero.vue';
import CardSlide from './components/CardSlide.vue';
import Rooms from './components/Rooms.vue';
import Theme from '/public/static/js/theme';
import { ref, onMounted } from 'vue';

export default {
  components: {
    HomeHero,
    CardSlide,
    Rooms
  },
  setup() {

    onMounted(async () => {
      Theme.init();
   
    });
  }
}
</script>

<template>
    <HomeHero />
    <Rooms />

</template>