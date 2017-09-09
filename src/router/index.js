import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import ToDo from '@/components/add-todo'
import Food from '@/components/food-show'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
      path: '/home',
      // name: 'home',
      component: Home
    },
    {
      path: '/todo',
      // name: 'to-do',
      component: ToDo
    },
    {
      path: '/food',
      // name: 'food',
      component: Food
    },
    // 重定向
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
