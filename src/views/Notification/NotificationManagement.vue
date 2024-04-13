<script setup>
import Theme from '/public/static/js/theme';
import CreateNotification from "@/views/Notification/components/CreateNotification.vue"
import EditNotification from "@/views/Notification/components/EditNotification.vue"
import { onMounted } from 'vue';


onMounted(async () => {
    Theme.init();
});
</script>

<template>
    <!-- Contact -->

    <section id="contact" class="pt-16 pb-14">
        <div class="container">
            <div class="d-flex justify-content-center mt-6">
                <router-link class="btn btn-primary" to="/checknotification">
                    回到使用者介面
                    <br>
                    <span>
                        #用於展示
                    </span>
                </router-link>
            </div>
            <div class="row" data-cues="fadeIn">
                <div class="col-12">
                    <!-- Contact Form -->
                    <CreateNotification />
                    <!-- /Contact Form -->
                </div>
            </div>
        </div>
    </section>
    <EditNotification />
    <!-- /Contact -->
</template>
