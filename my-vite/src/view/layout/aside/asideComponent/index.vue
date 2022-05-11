<template>
    <component v-bind:is="menuComponent" :router-info="routerInfo">
        
    </component>
</template>

<script>
export default {
    name: 'AsideComponent',
}
</script>

<script setup>
import MenuItem from './menuITem.vue'
import { computed } from 'vue'
const menuComponent = computed(() => {
    return MenuItem
})

</script>