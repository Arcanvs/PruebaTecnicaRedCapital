import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/post',
    component: () => import('../views/Post/Post.vue')
  },
  {
    path: '/post/:id',
    component: () => import('../views/Post/PostDetalle.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
