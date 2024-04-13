// 封装购物车相关接口
import httpInstance from '@/utils/http'

// 驗證天際線，這個時間有沒有車可以訂
export const searchCarsAPI = (data) => {
  return httpInstance({
    url: 'api/Dispatch/avaList', 
    method: 'POST',
    data : JSON.parse(JSON.stringify(data))
  });
}

// 取得最新的搭車訂單細項列表
export const findNewOrderListAPI = () => {
  return httpInstance({
    url: '/api/Dispatch/list',
  });
};

// 新增訂單
export const createOrderAPI=(data)=>{
  return httpInstance({
    url: '/api/Dispatch',
    method:'POST',
    data : JSON.parse(JSON.stringify(data))
  })
}

// 删除購物車
export const delOrderAPI = (id) => {
  return httpInstance({
    url: `/api/Dispatch/${id}`,
    method: 'DELETE'
  });
};

// 合併購物車
export const mergeCartAPI = (data) => {
  return httpInstance({
    url: '/api/cart/merge',
    method: 'POST',
    data
  });
};

// 單選
export const selectedItemAPI = ({ uid, selected }) => {
  return httpInstance({
    url: '/api/cart/selected',
    method: 'PUT',
    data: {
      uid,
      selected,
    },
  });
};

// 全選
export const checkAllAPI = (form) => {
  return httpInstance({
    url: '/api/cart/checkAll',
    method: 'PUT',
    data: form
  });
};