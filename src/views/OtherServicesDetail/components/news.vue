<template>
    <section id="offers" class="pt-16 pb-16 bg-body-tertiary">
        <div class="container">
            <h2 class="d-none">News</h2>
            <!-- Article list-->
            <div class="row">
                <div v-for="(item, index ) in obj" :key="item.id" class="col-12 col-xl-4 col-lg-6">
                    <!-- Article -->
                    <article class="card card-float-bottom card-content-hover border-0 bg-transparent mb-10">
                        <a href="" title="">
                            <figure class="image-hover-scale image-hover-overlay mb-0">
                                <img :src="item.imgUrl" class="card-img-top" alt="">
                                <span
                                    class="position-absolute bg-secondary bg-opacity-85 z-3 start-0 top-0 text-white d-flex flex-column p-4 small text-uppercase text-center"
                                    v-if="item.servicesTypeId === 1">
                                    <small>Time:</small>
                                    <small>{{ item.time }}</small>
                                </span>
                                <i class="hicon hicon-plus-thin image-hover-icon fs-4"></i>
                            </figure>
                        </a>
                        <div class="card-body bg-body shadow-sm">
                            <a href="" class="mb-4 fsm-4 fw-medium d-inline-block ls-1 text-uppercase">{{
                    item.serviceDetailName }}</a>
                            <h3 class="card-title fsm-1 ls-1 text-uppercase">{{ item.description }}</h3>
                        </div>
                        <span class="position-absolute top-0 end-0 mt-6 text-bg-primary pt-2 pb-2 ps-4 pe-4"
                            v-if="item.servicesTypeId === 1">
                            <span>Price:</span>
                            <strong>${{ item.price }}</strong>
                        </span>
                    </article>
                    <!-- /Article -->

                </div>
                <!-- <Tab v-if="typeId == 1" /> -->
                <div class="row" v-if="typeId == 1">
                    <div class="col-4"></div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <RouterLink :to="`/ReservationCreate/${typeId}`" class="btn btn-primary fw-medium text-uppercase ls-1 fsm-1 pt-4 pb-4 ps-8 pe-8 h-sub-font">
                            <i class="hicon hicon-mmb-my-booking hicon-md"></i>
                            <span>Book Now</span>
                        </RouterLink>

                    </div>
                    <div class="col-4"></div>

                </div>

            </div>
            <!-- /Article list -->

        </div>
    </section>


</template>

<script setup>
import Tab from './Tab.vue'
const props = defineProps({
    obj: {
        type: Array,
    },
    typeId: {
        type: Number,
    }
})


</script>

<style></style>