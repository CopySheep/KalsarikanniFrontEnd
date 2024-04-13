<script setup>
import { findNewOrderListAPI } from '@/apis/Dispatch'
import { ref } from 'vue'

var orderList = ref({});
var getNewOrderList = async () => {
    const res = await findNewOrderListAPI();
    orderList.value = res;
    console.log(orderList.value);
}
getNewOrderList();
</script>
<template>
    <div>
        123
    </div>
</template>

<style scoped></style>