<template>
<el-container>
    <el-aside width="200px"> 
        <LaoutAside />
    </el-aside>
    <el-main> main </el-main>
</el-container>
</template>

<script>
export default {
    name: 'LayoutInit'
}
</script>

<script setup>
console.log(import.meta.env)
console.log(process.env)

import LaoutAside from '@/view/layout/aside/index.vue'
</script>