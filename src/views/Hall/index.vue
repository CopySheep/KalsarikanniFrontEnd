<script setup >
import HallAbout from './components/HallAbout.vue';
import HallCard from './components/HallCard.vue';
import { onMounted,ref } from 'vue';    
import Theme from '/public/static/js/theme';
import { getHallItem } from '@/apis/HallItem';
import ServiceCarousel from './components/Carousel.vue';
import HomeHero from './components/HomeHero.vue';

const title = 'Hall & Services';

// #region 宴會場
const HallItem = ref([]);
const getHallItems = async () => {
const res = await getHallItem();
HallItem.value = res;
}

const getHallList = () =>{
    return HallItem.value.map(item =>({
        id: item.id,
        img: item.photoPath,
        h3: item.hallName,
        span: 'From:$',
        strong: item.minRent,
        spec: [
            { icon: '<i class="hicon hicon-lg hicon-travelers me-3 text-primary"></i>', value: `Upto ${item.capacity} Guests` },
            { icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-3 text-primary"></i>', value: 'No Smoking' },
        ],
        spec1 : { icon: '<i class="hicon hicon-lg hicon-sqm me-3 text-primary"></i>', value: item.description },
    }));
} 

let objs = ref([
    {
        id: 1,
        img: '/static/picture/02.jpg',
        h3: 'Standard Room',
        spec: [
            { icon: '<i class="hicon hicon-lg hicon-shower-and-bathtub me-3 text-primary"></i>', value: '123' },
            { icon: '<i class="hicon hicon-lg hicon-city-view me-3 text-primary"></i>', value: '234' },
        ],
        spec1 : { icon: '<i class="hicon hicon-lg hicon-non-smoking-room me-3 text-primary"></i>', value: '345345346456424543534645645634534534545637567547' },
        span: 'From:',
        strong: '$124',
    },
]);

// #endregion

const objss = [
    {
        img: '/assets/img/hero/s62.jpg',
        p: 'Banquet & Reception',
        h4: '永浴愛河、白首成約',
        href: '#',
    },
    {
        img: '/assets/img/hero/s63.jpg',
        p: 'Party & Catering',
        h4: '狂歡慶祝、熱烈歡呼',
        href: '#',
    },
    {
        img: '/assets/img/hero/s64.jpg',
        p: 'Venue & Ballroom',
        h4: '大展鴻圖、多彩豐富',
        href: '#',
    },
];



onMounted(async() => {
await getHallItems();
objs.value = getHallList();
});

onMounted(() => 
Theme.init(),
);

</script>

<template>
    <HomeHero />
<!-- <ServiceCarousel :objss="objss" :title="title" :interval="parseInt('2000')"/> -->
<HallCard :objs="objs"/>
<HallAbout />
</template>



<style>

</style>