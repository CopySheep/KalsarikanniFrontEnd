<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-5 " id="cardcss">
                        <div class="mb-10 text-center" data-cue="fadeIn" data-show="true"
                            style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                            <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">預約SPA服務</h2>
                        </div>

                        <form class="row g-4" method="post" action="">
                            <!-- <div class="col-12 col-lg-5 col-md-7"> -->
                            <div class="col-12">

                                <!-- Input date -->
                                <div class="mb-0">
                                    請選擇日期
                                    <div class="position-relative">
                                        <el-date-picker v-model="pickedDate" type="date" placeholder="選擇日期"
                                            :disabledDate="disabledDate" size="large" format="YYYY-MM-DD" 
                                            @change="selDate">
                                        </el-date-picker>
                                    </div>
                                </div>
                                <!-- /Input date -->
                            </div>
                            <!-- <div class="col-12 col-lg-4 col-md-5"> -->
                            <hr />
                            <!-- <div class="col-12 col-lg-5 col-md-7"> -->
                            <div class="col-12">

                                <div class="mb-0">
                                    請選擇時段
                                    <!-- <div class="position-relative"> -->
                                    <div class="d-inline-block ">
                                        <!-- <button v-for="(item, index) in TimePeriod" :key="item.id"
                                            :disabled="item.count === 0" type="button" class="btn btn-primary btn-lg" @click="selectTime(item.timePeriod, item.id)">
                                            {{ item.timePeriod }}
                                            <div style="display: none;">
                                                {{ item.id }}
                                            </div>
                                        </button> -->
                                        <div class="row row-cols-5 g-2 justify-content-start">
                                            <button v-for="(item, index) in TimePeriod" :key="item.id"
                                                :disabled="item.count <= 0"
                                                :class="['btn', 'btn-small', 'btn-outline-secondary', 'fw-medium', 'text-uppercase', 'ls-1', 'fsm-3', 'h-sub-font', 'text-nowrap', 'mx-2', { 'selected': item.id === timeId }]"
                                                @click="selectTime(item.timePeriod, item.id)">
                                                <i class="hicon hicon-wake-up-service"></i>
                                                <span>{{ item.timePeriod }}</span>
                                                <span v-if="item.count <= 0" class="text-danger">已額滿</span>
                                                <div style="display: none;">{{ item.id }}</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="col-12">
                                <div class="mb-0">
                                    請選擇服務項目
                                    <div class="position-relative">
                                        <button v-for="(item, index) in obj" :key="item.id"
                                            :class="['btn', 'btn-small', 'btn-outline-secondary', 'fw-medium', 'text-uppercase', 'ls-1', 'fsm-3', 'h-sub-font', 'text-nowrap', 'mx-2', { 'selected': item.id === sId }]"
                                            @click="selectService(item.serviceDetailName, item.price, item.time, item.id)">
                                            <i class="hicon hicon-massage"></i>
                                            {{ item.serviceDetailName }}
                                            <div style="display: none;">
                                                {{ item.id }}
                                                {{ item.price }}
                                                {{ item.time }}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="col-12">
                                <div class="mb-0">
                                    您已選擇預訂KALSARI飯店 芳療SPA按摩服務:
                                    <div class="position-relative">
                                        <span v-if="selectDate"
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>{{ selectDate }}</span>
                                        <span v-else
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>日期</span>>
                                        <span v-if="time"
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>{{ time }}</span>
                                        <span v-else
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>時段</span>>
                                        <span v-if="sService"
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>{{ sService }}</span>
                                        <span v-else
                                            class="btn btn-small btn-outline-primary fw-medium text-uppercase ls-1 fsm-3 h-sub-font text-nowrap mx-2"
                                            disabled>服務項目</span>
                                    </div>
                                </div>
                                <!-- Button trigger modal -->
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" id="nextBtn" :disabled="!isFormValid" @click="nextStep">
                                        下一步
                                    </button>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" 
                                    aria-labelledby="exampleModalLabel" aria-hidden="true" v-show="showModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">顧客資訊</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mb-3">
                                                    <label for="exampleInputName" class="form-label">
                                                        預訂人姓名
                                                    </label>
                                                    <input v-model="ClientName" type="text" class="form-control"
                                                        id="exampleInputName" aria-describedby="emailHelp"
                                                        @input="validateClientName">
                                                    <span v-if="!isClientNameValid" class="text-danger">請輸入預訂人姓名</span>
                                                </div>


                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        信箱
                                                    </label>
                                                    <input v-model="Email" type="mail" class="form-control"
                                                        id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        @input="validateEmail">
                                                    <span v-if="!isEmailValid" class="text-danger">請輸入信箱</span>
                                                </div>


                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">
                                                        手機號碼
                                                    </label>
                                                    <input v-model="PhoneNumber" type="text" class="form-control"
                                                        id="exampleInputPassword1" 
                                                        @input="validatePhoneNumber"
                                                        required>
                                                    <span v-if="!isPhoneNumberValid"
                                                        class="text-danger">請輸入有效的手機號碼</span>
                                                </div>



                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                                        v-model="isChecked">
                                                    <label class="form-check-label" for="exampleCheck1">
                                                        請再次確定是否預定?
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">關閉</button>
                                                <button type="button" class="btn btn-primary" @click="CreateReservation"
                                                    :disabled="!isChecked">立即預訂</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { CheckTimeAPI, CreateOrderAPI } from '@/apis/Service';

const props = defineProps({
    obj: {
        type: Array,
    },
    typeId: {
        type: Number,
    },
});

const pickedDate = ref(new Date());
const ClientName = ref('');
const PhoneNumber = ref('');
const Email = ref('');
const selectDate = ref('');
const time = ref('');
const timeId = ref('');
const sId = ref('');
const sService = ref('');
const sPrice = ref('');
const sTime = ref('');
const TimePeriod = ref([]);
const isClientNameValid = ref(true);
const isPhoneNumberValid = ref(true);
const isEmailValid = ref(true);
const isChecked = ref(false);
const showModal =ref(false);

const disabledDate = (time) => {
    const today = new Date();
    return time.getTime() < today.setHours(0, 0, 0, 0);
}

const selDate = () => {
    const year = pickedDate.value.getFullYear();
    const month = (pickedDate.value.getMonth() + 1).toString().padStart(2, '0');
    const day = pickedDate.value.getDate().toString().padStart(2, '0');
    selectDate.value = `${year}-${month}-${day}`;
    console.log('选取的日期为：', year, month, day);
    time.value = '';
    timeId.value = '';

    console.log(props.typeId, selectDate.value);
    getItem(props.typeId, selectDate.value);

}

const getItem = async (typeId, selectdate) => {
    const res = await CheckTimeAPI(typeId, selectdate);
    console.log(res);
    TimePeriod.value = res;

}

const selectTime = (timePeriod, id) => {
    event.preventDefault();
    time.value = timePeriod;
    timeId.value = id;
    console.log(time.value, timeId.value);

}

const selectService = (serviceDetailName, price, time, id) => {
    event.preventDefault();
    sId.value = id;
    sService.value = serviceDetailName;
    sPrice.value = price;
    sTime.value = time;
    console.log(sId.value, sService.value, sPrice.value, sTime.value);
}

const nextStep = () => {
    console.log(ClientName.value, PhoneNumber.value, selectDate.value, time.value, timeId.value, sId.value, sService.value, sPrice.value, sTime.value, new Date(selectDate.value));
}

const isFormValid = computed(() => {
    return selectDate.value && time.value && sService.value;
});

const validateClientName = () => {
    if (!ClientName.value) {
        isClientNameValid.value = false;
    }
    else {
        isClientNameValid.value = true;
    }
};

const validatePhoneNumber = () => {
    if (!PhoneNumber.value) {
        isPhoneNumberValid.value = false;
    }
    else {
        if (PhoneNumber.value.length !== 10) {
            isPhoneNumberValid.value = false;
        }
        else {
            isPhoneNumberValid.value = true;
        }
    }
};

const validateEmail = () =>{
    if (!Email.value) {
        isEmailValid.value = false;
    }
    else {
        isEmailValid.value = true;
    }
}

const CreateReservation = () => {

    validateClientName();
    validateEmail();
    validatePhoneNumber();

    if (!isFormValid.value || !isEmailValid || !isClientNameValid.value || !isPhoneNumberValid.value) {
        return;
    }
    const dataObj = {
        clientId: null,
        reservationStatusId: null,
        createTime: null,
        clientName: ClientName.value,
        phoneNumber: PhoneNumber.value,
        reservationId: null,
        serviceDetailId: sId.value,
        serviceDetailName: sService.value,
        appointmentDate: selectDate.value,
        appointmentTimePeriodId: timeId.value,
        appointmentTimePeriodName: time.value,
        totalDuration: sTime.value,
        roomId: null,
        roomStatusId: null,
        subtotal: sPrice.value,
        email: Email.value,
    };

    console.log(dataObj);
    CreateAPI(dataObj);
}


const CreateAPI = async (data) => {
    try {
        const response = await CreateOrderAPI(data);
        console.log(response);
        Swal.fire({
            icon: "success",
            title: "預訂成功",
            text: "請前往信箱確認訂位狀態",
        }).then(()=> {
            showModal.value = true
            window.location.href = '/otherservices';
        })
        
    }
    catch (error) {
        console.log(error);
        Swal.fire({
            icon: "error",
            title: "預訂失敗",
            text: error.response.data,
        })
    }

}


onMounted(() => {
    selDate();
})



</script>

<style scoped>
.selected {
    background-color: #9B7C64;
    color: #FFF;
}
</style>
