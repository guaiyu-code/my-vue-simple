import { asyncRouterHandle } from '@/utils/asyncRouter'
import { defineStore } from 'pinia'
import { ref } from '@vue/reactivity'
import { asyncMenu } from '@/api/menu'

const routerListArr = []

const formatRouter = (routes, routeMap) => {
    routes && routes.forEach(item => {
      if ((!item.children || item.children.every(ch => ch.hidden)) && item.name !== '404' && !item.hidden) {
        routerListArr.push({ label: item.meta.title, value: item.name })
      }
      item.meta.btns = item.btns
      item.meta.hidden = item.hidden
      routeMap[item.name] = item
      if (item.children && item.children.length > 0) {
        formatRouter(item.children, routeMap)
      }
    })
}

export const useRouterStore = defineStore(
    { 
    id : 'router', 
    state : () => {
        const asyncRouters = ref([])
        const routerList = ref(routerListArr)
        const routeMap = ({})
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
            //获取后台模板
            const asyncRouterRes = await asyncMenu()
            const asyncRouter = asyncRouterRes.data.menus
            formatRouter(asyncRouter, routeMap)
            baseRouter[0].children = asyncRouter
            baseRouter.push({
                path: '/:catchAll(.*)',
                redirect: '/layout/404'
            }) 
            asyncRouterHandle(baseRouter)

            asyncRouters.value = baseRouter
            routerList.value = routerListArr
            return true
        }
        return {
            asyncRouters,
            SetAsyncRouter,
            routerList,
            routeMap,
        }
    }
})
