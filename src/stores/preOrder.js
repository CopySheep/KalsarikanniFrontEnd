//封裝預結 store
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { MemberLogin } from './memberlogin';
import { getUserBudgetAPI } from '@/apis/order'
import router from '@/router';

export const usePreOrderStore = defineStore('preOrder', () => {
    const userStore = MemberLogin();
    const isLogin = computed(() => userStore.token);

    const purchasedItems = ref([]);
    const appliedDiscounts = ref([]);
    const possessedCoupons = ref([]);   // 擁有的優惠券
    // const allowCoupons = ref([]);   // 允許的優惠券

    const getUserBudget = async () => {
        if (!isLogin) return;
        const res = await getUserBudgetAPI();
        purchasedItems.value = res.purchasedItems;
        appliedDiscounts.value = res.result.appliedDiscounts;

        // 擁有的優惠券
        possessedCoupons.value = appliedDiscounts.value
            .map(ad => ad.rule)
            .filter((item, index, arr) => arr.indexOf(item) === index);


        // 允許的優惠券
        const allowCoupons = appliedDiscounts.value
            .filter(ad => ad.amount)
            .map(ad => { return { ...ad.rule, selected: true }; })
            .filter((item, index, arr) => arr.indexOf(item) === index);


        possessedCoupons.value.forEach(pc => {
            if (allowCoupons.some(ac => ac.id == pc.id)) {
                pc.selected = true;
                pc.useful = true;
            }
        });
    }

    const checkCoupon = (id) => {
        const item = possessedCoupons.value.find(c => c.id == id && c.useful);
        item.selected = !item.selected
    }

    // 當前折扣
    const currentDis = computed(() => appliedDiscounts.value
        .filter(ad => possessedCoupons.value.some(c => c.id == ad.rule.id && c.selected))
        .reduce((a, ad) => a + ad.amount, 0));

    return {
        appliedDiscounts,
        possessedCoupons,
        currentDis,
        getUserBudget,
        checkCoupon,
    };
})