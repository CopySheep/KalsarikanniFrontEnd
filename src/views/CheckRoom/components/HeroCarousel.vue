<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  objs: {
    type: Array,
  },
  span: {
    type: String,
  },
});

// const objs = [
//   {
//     img: '/assets/img/hero/h1.jpg',
//     p: 'The Luxury Hotel ',
//     h4: 'Spectacular City Views ',
//     href: '#',
//   },
//   {
//     img: '/assets/img/hero/h2.jpg',
//     p: 'The Suite Collection',
//     h4: 'Palatial Signature Suites',
//     href: '#',
//   },
//   {
//     img: '/assets/img/hero/h3.jpg',
//     p: 'The room space',
//     h4: 'Spacious & comfortable ',
//     href: '#',
//   },
// ];

//const span = 'Explore now';
</script>

<template>
  <div id="heroCarousel" class="hero-carousel carousel slide carousel-fade">
      <!-- Carousel indicators -->
      <div class="carousel-indicators mb-6 mb-lg-14">
          <button v-for="(item, index) in objs" type="button" data-bs-target="#heroCarousel" :data-bs-slide-to="index" :class="{'active':index == 0}"></button>
      </div>
      <!-- /Carousel indicators -->
      <!-- Carousel list -->
      <div class="carousel-inner">
          <!-- Item -->
          <div v-for="(item, index) in objs" :class="{ 'carousel-item': true, 'active': index == 0 }">
              <div class="carousel-caption hero-caption">
                  <div class="image-wrapper bg-image bg-overlay h-100" :data-image-src="item.img">
                      <div class="bg-content">
                          <div class="d-flex align-items-center h-100 pt-18 pt-lg-0">
                              <div class="container">
                                  <p class="text-uppercase ls-2 h-sub-font fw-medium mb-8">{{ item.p }}</p>
                                  <h4 class="display-4 fw-semibold text-uppercase h-special-font mb-8"> {{ item.h4 }}</h4>
                                  <a :href="item.href" class="btn btn-outline-light fw-medium text-uppercase ls-1 fsm-1 pt-4 pb-4 ps-8 pe-8 d-inline h-sub-font">
                                      <span>{{ span }}</span>
                                      <i class="hicon hicon-thin-circle-arrow-left"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- /Item -->
      </div>
      <!-- /Carousel list -->
      <!-- Carousel navs -->
      <button class="carousel-control-prev d-none d-lg-inline-block" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next d-none d-lg-inline-block" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
      <!-- /Carousel navs -->
  </div>
</template>