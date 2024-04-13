import { ref } from "vue";
import { defineStore } from "pinia";

export const EditPwd = defineStore(
    'editpwd',
    () => {
        const editpwd = ref({
            confirmpwd: null,
            email: null,
            newpwd: null,
            oldpwd: null,
            phone: null,
        });
        return {
            editpwd,
        }
    },
    {
        persist: true
    }
)