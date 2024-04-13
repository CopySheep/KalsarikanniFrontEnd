<template>
    <div class="centered">
        <div class="formstyle">
            <div class="mt-3">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="justify-content: center;">

                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="MemberData-tab" data-bs-toggle="pill"
                            data-bs-target="#MemberData" type="button" role="tab" aria-controls="MemberData"
                            aria-selected="true">基本資料</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="MemberOrder-tab" data-bs-toggle="pill"
                            data-bs-target="#MemberOrder" type="button" role="tab" aria-controls="MemberOrder"
                            aria-selected="false">我的訂單</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="MemberOther-tab" data-bs-toggle="pill"
                            data-bs-target="#MemberOther" type="button" role="tab" aria-controls="MemberOther"
                            aria-selected="false">我的優惠券</button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent" style="border-top: 1px solid lightgray;">
                    <div class="tab-pane fade show active" id="MemberData" role="tabpanel"
                        aria-labelledby="MemberData-tab">
                        <div class="centered">
                            <div style="margin: 15px;">
                                <EditForm />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="MemberOrder" role="tabpanel" aria-labelledby="MemberOrder-tab">
                        <div style="margin: 15px;">
                            <OrderList :data="orders" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="MemberOther" role="tabpanel" aria-labelledby="MemberOther-tab">
                        <div class="row" style="margin: 15px;">
                            <Coupon v-if="Coupons.length" v-for="item in Coupons" :key="item.id" :coupon="item" />
                            <div v-else style="height: 500px; width: 500px;">
                                <h1>該頁面暫無訊息</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EditForm from './EditForm/Form.vue';
import OrderList from './OrderList/List.vue';
import Coupon from '@/views/CartList/components/Coupon.vue';
import { getUserOrderAPI } from '@/apis/order';
import { onMounted, ref } from 'vue';
import { getUserCouponsAPI } from '@/apis/Coupons';
import None from '../none.vue';

const orders = ref([])
const Coupons = ref([])

const CheckOrder = async () => {
    const res = await getUserOrderAPI();
    orders.value = res.result;
    orders.value = orders.value.reverse();
}
const CheckCoupons = async () => {
    const res = await getUserCouponsAPI();
    Coupons.value = res.result;
    Coupons.value.forEach(c => c.useful = true);
}
onMounted(() => {
    CheckOrder();
    CheckCoupons();
    console.log(orders.value);
});


</script>

<style>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

.formstyle {
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 25px;
    width: 85%;
}

.h500p {
    height: 500px;
}
</style>