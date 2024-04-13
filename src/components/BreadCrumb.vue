<script setup>
const props = defineProps({
    breadCrumb: {
        type: Object
    }
});
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
            <RouterLink v-for="(item, index) in props.breadCrumb" :to="item.href"
                :class="{ 'breadcrumb-item': true, 'active': index == props.breadCrumb.length - 1 }">{{ item.name }}
            </RouterLink>
        </ol>
    </nav>
</template>