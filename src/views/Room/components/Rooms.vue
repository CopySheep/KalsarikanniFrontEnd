<script setup>
import { getRoomTypeItem } from '@/apis/Room';
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';

// #region 房型
const RoomTypeItem = ref([]);
const getRoomTypeItems = async () => {
    const res = await getRoomTypeItem(0);
    RoomTypeItem.value = res;
}

const getRoomTypeList = () => {
    return RoomTypeItem.value.map(item => ({
        id: item.roomTypeId,
        typeName: item.typeName,
        capacity: item.capacity,
        bedType: item.bedType,
        weekdayPrice: item.weekdayPrice,
        size: item.size,
        imageUrl: '/assets/img/room/' + item.imageUrl
    }));
}

let obj = ref([
    {
        id: 1,
        typeName: 1,
        capacity: 1,
        bedType: 1,
        weekdayPrice: 1,
        size: 1,
        imageUrl: 1
    },
]);

onMounted(async () => {
    await getRoomTypeItems();
    obj.value = getRoomTypeList();
});

</script>


<template>
    <!-- Rooms -->
    <section id="rooms" class="pt-16 pb-16 mb-lg-12 bg-body-tertiary">
        <div class="container">
            <h2 class="d-none">Room</h2>
            <!-- Room list  -->
            <div class="row g-0 g-lg-10"><!--data-cues="fadeIn" -->
                <template v-for="item in obj">
                    <div class="col-12 col-lg-6">
                        <!-- Room item -->
                        <!-- <a href="singleroom" class="card card-overlay-bottom border-0 text-white d-block mb-8 mb-lg-0"> -->
                        <RouterLink :to="{ name: 'roomdetail', params: { id: item.id } }"
                            class="card card-overlay-bottom border-0 text-white d-block mb-8 mb-lg-0">
                            <!-- <RouterLink to="roomdetail" class="card card-overlay-bottom border-0 text-white d-block mb-8 mb-lg-0"> -->
                            <figure class="image-hover-scale image-hover-overlay mb-0">
                                <img :src="item.imageUrl" srcset="./assets/img/rooms/r1@2x.jpg 2x" class="card-img"
                                    alt="">
                                <i class="hicon hicon-plus-thin image-hover-icon fs-4"></i>
                            </figure>
                            <div class="card-img-overlay border-bottom">
                                <h3 class="card-title text-uppercase ls-2 h-sub-font fw-semibold mb-5 h5 mt-10">{{
                    item.typeName }}</h3>
                                <div class="card-text text-nowrap">
                                    <div class="d-flex algin-item-center">
                                        <div class="d-flex align-items-center me-6">
                                            <i class="hicon hicon-lg hicon-sqm me-2"></i>
                                            <span class="text-uppercase fsm-5 letter-spacing-1 font-h">{{ item.size }}
                                                M²</span>
                                        </div>
                                        <div class="d-flex align-items-center me-6">
                                            <i class="hicon hicon-lg hicon-bed me-2"></i>
                                            <span class="text-uppercase fsm-5 letter-spacing-1 font-h">{{ item.bedType
                                                }}</span>
                                        </div>
                                        <div class="d-flex align-items-center me-6">
                                            <i class="hicon hicon-lg hicon-travelers me-2"></i>
                                            <span class="text-uppercase fsm-5 letter-spacing-1 font-h">最多 {{
                                                item.capacity }}</span>
                                        </div>
                                        <div class="d-flex align-items-center me-6">
                                            <i class="hicon hicon-lg hicon-non-smoking-room me-2"></i>
                                            <span class="text-uppercase fsm-5 letter-spacing-1 font-h">No</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="position-absolute top-0 end-0 mt-6 text-bg-primary pt-2 pb-2 ps-4 pe-4">
                                <span>From:</span>
                                <strong>${{ item.weekdayPrice }}</strong>
                            </span>
                        </RouterLink>
                        <!-- /Room item -->
                    </div>
                </template>
            </div>
            <!-- /Room list  -->


        </div>
    </section>
    <!-- Rooms -->
</template>