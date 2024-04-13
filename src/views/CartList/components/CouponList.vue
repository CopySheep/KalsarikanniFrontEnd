<script setup>
import Coupon from './Coupon.vue';

import { usePreOrderStore } from '@/stores/preOrder';
const preOrderStore = usePreOrderStore();

const checkCoupon = (item) => {
    if (item.useful) preOrderStore.checkCoupon(item.id);
}

</script>

<template>
    <h3 class="fw-bold">優惠券列表</h3>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#allow" type="button"
                role="tab">可使用</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#possess" type="button"
                role="tab">已擁有</button>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="allow" role="tabpanel">
            <div class="container border border-1 pb-5 pe-8">
                <div class="row">
                    <template v-if="preOrderStore.appliedDiscounts.length">
                        <Coupon v-for="item in preOrderStore.possessedCoupons.filter(c => c.useful)" :key="item.id"
                            :coupon="item" @click="checkCoupon(item)" />
                    </template>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="possess" role="tabpanel">
            <div class="container border border-1 pb-5 pe-8">
                <div class="row">
                    <template v-if="preOrderStore.appliedDiscounts.length">
                        <Coupon v-for="item in preOrderStore.possessedCoupons.filter(c => c.useful)" :key="item.id"
                            :coupon="item" @click="checkCoupon(item)" />
                        <Coupon v-for="item in preOrderStore.possessedCoupons.filter(c => !c.useful)" :key="item.id"
                            :coupon="item" />
                    </template>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="coupon">
        <div class="coupon-header">
            <h3>专享优惠券</h3>
        </div>
        <div class="coupon-body">
            <h2><b>75折优惠!</b></h2>
            <p>消费满100元即可使用此优惠券，享受全场商品75折优惠。</p>
        </div>
        <div class="coupon-footer">
            <p>使用代码: <span class="promo">SPECIAL75</span></p>
            <p class="expire">有效期至: 2024年12月31日</p>
        </div>
    </div> -->

</template>

<style scoped></style>