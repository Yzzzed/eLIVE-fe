/*
 * @Author: your name
 * @Date: 2020-06-13 16:19:09
 * @LastEditTime: 2020-06-13 17:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \科研\vrvideo\src\router\index.js
 */ 
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import('@/pages/homepage/Homepage')
    }
  ]
})
