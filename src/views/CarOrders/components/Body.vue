<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="mt-3">
                <h3 style="font-weight: 900;" v-if="dispatchStore.orderList.length > 0">即將到來</h3>
            </div>
            <!-- <RouterLink to="/dispatch"> -->
            <div type="button" class="row border border-3 rounded-3 primary-border" @click="$router.push('/dispatch')"
                v-if="!dispatchStore.toCome.length && dispatchStore.orderList.length">
                <div class="col-12 p-0"><img class="rounded-top-3"
                        src="https://d3i4yxtzktqr9n.cloudfront.net/riders-web-v2/853ebe0d95a62aca.svg" alt="vehicle">
                </div>
                <div class="col-12">
                    <div class="ms-4 mt-3" style="font-weight: 900; font-size: 20px;">您沒有即將到來的行程</div>
                </div>
                <div>
                    <button type="button" class=" ms-4 mt-3 mb-3 btn btn-primary shadow-sm rounded-pill">
                        <span>預約搭乘</span>
                    </button>
                </div>
            </div>
            <!-- </RouterLink> -->

            <div type="button"
                class="row border border-3 rounded-3 primary-border mb-3 d-flex align-items-center justify-content-center"
                v-if="dispatchStore.toCome.length" v-for="item in dispatchStore.toCome">
                <img class="rounded-top-3 col-3" :src="item.car.picture" alt="vehicle">
                <div class="col-6">
                    <div class="row">
                        <div class="col-12" style="font-size: 25px; font-weight: 700;">{{
                    item.destinationLocation.split(", ")[0]
                }}</div>
                        <div class="col-12">{{ item.startTime }}</div>
                        <div class="col-12">$ {{ item.total }}</div>
                    </div>

                </div>
                <div class="col-3">
                    <button type="button" class=" ms-4 mt-3 mb-3 btn btn-primary shadow-sm rounded-pill"
                        @click="dispatchStore.deleteOrder(item.id)">
                        <span>取消此行程</span>
                    </button>
                </div>
            </div>

            <div class="mt-5" v-if="dispatchStore.orderList.length > 0">
                <h3 style="font-weight: 900;">過去</h3>
            </div>

            <div type="button"
                class="row border border-3 rounded-3 primary-border mb-3 d-flex align-items-center justify-content-center"
                v-if="dispatchStore.history.length" v-for="item in dispatchStore.history">
                <img class="rounded-top-3 col-3" :src="item.car.picture" alt="vehicle">
                <div class="col-9">
                    <div class="row">
                        <div class="col-12" style="font-size: 25px; font-weight: 700;">{{
                    item.destinationLocation.split(", ")[0]
                }}</div>
                        <div class="col-12">{{ item.endTime }}</div>
                        <div class="col-12">$ {{ item.total }}</div>
                    </div>

                </div>
            </div>

            <div type="button" class="row border border-3 rounded-3 primary-border" @click="$router.push('/dispatch')"
                v-if="!dispatchStore.history.length && dispatchStore.orderList.length">
                <div class="col-12 p-0"><img class="rounded-top-3"
                        src="https://d3i4yxtzktqr9n.cloudfront.net/riders-web-v2/853ebe0d95a62aca.svg" alt="vehicle">
                </div>
                <div class="col-12">
                    <div class="ms-4 mt-3" style="font-weight: 900; font-size: 20px;">您沒有過去的歷史訂單</div>
                </div>
                <div>
                    <button type="button" class=" ms-4 mt-3 mb-3 btn btn-primary shadow-sm rounded-pill">
                        <span>立即預約</span>
                    </button>
                </div>
            </div>

            <div type="button" class="row border border-3 rounded-3 primary-border" @click="$router.push('/dispatch')"
                v-if="!dispatchStore.orderList.length">
                <div class="col-12 p-0"><img class="rounded-top-3"
                        src="https://d3i4yxtzktqr9n.cloudfront.net/riders-web-v2/853ebe0d95a62aca.svg" alt="vehicle">
                </div>
                <div class="col-12">
                    <div class="ms-4 mt-3" style="font-weight: 900; font-size: 20px;">您尚未體驗過預約搭乘服務</div>
                </div>
                <div>
                    <button type="button" class=" ms-4 mt-3 mb-3 btn btn-primary shadow-sm rounded-pill">
                        <span>立即預約</span>
                    </button>
                </div>
            </div>

        </div>
        <div class="col-3"></div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/dispatchOrderList'
import { computed, onMounted, ref, watch } from 'vue'
import dayjs from 'dayjs'

const dispatchStore = useOrderStore();
dispatchStore.getOrderList()

setTimeout(() => {
    console.log(dispatchStore.toCome);
    console.log(dispatchStore.history)
}, 3000)


</script>

<style scoped>
.primary-border {
    border-color: #9B7C64 !important;
    /* 更改邊框顏色為主題色 */
}
</style>