<template>
    fuck login
    <el-button @click="login()"> login </el-button>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<script setup>
import { useRouter } from 'vue-router'
import { useRouterStore } from '@/pinia/modules/router'
const router = useRouter()
const login = () => {
    const routerStore = useRouterStore()
    //登录了
    routerStore.isAuthenticated = true
    router.push({name: "layout"})
}
</script>