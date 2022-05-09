import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/test/helloWorld',
        name: 'testHello',
        component: () => import('@/view/layout/test/helloWorld.vue')
    },
/*     {
        path: '/test/newDay0421',
        name: 'newDay0421',
        component: () => import('@/view/layout/test/NewDay0421.vue')
    }, */
    {
        path: '/test/testVue',
        name: 'testVue',
        component: () => import('@/view/layout/test/TestVue.vue')
    }, 

    {
        path: '/login',
        name: 'Login',
        component: () => import('@/view/login/index.vue')
    }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
