import { defineStore } from 'pinia'
import { ref } from '@vue/reactivity'

export const useRouterStore = defineStore('router', () => {
    
    const asyncRouters= ref([])
    const SetAsyncRouter = async() => {
        const baseRouter = [{
            path: '/layout',
            name: 'layout',
            component: 'view/layout/index.vue',
            meta: {
              title: '底层layout'
            },
            children: []
        }]
        const asyncRouterRes = await asyncMenu()
        asyncRouters.value = baseRouter
    }
})