<template>
    <div class="form-floating mb-5">
        <input v-if="Color == true" :id="InputId" :type="Type" v-model="InputData" class="form-control shadow-sm w_95"
            required="" :readonly="isReadOnly" @blur="CheckInputData" style="background-color: lightgray;">
        <input v-else :id="InputId" :type="Type" v-model="InputData" class="form-control shadow-sm w_95" required=""
            :readonly="isReadOnly" @blur="CheckInputData">
        <label :for="InputId" style="font-size: 15px;">{{ Label }}</label>
        <span style="color: red;">{{ ErrorMessage }}</span>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// 父傳子資料型態宣告
const props = defineProps({
    //Input的顯示型態 text,password...等項目
    Type: {
        type: String,
        default: "text" // 預設為text
    },
    Color: {
        Boolean,
        default: false
    },
    InputId: String,
    Label: String,
    isReadOnly: {
        type: Boolean,
        default: false
    }
});

//輸入的文字儲存在此(程式自動帶的也是)
const InputData = ref("");
//確認欄位驗證是否有出現錯誤輸入
const IsValue = ref(true);
//欄位驗證錯誤訊息
const ErrorMessage = ref('');


// 密碼的欄位驗證
const PwdDataCheck = () => {
    ErrorMessage.value = "";
    const MaxLength = 32
    const MinLength = 6

    if (InputData.value === null || InputData.value === undefined || InputData.value === "") {
        IsValue.value = false;
        ErrorMessage.value = `"${props.Label}"欄位不可為空`;
    }
    else if (InputData.value.length < MinLength || InputData.value.length >= MaxLength) {
        IsValue.value = false;
        ErrorMessage.value = `密碼長度限制${MinLength} ~ ${MaxLength}個字`;
    }
}

// 文字的欄位驗證
const TextDataCheck = () => {
    ErrorMessage.value = "";
    if (InputData.value == null || InputData.value == undefined || InputData.value == "") {
        IsValue.value = false;
        ErrorMessage.value = `"${props.Label}"欄位不可為空`;
    }
}

// 欄位驗證總覽
const CheckInputData = () => {
    IsValue.value = true;
    // 確認型態為何使用不同種的欄位驗證
    if (props.Type == "password") {
        PwdDataCheck();
    }
    else if (props.Type == "text") {
        TextDataCheck();
    }
}

defineExpose({ CheckInputData, IsValue, InputData });

</script>