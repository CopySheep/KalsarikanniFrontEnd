<script setup>
import { onMounted } from 'vue';
import Theme from '/public/static/js/theme';

import NavBrand from './Nav/NavBrand.vue';
import OffcanvasHeader from './Nav/OffcanvasHeader.vue';

import NavbarNavRight from './Nav/NavbarNavRight.vue';
import NavbarNavLeft from './Nav/NavbarNavLeft.vue';

import NavToggler from './Nav/NavToggler.vue';
import InfoToggler from './Nav/InfoToggler.vue';


onMounted(() => Theme.init());

</script>

<template>
    <!-- Header -->
    <header id="header" class="fixed-top">
        <div class="header-navbar d-flex align-items-center bg-body bg-opacity-0">
            <div class="w-100">

                <NavBrand />

                <!-- Navbar -->
                <nav class="navbar navbar-expand-xl">
                    <div class="container-fluid">
                        <!-- offcanvas Navbar -->
                        <div class="offcanvas offcanvas-navbar offcanvas-start border-end-0" tabindex="-1" id="offcanvasNavbar">
                            <!-- Offcanvas header -->
                            <OffcanvasHeader />
                            <!-- /Offcanvas header -->
                            <div class="offcanvas-body justify-content-end">

                                <NavbarNavLeft />
                                <NavbarNavRight />

                            </div>
                        </div>
                        <!-- /offcanvas Navbar -->
                        <!-- Nav toggler -->
                        <NavToggler />
                        <!-- /Nav toggler -->
                        <!-- Info toggler -->
                        <InfoToggler />
                        <!-- /Info toggler -->

                    </div>
                </nav>
                <!-- /Navbar -->
            </div>
        </div>
    </header>
    <!-- /Header -->
</template>