<!-- 打开我们的App.vue文件，在Vue中，官网叫它做组件，单页面的意思是结构，样式，逻辑代码都写在同一个文件中，当我们引入这个文件后，就相当于引入对应的结构、样式和JS代码，这不就是我们做前端组件化最想看到的吗，从前的asp、php也有这样的文件思想。 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
