<script setup>
import { onMounted, ref } from 'vue';
import HallDetail from './HallDetail.vue';
// import {defineProps} from 'vue';


const props = defineProps({
    objs: {
        type: Array,
    },
});

//呼叫HallDetail
let currentDetail = ref([]);
const expandDetail = (id) => {
    currentDetail.value = id;
}

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
})


const scrollToTop = () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth' // 可选，平滑滚动效果
    });
}

onMounted(() =>
    expandDetail(),
);


</script>

<template>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <HallDetail v-model="currentDetail" />
        </div>
    </div>
    <section id="rooms" class="pt-16 pb-12 bg-body-tertiary">
        <div class="container">
            <h2 class="d-none">這是啥</h2>
            <!-- Room list  -->
            <div class="row g-0 g-lg-10" data-cues="fadeIn" data-disabled="true">
                <div class="col-12 col-lg-6" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;" v-for="obj in objs" :key="obj.id">
                    <!-- Room item  -->
                    <div class="card card-float-bottom bg-transparent border-0 mb-8 mb-lg-0">
                                <img :src="obj.img" class="card-img-top" alt="" style="height: 400px;">
                        <div class="card-body bg-body shadow-sm">
                            <h3 class="card-title text-uppercase ls-2 h-sub-font fw-semibold mb-6 h3">{{ obj.h3 }}</h3>
                            <ul class="list-unstyled row g-3 mb-7">
                                <li class="col-6" v-for="item in obj.spec" :key="item.id">
                                    <div class="d-flex align-items-center">
                                        <span v-html="item.icon"></span>
                                        <span class="text-uppercase fsm-3 ls-1 font-h fw-medium">{{ item.value }}</span>
                                    </div>
                                </li>
                                <li class="col-12">
                                    <div class="d-flex align-items-center">
                                        <span v-html="obj.spec1.icon"></span>
                                        <span class="text-uppercase fsm-2 ls-1 font-h fw-medium">{{ obj.spec1.value }}</span>
                                    </div>
                                </li>
                            </ul>
                            <div>
                                <button type="button" @click="expandDetail(obj.id); scrollToTop()" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="btn btn-small btn-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap me-3">
                                    <span>Details</span>
                                    <i class="hicon hicon-thin-circle-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                        <span class="position-absolute top-0 end-0 mt-5 text-bg-secondary pt-2 pb-2 ps-4 pe-4">
                            <span>{{ obj.span }}</span>
                            <strong>{{ obj.strong }}</strong>
                        </span>
                    </div>
                    <!-- /Room item  -->
                </div>
            </div>
            <!-- /Room list  -->
        </div>
    </section>
</template>

<style scoped></style>