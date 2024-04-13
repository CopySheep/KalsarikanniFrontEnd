<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    objss: {
        type: Array,
    },
    title: {
        type: String,
    },
});

</script>

<template>



    <div id="heroCarousel" class="hero-carousel carousel slide carousel-fade">
        <el-carousel class="carousel-inner" :interval="2000" height="600px" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in objss" :key="index" class="c active">
                <div class="carousel-caption hero-caption">
                    <div class="image-wrapper bg-image bg-overlay h-100" :data-image-src="item.img">
                        <div class="bg-content">
                            <div class="d-flex align-items-center h-100 pt-18 pt-lg-0">
                                <div class="container">
                                    <p class="text-uppercase ls-2 h-sub-font fw-medium mb-8">{{ item.p }}</p>
                                    <h4 class="display-4 fw-semibold text-uppercase h-special-font mb-8"> {{ item.h4 }}
                                    </h4>
                                    <ol class="breadcrumb justify-content-center">
                                        <RouterLink class="breadcrumb-item" to="/">Home</RouterLink>
                                        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
el-carousel {
    width: 100%;
    /* display: flex; */
}


@media screen and (max-width: 767px) {
    #heroCarousel{
        height: 550px;

    }
    el-carousel {
        height: 550px;
        display: block;
    }

    :deep(.el-carousel__arrow--left) {
        left: 2%;
        font-size: 30px;
    }

    :deep(.el-carousel__arrow--right) {
        right: 2%;
        font-size: 30px;
    }

    :deep(.el-carousel__indicators) {
        top: 50%;
    }

}

@media screen and (min-width: 768px) {
    :deep(.el-carousel__arrow--left) {
        left: 5%;
        font-size: 50px;
    }

    :deep(.el-carousel__arrow--right) {
        right: 5%;
        font-size: 50px;
    }

    :deep(.el-carousel__indicators) {
        bottom: 10%;
    }

}




/* .demonstration {
  color: var(--el-text-color-secondary);
}



.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>