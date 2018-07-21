import Vue from 'vue'
import Router from 'vue-router'//路由器
import TitleBar from '@/pages/home/HomePage'//页面相应的路由；
import DetailPage from '@/pages/home/DetailPage'
import SelectPage from "@/pages/shop/SelectPage"
import CartPage from "@/pages/shop/CartPage"
Vue.use(Router)

export default new Router({
  routes: [//具体的路由内容
    {
      path: '/',
      name: 'TitleBar',
      component: TitleBar
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/select',
      name: 'SelectPage',
      component: SelectPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
  ]
})
