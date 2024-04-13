<script setup>
import { ref, onMounted, watch,defineProps, computed  } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Orderlayout from './Orderlayout.vue'
import { getHallById } from '@/apis/HallItem'



//#region 載入events

const today = new Date().toISOString().slice(0, 10);
const events = ref([]);

const model = defineModel();
const HallLogs = ref([]);
const eventData = ref([]);

watch(() => model.value, async (newVal) => {
  HallLogs.value = newVal;
  event();
});

const getevent = () => {
  return HallLogs.value.map(item => ({
    title: item.name,
    start: item.startTime,
    end: item.endTime,
  }));             
};

const event = () => {
  const data = getevent();
  eventData.value = data;
};


const props = defineProps({
  modalFlag: {
    type: Boolean,
    default: () => false,
  },
  chooseHallItem: {
    type: Number,
  }
})

const fc = ref(null);


watch (()=>props.modalFlag,(newVal) =>{
  if (newVal) {
    fc.value.getApi().render()
  }
});

const getHall =ref([]);

watch (()=>props.chooseHallItem,(newVal) =>{

  const getHallDetail = async (newVal) => {
    const res = await getHallById(newVal);
    getHall.value = res;
  }
  getHallDetail(newVal)
});

//#endregion


//#region 選擇日期
const Datetime = ref({});
const Selecttime = ref({});
const modalInstances = ref([]); 

//#endregion

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  locale: "zh-tw",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,dayGridDay",
  },
  buttonText: {
    today: "今天",
    month: "月",
    week: "週",
    day: "天",
  },
  eventMaxStack: 2, 
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false
  },
  events:computed(() => eventData.value),
  validRange: { start: today },
  selectable: true,
  dateClick: function(info) {
    const modal = document.getElementById('customModal');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    Datetime.value = info;
    modalInstances.value.push(modalInstance);
  },
  //點選日期
  select: function(info) {
    const modal = document.getElementById('customModal');
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    Selecttime.value = info;
    modalInstances.value.push(modalInstance);
  },
})

const closeAllModals = () => {
  modalInstances.value.forEach(modalInstance => modalInstance.hide());
  modalInstances.value = [];
};


</script>

<template>

  <div class="container" style="width: 100%; height: 20%;">
    <FullCalendar ref="fc" :options="calendarOptions"/>
  </div>

  <div class="modal fade" id="customModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="font-size: 190%;font-weight: bold;">預定行程</h5>
        </div>
        <div class="modal-body">
          <Orderlayout :Datetime="Datetime" :Selecttime="Selecttime" :getHall="getHall" />
        </div>
        <div class="modal-footer">
          <button type="button" @click="closeAllModals" class="btn btn-secondary" data-bs-dismiss="modal" style="font-size: large;">取消</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style>

.fc-event {
  color: white; 
  padding: 5%;
  font-size: 15px;
  opacity: 0.8;
  background-color: #9B7C64;
  border: #fff 3px solid;
  box-sizing: border-box; 
}

.fc-daygrid-event-dot {
    display: none;
}


</style>
