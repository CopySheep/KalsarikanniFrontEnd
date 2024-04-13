<template>
    <!-- Amenities  -->
    <section id="amenities" class="pt-16 pb-16 bg-body-tertiary">
        <div class="container">
            <!-- Heading -->
            <div class="mb-10 text-center" data-cue="fadeIn">
                <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Feel The Difference</span>
                <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">設施 & 住房須知</h2>
            </div>
            <!-- /Heading -->
            <!-- Tab Nav  -->
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist" data-cue="fadeIn">
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-uppercase fs-4 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4 active"
                        id="amenities-tab" data-bs-toggle="tab" data-bs-target="#amenities-tab-pane" type="button"
                        role="tab" aria-controls="amenities-tab-pane" aria-selected="true"> 設施 </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-uppercase fs-4 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="policies-tab"
                        data-bs-toggle="tab" data-bs-target="#policies-tab-pane" type="button" role="tab"
                        aria-controls="policies-tab-pane" aria-selected="false"> 住房須知 </button>
                </li>
            </ul>
            <!-- /Tab Nav  -->
            <!-- Tab content  -->
            <div class="tab-content bg-body p-8 p-lg-10 border-end border-start border-bottom" id="myTabContent"
                data-cue="fadeIn">
                <div class="tab-pane fade show active" id="amenities-tab-pane" role="tabpanel"
                    aria-labelledby="amenities-tab" tabindex="0">
                    <!-- Room Amenities -->
                    <div class="mb-8">
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">服裝和洗衣</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-clothes-washer-free"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">洗衣服務</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-shoeshine-kit"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">擦鞋套件</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-iron"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">熨燙設備</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-sewing-kit"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">針線包</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-closet"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">衣櫥</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                            </ul>
                        </div>
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">安全保障</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-24hour-security"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> 24
                                        小時保全</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-smoke-detector"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">
                                        煙霧偵測器</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-lockers"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">保險櫃</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-first-aid-kit"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">急救箱</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-fire-extinguisher"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">滅火器</span>
                                </li>
                            </ul>
                        </div>
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">舒適</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-daily-housekeeping"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">
                                        每日客房清潔</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-air-purifier"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">空氣清淨機</span>
                                </li>
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-umbrella"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Umbrella</span>
                            </li> -->
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-slippers"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">拖鞋</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-wake-up-service"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">叫醒服務</span>
                                </li>
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-mosquitonet"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Mosquito net</span>
                            </li> -->
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-humidifier"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">加濕器</span>
                                </li>
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-fan"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Fan</span>
                            </li>
                            <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-linens"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Linens</span>
                            </li>
                            <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-slippers"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Slippers</span>
                            </li> -->
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-alarm-clock"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Alarm clock</span>
                            </li> -->
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-air-conditioning"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">
                                        空調</span>
                                </li>
                            </ul>
                        </div>
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">設計</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-city-view"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">
                                        城市景觀</span>
                                </li>
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-views"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">窗戶</span>
                            </li> -->
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-luggage-storage"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Luggage Storage</span>
                            </li> -->
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-balcony-terrace"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">陽台</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-wooden-parqueted-flooring"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">木地板</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-high-floor"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">
                                        高樓層</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-carpeting"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">地毯</span>
                                </li>
                            </ul>
                        </div>
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">浴室和盥洗用品</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-shower"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">淋浴</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-regular-slippers-for-kids"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">兒童拖鞋</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-regular-cosmetics"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">化妝品</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-shower-and-bathtub"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">淋浴和浴缸</span>
                                </li>
                                <!-- <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                <i class="hicon hicon-lg me-1 text-primary hicon-toiletries"></i>
                                <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Toiletries</span>
                            </li> -->
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-towels"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">毛巾</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-mirror"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">鏡子</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-cleaning-products"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">沐浴用品</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-hair-dryer"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">吹風機</span>
                                </li>
                            </ul>
                        </div>
                        <div class="border-bottom pb-4 mb-8">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">娛樂</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-free-wifi-in-all-rooms"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">所有客房均提供免費無線網路！</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-satellite-television"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">衛星/有線頻道</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-telephone"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">電話</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6"> 餐飲</h6>
                            <ul class="list-unstyled row">
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i
                                        class="hicon hicon-lg me-1 text-primary hicon-regular-electric-hot-water-pot"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">電熱水壺</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-microwave"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">微波</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-kitchenette"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">小廚房</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-complimentary-instant-coffee"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">免費即溶咖啡</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-free-welcome-drink"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">免費迎賓飲品</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-refrigerator"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">冰箱</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-coffee-tea-maker"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">咖啡/茶機</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-complimentary-bottled-water"></i>
                                    <span
                                        class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">免費瓶裝水</span>
                                </li>
                                <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                    <i class="hicon hicon-lg me-1 text-primary hicon-mini-bar"></i>
                                    <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">MINI
                                        BAR</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Room Amenities -->
                </div>
                <div class="tab-pane fade" id="policies-tab-pane" role="tabpanel" aria-labelledby="policies-tab"
                    tabindex="0">
                    <!-- Room Policies -->
                    <div class="mb-8">
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">入住/退房政策：</h6>
                            <ul>
                                <li>入住時間：14:00 起；</li>
                                <li>退房：不晚於10:00；</li>
                                <li>提早入住或延遲退房將視供應情況而定。</li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">取消/修改政策：</h6>
                            <ul>
                                <li>如果在抵達日期前 7 天之前取消/修改，將不收取任何費用。</li>
                                <li>若在抵達日期後 7 天內取消/修改或未入住，將收取首晚 100% 房費和稅費。</li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">付款方式：</h6>
                            <ul>
                                <li>現金。</li>
                                <li>使用 Visa 卡、萬事達卡、美國運通卡需加收 3% 的銀行費用。</li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">兒童和額外成人政策：</h6>
                            <ul>
                                <li>3歲以下兒童：免費並與父母同住一張床。</li>
                                <li>5歲以上兒童：額外兒童或加床需支付500元/人/晚的附加費。</li>
                                <li>成人：額外一人或加床需支付 500元/人/晚的附加費。&nbsp;</li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <h6 class="text-uppercase h-sub-font ls-1 fs-6">價格調整：</h6>
                            <ul>
                                <li>假日：每房加價3000元/間。</li>
                                <li>國定假日：在假日價格的基礎上再加 2000 元/間。</li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Room Policies -->
                </div>
            </div>
            <!-- /Tab content  -->
        </div>
    </section>
    <!-- /Amenities -->
</template>
