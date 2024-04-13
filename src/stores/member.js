import { ref } from "vue";
import { defineStore } from "pinia";

export const MemberData = defineStore(
    'member',
    () => {
        const member = ref(null);

        const checkdata = async (token) => {
            const url = new URL('https://localhost:7245/api/Members');
            url.searchParams.append('token', token)
            const response = await fetch(url);
            const Data = await response.json();
            member.value = Data;
        }


        const deldata = () => {
            member.value = null;
        }

        return {
            member,
            checkdata,
            deldata
        };
    },
    {
        persist: true
    })