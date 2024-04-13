<template>
    <section id="amenities" class="pt-16 pb-16 bg-body-tertiary">
                <div class="container">
                    <!-- Heading -->
                    <div class="mb-10 text-center" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                        <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">Laseta Spa(主標題放這)</span>
                        <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">Services offerings(服務項目放這)</h2>
                    </div>
                    <!-- /Heading -->
                    <!--  Tabs Nav -->
                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4 active" id="facial-tab" data-bs-toggle="tab" data-bs-target="#facial-tab-pane" type="button" role="tab" aria-controls="facial-tab-pane" aria-selected="true"> Facial </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="foots-tab" data-bs-toggle="tab" data-bs-target="#foots-tab-pane" type="button" role="tab" aria-controls="foots-tab-pane" aria-selected="false" tabindex="-1"> Foots </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="body-tab" data-bs-toggle="tab" data-bs-target="#body-tab-pane" type="button" role="tab" aria-controls="body-tab-pane" aria-selected="false" tabindex="-1"> Body </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="skin-tab" data-bs-toggle="tab" data-bs-target="#skin-tab-pane" type="button" role="tab" aria-controls="skin-tab-pane" aria-selected="false" tabindex="-1"> Skin </button>
                        </li>
    
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="amenities-tab" data-bs-toggle="tab" data-bs-target="#amenities-tab-pane" type="button" role="tab" aria-controls="amenities-tab-pane" aria-selected="false" tabindex="-1"> Amenities </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="policies-tab" data-bs-toggle="tab" data-bs-target="#policies-tab-pane" type="button" role="tab" aria-controls="policies-tab-pane" aria-selected="false" tabindex="-1"> Policies </button>
                        </li>

                        <!-- 第一步驟需修改id/ data-bs-target/ aria-controls -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="try-tab" data-bs-toggle="tab" data-bs-target="#try-tab-pane" type="button" role="tab" aria-controls="try-tab-pane" aria-selected="false" tabindex="-1"> TRY看看 </button>
                        </li>

                    </ul>
                    <!-- Tabs Nav -->
                    <!-- Tabs Content  -->
                    <div class="tab-content bg-body p-8 p-lg-10 border-end border-start border-bottom" id="myTabContent" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                        <div class="tab-pane fade active show" id="facial-tab-pane" role="tabpanel" aria-labelledby="facial-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. Basic Facial Care - 45'</h6>
                                    <p> A reviving facial which includes a deep cleanse, exfoliation, soothing facial massage and finally moisturizing treatment using the finest of skin care products leaving your skin refreshed and nourished. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. Natural Skin Dream - 60'</h6>
                                    <p> This facial has been described as an experience in its own right. Using a natural yoghurt-based face mask, this all-in-once facial cleanses, soothes, nourishes and balances the skin leaving it radiant and glowing. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>3. Silky Beauty - 60'</h6>
                                    <p> Begin with a skin cleanse and massage followed by the application of a thin, rich, velvety cream mask. A head massage stimulates the nerves and blood vessels beneath the skin whilst also calming muscle tension. The cream mask is then removed and your face is moisturized leaving the skin soft and silky smooth. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>4. Lifting Feather - 60'</h6>
                                    <p> Experience complete relaxation with a Vietnamese manual facelift technique. The clay mask is then applied to draw out excess oil from the pores while retaining moisture and hydration. This facial treatment is tailored to make your skin feeling light as a feather. </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="foots-tab-pane" role="tabpanel" aria-labelledby="foots-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6> 1. Essential Oils Foot Therapy - 60'</h6>
                                    <p> Experience overall healing and wellbeing as your therapist focuses on the pressure points of your feet through deep tissue massage with essential oils. The process is similar to Reflexology whilst the oil leaves your skin soft and smooth. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. Foot Remedy - 60'</h6>
                                    <p> A foot Massage using hot stones applied to your legs and feet. Feet can typically take a lot of heat and the combination of pressure massage with the warmth of hot stones instils a sense of relaxation, helping to restore, rebalance and rejuvenate the body. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6> 3. Total Foot Treatment - 75'</h6>
                                    <p> A complete care package and ultimate treat for feet. This treatment combines a foot massage focusing on pressure points with a dry and wet scrub to remove dead skin, leaving your feet silky smooth. It is an invigorating ‘facelift’ for your feet. </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="body-tab-pane" role="tabpanel" aria-labelledby="body-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. Relaxation Treatment - 60' 90'</h6>
                                    <p> Applying gentle soothing massage techniques with local aromatic oils, the aim is to remove overall tension, relieve swollen or painful joints and balance one’s emotions. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. Tension Relief Therapy - 60' 90'</h6>
                                    <p> This facial has been described as an experience in its own right. Using a natural yoghurt-based face mask, this all-in-once facial cleanses, soothes, nourishes and balances the skin leaving it radiant and glowing. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>3. Hot Stone Massage - 60' 90'</h6>
                                    <p> Using strong massage techniques combined with essential oils, this treatment targets key muscle groups to relieve aches and pains. Smooth flowing rhythmic movements also help improve circulation and stimulate an overall sense of wellbeing and balance. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6> 4. Himalayan Salt Stone Massage - 60' 90'</h6>
                                    <p> This special therapy uses a blend of pure essential oil and natural salt rock crystal formed 250million years ago in ancient seas beneath the Himalayan Mountains. The healing massage technique combined with warm salt stones balances the central nervous system. It gently soothes the accumulation of stress and tension, helps remove toxins while infusing healthy minerals into the skin. </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="skin-tab-pane" role="tabpanel" aria-labelledby="skin-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. La Spa Body Scrub - 45'</h6>
                                    <p> La Spa’s moisturizing body scrub provides a deep cleaning and exfoliating treatment. Dead skin cells are removed whilst the growth of healthy new ones are promoted. Mineral sea salt and olive oil help to remove impurities and stimulate blood circulation. </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. Mud &amp; Milk Body Wrap - 45'</h6>
                                    <p> Harnessing the power of natural vitamins and minerals this body wrap helps improve the appearance and feel of skin. It draws toxins from the body and helps hydrate, tone and smooth the skin. </p>
                                </li>
                            </ul>
                        </div>



                        <!-- Room Amenities -->
                        <div class="tab-pane fade" id="amenities-tab-pane" role="tabpanel" aria-labelledby="amenities-tab" tabindex="0">
                            <div class="mb-8">
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Clothing and laundry</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-clothes-washer-free"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Wash Clothes</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-shoeshine-kit"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Shoeshine kit</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-iron"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Ironing facilities</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-sewing-kit"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Sewing kit</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-closet"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Closet</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Safety and security</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-24hour-security"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> 24hour Security</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-smoke-detector"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> Smoke Detector</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-lockers"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Locker</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-first-aid-kit"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">First aid kit</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-fire-extinguisher"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Fire extinguisher</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Comforts</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-daily-housekeeping"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> Daily Housekeeping</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-air-purifier"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Air Purifier</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-umbrella"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Umbrella</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-slippers"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Slippers</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-wake-up-service"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Wake-up service</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-mosquitonet"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Mosquito net</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-humidifier"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Humidifier</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
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
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-alarm-clock"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Alarm clock</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-air-conditioning"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> Air conditioning</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Layout and furnishings</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-city-view"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> City view</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-views"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Windows</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-luggage-storage"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Luggage Storage</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-balcony-terrace"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Balcony View</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-wooden-parqueted-flooring"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Wooden flooring</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-high-floor"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"> High floor</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-desk"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Desk</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-carpeting"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Carpeting</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Bathroom and toiletries</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-shower"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Shower</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-regular-slippers-for-kids"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Slippers For Kids</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-regular-cosmetics"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Cosmetics</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-shower-and-bathtub"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Shower and bathtub</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-toiletries"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Toiletries</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-towels"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Towels</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-mirror"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Mirror</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-cleaning-products"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Cleaning products</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-hair-dryer"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Hair dryer</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="border-bottom pb-4 mb-8">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Entertainment</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-free-wifi-in-all-rooms"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Free Wi-Fi in all rooms!</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-satellite-television"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Satellite/cable channels</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-telephone"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Telephone</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6"> Dining and drinking</h6>
                                    <ul class="list-unstyled row">
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-regular-electric-hot-water-pot"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Electric Hot Water Pot</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-microwave"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Microwave</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-kitchenette"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Kitchenette</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-complimentary-instant-coffee"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Free instant coffee</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-free-welcome-drink"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Free welcome drink</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-refrigerator"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Refrigerator</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-coffee-tea-maker"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Coffee/tea maker</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-complimentary-bottled-water"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Free bottled water</span>
                                        </li>
                                        <li class="col-12 col-xl-3 col-lg-4 col-md-6">
                                            <i class="hicon hicon-lg me-1 text-primary hicon-mini-bar"></i>
                                            <span class="text-uppercase h-sub-font ls-1 fsm-5 fw-semibold text-secondary">Mini bar</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Room Policies -->
                        <div class="tab-pane fade" id="policies-tab-pane" role="tabpanel" aria-labelledby="policies-tab" tabindex="0">
                            <div class="mb-8">
                                <div class="mb-6">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Check-in/out Policy:</h6>
                                    <ul>
                                        <li>Check in: from 14:00;</li>
                                        <li>Check out: no later than 12:00;</li>
                                        <li>Early check-in or late check out will be upon availability.</li>
                                    </ul>
                                </div>
                                <div class="mb-6">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Cancellation/Amendment Policy:</h6>
                                    <ul>
                                        <li>If cancellation/amendment is made before 7 days prior to your arrival date, no fee will be charged.</li>
                                        <li>If cancellation/amendment is made in 7 days of your arrival date or no show, 100% room rate of first night and tax will be charged</li>
                                    </ul>
                                </div>
                                <div class="mb-6">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Payment method:</h6>
                                    <ul>
                                        <li>By cash</li>
                                        <li>By Visa Card, Master Card, American Express plus 3% bank fee is applied.</li>
                                    </ul>
                                </div>
                                <div class="mb-6">
                                    <h6 class="text-uppercase h-sub-font ls-1 fs-6">Children and Extra Adult Policy:</h6>
                                    <ul>
                                        <li>Child under 3 years old: Free of charge and share bed with parents.</li>
                                        <li>Child from 5 years old and over: surcharge US$37/person/night for additional child or an extra bed.</li>
                                        <li>Adult: surcharge US$37/person/night for an additional person or an extra bed.&nbsp;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>





                        <div class="tab-pane fade" id="try-tab-pane" role="tabpanel" aria-labelledby="try-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. 測試NO.01</h6>
                                    <p>這邊想打啥就打啥 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. 測試NO.02</h6>
                                    <p> 這邊想打啥就打啥，主要可介紹功能 </p>
                                </li>
                            </ul>
                        </div>
    


    
    
                    </div>
                    <!-- /Tabs Content  -->
                </div>
            </section>      
    </template>
        