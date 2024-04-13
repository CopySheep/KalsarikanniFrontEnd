<script setup>
import { getRoomTypeItem } from '@/apis/Room';
import { onMounted,ref } from 'vue';
import Theme from '/public/static/js/theme';
import { useRoute } from 'vue-router';
// 使用 useRoute 函数获取路由信息
const route = useRoute();
// 从路由参数中获取房间ID
const id = route.params.id;
// #region 房型
const RoomTypeItem = ref([]);
const getRoomTypeItems = async () => {
const res = await getRoomTypeItem(id);
RoomTypeItem.value = res;
}
const getRoomTypeList = () =>{
    return RoomTypeItem.value.map(item => ({
    id: item.roomTypeId,
    typeName: item.typeName,
    capacity:item.capacity,
    bedType:item.bedType,
    weekdayPrice:item.weekdayPrice,
    size:item.size,
    imgList:item.imgList
}));
} 
const getImgList = () => {
    const imgList = [];
    obj.value.forEach(item => {
        item.imgList.forEach(img => {
            imgList.push({
                id: img.roomTypeId, // 这里假设你希望将房间类型的 ID 分配给每个图片
                url: img.imgUrl // 假设 img 就是图片的 URL
            });
        });
    });
    return imgList;
}
let obj = ref([
    {
        id: 1,
        typeName: 1,
        capacity:1,
        bedType:1,
        weekdayPrice:1,
        size:1,
        description:1
    },
]);
let obj_img = ref([
    {
        id: 1,
        url: 1
    },
]);
onMounted(async() => {
await getRoomTypeItems();
obj.value = getRoomTypeList();
obj_img.value = getImgList();
console.log(obj.value);
console.log(obj_img.value);
});

</script>

<template>
      <template v-for="item in obj">
<!-- Features -->
<section id="features" class="pt-12 pb-10">
    <div class="container">
        <h2 class="d-none">Features</h2>
        <ul class="list-unstyled row g-3 mb-0 text-center">
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-sqm mb-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">{{ item.size }} M²</span>
                </div>
            </li>
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-bed mb-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">{{ item.bedType }}</span>
                </div>
            </li>
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-travelers mb-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">最多 {{ item.capacity }}</span>
                </div>
            </li>
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-shower-and-bathtub me-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">Rain shower</span>
                </div>
            </li>
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-city-view mb-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">City view</span>
                </div>
            </li>
            <li class="col-6 col-xl-2 col-lg-3 col-md-4">
                <div class="mb-6">
                    <i class="hicon hicon-200 hicon-non-smoking-room mb-3 text-primary"></i>
                    <span class="text-uppercase fsm-3 ls-1 font-h fw-semibold d-block">No smoking</span>
                </div>
            </li>
        </ul>
    </div>
</section>
<!-- /Features -->
    <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis h1 text-center">
    <span>{{ item.typeName }}</span>
    </h2>

<!-- Price -->
    <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis h1 text-center">
    <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 mb-4">From:</span>
    <span>{{ item.weekdayPrice }}</span><small class="h-sub-font text-capitalize fs-5 fw-medium">up/Night</small>
    </h2>
<!-- Price -->
        
               <!-- Photos -->
               <section id="roomPhotos" class="pt-16" data-cue="fadeIn">
            <!-- Heading -->
            <div class="mb-10 text-center position-relative">
                <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Explore The Room</span>
                <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">Room Photos</h2>
                <span class="room-photo-pagination-2 p-4 lh-1 fs-5 position-absolute end-0 top-0 z-3 w-auto start-unset mt-4 me-4"></span>
            </div>
            <!-- /Heading -->
            <div class="swiper room-photo-slider-1">
                <div class="swiper-wrapper">
                <!-- Photos list -->
                <template v-for="a in obj_img">
        <div class="swiper-slide">
            <!-- Photos -->
            <a :href="`/assets/img/room/${a.url}`" class="glightbox" data-glightbox="title: " data-gallery="room-photo">
                  <figure class="image-hover-scale image-hover-overlay mb-0">
                    <img :src="`/assets/img/room/${a.url}`" :srcset="`./assets/img/room/${a.url} 2x`" class="card-img-top" alt="">
                    <i class="hicon hicon-zoom-bold image-hover-icon fs-4"></i>
                </figure>
            </a>
            <!-- /Photos -->
        </div>
</template> 
</div>
                </div>
                <!-- /Photos list -->
                <!-- Navs -->
                <div class="position-absolute top-50 start-0 translate-middle-y z-3 ms-5 ms-xl-8 ms-lg-6">
                    <span role="button" class="room-photo-prev-2 p-4 p-xl-5 fs-4 lh-1 text-primary text-white bg-black bg-opacity-75">
                        <i class="hicon hicon-thin-arrow-right"></i>
                    </span>
                </div>
                <div class="position-absolute top-50 end-0 translate-middle-y z-3 me-5 me-xl-8 me-lg-6">
                    <span role="button" class="room-photo-next-2 p-4 p-xl-5 fs-4 lh-1 text-primary text-white bg-black bg-opacity-75">
                        <i class="hicon hicon-thin-arrow-left"></i>
                    </span>
                </div>
                <!-- Navs -->
        </section>
        <!-- /Photos -->
    </template>
</template>