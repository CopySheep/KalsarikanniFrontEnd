<script setup>
import ServicesTab from './components/Tab.vue'
import SlideCheck from './components/SlideCheck.vue';
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import { getService, getServiceType  } from '@/apis/Service';
import ServiceCarousel from '@/components/Carousel.vue';
import ServicesAbout from './components/About.vue';

const subTitle = 'Spa & Wellness';
const title = 'Facilities & Services';

const ServiceItem = ref([]);
const getItems = async () => {
  const res = await getServiceType();
  ServiceItem.value = res;
}

const getServList = () =>{
  return ServiceItem.value.map(item =>({
    id: item.id,
    img: item.imgUrl,
    h3: item.servicesTypeName,
  }))
}

let objs = ref([]);

const objss = [
  {
    img: '/assets/img/hero/spa.jpg',
    p: 'Facilities & Services',
    h4: '沐日浴月，心曠神怡',
    href: '#',
  },
  {
    img: '/assets/img/hero/pool.jpg',
    p: 'Facilities & Services',
    h4: '清涼消暑，盡情暢游',
    href: '#',
  },
  {
    img: '/assets/img/hero/gym.jpg',
    p: 'Facilities & Services',
    h4: '健體塑形，千錘百鍊',
    href: '#',
  },
];

onMounted(() => Theme.init());

onMounted( async () => {
  Theme.init(); 
  await getItems();
  objs.value = getServList();
});

</script>
    


<template>
  <ServiceCarousel :objss="objss" :title="title"/>
  <ServicesAbout />



  <SlideCheck :subTitle="subTitle" :title="title" :objs="objs" class=""/>
  <!-- <ServicesTab /> -->

</template>
