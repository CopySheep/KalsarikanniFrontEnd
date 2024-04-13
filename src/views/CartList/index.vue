<script setup>
import { onMounted, ref, watch } from 'vue';
import { createOrderLoggedAPI, getUserBudgetAPI } from '@/apis/order';
import router from '@/router';

import BlankTitle from './components/BlankTitle.vue';
import CartItem from './components/CartItem.vue';
import CheckItem from './components/CheckItem.vue';
import CouponList from './components/CouponList.vue';

import { useCartStore } from '@/stores/cartStore';
import { MemberLogin } from '@/stores/memberlogin';
import { usePreOrderStore } from '@/stores/preOrder';
import Theme from '/public/static/js/theme';

const cartStore = useCartStore();
const memberStore = MemberLogin();
const preOrderStore = usePreOrderStore();

preOrderStore.getUserBudget();
const modal = ref(null);

const input = ref('');

// 多選
const allCheck = (ev) => {
  cartStore.allCheck(ev.target.checked)
}

const pt = 26;
const pb = 10;
const subTitle = "";
const title = "";
const breadcrumb = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '#',
    name: 'Shopping cart',
  },

];
const image = ref(null);

watch(image, () => {
  Theme.init();
});

const orderSubmit = async () => {
  if (memberStore.token) {
    const selectedCoupon = preOrderStore.possessedCoupons
      .filter(pc => pc.useful && pc.selected)
      .map(pc => pc.id);

    const res = await createOrderLoggedAPI(selectedCoupon);
    // console.log(res);

    cartStore.updateNewList();

    if (res.success) {
      const closeBtn = document.querySelector('#chekOrder .btn-close');
      if (closeBtn) {
        closeBtn.click(); // 模擬關閉按鈕
      }
      router.push({
        path: 'pay',
        query: {
          orderId: res.orderId,
        }
      });
    }
  }
}



onMounted(() => {
  // console.log(modal.value)
  modal.value.addEventListener('shown.bs.modal', () => {
    preOrderStore.getUserBudget();
    console.log(preOrderStore.appliedDiscounts);
    // console.log(preOrderStore.possessedCoupons);
    // console.log(preOrderStore.allowCoupons);
    // console.log(preOrderStore.currentDis);
  });

  // modal.value = document.querySelector('#chekOrder');

  //cartStore.updateNewList('0954875487');
  //totalCount = cartStore.cartList.reduce((ci, sum) => Number(ci.count) + sum);
  //totalPrice = cartStore.cartList.filter(ci => ci.selected).reduce((ci, sum) => ci.price * ci.count + sum);
  //console.log(cartStore.cartList);
  //setTimeout(()=>Theme.init(), 500);
  // Theme.init();
});

</script>


<template>

  <BlankTitle :subTitle="subTitle" :title="title" :breadcrumb="breadcrumb" :pt="pt" :pb="pb" />
  <!-- <Counter v-model="cartStore.cartList[0].count"/> -->
  <section id="cartItems" class="pt-12 pb-11">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-12">
          <!-- Group -->
          <div class="d-flex mb-0">
            <div class="border-end border-3">
              <!-- 多選 -->
              <input :checked="cartStore.isAll" @change="allCheck" class="form-check-input shadow-sm me-6"
                type="checkbox">
            </div>
            <div class="ms-6 flex-grow-1 lh-lg">
              <h3 class="h5 text-uppercase h-sub-font ls-1 fw-bold">購物車列表</h3>
            </div>
          </div>
          <!-- /Group -->
          <hr class="border-3 mt-3">
          <template v-if="cartStore.cartList.length">
            <CartItem v-for="item in cartStore.cartList" :item="item" :unCounter="true" />
          </template>
          <template v-else>
            <section class="pt-12 pb-12 border ms-lg-25 ms-8 me-lg-25 me-8">
              <div class="container ps-10">
                <h2 class="h3 text-uppercase h-special-font">暫無商品</h2>
                <div class="row">
                  <div class="col-6">
                  </div>
                  <div class="col-2 container">
                    <div class="text-end" style="visibility:hidden">hidden</div>
                    <div class="text-end"></div>
                  </div>
                  <div class="col-4 text-end pe-10">
                    <div class="h2 ms-10 mb-0 lh-base mt-2 btn btn-primary" @click="() => $router.push('/room')">前往房型介紹
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </template>
          <hr class="border-3 mt-3">
          <!-- Group -->
          <div class="d-flex mb-8">
            <!-- 淡入淡出會影響 Modal -->
            <!-- <div class="d-flex mb-8" data-cues="fadeIn"> -->
            <div class="border-end border-3">
              <i class="hicon hicon-200 text-primary hicon-children-playground me-6"></i>
            </div>
            <div class="ms-6 flex-grow-1 lh-lg">
              <h3 class="h5 text-uppercase h-sub-font ls-1 fw-bold"> 清單明細 </h3>
              <div class="row">
                <div class="col-12 col-xl-3 col-md-6">
                  <i class="hicon hicon-lg me-1 text-primary hicon-pool-kids"></i>
                  <span class="me-1">共計 {{ cartStore.allCount }} 件商品</span>
                </div>
                <div class="col-12 col-xl-3 col-md-6 text-center">
                  <i class="hicon hicon-lg me-1 text-primary hicon-family-room"></i>
                  <span class="me-1">已選 {{ cartStore.selectedCount }} 件</span>
                </div>
                <div class="col-12 col-xl-3 col-md-6 ">
                  <i class="hicon hicon-lg me-1 text-primary hicon-babysitting"></i>
                  <span class="me-1">合計 {{ cartStore.selectedPrice }} 元</span>
                </div>
                <div class="col-12 col-xl-3 col-md-6 text-center">
                  <input class="btn btn-warning btn-lg pt-0 pe-10 pb-0 ps-10" type="button" value="訂單確認"
                    data-bs-toggle="modal" data-bs-target="#chekOrder" :disabled="!cartStore.selectedCount" />
                  <!-- Modal -->
                  <div ref="modal" class="modal fade modal-xl" id="chekOrder" tabindex="-1" data-bs-backdrop="static"
                    data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title fw-bolder" id="exampleModalLabel">訂單確認</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body ps-lg-15 pe-lg-15">
                          <div class="d-flex">
                            <div class=" flex-grow-1 lh-lg">
                              <div class="row">
                                <div class=" col-12 col-lg-5 col-md-12 p-0">
                                  <div class="fw-bolder">商品資訊</div>
                                </div>
                                <div class="col-12 col-lg-7 col-md-12 p-0">
                                  <div class="row" style="height: 100%;">
                                    <div class="col border-0 border-start">
                                      <div class="text-end fw-bolder">單價</div>
                                    </div>
                                    <div class="col border-0 border-start">
                                      <div class="text-end fw-bolder">數量</div>
                                    </div>
                                    <div class="col border-0 border-start">
                                      <div class="text-end fw-bolder">小計</div>
                                    </div>
                                    <div class="col border-0 border-start">
                                      <div class="text-end fw-bolder">實付金額</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr class=" mb-2 border border-2">
                          <template v-if="cartStore.cartList.filter(item => item.selected).length">
                            <!-- /Group -->
                            <CheckItem v-for="item in cartStore.cartList.filter(item => item.selected)" :item="item"
                              :unCounter="true" />
                          </template>
                          <hr class="mt-15 mb-15" />
                          <CouponList />
                        </div>
                        <div class="modal-footer">
                          <div class="container">
                            <div class="text-start">訂單明細</div>
                            <hr class="mt-0">
                            <div class="row">
                              <div class="col-3">商品件數:</div>
                              <div class="col-3 text-end">{{ cartStore.selectedCount }} 件</div>
                              <div class="col-6"></div>
                            </div>
                            <div class="row">
                              <div class="col-3">商品總價:</div>
                              <div class="col-3 text-end">{{ cartStore.selectedPrice }} 元</div>
                              <div class="col-6"></div>
                            </div>
                            <div class="row">
                              <div class="col-3">優惠折扣:</div>
                              <div class="col-3 text-end">{{ preOrderStore.currentDis }} 元</div>
                              <div class="col-6"></div>
                            </div>
                            <div class="row">
                              <div class="col-3">實付價額:</div>
                              <div class="col-3 text-end">{{ cartStore.selectedPrice - preOrderStore.currentDis }} 元
                              </div>
                              <div class="col-6 text-end">
                                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                                <button type="button" class="btn btn-success" @click="orderSubmit">送出訂單</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Group -->
        </div>
      </div>
    </div>
  </section>


</template>