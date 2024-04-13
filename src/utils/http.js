// axios 基礎建設
import axios from "axios";
import { MemberLogin } from "../stores/memberlogin"


const httpInstance = axios.create({
    baseURL: 'https://localhost:7245/',
    timeout: 10000,
});

// 攔截器
// request 攔截器
httpInstance.interceptors.request.use(cfg => {

    var decodedCookie = decodeURIComponent(document.cookie);
    var token = decodedCookie.split('=')[1];
    if (token) cfg.headers.Authorization = `Bearer ${token}`
    return cfg
}, e => Promise.reject(e));

// response 攔截器
httpInstance.interceptors.response.use(res => res.data, e => {
    if (e.response && e.response.status === 401) {
        MemberLogin().Logout();
        window.location.href = '/login';
    }

    return Promise.reject(e)
});

export default httpInstance;