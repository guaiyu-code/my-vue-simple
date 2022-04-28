<template>
    <LayoutInit></LayoutInit>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TestVue from './components/TestVue.vue'
// import NewDay0421 from './components/NewDay0421.vue'
import LayoutInit from '@/view/layout/index.vue'

export default {
  name: 'App',
  components: {
      LayoutInit,
    // HelloWorld,
    // TestVue,
    // NewDay0421
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
