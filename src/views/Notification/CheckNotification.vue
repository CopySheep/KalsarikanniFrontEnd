<script setup>
import { onMounted, ref } from 'vue';
import PageTitle from '../Contact/components/PageTitle.vue';
import Heading from "./components/Heading.vue"
import TabContent from './components/TabContent.vue';
import Theme from '/public/static/js/theme';
import router from '@/router';



const pageTitle = ref({
    content: "查看通知",
});

onMounted(() => {
    Theme.init();
})
</script>

<template>
    <PageTitle :content="pageTitle.content" />
    <section id="amenities" class="pt-16 pb-16 bg-body-tertiary">
        <div class="container">
            <!-- Heading -->
            <Heading />
            <!-- /Heading -->
            <!-- Tabs Content  -->
            <TabContent />
            <!-- /Tabs Content  -->
        </div>
        <div class="d-flex justify-content-center mt-6">
            <router-link class="btn btn-primary" to="/Management/NotificationManagement">
                前往通知管理
                <br>
                <span>
                    #用於展示
                </span>
            </router-link>
        </div>


    </section>
</template>