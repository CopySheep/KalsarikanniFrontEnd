<script setup>

const props = defineProps({
    coupon: {
        type: Object,
        default: () => { },
    },
})

</script>

<template>
    <div class="col-4 pt-5 ps-5 pe-0 d-flex">
        <div class="border border-3 p-1 d-flex" :class="{ 'border-success': coupon.selected }">
            <div class="coupon">
                <div class="coupon-header" :style="{ 'background-color': coupon.useful ? '#AD924A' : '#bbb' }">
                    <div class="fw-bold">{{ coupon.note }}</div>
                </div>
                <div class="coupon-body" :style="{ 'background-color': coupon.useful ? '#9B7C64' : '#bbb' }">
                    <p class="fw-bold">{{ coupon.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.coupon {
    display: flex;
    flex-direction: row;
    /* 改为垂直布局 */
    justify-content: start;
    /* 从顶端开始对齐 */
    align-items: stretch;
    /* 拉伸子项以填满横向空间 */
    /* border: 5px dotted rgb(64, 64, 64); */
    /* border-radius: 10px; */
    margin: 0 auto;
    max-width: 600px;
    /* background-color: #9B7C64; */
    color: black;
}

.coupon-header,
.coupon-body,
.coupon-footer {
    display: flex;
    /* 启用flex布局以便更好地控制内部元素 */
    /* flex-grow: 1; */
    /* 允许它们根据需要伸展 */
    /* width: 100%; */
    /* 使其宽度填满父容器 */
    padding: 5px 10px;
}

.coupon-header {
    width: 25%;
    /* background-color: #AD924A; */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */

    border: 3px dotted rgb(64, 64, 64);
    border-right: 0;
    border-radius: 0px 8px 8px 0px;
}

.coupon-body {
    width: 75%;
    flex-grow: 2;
    /* 给予更多空间，使其更大 */
    /* background-color: #9B7C64; */

    border: 3px dotted rgb(64, 64, 64);
    border-radius: 8px 0px 0px 8px;
    /* border-left: 5px dotted rgb(64, 64, 64); */
    /* 顶部边框以与设计保持一致 */
    justify-content: center;
    /* 如果有必要，保持内容居中 */
    align-items: center;
    /* 垂直居中 */
    text-align: center;
    /* 文本居中 */
}

.promo {
    background: #ccc;
    padding: 3px;
}

.expire {
    color: red;
}
</style>