import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/routerParams',
      name: 'routerParams',
      component: ()=> import('../views/Test.vue')
    },
    {
      path: '/routerParams1/:id',
      name: 'routerParams1',
      component: ()=> import('../views/Test.vue')
    },
    {
      path:'/routerQuery',
      name:'routerQueryName',
      component:()=>import('../views/01-routerQuery.vue')
    },
    {
      path:'/lv2/nested',
      name:'nested',
      component:()=>import('../views/01-nested.vue')
    },
    {
      path:'/lifeCircle',
      name:'lifeCircle',
      component:()=>import('../views/02-lifeCircle.vue')
    },
    {
      path:'/variable',
      name:'variable',
      component:()=>import('../views/03-variable.vue')
    },
    {
      path:'/bind',
      name:'bind',
      component:()=>import('../views/04-bind.vue')
    },
    {
      path:'/if',
      name:'if',
      component:()=>import('../views/05-if.vue')
    },
    {
      path:'/loop',
      name:'loop',
      component:()=>import('../views/06-loop.vue')
    },
    {
      path:'/event',
      name:'event',
      component:()=>import('../views/07-event.vue')
    },
    {
      path:'/computed',
      name:'computed',
      component:()=>import('../views/08-computed.vue')
    },
    {
      path:'/watch',
      name:'watch',
      component:()=>import('../views/09-watch.vue')
    },
    {
      path:'/component',
      name:'component',
      component:()=>import('../views/10-component.vue')
    },
    {
      path:'/env',
      name:'env',
      component:()=>import('../views/11-env.vue')
    },
    {
      path:'/pinia',
      name:'pinia',
      component:()=>import('../views/12-pinia.vue')
    },
    {
      path:'/axios',
      name:'axios',
      component:()=>import('../views/13-axios.vue')
    },














    // 一定要放最後
    { path: '/:pathMatch(.*)*',
      name:'notFound',
      component:()=>import('../views/01-error404.vue') 
    }
  ],
})

export default router
