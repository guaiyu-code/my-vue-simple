<template>
    <el-scrollbar>
        <el-menu default-active="">
          <template v-for="item in routerStore.asyncRouters[0].children">
               {{ item }}
          </template>
          <el-submenu index="">
            <el-menu-item index=""> {{ Test11 }}</el-menu-item>
          </el-submenu>
          <el-menu-item index=""> 312121 </el-menu-item>
          <el-menu-item index=""> <el-button @click="clictMenu()"> fuck menu </el-button> </el-menu-item>
          <el-menu-item index=""> <el-button @click="routeHello()"> fuck hello </el-button></el-menu-item>
          <el-menu-item index=""> <el-button @click="newDay0421()"> newDay0421 </el-button></el-menu-item>
          <el-menu-item index=""> <el-button @click="testVue()"> testVue </el-button></el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>

export default {
    name : 'LaoutAside'
}

</script>

<script setup>

import { getMenuList } from '@/api/menu'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRouterStore } from '@/pinia/modules/router'

    const router = useRouter()
    const page = ref(1)
    const total = ref(0)
    const pageSize = ref(999)
    const routerStore = useRouterStore()
    //执行一次
    routerStore.SetAsyncRouter()
    console.log(routerStore.asyncRouters)
    //查询 
    const getTableData = async(f = () => {}) => {
        const table = await f({ page : page.value, pageSize: pageSize.value})
    }

    const clictMenu = () => {
        getTableData(getMenuList)
    }

    const routeHello = async() => {
        router.push({name: 'testHello'})
    }

    const newDay0421 = () => {
        router.push({name: 'newDay0421'})
    }

    const testVue = () => {
        router.push({name: 'testVue'})
    }
    
</script>

