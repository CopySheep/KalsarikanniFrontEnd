import request from '@/utils/http';

export const getRoomStockAPI = (params) => {
    return request({
        url: `api/cart/roomStock`,
        params,
    });
};