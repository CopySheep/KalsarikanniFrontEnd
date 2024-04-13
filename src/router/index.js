import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue';
import Home from '@/views/Home/index.vue';
import Management from "@/views/Management/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'room',
          component: () => import("@/views/Room/index.vue"), //Room,
        },
        {
          path: 'hall',
          component: () => import("@/views/Hall/index.vue"), //Hall,
        },
        {
          path: "contact",
          component: () => import("@/views/Contact/Contact.vue"),// Contact,
        },
        {
          path: "cartlist",
          component: () => import("@/views/CartList/index.vue"),// CartList,
        },
        {
          path: "notification",
          component: () => import("@/views/Notification/Notification.vue"),// Notification,
        },
        {
          path: 'login',
          component: () => import("@/views/Login/Login.vue"), // Login,
        },
        {
          path: "otherservices",
          component: () => import("@/views/OtherServices/index.vue"), // OtherServices,
        },
        {
          path: "/otherservices/:id",
          component: () => import("@/views/OtherServicesDetail/index.vue"), // OtherServices,
        },
        {
          path: '/roomdetail/:id',
          name: 'roomdetail',
          component: () => import("@/views/RoomDetail/index.vue"), // RoomDetail,
        },
        {
          path: "checkroom",
          component: () => import("@/views/CheckRoom/index.vue"), // CheckRoom,
        },
        {
          path: "dispatch",
          component: () => import("@/views/CarDispatch/index.vue"), // CarDispatch,
        },
        {
          path: "carOrderList",
          component: () => import("@/views/CarOrders/index.vue"), // CarOrders,
        },
        {
          path: "/:pathMatch(.*)*",
          component: Home, //未定義路由將導向首頁(二選一)
        },
        {
          path: "checknotification",
          component: () => import("@/views/Notification/CheckNotification.vue")
        },
        {
          path: "detail",
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: "restaurant",
          component: () => import('@/views/Restaurant/index.vue'),
        },
        {
          path: "createmember",
          component: () => import("@/views/CreateMember/CreateMember.vue"),
        },
        {
          path: "pay",
          component: () => import("@/views/Pay/index.vue"),
        },
        {
          path: "MemberDashboard",
          component: () => import("@/views/MemberDashboard/Index.vue"),
        },
        {
          path: "Email",
          component: () => import("@/views/Email/Emali.vue"),
        },
        {
          path: "ReservationCreate/:id",
          component: () => import("@/views/ReservationCreate/index.vue"),
        },
        {
          path: "LiveCustomerService",
          component: () => import("@/views/LiveCustomerService/index.vue"),
        },
        {
          path: "EditPwd",
          component: () => import("@/views/EditPassword/EditPwd.vue"),
        }
      ],
    },
    {
      path: "/Management",
      component: Management,
      children: [
        {
          path: "NotificationManagement",
          component: () => import("@/views/Notification/NotificationManagement.vue")
        },
        {
          path: "Coupon",
          component: () => import("@/views/CouponManagement/index.vue"),
        },
      ]
    },
    // {
    // path: "/:pathMatch(.*)*",
    // // component: () => import("@/views/NotFound.vue"), //未定義路由將導向NotFound
    // },
  ],
})

export default router
