<template>
<el-container>
    <el-aside width="200px"> 
        <LaoutAside />
    </el-aside>
    <el-main> 
        fuck
        <router-view></router-view>     
    </el-main>
</el-container>
</template>

<script>
export default {
    name: 'LayoutInit'
}
</script>

<script setup>
import LaoutAside from '@/view/layout/aside/index.vue'
</script>