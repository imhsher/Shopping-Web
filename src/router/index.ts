import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/hhh',
    name: 'index',
    component: () => import("../views/index.vue"),
    meta: {
      // 页面标题title
      title: "商城",
      page_title: "商城",
      commonPadding:true,
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import("../views/home/index.vue"),
        meta: {
          // 页面标题title
          title: "商城",
          page_title: "商城",
          commonPadding:true,
        },
        
      },
      {
        path: '/car',
        name: 'car',
        component: () => import("../views/car/index.vue"),
        meta: {
          // 页面标题title
          title: "订单",
          page_title: "订单",
          commonPadding:true,
        },
        
      },
      {
        path: '/my',
        name: 'my',
        component: () => import("../views/my/index.vue"),
        meta: {
          // 页面标题title
          title: "我的",
          page_title: "我的",
          commonPadding:true,
        },
        
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/index.vue"),
    meta: {
      // 页面标题title
      title: "登录",
      page_title: "登录",
      commonPadding:true,
    },
    
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
