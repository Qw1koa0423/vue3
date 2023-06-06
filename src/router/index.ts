/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 09:15:22
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 13:42:24
 * @FilePath: \vue3\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue')
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('../views/DiffView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/ReactiveView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
