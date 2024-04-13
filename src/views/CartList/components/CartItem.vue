<script setup>
import { useCartStore } from '@/stores/cartStore';
import Counter from './Counter.vue'

const cartStore = useCartStore();
const props = defineProps({
    item: {
        type: Object,
        default: () => { },
    },
    unCounter: {
        type: Boolean,
        default: () => false,
    }
});

// 單選 callback
const singleCheck = (item, selected) => {
    // console.log(item, selected);
    cartStore.singleCheck(item.uid, selected)
}

// 刪除
const delCart = (uid) => {
    console.log(uid)
    cartStore.delCart(uid);
}

</script>

<template>
    <!-- Group -->
    <div class="d-flex ms-lg-8">
        <div class="border-end border-3">
            <!-- 單選 -->
            <input :checked="item.selected" @change="(ev) => singleCheck(item, ev.target.checked)"
                class="form-check-input shadow-sm me-6" type="checkbox">
        </div>
        <div class="ms-6 flex-grow-1 lh-lg">
            <!-- <h3 class="h5 text-uppercase h-sub-font ls-1"> Featured Facilities </h3> -->
            <div class="row g-0 g-md-5">
                <div class="col-12 col-lg-7 col-md-12">
                    <div class="row">
                        <div class="col-7">
                            <div class="card card-overlay-bottom text-bg-dark border-0 mb-5">
                                <img ref="image" :src="item.picture" class="card-img" alt="">
                                <div class="card-img-overlay pt-8">
                                    <h3 class="card-title mb-0 fsm-1 text-uppercase fw-medium h-sub-font ls-1">{{
                item.name }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <i class="hicon hicon-lg me-1 text-primary hicon-ticket-service"></i>
                            <span class="me-1">商品資訊</span>
                            <div v-for="(ele, index) in item.info.split(',')" :class="{ 'mt-lg-2': index == 0 }">{{ ele
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-1">
                    <div class="row">
                        <div class="col-lg-12 col-6">
                            <div class="d-flex align-items-center">
                                <i class="hicon hicon-lg me-1 text-primary hicon-steamroom"></i>
                                <span class="me-1">單價</span>
                            </div>
                        </div>
                        <div class="col-lg-12 col-6 mt-lg-10">
                            <div class="text-center me-2">{{ item.price }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-2">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-6 d-lg-flex justify-content-center">
                            <!-- <div class="d-flex justify-content-center"> -->
                            <i class="hicon hicon-lg me-1 text-primary hicon-casino"></i>
                            <span class="me-1">數量</span>
                            <!-- </div> -->
                        </div>
                        <div class="col-lg-9 col-6 mt-lg-10">
                            <Counter v-model="item.count" :disabled="unCounter" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-1">
                    <div class="row">
                        <div class="col-lg-12 col-6">
                            <i class="hicon hicon-lg me-1 text-primary hicon-casino"></i>
                            <span class="me-1">小計</span>
                        </div>
                        <div class="col-lg-12 col-6 mt-lg-10">
                            <div class="text-center me-2">{{ item.count * item.price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-1">
                    <div class="row">
                        <div class="col-lg-12 col-6">
                            <i class="hicon hicon-lg me-1 text-primary hicon-spas"></i>
                            <span class="me-1">操作</span>
                        </div>
                        <div class="col-lg-12 col-6 text-center mt-lg-10">
                            <input class="btn btn-primary btn-sm" type="button" value="刪除" @click="delCart(item.uid)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Group -->
    <hr class="mt-2">
</template>