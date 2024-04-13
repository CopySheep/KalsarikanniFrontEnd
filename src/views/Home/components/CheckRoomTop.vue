<template>
    <!-- Check rooms -->
    <div id="checkRoomTop" class="check-room-top pt-4 pb-4 pt-lg-0 pb-lg-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-5">
                            <form class="row g-4" method="post" action="./checkroom">
                                <div class="col-12 col-lg-5 col-md-7">
                                    <!-- Input date -->
                                    <div class="mb-0">
                                        <div class="position-relative">
                                            <label class="hicon hicon-menu-calendar hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1" for="txtCheckDate"></label>
                                            <input id="txtCheckDate" type="text" class="check-date form-select bg-body-tertiary cursor-pointer shadow-none ps-11 fw-medium" placeholder="" readonly="false">
                                        </div>
                                    </div>
                                    <!-- /Input date -->
                                </div>
                                <div class="col-12 col-lg-4 col-md-5">
                                    <!-- Input number of guests -->
                                    <div class="mb-0">
                                        <div class="position-relative">
                                            <label class="hicon hicon-couple hicon-bold text-secondary cursor-pointer position-absolute top-50 start-0 translate-middle-y ms-5 z-1" for="btnCheckGuest"></label>
                                            <div class="dropdown" data-total-guest="">
                                                <button class="form-select w-100 text-start shadow-none bg-body-tertiary ps-11 fw-medium" id="btnCheckGuest" data-bs-auto-close="outside" type="button" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="text-nowrap">
                                                        <span data-total-adults=""></span>, <span data-total-children=""></span>
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu animate slideIn p-6 border-0 shadow">
                                                    <li>
                                                        <div class="mb-3">
                                                            <label for="txtCheckAdults" class="form-label">Adults</label>
                                                            <div class="input-group shadow-sm">
                                                                <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-minus-adults="">
                                                                    <i class="hicon hicon-minus-thin small"></i>
                                                                </button>
                                                                <input type="text" class="form-control text-center" placeholder="Adults" value="1" aria-label="Adults" id="txtCheckAdults" data-adults-max="10" data-input-adults="">
                                                                <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-plus-adults="">
                                                                    <i class="hicon hicon-plus-thin small"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="mb-1">
                                                            <label for="txtCheckChildren" class="form-label">Children</label>
                                                            <div class="input-group shadow-sm">
                                                                <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" data-minus-children="">
                                                                    <i class="hicon hicon-minus-thin small"></i>
                                                                </button>
                                                                <input type="text" class="form-control text-center" placeholder="Children" value="0" aria-label="Children" id="txtCheckChildren" data-children-max="20" data-input-children="">
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
                                        <div class="btn btn-primary w-100 fw-medium" @click="$router.push('/checkroom')">
                                            <i class="hicon hicon-mmb-my-booking hicon-md mr-1"></i>
                                            <span>訂房</span>
                                        </div>
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
    <!-- /Check rooms -->
</template>