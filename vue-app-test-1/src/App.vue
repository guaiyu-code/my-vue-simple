<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TestVue testMsg="fuck you" testHtml1='<span style="color: red">This should be red.</span>' activeClass="fdfd" errorClass="232"></TestVue>
  <NewDay0421 />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestVue from './components/TestVue.vue'
import NewDay0421 from './components/NewDay0421.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestVue,
    NewDay0421
    
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
