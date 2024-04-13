<script setup>
import { getHallItem } from '@/apis/HallItem';
import { onMounted,ref, watch} from 'vue';
import Calendar from './Calendar.vue';
import { getHallLogs } from '@/apis/HallItem';


const model = defineModel();
model.value=0;

// #region 宴會場
const HallItem = ref([]);
const getHallItems = async () => {
const res = await getHallItem();
HallItem.value = res;
}

const getHallList = () =>{
    return HallItem.value.map(item =>({
        id: item.id,
        h2: item.hallName,
        p: item.ddescription,
        img:item.photoPath,
        span: {icon:'<span class="star-value rate-50"></span>', value: 'Explore LALSARI'},
        spec: [

            { icon: '<i class="hicon hicon-200 hicon-flights-pin mb-4"></i>', value: `${item.location}` },
            { icon: '<i class="hicon hicon-200 hicon-travelers mb-4"></i>', value: `Upto ${item.capacity} Guests` },
            { icon: '<i class="hicon hicon-200 hicon-restaurant mb-4"></i>', value: `MinRent: $ ${item.minRent} ~ MaxRent: $ ${item.maxRent}` },
        ],
    }));
} 

const objs = ref([{
        id: 1,
        h2: 'LALSARI\' Story',
        p: 'Lorem ipsum dolor sit amet, nisl scaevola has ne, veniam detracto et mel, ei eum dolor partiendo repudiare. ',
        img: '/static/picture/02.jpg',
        span: {icon:'<span class="star-value rate-50"></span>', value: 'Explore LALSARI'},
        spec: [

            { icon: '<i class="hicon hicon-200 hicon-flights-pin mb-4"></i>', value: '11111111' },
            { icon: '<i class="hicon hicon-200 hicon-bed mb-4"></i>', value: '234' },
            { icon: '<i class="hicon hicon-200 hicon-restaurant mb-4"></i>', value: '234' },
            { icon: '<i class="hicon hicon-200 hicon-regular-wedding-venue mb-4"></i>', value: '234' },
        ],
}]);

// #endregion

const chooseHallItem = ref();
const HallLogs = ref([]);

const clickLog = (id) => {
    const getlst = async (id =2) => {
        const res = await getHallLogs(id);
        HallLogs.value = res;
    };
    chooseHallItem.value = id;
    return getlst(id); 
};

const modelFalg = ref(false);

onMounted(async () => {
    clickLog();
    await getHallItems();
    objs.value = getHallList();
    const staticBackdrop = document.querySelector('#staticBackdrop');
    staticBackdrop.addEventListener('shown.bs.modal', () => {
        modelFalg.value = true;
    })
    staticBackdrop.addEventListener('hidden.bs.modal', () => {
    modelFalg.value = false; 
});
});




</script>


<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style="font-size: 190%;font-weight: bold;">宴會場日程</h5>
      </div>
      <div class="modal-body">
        <Calendar v-model="HallLogs" :modalFlag="modelFalg" :chooseHallItem="chooseHallItem"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="font-size: large;">關閉行事曆</button>
      </div>
    </div>
  </div>
</div>
    <template v-for="obj in objs" :key="obj.id">
        <div v-show="model == obj.id">
    <section id="about" class="pt-21 pb-14 bg-body-tertiary overflow-x-hidden overflow-y-hidden position-relative">
            <div class="position-absolute start-0 top-0 bottom-0 w-25 image-wrapper bg-image bg-full d-none d-xl-block" data-image-src="./assets/img/background/bg2.png" style="background-image: url(&quot;./assets/img/background/bg2.png&quot;);"></div>
            <div class="container">
                <div class="row g-0 g-lg-10">
                    <div class="col-12 col-xl-6 col-lg-6">
                        <div class="mb-10" data-cues="fadeIn" data-disabled="true">
                            <!-- Description -->
                            <div class="mb-8" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;" >
                                <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">{{ obj.span.value }}</span>
                                <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">{{ obj.h2 }}</h2>
                                <span class="star-rate-view star-rate-size-sm mb-6"><span v-html="obj.span.icon"></span></span>
                                <p class="mb-8 h4">{{ obj.p }}</p>
                            </div>
                            <!-- Description -->
                            <!-- Featured -->
                            <div data-cues="fadeIn" data-cue="fadeIn" data-disabled="true" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
    <div class="row list-unstyled" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 400ms; animation-direction: normal; animation-fill-mode: both;">
        <div class="col-6" v-for="item in obj.spec" :key="item.id">
            <div class="d-flex pe-0 pe-md-8 pb-4">
                <div class="text-primary me-5">
                    <span v-html="item.icon"></span>
                </div>
                <div style="white-space: nowrap;">
                    <span class="text-uppercase fsm-1 fw-semibold ls-1 h-sub-font text-body-secondary">{{ item.value }}</span>
                </div>
            </div>
        </div>
    </div>
</div>
                <div class="pt-4" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                    <button  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-small btn-secondary fw-medium text-uppercase ls-1 h3 h-sub-font text-nowrap me-3">
                            <i class="hicon hicon-menu-calendar" ></i>
                            <span @click="clickLog(obj.id)">Booking</span>
                        </button>
                        <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="btn btn-small btn-primary fw-medium text-uppercase ls-1 h3 h-sub-font text-nowrap me-3">
                            <span>Return</span>
                            <i class="hicon hicon-thin-circle-arrow-left"></i>
                        </button>
                </div>
            </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6">
                        <!-- Image -->
                        <div class="position-relative mb-16" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 400ms; animation-direction: normal; animation-fill-mode: both;">
                            <div class="position-absolute top-0 end-0 start-0 bottom-0 bg-body h-100 w-100 mt-16 ms-16"></div>
                            <figure class="figure mb-0 w-100 position-relative z-2">
                                <img :src="obj.img" class="figure-img img-fluid mb-0 w-100" alt="...">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </template>
</template>