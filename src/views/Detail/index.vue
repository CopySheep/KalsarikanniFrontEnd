<script setup>
import Theme from '/public/static/js/theme';
import { ref, onMounted } from 'vue';
import BlankTitle from '@/views/CartList/components/BlankTitle.vue';
// import CheckRoomTop from '@/views/Home/components/CheckRoomTop.vue';
import RoomItem from './components/RoomItem.vue';
import { getRoomStockAPI } from '@/apis/stock';
import dayjs from 'dayjs';
import { useRoute } from 'vue-router';
import { useRoomStoke } from '@/stores/roomStock';



// 使用 useRoute 函数获取路由信息
const route = useRoute();
// 从路由参数中获取房间ID
const b_data = route.query.b_date;
const e_data = route.query.e_date;
const orgin_date = route.query.orgin_date;
console.log(route.query);
// const roomStock = useRoomStoke();
// roomStock.checkInDate = b_data;
// roomStock.checkOutDate = e_data;
// roomStock.getStock();W

const params = ref({
    checkInDate:b_data,
    checkOutDate: e_data,

});

const stockList = ref({});

// 後端取得庫存
const getRoomStock = async () => {
    console.log(params.value);
    const res = await getRoomStockAPI(params.value);
    stockList.value = res.roomStocks;
    // console.log(stockList.value);
};

const pickDate = ref('');

// 搜尋日期區間房間庫存
const search = () => {
     console.log(pickDate.value.value);
    const { checkInDate, checkOutDate } = formatDate(pickDate.value.value);
    params.value.checkInDate = checkInDate;
    params.value.checkOutDate = checkOutDate;
    getRoomStock();
}

// 格式化日期
const formatDate = (pickdate) => {
    const arr = pickdate.split(' ');
    return {
        checkInDate: `${arr[2]}-${MonthMap[arr[0]]}-${arr[1]}`,
        checkOutDate: `${arr[6]}-${MonthMap[arr[4]]}-${arr[5]}`,
    };
}

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

const breadcrumb = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '#',
        name: 'Detail',
    },
];

onMounted(() => Theme.init())

onMounted(() => {
    getRoomStock();
    console.log(orgin_date);
    const txtCheckDate = document.getElementById('txtCheckDate');
    txtCheckDate.value=orgin_date;
    // pickDate.value.value=b_data+'-'+e_data;
    
    // console.log(pickDate.value.value);
    // Theme.init();
    // Theme.preloader();
});
</script>

<template>
    <BlankTitle :subTitle="''" :title="''" :breadcrumb="breadcrumb" :pt="26" :pb="10" />
    <div class="card border-0 shadow-sm">
        <div class="card-body p-5">
            <form class="row g-4" method="post" action="./rooms-2.html">
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
                <div class="col-12 col-lg-3 col-md-12">
                    <!-- Button -->
                    <div class="mb-0">
                        <div type="" class="btn btn-primary w-100 fw-medium" @click="search">
                            <i class="hicon hicon-mmb-my-booking hicon-md mr-1"></i>
                            <span>訂房</span>
                        </div>
                    </div>
                    <!-- /Button -->
                </div>
            </form>
        </div>
    </div>
    <!-- <CheckRoomTop/>    -->
    <div class="col-12 col-lg-12">
        <RoomItem v-for="item in stockList" :roomItem="item" />
    </div>
</template>