<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getService } from '@/apis/Service';
import BreadCrumb from '@/components/BreadCrumb.vue';
import news from './components/news.vue';



const serviceData = ref([]);
const route = useRoute();
const id = route.params.id;
const subtitle = ref("");
const typeId = ref([])

const getItem = async () => {
    const res = await getService(id)
    serviceData.value = res;
    console.log(res);
    subtitle.value = serviceData.value[0].servicesTypeName
    breadcrumb[2].name = serviceData.value[0].servicesTypeName
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

const obj = ref([])

// console.log(id);
// console.log(serviceData);

const breadcrumb = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/otherservices',
    name: 'otherservices',
  },
  {
    href: '',
    name: '',
  },
];


onMounted(async() => {
    await getItem();
    obj.value = getServiceDetailList();
    // console.log(obj.value)
    typeId.value = serviceData.value[0].servicesTypeId

})

</script>



<template>
  <!-- Heading -->
  <div class="mt-30 text-center">
    <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">FACILITIES & SERVICES</span>
    <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ subtitle }}</h2>
    <template v-if="serviceData.length">
        <BreadCrumb :bread-crumb="breadcrumb" />
    </template>
  </div>
  <!-- /Heading -->
    <news :obj="obj" :typeId="typeId"/>

</template>

<style></style>