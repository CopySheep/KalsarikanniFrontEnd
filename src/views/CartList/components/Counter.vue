<script setup>
const model = defineModel();

const props = defineProps({
    disabled: {
        type: Boolean,
    },
})

const minus = () => {
    if (model.value > 0) {
        model.value--;
    }
};

const plus = () => {
    if (model.value < 99) {
        model.value++;
    }
};
</script>

<template>
    <div class="input-group input-group-sm shadow-sm">
        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" :disabled="props.disabled"
            @click="minus">
            <i class="hicon hicon-minus-thin"></i>
        </button>
        <input type="text" v-model="model" class="form-control text-center" disabled>
        <button class="btn btn-light bg-body-tertiary text-secondary border" type="button" :disabled="props.disabled"
            @click="plus">
            <i class="hicon hicon-plus-thin"></i>
        </button>
    </div>
</template>