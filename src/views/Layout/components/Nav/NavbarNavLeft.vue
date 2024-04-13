<template>
    <ul class="navbar-nav navbar-nav-left h-sub-font justify-content-xl-end pe-xl-19">
        <!-- <li class="nav-item dropdown">
            <RouterLink class="nav-link fw-medium" to="/">首頁</RouterLink>
        </li> -->
        <li class="nav-item dropdown">
            <RouterLink class="nav-link fw-medium" to="/room">房型介紹</RouterLink>
        </li>
        <!-- <li class="nav-item dropdown">
            <RouterLink class="nav-link fw-medium" to="/room" data-bs-display="static">
                <span>房型介紹 </span>
                <i class="hicon hicon-thin-arrow-down dropdown-toggle-icon"></i>
            </RouterLink> -->
        <!-- <ul class="dropdown-menu border-0 mt-xl-8" data-bs-popper="static">
                <li>
                    <RouterLink class="dropdown-item fw-medium " to="/roomdetail">房間介紹</RouterLink>
                </li>
            </ul> -->
        <!-- </li> -->
        <li class="nav-item dropdown">
            <RouterLink class="nav-link fw-medium" to="/hall">宴會廳</RouterLink>
        </li>
        <li class="nav-item dropdown">
            <!-- <a class="nav-link fw-medium " href="/otherservices">額外設施</a> -->
            <RouterLink class="nav-link fw-medium" to="/otherservices">額外設施</RouterLink>
        </li>
        <li class="nav-item dropdown">
            <RouterLink class="nav-link fw-medium" to="/restaurant">美饌饗宴</RouterLink>
        </li>
    </ul>
</template>