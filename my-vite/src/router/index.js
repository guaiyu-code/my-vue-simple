import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/test/helloWorld',
        name: 'testHello',
        component: () => import('@/view/test/HelloWorld.vue')
    },
    {
        path: '/test/newDay0421',
        name: 'newDay0421',
        component: () => import('@/view/test/NewDay0421.vue')
    },
    {
        path: '/test/testVue',
        name: 'testVue',
        component: () => import('@/view/test/TestVue.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
