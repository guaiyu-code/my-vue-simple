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
        //是否登录
        const isAuthenticated = ref(false)
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
                children: [{
                    path: '/test/newDay0421',
                    name: 'newDay0421',
                    component: 'view/layout/test/NewDay0421.vue',
                    meta: {
                        title: '0421'
                    },
                },
                {
                    path: '/test/helloWorld',
                    name: 'testHello',
                    component: 'view/layout/test/HelloWorld.vue',
                    meta: {
                        title: 'testHello'
                    },
                },
                {
                    path: '/test/testVue',
                    name: 'testVue',
                    component: 'view/layout/test/TestVue.vue',
                    meta: {
                        title: 'testVue'
                    },
                }]
            }]
            //获取后台模板
            const asyncRouterRes = await asyncMenu()
            const asyncRouter = asyncRouterRes.data.menus
            formatRouter(asyncRouter, routeMap)
            baseRouter[0].children = baseRouter[0].children.concat(asyncRouter)
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
            isAuthenticated
        }
    }
})
