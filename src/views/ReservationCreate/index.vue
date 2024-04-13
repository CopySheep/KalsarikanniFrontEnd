<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BreadCrumb from '@/components/BreadCrumb.vue';
import Form from './components/Form.vue';
import { getService } from '@/apis/Service';
import Tab from './components/Tab.vue'
import Theme from '/public/static/js/theme';

const serviceData = ref([]);
const route = useRoute();
const id = route.params.id;

const obj = ref([])

const breadCrumb = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '',
        name: 'ReservationCreate',
    }
]

const getItem = async () => {
    const res = await getService(id)
    serviceData.value = res;
    // console.log(res);
    // subtitle.value = serviceData.value[0].servicesTypeName
}

const getServiceDetailList = () => {
    return serviceData.value.map(item => ({
        id: item.id,
        servicesTypeId: item.servicesTypeId,
        servicesTypeName: item.servicesTypeName,
        serviceDetailName: item.serviceDetailName,
        time: item.time,
        price: item.price,
        description: item.description,
        imgUrl: item.imgUrl,
    }))
}

onMounted(async() => {
    Theme.init(); 
    await getItem();
    obj.value = getServiceDetailList();
})


</script>

<template>
    <!-- <div class="mt-30 text-center">
        <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">FACILITIES & SERVICES</span>
        <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">芳療 SPA</h2>
        <BreadCrumb :bread-crumb="breadCrumb" />

        <img src="../../../public/assets/img/background/bg3.jpg" width="600" >

    </div> -->


    <section id="title" class="image-wrapper bg-image bg-overlay bg-full text-body pt-32 pb-24 text-center "
        data-image-src="../assets/img/background/bg4.jpg" style="opacity: 0.6;">
        <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">FACILITIES & SERVICES</span>
        <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">芳療 SPA</h2>
        <BreadCrumb :bread-crumb="breadCrumb" />
    </section>

    <Tab :obj="obj"/>

    <Form :obj="obj" :typeId="id"/>


</template>

<style scoped>

</style>