<template>
<el-container>
    <el-aside width="200px"> 
        <LaoutAside />
    </el-aside>
    <el-main> 
       <router-view v-slot="{ Component }">
            <transition name="el-zoom-in-center">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </el-main>
</el-container>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<script setup>
import LaoutAside from '@/view/layout/aside/index.vue'
</script>