<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import dayjs from 'dayjs';
import axios from 'axios';

import { getOrderAPI, getECPayFormAPI } from '@/apis/order'

import BlankTitle from '@/views/CartList/components/BlankTitle.vue';

// BlankTitle
const pt = 26;
const pb = 10;
const subTitle = "kalsari hotel";
const title = "付款資訊";
const breadcrumb = [
  {
    href: '#',
    name: 'Pay',
  },
];

const route = useRoute();
const isExist = ref(false);
const order = ref({})

const getOrder = async () => {
  console.log(route.query.orderId)
  const res = await getOrderAPI(route.query.orderId);

  if (res.success) {
    isExist.value = true
    order.value = res.result;
    console.log(order.value);
  }
}

// 傳送綠界
const submitEcPay = async () => {
  const dictionary = await getECPayFormAPI(order.value.id);

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';

  for (const key in dictionary) {
    const input = document.createElement('input');
    input.name = key;
    input.value = dictionary[key];
    form.appendChild(input);
    // console.log(key, dictionary[key]);
  }
  document.body.appendChild(form);
  // console.log(form)
  form.submit();
}


const getUserOrder = async () => {
  const res = await getUserOrderAPI();
  console.log(res);
}

onMounted(() => {
  getOrder();
})


</script>

<template>
  <BlankTitle :subTitle="subTitle" :title="title" :breadcrumb="breadcrumb" :pt="pt" :pb="pb" />

  <div class="mt-15 mb-15">
    <template v-if="isExist">
      <section class="pt-12 pb-12 border ms-lg-25 ms-8 me-lg-25 me-8">
        <div class="container ps-10">
          <h2 class="h3 text-uppercase h-special-font">{{ order.rtnMsg }}</h2>
          <div class="row">
            <div class="col-6">
              <div>訂單編號: {{ order.id }}</div>
              <div>訂單時間: {{ dayjs(order.orderTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
              <template v-if="order.status">
                <hr class="mt-4 mb-4">
                <div>交易序號: {{ order.tradeNo }}</div>
                <div>交易時間: {{ order.paymentDate }}</div>
              </template>
            </div>
            <div class="col-3 container">
              <div class="text-end" style="visibility:hidden">hidden</div>
              <div class="text-end">訂單金額:</div>
            </div>
            <div class="col-3 text-end pe-10">
              <div class="text-primary fw-bolder h2 ms-10 mb-0 lh-base mt-2">{{ order.tradeAmt }}</div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="!order.status" class="pt-12 pb-12 border ms-lg-25 ms-8 me-lg-25 me-8 mt-8 mb-8">
        <div class="container ps-10">
          <h2 class="h3 text-uppercase h-special-font">請選擇付款方式</h2>
          <hr>
          <div class="btn border bg-white" @click="submitEcPay">
            <img src="/static/picture/ECPay_logo.png">
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <section class="pt-12 pb-12 border ms-lg-25 ms-8 me-lg-25 me-8 mt-8 mb-8">
        <div class="container ps-10">
          <h2 class="h3 text-uppercase h-special-font">查無訂單</h2>
        </div>
      </section>
    </template>
  </div>
</template>