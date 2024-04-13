<script setup>

import { MemberLogin } from '@/stores/memberlogin';
import Notification from '@/views/Notification/Notification.vue';
import HeaderCart from './HeaderCart.vue';

const login = MemberLogin();
login.getCookie();

const logout = () => {
    login.Logout();
}

</script>

<template>
    <ul class="navbar-nav navbar-nav-right h-sub-font justify-content-xl-start ps-xl-19">
        <!-- <li class="nav-item dropdown">
            <a class="nav-link fw-medium " href="#">特殊優惠</a>
        </li> -->

        <li class="nav-item dropdown">
            <a class="nav-link fw-medium " href="#">最新消息</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle-hover fw-medium " href="#" data-bs-display="static">
                <span>派遣服務 </span>
                <i class="hicon hicon-thin-arrow-down dropdown-toggle-icon"></i>
            </a>
            <ul class="dropdown-menu border-0 mt-xl-8" data-bs-popper="static">

                <li>
                    <router-link class="dropdown-item fw-medium" to="/dispatch">預訂搭乘</router-link>
                </li>
                <li>
                    <router-link class="dropdown-item fw-medium" to="/carOrderList">我的行程</router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle-hover fw-medium " href="#" data-bs-display="static">
                <span>更多資訊 </span>
                <i class="hicon hicon-thin-arrow-down dropdown-toggle-icon"></i>
            </a>
            <ul class="dropdown-menu border-0 mt-xl-8" data-bs-popper="static">
                <li>
                    <a class="dropdown-item fw-medium " href="#">關於我們</a>
                </li>
                <li>
                    <a class="dropdown-item fw-medium " href="#">重點特色</a>
                </li>
                <li>
                    <router-link class="dropdown-item fw-medium" to="/contact">聯絡我們</router-link>
                </li>
                <li>
                    <router-link class="dropdown-item fw-medium" to="/MemberDashboard">會員中心</router-link>
                </li>
                <li>
                    <router-link v-if="login.token == '' || login.token == undefined" class="dropdown-item fw-medium"
                        to="/login">登入</router-link>
                    <button v-else class="dropdown-item fw-medium" @click="logout">登出</button>
                </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link" role="button" id="toggle-theme" data-bs-theme-value=""></span>
        </li>
        <!-- 登入時才會顯示小鈴鐺 -->
        <li class="nav-item dropdown" v-if="login.token != '' && login.token != undefined">
            <a class="nav-link dropdown-toggle-hover fw-medium " href="#" data-bs-display="static">
                <i class="hicon hicon-bold hicon-bell-alerts"></i>
            </a>
            <Notification />
        </li>
        <!-- /登入時才會顯示小鈴鐺 -->
        <li class=" nav-item dropdown d-none d-xl-inline-block">
            <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#ocRightInfo">
                <i class="hicon hicon-bold hicon-24hour-room-service"></i>
            </a>
        </li>

        <li class="nav-item dropdown ">
            <!-- <RouterLink to="/cartlist" class="nav-link"><i class="fa-solid fa-cart-shopping " style="height: 10px;"></i></RouterLink>
            <RouterLink to="/cartlist" class="nav-link"><HeaderCart /></RouterLink> -->
            <a class="nav-link">
                <HeaderCart />
            </a>

        </li>


    </ul>
</template>