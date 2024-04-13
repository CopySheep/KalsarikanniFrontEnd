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
    <div class="d-flex">
        <div class="flex-grow-1 lh-lg">
            <!-- <h3 class="h5 text-uppercase h-sub-font ls-1"> Featured Facilities </h3> -->
            <div class="row">
                <div class="col-12 col-lg-5 col-md-12 p-0">
                    <div class="row">
                        <div class="col-7 p-0">
                            <div class="">
                                <img ref="image" :src="item.picture" class="card-img" alt="">
                            </div>
                        </div>
                        <div class="col-5 pe-0">
                            <div class="text-start fw-bolder" style="font-size: 1.1rem;">{{ item.name }}</div>
                            <div v-for="(ele, index) in item.info.split(',')" class="text-start lh-base"
                                style="font-size: 1rem;">{{ ele }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-7 col-md-12 p-0">
                    <div class="row" style="height: 100%;">
                        <div class="col border-0 border-start">
                            <div class="mt-lg-10 text-end">{{ item.price }}</div>
                        </div>
                        <div class="col border-0 border-start">
                            <div class="mt-lg-10 text-end">{{ item.count }}</div>
                        </div>
                        <div class="col border-0 border-start">
                            <div class="mt-lg-10 text-end">{{ item.count * item.price }}</div>
                        </div>
                        <div class="col border-0 border-start">
                            <div class="mt-lg-10 text-end">{{ item.count * item.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Group -->
    <hr class="mt-2 mb-2 border border-2">
</template>