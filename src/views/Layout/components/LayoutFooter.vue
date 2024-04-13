<template>
    <!-- Footer -->
    <footer id="footer">
        <!-- Heading -->
        <div class="pt-14 pb-18 pb-md-14 pb-lg-10 border-top border-bottom text-center" data-cue="fadeIn">
            <span class="text-uppercase h-sub-font fsm-1 fw-medium ls-2 d-block mb-4">開始體驗</span>
            <h2 class="text-uppercase h-special-font mb-6 text-body-emphasis">立即預約</h2>
        </div>
        <!-- /Heading -->
        <!-- Check rooms -->
        <div class="position-relative z-1" data-cue="fadeIn">
            <div id="checkRoomBottom" class="check-room-bottom position-absolute start-0 end-0 top-0" data-bs-theme="light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card bg-primary border-0 shadow-sm">
                                <div class="card-body p-5">
                                    <form class="row g-4" method="post" action="./rooms-2.html">
                                        <div class="col-12 col-lg-5 col-md-7">
                                            <!-- Input date -->
                                            <div class="mb-0">
                                                <div class="position-relative">
                                                    <label class="hicon hicon-menu-calendar hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1" for="txtCheckDate1"></label>
                                                    <input id="txtCheckDate1" type="text" class="check-date form-select bg-body-tertiary cursor-pointer shadow-none ps-11 fw-medium" placeholder="" readonly="true">
                                                </div>
                                            </div>
                                            <!-- /Input date -->
                                        </div>
                                        <div class="col-12 col-lg-4 col-md-5">
                                            <!-- Input number of guests -->
                                            <div class="mb-0">
                                                <div class="position-relative">
                                                    <label class="hicon hicon-couple hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1" for="btnCheckGuest1"></label>
                                                    <div class="dropdown" data-total-guest="">
                                                        <button class="form-select w-100 text-start shadow-none bg-body-tertiary ps-11 fw-medium" id="btnCheckGuest1" data-bs-auto-close="outside" type="button" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span class="text-nowrap">
                                                                <span data-total-adults=""></span>, <span data-total-children=""></span>
                                                            </span>
                                                        </button>
                                                        <ul class="dropdown-menu animate slideIn p-6 border-0 shadow">
                                                            <li>
                                                                <div class="mb-3">
                                                                    <label for="txtCheckAdults1" class="form-label">成人</label>
                                                                    <div class="input-group shadow-sm">
                                                                        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-minus-adults="">
                                                                            <i class="hicon hicon-minus-thin small"></i>
                                                                        </button>
                                                                        <input type="text" class="form-control text-center" placeholder="Adults" value="1" aria-label="Adults" id="txtCheckAdults1" data-adults-max="10" data-input-adults="">
                                                                        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-plus-adults="">
                                                                            <i class="hicon hicon-plus-thin small"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="mb-1">
                                                                    <label for="txtCheckChildren1" class="form-label">孩童</label>
                                                                    <div class="input-group shadow-sm">
                                                                        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-minus-children="">
                                                                            <i class="hicon hicon-minus-thin small"></i>
                                                                        </button>
                                                                        <input type="text" class="form-control text-center" placeholder="Children" value="0" aria-label="Children" id="txtCheckChildren1" data-children-max="20" data-input-children="">
                                                                        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-plus-children="">
                                                                            <i class="hicon hicon-plus-thin small"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Input number of guests -->
                                        </div>
                                        <div class="col-12 col-lg-3 col-md-12">
                                            <!-- Button -->
                                            <div class="mb-0">
                                                <button type="submit" class="btn btn-secondary w-100 fw-medium">
                                                    <i class="hicon hicon-mmb-my-booking hicon-md mr-1"></i>
                                                    <span> 確認房間</span>
                                                </button>
                                            </div>
                                            <!-- /Button -->
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Check rooms -->
        <div class="bg-body text-body-tertiary pb-14" data-bs-theme="dark">
            <div class="container">
                <!-- Footer top -->
                <div class="border-bottom border-white border-opacity-10 pt-24 pt-md-22 pt-lg-20">
                    <div class="row" data-cues="fadeIn">
                        <div class="col-12 col-xl-3 col-lg-12 col-md-6">
                            <!-- Brand -->
                            <div class="mb-10">
                                <a href="" class="d-flex align-items-center text-body-emphasis h-sub-font text-uppercase mb-6">
                                    <img class="me-4" src="/static/picture/logo-light.png" alt="" height="48">
                                    <!-- <img class="me-4" src="/static/picture/logo-light.png" srcset="./assets/img/logos/logo-light@2x.png 2x" alt="" height="48"> -->
                                    <span class="h5 fw-semibold d-block ls-5 mb-2 lh-1">KALSARI</span>
                                </a>
                                <p>
                                    <em>我們的飯店以追求獨處時的寧靜安穩為核心理念，借鏡芬蘭「kalsarikänni」的幸福哲學。在現代節奏迅捷的生活中，每個人都渴望擁有屬於自己的喘息空間。
                                    </em>
                                    <a href="about.html" class="text-body">[+]</a>
                                </p>
                            </div>
                            <!-- /Brand -->
                        </div>
                        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                            <!-- Contact Info -->
                            <div class="mb-10">
                                <h6 class="fw-semibold text-uppercase ls-1 h-sub-font text-light">聯絡資訊</h6>
                                <div class="pt-2">
                                    <p>
                                        <span>320 桃園市中壢區新生路二段421號</span>
                                    </p>
                                    <p>
                                        <span>+886-2-2592-6998 (Ext: 10405)</span>
                                    </p>
                                    <p>
                                        <a href="#" class="text-body">KalsariHotel@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <!-- /Contact Info -->
                        </div>
                        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                            <!-- Quick Links -->
                            <div class="mb-10">
                                <h6 class="fw-semibold text-uppercase ls-1 h-sub-font text-light">快速連結</h6>
                                <div class="row">
                                    <div class="col-5">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="#">關於我們</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="#">最新消息</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="#">派遣服務</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="/contact">聯絡我們</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-7">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="room">房型介紹</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="#">餐廳介紹</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="#">宴會廳介紹</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-body ps-0 pe-0" href="/otherservices">額外設施</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- /Quick Links -->
                        </div>
                        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                            <div class="mb-10">
                                <!-- Mobile App -->
                                <div class="mb-6">
                                    <h6 class="fw-semibold text-uppercase ls-1 h-sub-font text-light">取得應用程式</h6>
                                    <div class="pt-4">
                                        <div class="row g-3">
                                            <div class="col-6">
                                                <a href="#">
                                                    <figure>
                                                        <img src="/static/picture/i1.svg" class="img-fluid w-100" alt="">
                                                    </figure>
                                                </a>
                                            </div>
                                            <div class="col-6">
                                                <a href="#">
                                                    <figure>
                                                        <img src="/static/picture/i2.svg" class="img-fluid w-100" alt="">
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Mobile App -->
                                <!-- Social -->
                                <div class="mb-10">
                                    <h6 class="fw-semibold text-uppercase ls-1 h-sub-font text-light">關注我們</h6>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#" class="text-body link-hover-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-body link-hover-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="20" height="20" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-body link-hover-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="20" height="20" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                                    <path d="M10 9l5 3l-5 3z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-body link-hover-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-pinterest" width="20" height="20" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M8 20l4 -9"></path>
                                                    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
                                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-body link-hover-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tripadvisor" width="20" height="20" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M6.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
                                                    <path d="M17.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
                                                    <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z"></path>
                                                    <path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z"></path>
                                                    <path d="M10.5 15.5l1.5 2l1.5 -2"></path>
                                                    <path d="M9 6.75c2 -.667 4 -.667 6 0"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- /Social -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Footer top -->
                <!-- Footer Bottom -->
                <div class="mt-10">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <p>Copyright &copy; 2024 KalsariHotel 版權所有</p>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="text-start text-md-end">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="text-body" href="#">隱私權政策</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-body" href="#">使用條款</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Footer Bottom -->
            </div>
        </div>
    </footer>
    <!-- Scroll top -->
    <a href="#" class="scroll-top position-fixed bottom-0 end-0 mb-6 me-16 rounded-circle text-white d-flex align-items-center justify-content-center z-4">
        <i class="hicon hicon-thin-arrow-up"></i>
    </a>
    <!-- /Scroll top -->
    <!-- /Footer -->
</template>