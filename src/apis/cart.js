// 封装购物车相关接口
import httpInstance from '@/utils/http'

// 加入購物車
export const insertCartAPI = (data) => {
  return httpInstance({
    url: 'api/cart',
    method: 'POST',
    data,
  });
}

// 取得最新的購物車列表
export const findNewCartListAPI = () => {
  return httpInstance({
    url: '/api/cart/list',
  });
};

// 删除購物車
export const delCartAPI = (form) => {
  return httpInstance({
    url: '/api/cart',
    method: 'DELETE',
    data: form,
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