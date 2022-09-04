import { createRouter,createWebHistory } from "vue-router";

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home/home.vue')
        },
    ]
})

export default router;