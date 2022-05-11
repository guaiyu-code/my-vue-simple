<template>
    <el-menu-item :index="routerInfo.name">
        <span class="gva-menu-item-title">{{ routerInfo.meta.title }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: "MenuItem"
}
</script>

<script setup>
defineProps({
  routerInfo: {
    default: function() {
      return null
    },
    type: Object
  }
})
</script>