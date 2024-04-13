<template>
    <!-- Page title -->
    <PageTitle :content="content" />
    <!-- /Page title -->
    <div class="centered">
        <div class="editform">
            <memberform />
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import memberform from './form/Form.vue'
import PageTitle from '../Contact/components/PageTitle.vue'
import theme from '/public/static/js/theme'

const content = ref("註冊會員");
onMounted(() => theme.init())

</script>

<style>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

.editform {
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 700px;
    margin: 30px;
}
</style>