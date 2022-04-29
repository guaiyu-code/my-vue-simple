import { useRouterStore } from '@/pinia/modules/router'
import router from '@/router'

const getRouter = async() => {
    const routerStore = useRouterStore()
    await routerStore.SetAsyncRouter()
    const asyncRouters = routerStore.asyncRouters
    asyncRouters.forEach(asyncRouter => {
        //新增到全局路由
        router.addRoute(asyncRouter)
    });
}

//注册一个全局前置守卫
router.beforeEach(async(to, from, next) => {
    
})