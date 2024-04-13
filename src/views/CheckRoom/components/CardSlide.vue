<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  objs: {
    type: Array,
  },
  subTitle: {
    type: String,
  },
  title: {
    type: String,
  },
});

const subTitle = 'The Exquisite Space';
const title = 'Rooms & Suites';

const objs = [
  {
    id: 1,
    img: '/static/picture/r1.jpg',
    span: 'From:',
    strong: '$124',
    h3: '豪華客房',
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
      href: 'single-room-1.html',
      des: 'Details',
    },
    action2: {
      href: 'contact.html',
      des: 'Booking',
    },
  },
  {
    id: 2,
    img: '/static/picture/r3.jpg',
    span: 'From:',
    strong: '$154',
    h3: '尊貴豪華客房',
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
    h3: '尊尚豪華客房',
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
    h3: '豪華行政套房',
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
</script>

<template>
  <!-- Rooms -->
  <section id="rooms" class="pt-16 pb-13 bg-primary-650 text-body">
            <!-- Heading -->
            <div class="mb-10 text-center" data-cues="fadeIn">
                <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">{{ subTitle }}</span>
                <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ title }}</h2>
            </div>
            <!-- /Heading -->
            <!-- Rooms List -->
            <div class="room-slide" data-cue="fadeIn">
              <div v-for="item in objs" :key="item.id" class="room-slide-item mb-8">
                    <div class="card card-overlay-bottom border-0 text-white">
                        <img :src="item.img" class="card-img" alt="...">
                        <!-- <img src="/static/picture/r1.jpg" srcset="/assets/img/rooms/r1@2x.jpg 2x" class="card-img" alt="..."> -->
                        <div class="card-img-overlay border-bottom p-md-10">
                            <div class="d-xl-flex align-items-xl-end">
                                <div class="me-xl-auto mb-6 mb-xl-0">
                                    <div class="mb-3">
                                        <span>{{ item.span }}</span>
                                        <!-- <strong>{{ item.strong }}</strong> -->
                                    </div>
                                    <h3 class="card-title text-uppercase ls-2 h-sub-font fw-semibold mb-5 h4">{{ item.h3 }}</h3>
                                    <div class="card-text text-nowrap d-none d-md-block">
                                        <div class="d-flex algin-item-center">
                                            <div v-for="i in item.spec" class="d-flex align-items-center me-6">
                                                <span v-html="i.icon"></span>
                                                <span class="text-uppercase fsm-5 letter-spacing-1 font-h">{{ i.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-link text-nowrap">
                                    <a :href="item.action1.href" class="btn btn-small btn-light text-dark fw-medium text-uppercase ls-1 fsm-4 h-sub-font text-nowrap">
                                        <span>{{ item.action1.des }}</span>
                                        <i class="hicon hicon-thin-circle-arrow-left"></i>
                                    </a>
                                    <a :href="item.action2.href" class="btn btn-small btn-primary fw-medium text-uppercase ls-1 fsm-4 h-sub-font text-nowrap">
                                        <i class="hicon hicon-menu-calendar"></i>
                                        <span>{{ item.action2.des }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Rooms List -->
        </section>
        <!-- /Rooms -->
</template>