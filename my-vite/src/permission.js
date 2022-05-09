import { useRouterStore } from '@/pinia/modules/router'
import router from '@/router'

const getRouter = async() => {
    const routerStore = useRouterStore()
    await routerStore.SetAsyncRouter()
    const asyncRouters = routerStore.asyncRouters
    asyncRouters.forEach(asyncRouter => {
        console.log(asyncRouter)
        //新增到全局路由
        router.addRoute(asyncRouter)
    });
}

//注册一个全局前置守卫
router.beforeEach(async(to, from, next) => {
    // const userStore
    //初始化路由信息
    await getRouter()
    console.log(document.location.hash)
    console.log(to.name)

    // next()
    const routerStore = useRouterStore()

    if (to.name !== 'Login' && !routerStore.isAuthenticated) {
        next({
            name: 'Login',
            query : {
                redirect: document.location.hash
            }
        })
    }  else {
        next()
    }
    
})