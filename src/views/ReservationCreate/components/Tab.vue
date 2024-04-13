<template>
    <section id="amenities" class="pt-16 pb-16 bg-body-tertiary">
        <div class="container">
            <!-- Heading -->
            <div class="mb-10 text-center" data-cue="fadeIn" data-show="true"
                style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">溫馨提醒</h2>
            </div>
            <!-- /Heading -->
            <!--  Tabs Nav -->
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist" data-cue="fadeIn" data-show="true"
                style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4 active"
                        id="facial-tab" data-bs-toggle="tab" data-bs-target="#facial-tab-pane" type="button" role="tab"
                        aria-controls="facial-tab-pane" aria-selected="true"> 服務內容 </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="policies-tab"
                        data-bs-toggle="tab" data-bs-target="#policies-tab-pane" type="button" role="tab"
                        aria-controls="policies-tab-pane" aria-selected="false" tabindex="-1"> 注意事項 </button>
                </li>
            </ul>
            <!-- Tabs Nav -->
            <!-- Tabs Content  -->
            <div class="tab-content bg-body p-8 p-lg-10 border-end border-start border-bottom" id="myTabContent"
                data-cue="fadeIn" data-show="true"
                style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                <div class="tab-pane fade active show" id="facial-tab-pane" role="tabpanel" aria-labelledby="facial-tab"
                    tabindex="0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(item, index) in obj" :key="item.id">
                            <h6>{{ item.serviceDetailName }} - {{ item.time }}'</h6>
                            <p>{{ item.description }}</p>
                            <span class="position-absolute top-0 end-0 mt-6 text-bg-primary pt-2 pb-2 ps-4 pe-4"
                                v-if="item.servicesTypeId === 1">
                                <span>Price:</span>
                                <strong>${{ item.price }}</strong>
                            </span>
                        </li>
                    </ul>
                </div>



                <!-- Room Amenities -->

                <!-- Room Policies -->
                <div class="tab-pane fade" id="policies-tab-pane" role="tabpanel" aria-labelledby="policies-tab"
                    tabindex="0">
                    <div class="mb-8">
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">取消/修改政策：</h6>
                            <ul>
                                <li>如果取消/修改在您抵達日期前7天之前進行，將不收取任何費用。</li>
                                <li>如果取消/修改在您抵達日期前7天內進行或未能入住，將收取首晚房費和稅款的100％。</li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">付款方式：</h6>
                            <ul>
                                <li>現金支付</li>
                                <li>信用卡：Visa卡、萬事達卡、美國運通卡，需額外收取3％的銀行手續費。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Tabs Content  -->
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    obj: {
        type: Array,
    }
})


</script>