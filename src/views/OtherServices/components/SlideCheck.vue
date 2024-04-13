<script setup>
import { ref } from 'vue';
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

const activeIndex = ref(0);

const setActiveIndex = (index) => {
    activeIndex.value = index;
};


</script>

<template>
    <!-- Rooms -->
    <section id="rooms" class="pt-16 pb-13 bg-primary-650 text-body">
        <!-- Heading -->
        <div class="mb-10 text-center" data-cues="fadeIn">
            <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">{{ title }}</span>
            <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ subTitle }}</h2>
        </div>
        <!-- /Heading -->
        <!-- Rooms List -->
        <div class="room-slide" data-cue="fadeIn">
            <div v-for="(item, index) in objs.slice(0, 4)" :key="item.id"
                :class="['room-slide-item', 'mb-8', { 'active': index === activeIndex }]"
                @mouseover="setActiveIndex(index)">
                <div class="card card-overlay-bottom border-0 text-white">
                    <img :src="item.img" class="card-img" alt="...">
                    <!-- <img src="/static/picture/r1.jpg" srcset="/assets/img/rooms/r1@2x.jpg 2x" class="card-img" alt="..."> -->
                    <div class="card-img-overlay border-bottom p-md-10">
                        <div class="d-xl-flex align-items-xl-end">
                            <div class="me-xl-auto mb-6 mb-xl-0">
                                <div class="mb-3">
                                    <!-- <span>{{ item.span }}</span> -->
                                    <!-- <strong>{{ item.strong }}</strong> -->
                                </div>
                                <h3 class="card-title text-uppercase ls-2 h-sub-font fw-semibold mb-5 h4">{{ item.h3 }}
                                </h3>
                                <div class="card-text text-nowrap d-none d-md-block">
                                    <div class="d-flex algin-item-center">
                                        <!-- <div v-for="i in item.spec" class="d-flex align-items-center me-6">
                                                <span v-html="i.icon"></span>
                                                <span class="text-uppercase fsm-5 letter-spacing-1 font-h">{{ i.value }}</span>
                                            </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="card-link text-nowrap">
                                <RouterLink :to="`/otherservices/${item.id}`" class="btn btn-small btn-primary fw-medium text-uppercase ls-1 fsm-4 h-sub-font text-nowrap">
                                    <i class="hicon hicon-thin-circle-arrow-left"></i>
                                    <span>Details</span>
                                </RouterLink>


                                <!-- <a href=""
                                    class="btn btn-small btn-light text-dark fw-medium text-uppercase ls-1 fsm-4 h-sub-font text-nowrap">
                                    <span>Details</span>
                                    <i class="hicon hicon-thin-circle-arrow-left"></i>
                                </a> -->
                                <!-- <a :href="item.action2.href" class="btn btn-small btn-primary fw-medium text-uppercase ls-1 fsm-4 h-sub-font text-nowrap">
                                        <i class="hicon hicon-menu-calendar"></i>
                                        <span>{{ item.action2.des }}</span>
                                    </a> -->
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