import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/creation',
            name: 'creation',
            component: () => import('./views/creation.vue')
        },
        {
            path: '/design',
            name: 'design',
            component: () => import('./views/design.vue')
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('./views/product.vue')
        },
        {
            path: '/team',
            name: 'team',
            component: () => import('./views/team.vue')
        },
    ]
})
