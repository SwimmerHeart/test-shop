import Vue from 'vue'
import VueRouter from 'vue-router'
import VCatalog from "@/components/v-catalog"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: VCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: () => import(/* webpackChunkName: "cart" */ '@/components/v-cart')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
