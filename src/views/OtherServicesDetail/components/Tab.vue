<template>
    <section id="amenities" class="pt-16 pb-16 bg-body-tertiary">
                <div class="container">
                    <!-- Heading -->
                    <div class="mb-10 text-center" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                        <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">KALSARI Spa</span>
                        <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">芳療 SPA</h2>
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
                            <button class="nav-link text-uppercase fs-6 ls-1 fw-semibold ps-8 pe-8 pt-4 pb-4" id="policies-tab" data-bs-toggle="tab" data-bs-target="#policies-tab-pane" type="button" role="tab" aria-controls="policies-tab-pane" aria-selected="false" tabindex="-1"> Policies </button>
                        </li>
                    </ul>
                    <!-- Tabs Nav -->
                    <!-- Tabs Content  -->
                    <div class="tab-content bg-body p-8 p-lg-10 border-end border-start border-bottom" id="myTabContent" data-cue="fadeIn" data-show="true" style="animation-name: fadeIn; animation-duration: 600ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">
                        <div class="tab-pane fade active show" id="facial-tab-pane" role="tabpanel" aria-labelledby="facial-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. 基礎面部護理 - 45'</h6>
                                    <p> 煥發活力的臉部護理包括深層清潔、去角質、舒緩臉部按摩，最後使用最好的護膚產品進行保濕護理，讓您的肌膚煥然一新、得到滋養。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. 天然肌膚夢幻 - 60'</h6>
                                    <p> 這種面部護理被描述為一種獨特的體驗。使用天然酸奶面膜，這款全效面部護理能夠清潔、舒緩、滋養和平衡肌膚，讓肌膚散發出光彩。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>3. 絲綢之美 - 60'</h6>
                                    <p> 從肌膚清潔和按摩開始，然後使用一層薄薄的、豐富、絲滑的霜狀面膜。頭部按摩刺激皮膚下的神經和血管，同時舒緩肌肉緊張。然後將霜狀面膜去除，您的面部被滋潤，讓肌膚柔軟絲滑。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>4. 提拉之羽 - 60'</h6>
                                    <p> 體驗越南手工拉提技術帶來的完全放鬆。然後將粘土面膜塗抹在臉上，吸出毛孔中的多餘油脂，同時保留水分和水合作用。這款面部護理量身定制，讓您的肌膚感覺輕盈如羽。 </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="foots-tab-pane" role="tabpanel" aria-labelledby="foots-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6> 1. 精油足療療程 - 60'</h6>
                                    <p> 透過深層組織按摩配合精油，您的治療師將專注於您腳部的穴位，讓您全身獲得療愈與健康。這個過程類似於反射療法，同時精油還能讓您的皮膚柔軟光滑。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. 足部舒緩療程 - 60'</h6>
                                    <p> 利用熱石按摩您的腿部和腳部，這是一種足部按摩療法。腳部通常能承受很高的溫度，熱石按摩和壓力按摩的結合帶來放鬆感，有助於恢復、重新平衡和活化身體。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6> 3. 完美足部療程 - 75'</h6>
                                    <p> 這是一個完整的護理套餐，也是您的足部的極致享受。此療程結合了針對穴位的足部按摩和乾濕磨砂，去除死皮，讓您的腳部柔軟光滑。這是一種活膚療程，為您的腳部帶來提神的效果。 </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="body-tab-pane" role="tabpanel" aria-labelledby="body-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. 放鬆療程 - 60' 90'</h6>
                                    <p> 利用溫和舒緩的按摩技巧和當地芳香精油，旨在消除整體緊張，舒緩腫脹或疼痛的關節，平衡情緒。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. 緩解緊張療法 - 60' 90'</h6>
                                    <p> 這種面部護理被描述為一種獨特的體驗。使用天然酸奶為基礎的面膜，這款全效面部護理能夠清潔、舒緩、滋養和平衡肌膚，讓肌膚散發出光彩。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>3. 熱石按摩 - 60' 90'</h6>
                                    <p> 利用強力的按摩技巧結合精油，此療程針對關鍵肌肉群，舒緩疼痛和不適。流暢的節奏性運動也有助於改善血液循環，刺激整體的健康與平衡感。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6> 4. 喜瑪拉雅鹽石按摩 - 60' 90'</h6>
                                    <p> 這種特殊的療法使用純精油和在喜瑪拉雅山脈下古老海洋中形成的天然鹽石晶體混合而成。治療性的按摩技巧結合溫暖的鹽石平衡中樞神經系統。它溫和舒緩壓力和緊張，幫助排除毒素，同時將健康礦物質注入皮膚。 </p>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="skin-tab-pane" role="tabpanel" aria-labelledby="skin-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h6>1. SPA身體磨砂 - 45'</h6>
                                    <p> SPA的滋潤身體磨砂提供深層清潔和去角質療程。它能夠去除死皮細胞，同時促進健康新細胞的生長。礦物海鹽和橄欖油有助於去除雜質並刺激血液循環。 </p>
                                </li>
                                <li class="list-group-item">
                                    <h6>2. 泥漿和牛奶身體包裹 - 45'</h6>
                                    <p> 利用天然的維生素和礦物質的力量，這種身體包裹有助於改善皮膚的外觀和觸感。它能夠從身體中排出毒素，並有助於保濕、調理和平滑皮膚。 </p>
                                </li>
                            </ul>
                        </div>



                        <!-- Room Amenities -->

                        <!-- Room Policies -->
                        <div class="tab-pane fade" id="policies-tab-pane" role="tabpanel" aria-labelledby="policies-tab" tabindex="0">
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
        