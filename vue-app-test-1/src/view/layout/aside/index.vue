<template>
    <el-scrollbar>
        <el-menu default-active="">
          <el-submenu index="">
            <el-menu-item index=""> {{ Test11 }}</el-menu-item>
          </el-submenu>
          <el-menu-item index=""> 312121 </el-menu-item>
          <el-menu-item index=""> <button @click="clictMenu()"></button> </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
export default {
    name : 'LaoutAside'
}

</script>

<script setup>
    // const Test11 = import.meta.env.VITE_CLI_PORT
    import { getMenuList } from '@/api/menu'
    import { ref } from 'vue'
    const page = ref(1)
    const pageSize = ref(999)
    //查询 
    const getTableData = async(f = () => {}) => {
        const table = await f({ page : page.value, pageSize: pageSize.value})
        console.log(table)
    }

    const clictMenu = () => {
        getTableData(getMenuList)
    }
    
</script>

