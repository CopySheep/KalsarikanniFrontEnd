<script setup>
import HomeHero from './components/HomeHero.vue';
import CardSlide from './components/CardSlide.vue';
import Tab from './components/Tab.vue';
import { onMounted } from 'vue';
import Theme from '/public/static/js/theme';



const subTitle = 'The Exquisite Space';
const title = 'Rooms & Suites';

const objs = [
  {
    id: 1,
    img: '/static/picture/r1.jpg',
    span: 'From:',
    strong: '$124',
    h3: 'Standard Room',
    spec: [
      {
        icon: '<i class="hicon hicon-lg hicon-sqm me-2"></i>',
        value: '57 M²',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-bed me-2"></i>',
        value: '1 Bed',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-travelers me-2"></i>',
        value: 'Max 2',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-2"></i>',
        value: 'No',
      },
    ],
    action1: {
      href: '#',
      des: 'Details',
    },
    action2: {
      href: '#',
      des: 'Booking',
    },
  },
  {
    id: 2,
    img: '/static/picture/r3.jpg',
    span: 'From:',
    strong: '$154',
    h3: 'Superior Room',
    spec: [
      {
        icon: '<i class="hicon hicon-lg hicon-sqm me-2"></i>',
        value: '57 M²',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-bed me-2"></i>',
        value: '1 Bed',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-travelers me-2"></i>',
        value: 'Max 2',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-2"></i>',
        value: 'No',
      },
    ],
    action1: {
      href: '#',
      des: 'Details',
    },
    action2: {
      href: '#',
      des: 'Booking',
    },
  },
  {
    id: 3,
    img: '/static/picture/r2.jpg',
    span: 'From:',
    strong: '$164',
    h3: 'Deluxe Room',
    spec: [
      {
        icon: '<i class="hicon hicon-lg hicon-sqm me-2"></i>',
        value: '57 M²',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-bed me-2"></i>',
        value: '1 Bed',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-travelers me-2"></i>',
        value: 'Max 2',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-2"></i>',
        value: 'No',
      },
    ],
    action1: {
      href: '#',
      des: 'Details',
    },
    action2: {
      href: '#',
      des: 'Booking',
    },
  },
  {
    id: 4,
    img: '/static/picture/r4.jpg',
    span: 'From:',
    strong: '$194',
    h3: 'Family Suite',
    spec: [
      {
        icon: '<i class="hicon hicon-lg hicon-sqm me-2"></i>',
        value: '57 M²',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-bed me-2"></i>',
        value: '1 Bed',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-travelers me-2"></i>',
        value: 'Max 2',
      },
      {
        icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-2"></i>',
        value: 'No',
      },
    ],
    action1: {
      href: '#',
      des: 'Details',
    },
    action2: {
      href: '#',
      des: 'Booking',
    },
  },
];



onMounted(() => Theme.init());


</script>

<template>
  <HomeHero />
  <CardSlide :subTitle="subTitle" :title="title" :objs="objs" />
  <Tab />
</template>