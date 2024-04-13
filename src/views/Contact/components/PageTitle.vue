<script setup>
import BreadCrumb from './BreadCrumb.vue';

const props = defineProps({
    content: String,
    bgPath: String,
});
</script>
<template>
    <section id="title" class="image-wrapper bg-image bg-overlay bg-full text-body pt-32 pb-24 text-center "
        data-image-src="./assets/img/background/checknotification.jpg" data-bs-theme="dark">
        <div class="bg-content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-8 col-lg-10" data-cue="fadeIn">
                        <div class="mb-6">
                            <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Kalsari
                                Hotel</span>
                            <h1 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ content }}</h1>
                        </div>
                        <BreadCrumb :breadCrumb="content" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>