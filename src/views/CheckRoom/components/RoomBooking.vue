<script setup>
import { getCheckRoomData } from '@/apis/Room';
import { onMounted, ref } from 'vue';
import Theme from '/public/static/js/theme';
import { useRoute } from 'vue-router';
import { useRoomStoke } from '@/stores/roomStock';



// 使用 useRoute 函数获取路由信息
const route = useRoute();
// 从路由参数中获取房间ID
const b_data = route.query.b_date;
const e_data = route.query.e_date;

const roomStock = useRoomStoke();
roomStock.checkInDate = b_data;
roomStock.checkOutDate = e_data;
roomStock.getStock();


// #region 房型
const item = ref([]);
// const getCheckRoomDataItems = async () => {
//     console.log(b_data, e_data);
//     const res = await getCheckRoomData(b_data, e_data);
//     item.value = res;
//     console.log(res);
// }



const getDataList = () => {
    return roomStock.stock.map(item => ({
        id: item.roomTypeId,
        typeName: item.typeName,
        capacity: item.capacity,
        bedType: item.bedType,
        sumPrice: item.sumPrice,
        size: item.size,
        description: item.description,
        canSoldQty: item.canSoldQty,
        imageUrl: '/assets/img/room/' + item.imageUrl
    }));
}

// let obj = ref([
//     {
//         id: 1,
//         typeName: 1,
//         capacity: 1,
//         bedType: 1,
//         sumPrice: 1,
//         size: 1,
//         description: 1,
//         canSoldQty: 1,
//         imageUrl: 1

//     },
// ]);

onMounted(async () => {
    // await getCheckRoomDataItems();
    // obj.value = getDataList();
    // setTimeout(() => console.log(roomStock.stock), 500);
    console.log(roomStock.stock);

    // console.log(route.query.b_date, route.query.e_date)
});

// const addCart = (item) => {
//     console.log(item)
// }

</script>
<template>
    <!-- Rooms -->
    <section id="rooms" class="pt-16 pb-12 bg-body-tertiary">
        <div class="container">
            <h2 class="d-none">Rooms 1</h2>
            <!-- Room list  -->
            <div class="row g-0 g-lg-10">
                <template v-if="roomStock.stock">
                    <template v-for="item in roomStock.stock">
                        <div class="col-12 col-lg-6">
                            <!-- Room item  -->
                            <div class="card card-float-bottom bg-transparent border-0 mb-8 mb-lg-0">
                                <figure class="image-hover-scale image-hover-overlay mb-0">
                                    <img :src="`/assets/img/room/${item.imageUrl}`"
                                        srcset="./assets/img/rooms/r1@2x.jpg 2x" class="card-img-top" alt="">
                                    <i class="hicon hicon-plus-thin image-hover-icon fs-4"></i>
                                </figure>
                                <div class="card-body bg-body shadow-sm">
                                    <h3 class="card-title text-uppercase ls-2 h-sub-font fw-semibold mb-6 h5">{{
                    item.typeName }}</h3>
                                    <ul class="list-unstyled row g-3 mb-7">
                                        <div>
                                            • {{ item.description }}
                                        </div>
                                        <div>
                                            • 禁煙房• 房內保險箱• 浴室• 吹風機• 電視• 茶/咖啡機• 無線網路• 小型冰箱
                                        </div>
                                        <div>
                                            房型：{{ item.bedType }}
                                        </div>
                                        <div>
                                            客房設備：110V及220V電源供應
                                        </div>
                                        <div>
                                            浴室備品浴巾組、洗髮乳、潤髮乳、沐浴乳、乳液、洗手乳
                                            ※ 為了環保愛地球，飯店不主動陳列一次性備品。入住期間如需上述用品，請致電櫃檯免費索取。
                                        </div>
                                        <!-- <div
                                        style="text-align: right; color: #9B7C64; font-size: 1.0em; font-family: 'Roboto', sans-serif; font-weight: bold;">
                                        剩餘房間:{{ item.canSoldQty }}
                                    </div> -->

                                    </ul>
                                    <div class="row">
                                        <div class="col-lg-12 col-6">
                                            <div class="text-end mt-lg-10">
                                                <input class="btn btn-primary btn-sm" type="button" value="加入購物車"
                                                    @click="addCart(item)" />
                                            </div>
                                            <div class="text-end mt-2">
                                                <span
                                                    style="color: #9B7C64; font-size: 1.0em; font-family: 'Roboto', sans-serif; font-weight: bold;">
                                                    剩餘房間:{{ item.canSoldQty }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="position-absolute top-0 end-0 mt-5 text-bg-secondary pt-2 pb-2 ps-4 pe-4">
                                    <span>總價:</span>
                                    <strong>${{ item.sumPrice }}</strong>
                                </span>
                            </div>
                            <!-- /Room item  -->
                        </div>

                    </template>
                </template>

            </div>
            <!-- /Room list  -->
        </div>
    </section>
    <!-- Rooms -->
</template>
