<script setup>
// import router from '@/router'
// import { useRouter } from 'vue-router';
// export default {
//     setup() {
//         const router = useRouter();
//         function redirectToCheckRoom() {
//             // 获取日期输入元素
//             const txtCheckDate = document.getElementById('txtCheckDate');

//             // 获取选定的日期值
//             const selectedDate = txtCheckDate.value;

//             // 确保已选择日期后再执行其他操作
//             if (selectedDate) {
//                 // 执行你的其他操作，比如将日期值传递给某个参数
//                 const parameter = selectedDate;
//                 // 使用 Date.parse() 方法解析日期字符串，並獲取毫秒數
//                 const startDateMilliseconds = Date.parse(parameter.split(' - ')[0]);
//                 const endDateMilliseconds = Date.parse(parameter.split(' - ')[1]);

//                 // 使用 Date 對象將毫秒數轉換為日期對象
//                 const startDate = new Date(startDateMilliseconds);
//                 const endDate = new Date(endDateMilliseconds);

//                 // 將日期對象轉換為指定格式的字符串（YYYY/MM/DD）
//                 const formattedStartDate = startDate.getFullYear() + '/' + ('0' + (startDate.getMonth() + 1)).slice(-2) + '/' + ('0' + startDate.getDate()).slice(-2);
//                 const formattedEndDate = endDate.getFullYear() + '/' + ('0' + (endDate.getMonth() + 1)).slice(-2) + '/' + ('0' + endDate.getDate()).slice(-2);


//                 console.log(formattedStartDate);
//                 console.log(formattedEndDate);
//                 // 使用 $router.push 導航到 '/checkroom'，並在路由中包含參數

//                 router.push({ path: '/checkroom', query: { b_date: formattedStartDate, e_date: formattedEndDate } });
//             }
//         }

//         return {
//             redirectToCheckRoom
//         }
//     }
// }
// const redirectToCheckRoom = () => {

// }
import Theme from '/public/static/js/theme';
import { useRoomStoke } from '@/stores/roomStock';
import { ref, onMounted } from 'vue';

const roomStock = useRoomStoke();
const pickDate = ref(null);

// 搜尋日期區間房間庫存
const search = () => {
    // console.log(pickDate.value.value);
    const { checkInDate, checkOutDate } = formatDate(pickDate.value.value);
    roomStock.checkInDate = checkInDate;
    roomStock.checkOutDate = checkOutDate;
    roomStock.getStock();
}

// 格式化日期
const formatDate = (pickdate) => {
    const arr = pickdate.split(' ');
    return {
        checkInDate: `${arr[2]}/${MonthMap[arr[0]]}/${arr[1]}`,
        checkOutDate: `${arr[6]}/${MonthMap[arr[4]]}/${arr[5]}`,
    };
}

onMounted(() => Theme.init())

//日期檢索
const MonthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
}


</script>
<template>
    <!-- Check rooms -->
    <div id="checkRoo mTop" class="check-room-top pt-4 pb-4 pt-lg-0 pb-lg-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-5">
                            <form class="row g-4" method="post" action="./checkroom">
                                <div class="col-12 col-lg-5 col-md-7">
                                    <!-- Input date -->
                                    <div class="mb-0">
                                        <div class="position-relative">
                                            <label
                                                class="hicon hicon-menu-calendar hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1"
                                                for="txtCheckDate"></label>
                                            <input ref="pickDate" id="txtCheckDate" type="text"
                                                class="check-date form-select bg-body-tertiary cursor-pointer shadow-none ps-11 fw-medium"
                                                placeholder="" readonly="false">
                                        </div>
                                    </div>
                                    <!-- /Input date -->
                                </div>
                                <div class="col-12 col-lg-4 col-md-5">
                                    <!-- Input number of guests -->
                                    <div class="mb-0">
                                        <div class="position-relative">
                                            <label
                                                class="hicon hicon-couple hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1"
                                                for="btnCheckGuest"></label>
                                            <div class="dropdown" data-total-guest="">
                                                <button
                                                    class="form-select w-100 text-start shadow-none bg-body-tertiary ps-11 fw-medium"
                                                    id="btnCheckGuest" data-bs-auto-close="outside" type="button"
                                                    data-bs-display="static" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <span class="text-nowrap">
                                                        <span data-total-adults=""></span>, <span
                                                            data-total-children=""></span>
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu animate slideIn p-6 border-0 shadow">
                                                    <li>
                                                        <div class="mb-3">
                                                            <label for="txtCheckAdults"
                                                                class="form-label">Adults</label>
                                                            <div class="input-group shadow-sm">
                                                                <button
                                                                    class="btn btn-light bg-body-tertiary text-secondary border"
                                                                    type="button" data-minus-adults="">
                                                                    <i class="hicon hicon-minus-thin small"></i>
                                                                </button>
                                                                <input type="text" class="form-control text-center"
                                                                    placeholder="Adults" value="1" aria-label="Adults"
                                                                    id="txtCheckAdults" data-adults-max="10"
                                                                    data-input-adults="">
                                                                <button
                                                                    class="btn btn-light bg-body-tertiary text-secondary border"
                                                                    type="button" data-plus-adults="">
                                                                    <i class="hicon hicon-plus-thin small"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="mb-1">
                                                            <label for="txtCheckChildren"
                                                                class="form-label">Children</label>
                                                            <div class="input-group shadow-sm">
                                                                <button
                                                                    class="btn btn-light bg-body-tertiary text-secondary border"
                                                                    type="button" data-minus-children="">
                                                                    <i class="hicon hicon-minus-thin small"></i>
                                                                </button>
                                                                <input type="text" class="form-control text-center"
                                                                    placeholder="Children" value="0"
                                                                    aria-label="Children" id="txtCheckChildren"
                                                                    data-children-max="20" data-input-children="">
                                                                <button
                                                                    class="btn btn-light bg-body-tertiary text-secondary border"
                                                                    type="button" data-plus-children="">
                                                                    <i class="hicon hicon-plus-thin small"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Input number of guests -->
                                </div>
                                <div class="col-12 col-lg-3 col-md-12">
                                    <!-- Button -->
                                    <div class="mb-0">
                                        <div class="btn btn-primary w-100 fw-medium" @click="search">
                                            <i class="hicon hicon-mmb-my-booking hicon-md mr-1"></i>
                                            <span>Check room</span>
                                        </div>
                                    </div>
                                    <!-- /Button -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Check rooms -->
</template>
