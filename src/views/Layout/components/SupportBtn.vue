<template>
    <div class="booking-btn" ref="bookingButtonRef">
        <a href="/" class="mobile-btn">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path
                    d="M25.655 12.347a1.239 1.239 0 0 0-.101-1.772L13.943.415a1.447 1.447 0 0 0-1.888.022L.405 11.117a1.232 1.232 0 0 0-.057 1.77l.292.304c.485.504 1.268.564 1.749.134l.87-.78V23.96c0 .7.568 1.268 1.268 1.268h4.541c.7 0 1.267-.567 1.267-1.268v-7.986h5.793v7.986c-.01.7.49 1.267 1.19 1.267h4.814c.7 0 1.267-.567 1.267-1.267V12.706l.537.471c.296.26.918.052 1.39-.467l.33-.363z"
                    fill="#FFF" fill-rule="evenodd"></path>
            </svg>
            <p>回首頁</p>
        </a>
        <a href="https://maps.app.goo.gl/tb5SaNvmqVSapaf3A" class="mobile-btn address" target="_blank">
            <svg width="13" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 26">
                <g fill="#FFF" fill-rule="evenodd">
                    <path
                        d="M9.186 5.44A3.268 3.268 0 0 0 5.92 8.706c0 1.8 1.465 3.265 3.265 3.265s3.264-1.465 3.264-3.265-1.464-3.264-3.264-3.264z">
                    </path>
                    <path
                        d="M9.186 0C4.386 0 .48 3.905.48 8.705c0 1.646.463 3.25 1.337 4.638L9.186 25.1l7.368-11.757a8.683 8.683 0 0 0 1.337-4.638c0-4.8-3.905-8.705-8.705-8.705zm0 14.146c-3 0-5.441-2.44-5.441-5.44 0-3 2.44-5.441 5.44-5.441 3 0 5.442 2.44 5.442 5.44 0 3-2.441 5.441-5.441 5.441z"
                        fill-rule="nonzero"></path>
                </g>
            </svg>
            <p>前往聖德</p>
        </a>
        <a class="mobile-btn">
            <svg width="33" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="#ffffff"
                    d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
            </svg>
            <p>客服</p>
        </a>
        <div class="booking" @click="toggleBooking">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path
                    d="M25.21 2.68c.437 0 .79.357.79.797v21.657c0 .44-.353.797-.79.797H.79a.793.793 0 0 1-.79-.797V3.477c0-.44.353-.797.79-.797h4.038v-.882c0-.956.77-1.734 1.717-1.734h1.223c.947 0 1.717.778 1.717 1.734v.882h6.979v-.946c0-.956.77-1.734 1.717-1.734h1.222c.947 0 1.718.778 1.718 1.734v.946h4.09zm-7.167-.946V5.21c0 .077.062.14.138.14h1.222a.14.14 0 0 0 .14-.14V1.734a.14.14 0 0 0-.14-.14h-1.222a.14.14 0 0 0-.138.14zm-11.636.064v3.475c0 .077.062.14.138.14h1.223a.14.14 0 0 0 .138-.14V1.798a.14.14 0 0 0-.138-.14H6.545a.14.14 0 0 0-.138.14zM1.579 24.337H24.42V9.822H1.58v14.515zM6 11.974h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                    fill="#FFF" fill-rule="nonzero"></path>
            </svg>
            <p>預訂</p>
            <ul>
                <li>
                    <a href="room" class="btn-h room-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
                            <g transform="translate(-3.7 .8)" fill-rule="nonzero" fill="none">
                                <rect x="4" width="32.4" height="32.4" rx="16.2"></rect>
                                <path
                                    d="M32.25 20.129H7.15l2.775-4.466V7.448L11.054 6.3h17.292l1.13 1.148v8.215l2.773 4.466zM27.216 8.596H12.183v5.732c1.455-.383 3.969-.855 7.517-.855 3.548 0 6.062.472 7.517.855V8.596zM7.1 21.541h25.2v2.297h-2.631V27H27.41v-3.162H11.99V27H9.73v-3.162H7.1V21.54zm11.684-9.262s-1.62.1-2.544.189c-1.026.099-2.519.48-2.519.48v-2.007c0-.794 1.133-1.438 2.531-1.438 1.398 0 2.532.644 2.532 1.438v1.338zm6.895.67s-1.493-.382-2.52-.481a98.72 98.72 0 0 0-2.543-.19v-1.337c0-.794 1.134-1.438 2.532-1.438 1.398 0 2.53.644 2.53 1.438v2.008z"
                                    fill="#FFF"></path>
                            </g>
                        </svg>
                        <p>立即入住</p>
                    </a>
                </li>
                <li>
                    <a href="restaurant"
                        class="btn-h table-btn" target="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
                            <g transform="translate(.8 .8)" fill="none" fill-rule="evenodd">
                                <rect width="32.4" height="32.4" rx="16.2"></rect>
                                <path
                                    d="M13.426 18.88l1.342-.11 1.283 1.334-6.923 6.673a.743.743 0 0 1-1.023 0l-1.491-1.438a.68.68 0 0 1 0-.986l5.76-5.554c.25.056.504.092.765.092.096 0 .191-.004.287-.011zm15.16-8.897a.65.65 0 0 1 0 .945l-4.2 4.048c-1.009.973-2.427 1.28-3.718.967l-2.815-2.714a3.65 3.65 0 0 1 1.002-3.585l4.2-4.048c.27-.261.709-.261.98 0a.65.65 0 0 1 0 .944l-3.733 3.599a.848.848 0 0 0 0 1.23c.353.34.924.34 1.278 0l3.713-3.58a.74.74 0 0 1 1.018 0c.28.272.28.711 0 .982l-3.715 3.58a.85.85 0 0 0 0 1.23c.353.34.925.34 1.279 0l3.733-3.598a.71.71 0 0 1 .978 0zm-20.4-4.021l18.878 18.196a.72.72 0 0 1 0 1.038l-1.55 1.494a.782.782 0 0 1-.54.215h-.013a.775.775 0 0 1-.544-.235l-9.045-9.405-2.074.17a1.906 1.906 0 0 1-1.482-.522L8.243 13.47c-1.996-1.925-2.51-4.858-1.28-7.309a.759.759 0 0 1 .686-.414c.2 0 .394.076.538.215z"
                                    fill="#FFF"></path>
                            </g>
                        </svg>
                        <p>訂位用餐</p>
                    </a>
                </li>
                <li>
                    <a href="dispatch" class="btn-h shop-btn" target="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="transform: scale(0.8);">
                            <path fill="#ffffff" d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                        </svg>
                        <p>派遣服務</p>
                    </a>
                </li>
                <li>
                    <a href="hall" class="btn-h hall-btn" target="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="transform: scale(0.8);">
                            <path fill="#ffffff" d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/></svg>
                        <p>宴會預約</p>
                    </a>
                </li>

            </ul>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';

const bookingButtonRef = ref(null);


const toggleBooking = () => {
    bookingButtonRef.value.classList.toggle('open');
}


</script>

<style scoped>
* {
    margin: 0;
    padding: 0
}


p {
    font-size: 16px;
    font-weight: 400;
    color: #634733;
    line-height: 20px
}

a {
    text-decoration: none
}


ul {
    list-style: none;
    margin: 0;
    padding: 0
}



.booking-btn {
    position: fixed;
    right: 30px;
    bottom: 90px;
    z-index: 7
}

.booking-btn .booking {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 18px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: #9B7C64;
    cursor: pointer
}

.booking-btn .booking>svg {
    margin-top: 0;
    margin-bottom: 6px
}

.booking-btn .booking p {
    font-size: 18px;
    line-height: 18px;
    color: #fff
}

.booking-btn .btn-h {
    position: absolute;
    bottom: 50%;
    right: 50%;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: #9B7C6487;
    -webkit-transform: translate(50%, 50%);
    -moz-transform: translate(50%, 50%);
    -ms-transform: translate(50%, 50%);
    -o-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
    -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -ms-transition: all .6s ease;
    -o-transition: all .6s ease;
    transition: all .6s ease;
    opacity: 0;
    z-index: -1
}

.booking-btn .btn-h:hover {
    background-color: #9B7C64
}

.booking-btn .btn-h svg {
    width: 33px;
    height: 33px
}

.booking-btn .btn-h p {
    color: #fff;
    font-size: 14px;
    line-height: 14px
}

.booking-btn.open .btn-h {
    opacity: 1
}

.booking-btn.open .room-btn {
    bottom: calc(100% + 338px);
    transform: translate(50%)
}

.booking-btn.open .hall-btn {
    bottom: calc(100% + 256px);
    transform: translate(50%)
}

.booking-btn.open .table-btn {
    bottom: calc(100% + 174px);
    transform: translate(50%)
}

.booking-btn.open .shop-btn {
    bottom: calc(100% + 92px);
    transform: translate(50%)
}

.booking-btn .mobile-btn {
    display: none
}

.booking-btn svg {
    margin-top: 6px
}


@media screen and (min-width: 500px) {
    .booking-btn.open .mobile-btn.address {
        opacity: 1;
        bottom: calc(100% + 10px);
        transform: translate(50%)
    }

    .mobile-btn.address {
        position: absolute;
        right: 50%;
        bottom: 50%;
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        flex-direction: column;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        background-color: #9B7C6487;
        transform: translate(50%, 50%);
        -webkit-transition: all .6s ease;
        -moz-transition: all .6s ease;
        -ms-transition: all .6s ease;
        -o-transition: all .6s ease;
        transition: all .6s ease;
        opacity: 0;
        z-index: -1
    }

    .mobile-btn.address p {
        color: #fff;
        font-size: 14px;
        line-height: 14px
    }

    .mobile-btn.address svg {
        margin-top: 10px;
        margin-bottom: 7px
    }
}

@media screen and (min-width: 500px) and (max-height:700px) {
    .booking-btn.open .mobile-btn.address {
        bottom: 50%;
        right: calc(100% + 10px);
        transform: translateY(50%)
    }

    .booking-btn.open .shop-btn {
        bottom: 50%;
        right: calc(100% + 92px);
        transform: translateY(50%)
    }

    .booking-btn.open .table-btn {
        bottom: 50%;
        right: calc(100% + 174px);
        transform: translateY(50%)
    }

    .booking-btn.open .hall-btn {
        bottom: 50%;
        right: calc(100% + 256px);
        transform: translateY(50%)
    }

    .booking-btn.open .room-btn {
        bottom: 50%;
        right: calc(100% + 338px);
        transform: translateY(50%)
    }

}

@media screen and (max-width: 499px) {

    .booking-btn {
        right: auto;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 60px
    }

    .booking-btn>* {
        flex: 1 1 25%;
        border-right: 1px solid #927e40
    }

    .booking-btn>:last-child {
        border-right: none
    }

    .booking-btn.open .booking ul {
        transform: translateY(-100%)
    }

    .booking-btn.open .room-btn,
    .booking-btn.open .hall-btn,
    .booking-btn.open .shop-btn,
    .booking-btn.open .table-btn {
        right: auto;
        bottom: auto;
        transform: none
    }

    .booking-btn svg {
        margin-top: 0;
        margin-bottom: 4px
    }

    .booking-btn .booking {
        position: static;
        width: auto;
        height: auto;
        border-radius: 0;
        background-color: #9B7C64
    }

    .booking-btn .booking ul {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        transition: transform .4s ease;
        z-index: -1
    }

    .booking-btn .booking ul li {
        position: relative;
        height: 100%;
        flex: 1 1 33.333%
    }

    .booking-btn .booking p {
        font-size: 16px;
        line-height: 8px
    }

    .booking-btn .mobile-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #9B7C64
    }

    .booking-btn .mobile-btn p {
        color: #fff;
        font-size: 15px;
        line-height: 10px
    }

    .booking-btn .btn-h {
        right: auto;
        bottom: auto;
        width: 100%;
        height: 100%;
        border-radius: 0;
        transform: none;
        z-index: 0
    }

    .booking-btn .btn-h,
    .booking-btn .btn-h:hover {
        background-color: #9B7C6487
    }
}

@media screen and (max-width: 480px) {
    .booking-btn .btn-h svg {
        width: 27px;
        height: 27px
    }

    .booking-btn .btn-h p {
        font-size: 12px
    }
}
</style>