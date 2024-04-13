import request from '@/utils/http';

export const getUserCouponsAPI = () => {
    return request({
        url: `api/coupons/user`,
    });
};

export const getCouponTypesAPI = () => {
    return request({
        url: `api/coupons/types`,
    });
};

export const postNewCouponAPI = (form) => {
    return request({
        url: `api/coupons`,
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        data: form,
    });
};

export const getAllCouponsAPI = () => {
    return request({
        url: `api/coupons/all`,
    });
};

export const postCouponsByLevelAPI = (form) => {
    return request({
        url: `api/coupons/send/memberLevel`,
        method: 'POST',
        data: form,
    });
};