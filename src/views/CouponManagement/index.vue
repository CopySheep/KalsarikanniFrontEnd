<script setup>
import { getCouponTypesAPI, postNewCouponAPI, getAllCouponsAPI , postCouponsByLevelAPI} from '@/apis/Coupons';
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';

const couponTypes = ref([]);
const roomTypes = ref([]);
const memberLevels = ref([]);

const allCoupons = ref([]);

const getCouponTypes = async () => {
    const res = await getCouponTypesAPI();
    couponTypes.value = res.result.couponTypes;
    roomTypes.value = res.result.roomTypes;
    memberLevels.value = res.result.memberLevels;
}

const getAllCoupons = async () => {
    const res = await getAllCouponsAPI();
    allCoupons.value = res.result;
}

const formSize = ref('default')

const ruleCoupon = ref({
    typeId: [
        {
            required: true,
            message: '請選擇優惠券類型',
            trigger: 'change',
        },
    ],
    allowRange: [
        {
            required: true,
            message: '請選擇可用時段',
            trigger: 'change',
        },
    ],
    cumulative: [],
    comment: [],
});

const formCoupon = ref({
    typeId: null,
    allowRange: null,
    cumulative: false,
    comment: '',
});

const couponTS = ref({
    threshold: null,
    discount: null,
});

const couponRTS = ref({
    roomTypeId: 0,
    activeRange: null,
    percentOff: null,
});

const couponRCSD = ref({
    roomTypeId: 0,
    count: null,
    percentOff: null,
});

const formSend = ref({
    memberLevel: null,
    couponId: null,
});

const submitCoupon = async () => {
    const { typeId, allowRange, cumulative, comment } = formCoupon.value;
    const form = new FormData();
    switch (typeId) {
        case 1:
            form.append('Threshold', couponTS.value.threshold);
            form.append('Discount', couponTS.value.discount);
            break;

        case 2:
            form.append('RoomTypeId', couponRTS.value.roomTypeId);
            form.append('StartTime', dayjs(couponRTS.value.activeRange[0]).format('YYYY-MM-DDTHH:mm:ss'));
            form.append('EndTime', dayjs(couponRTS.value.activeRange[1]).format('YYYY-MM-DDTHH:mm:ss'));
            form.append('Percentoff', couponRTS.value.percentOff);
            break;

        case 3:
            form.append('RoomTypeId', couponRCSD.value.roomTypeId);
            form.append('Count', couponRCSD.value.count);
            form.append('Percentoff', couponRCSD.value.percentOff);
            break;

        default:
            return;
    }
    form.append('Id', 0)
    form.append('TypeId', typeId);
    form.append('AllowStart', dayjs(allowRange[0]).format('YYYY-MM-DDTHH:mm:ss'));
    form.append('AllowEnd', dayjs(allowRange[1]).format('YYYY-MM-DDTHH:mm:ss'));
    form.append('Cumulative', cumulative ?? false);
    form.append('Comment', comment);

    for (const entry of form.entries()) {
        const [key, value] = entry;
        console.log(key, value);
    }

    const res = await postNewCouponAPI(form);

    alert(res.result);

    if (res.success) {
        formCoupon.value.typeId = null;
        formCoupon.value.allowRange = null;
        formCoupon.value.cumulative = null;
        formCoupon.value.comment = null;
        getAllCoupons();
    }
}

const submitSend = async () => {
    const {memberLevel, couponId} = formSend.value;
    console.log(memberLevel, couponId);
    if(!(memberLevel && couponId)) return;

    
    const formData = new FormData();
    formData.append('memberLevelId', memberLevel);
    formData.append('couponId', couponId);

    const res = await postCouponsByLevelAPI(formData);
    if(res.success){
        alert(res.result);
    } else {
        alert("發送失敗");
    }
}

onMounted(() => {
    getCouponTypes();
    getAllCoupons();    
})



</script>

<template>
    <div class="container mt-5 border border-2 p-10 rounded-3">
        <h3 class="fw-bold">新增優惠券</h3>
        <!-- start -->
        <hr>
        <el-form ref="mainRef" style="max-width: 600px" :model="ruleCoupon" label-width="auto" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="優惠券類型:" prop="typeId">
                <el-select v-model="formCoupon.typeId" placeholder="請選擇類型">
                    <el-option v-for="item in couponTypes" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="使用期限:" prop="allowStart">
                <el-date-picker v-model="formCoupon.allowRange" type="daterange" format="YYYY/MM/DD" label="Pick a date"
                    placeholder="Pick a date" style="width: 100%" />
            </el-form-item>

            <el-form-item label="疊加使用:" prop="cumulative">
                <el-switch v-model="formCoupon.cumulative" />
            </el-form-item>

            <el-form-item label="備註:" prop="comment">
                <el-input v-model="formCoupon.comment" type="textarea" />
            </el-form-item>
        </el-form>

        <hr class="mb-10">
        <el-form ref="subRef" style="max-width: 600px" :model="ruleForm" label-width="auto" class="demo-ruleForm"
            :size="formSize" status-icon>
            <div v-if="formCoupon.typeId == 1" class="input-group input-group-sm mb-3 mt-3">
                <span class="input-group-text rounded-start-1">消費滿</span>
                <input type="number" v-model="couponTS.threshold" class="form-control" placeholder="消費金額">
                <span class="input-group-text">元，折抵</span>
                <input type="number" v-model="couponTS.discount" class="form-control" placeholder="折抵金額">
                <span class="input-group-text rounded-end-1">元</span>
            </div>

            <div v-if="formCoupon.typeId == 2" class="mb-3 mt-3">
                <el-form-item label="優惠期間:" prop="allowStart">
                    <el-date-picker v-model="couponRTS.activeRange" type="daterange" style="width: 100%" />
                </el-form-item>
                <div class="input-group input-group-sm mb-3 mt-3">
                    <span class="input-group-text rounded-start-1">房型</span>
                    <select v-model="couponRTS.roomTypeId" class="form-control">
                        <option value="0" selected>請選擇房型</option>
                        <option v-for="item in roomTypes" :key="item.roomTypeId" :value="item.roomTypeId">{{
            item.typeName }}</option>
                    </select>
                    <span class="input-group-text rounded-start-1">活動期間折扣</span>
                    <input type="number" v-model="couponRTS.percentOff" class="form-control" placeholder="折扣數"
                        aria-label="Server">
                    <span class="input-group-text rounded-end-1">%</span>
                </div>
            </div>

            <div v-if="formCoupon.typeId == 3" class="input-group input-group-sm mb-3 mt-3">
                <span class="input-group-text rounded-start-1">房型</span>
                <select v-model="couponRCSD.roomTypeId" class="form-control">
                    <option value="0" selected>請選擇房型</option>
                    <option v-for="item in roomTypes" :key="item.roomTypeId" :value="item.roomTypeId">{{ item.typeName
                        }}
                    </option>
                </select>
                <span class="input-group-text">當日第</span>
                <input type="number" v-model="couponRCSD.count" class="form-control" placeholder="房間數"
                    aria-label="Server">
                <span class="input-group-text">間折扣</span>
                <input type="number" v-model="couponRCSD.percentOff" class="form-control" placeholder="折扣數"
                    aria-label="Server">
                <span class="input-group-text rounded-end-1">%</span>
            </div>
        </el-form>

        <div class="text-end">
            <!-- <el-form-item> -->
            <el-button type="primary" @click="submitCoupon"> 新增 </el-button>
            <el-button>重置</el-button>
            <!-- </el-form-item> -->
        </div>



        <!-- end -->
    </div>

    <div class="container mt-5 border border-2 p-10 rounded-3">
        <h3 class="fw-bold">優惠券發送(會員等級)</h3>
        <hr>
        <el-form ref="mainRef" style="max-width: 600px" :model="ruleCoupon" label-width="auto" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="會員等級:" prop="memberType">
                <el-select v-model="formSend.memberLevel" placeholder="請選擇會員等級">
                    <el-option v-for="item in memberLevels" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="指定優惠券:" prop="CouponId">
                <el-select v-model="formSend.couponId" placeholder="請選擇優惠券">
                    <el-option v-for="item in allCoupons" :key="item.id" :label="item.id + '. ' + item.name" :value="item.id" />
                </el-select>
            </el-form-item>
        </el-form>

        <hr>
        <div class="text-end">
            <!-- <el-form-item> -->
            <el-button type="success" @click="submitSend">發送</el-button>
            <!-- </el-form-item> -->
        </div>

    </div>
</template>

<style scoped>
.container {
    width: 70%;
    margin-right: 18%;
}

.daterange {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
}

.daterange .block {
    padding: 30px 0;
    text-align: center;
}

.line {
    width: 1px;
    background-color: var(--el-border-color);
}
</style>