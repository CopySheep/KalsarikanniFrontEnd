import httpInstance from '@/utils/http'

// 新增訂單
export const createOrderLoggedAPI = (coupons) => {
    return httpInstance({
        url: 'api/order/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: coupons,
    });
}

// 取得訂單
export const getOrderAPI = (orderId) => {
    return httpInstance({
        url: `api/order?orderId=${orderId}`,
        method: 'GET',
    });
}

// 取得使用者訂單
export const getUserOrderAPI = () => {
    return httpInstance({
        url: `api/order/user`,
        method: 'GET',
    });
}

// 取得 ECPay form 資料
export const getECPayFormAPI = (orderId) => {
    return httpInstance({
        url: `api/order/ecpay?orderId=${orderId}`,
        method: 'GET',
    });
}

// 取得結算明細
export const getUserBudgetAPI = () => {
    return httpInstance({
        url: `api/preorder`,
        method: 'GET',
    });
}
