<template>
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                未結訂單
            </button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                歷史訂單
            </button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div v-if="data.length == 0" style="height: 500px; width: 500px;">
                <h1>該頁面暫無訊息</h1>
            </div>
            <Accordion v-else :data="data" title="data" :status="0" />
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div v-if="data.length == 0" style="height: 500px; width: 500px;">
                <h1>該頁面暫無訊息</h1>
            </div>
            <Accordion v-else :data="data" title="okdate" :status="1" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Accordion from '@/views/MemberDashboard/components/OrderList/Accordion.vue'
import none from '../../none.vue';


const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

onMounted(() => {
    console.log(props.data);
})


</script>