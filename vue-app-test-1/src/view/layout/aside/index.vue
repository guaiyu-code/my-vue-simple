<template>
    <el-scrollbar>
        <el-menu default-active="">
          <el-submenu index="">
            <el-menu-item index=""> {{ Test11 }}</el-menu-item>
          </el-submenu>
          <el-menu-item index=""> 312121 </el-menu-item>
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
</script>

