<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
    pt:{
        type: Number,
    },
    pb:{
        type: Number,
    },
    subTitle:{
        type: String,
    },
    title:{
        type: String,
    },
    breadcrumb:{
        type: Object,
    },
});

const title = ref(null);

onMounted(() =>{
    title.value.classList.add(`pt-${props.pt}`, `pb-${props.pb}`);
})

// const subTitle = 'The Collection';
// const title = 'Rooms & Suites';
// const breadcrumb = [
//     {
//         href: '/',
//         name: 'Home',
//     },
//     {
//         href: '#',
//         name: 'CartList',
//     },
// ];
</script>

<template>
<!-- Page title -->
    <section ref="title" id="title" class="image-wrapper bg-image bg-overlay bg-full text-body text-center" data-image-src="./assets/img/background/bg5.jpg" data-bs-theme="dark">
        <div class="bg-content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-8 col-lg-10" data-cue="fadeIn">
                        <div class="mb-6">
                            <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">{{ props.subTitle }}</span>
                            <h1 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ props.title }}</h1>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <RouterLink v-for="(item, index) in props.breadcrumb" :to="item.href" :class="{'breadcrumb-item': true, 'active': index == props.breadcrumb.length - 1 }">{{ item.name }}</RouterLink>
                                <!-- <li class="breadcrumb-item"><a href="#">Home</a></li> -->
                                <!-- <li class="breadcrumb-item active" aria-current="page">Rooms &amp; Suites</li> -->
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- /Page title -->
</template>