<template>
    <div class="accordion" :id="title" v-for="order in data">
        <div v-if="status === order.status" class="accordion-item" :key="order.id">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + order.id" :aria-expanded="isExpanded(order.id)"
                    :aria-controls="'collapse' + order.id">
                    下單日期：{{ InputTime(new Date(order.orderTime)) }}
                </button>
            </h2>
            <div :id="'collapse' + order.id" class="accordion-collapse collapse"
                :class="{ 'show': isExpanded(order.id) }" :data-bs-parent="'#' + title">
                <div class="row accordion-body">
                    <div class="col-10">
                        <div>
                            <table class="table" style="border: 1px solid #9B7C64;">
                                <thead>
                                    <tr>
                                        <th scope="col" class="tbl"><a class="tbc">No.</a></th>
                                        <th scope="col" class="tbl"><a class="tbc">房型</a></th>
                                        <th scope="col" class="tbl"><a class="tbc">入住時間</a></th>
                                        <th scope="col" class="tbl"><a class="tbc">退房時間</a></th>
                                        <th scope="col"><a class="tbc">單價</a></th>
                                    </tr>

                                </thead>
                                <tbody v-if="order.roomBookings.length" v-for="(item, index) in order.roomBookings">
                                    <tr>
                                        <th scope="row" class="tbl">
                                            <a class="tbc">
                                                {{ index + 1 }}
                                            </a>
                                        </th>
                                        <td class="tbl">
                                            <a class="tbc">
                                                {{ item.name }}
                                            </a>
                                        </td>

                                        <td class="tbl">
                                            <a class="tbc">
                                                {{ InputDate(new Date(item.checkInDate)) }}
                                            </a>
                                        </td>
                                        <td class="tbl">
                                            <a class="tbc">
                                                {{ InputDate(new Date(item.checkOutDate)) }}
                                            </a>
                                        </td>
                                        <td>
                                            <a class="tbc">
                                                {{ item.orderPrice }}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="text-end">
                            金額：{{ order.tradeAmt }}
                        </div>
                    </div>
                    <div class="col-2 centered">
                        <button class="btn btn-primary" @click="CheckOrderItem(order.id)">
                            付款資訊
                        </button>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    status: Number
});

const InputTime = (Day) => {
    const year = Day.getFullYear();
    const month = String(Day.getMonth() + 1).padStart(2, "0");
    const day = String(Day.getDate()).padStart(2, "0");
    const hours = String(Day.getHours()).padStart(2, "0");
    const minutes = String(Day.getMinutes()).padStart(2, "0");
    const seconds = String(Day.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
const InputDate = (Day) => {
    const year = Day.getFullYear();
    const month = String(Day.getMonth() + 1).padStart(2, "0");
    const day = String(Day.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const CheckOrderItem = (id) => {
    router.replace({ path: '/pay', query: { orderId: id } });
    // router.push(`/pay?orderId=${id}`);
}


const expandedOrders = ref([]);

const isExpanded = (orderId) => {
    return expandedOrders.value.includes(orderId);
};
</script>

<style>
.tbC {
    justify-content: center;
    display: flex;
}

.tbl {
    border-right: 1px solid #9B7C64;
}
</style>