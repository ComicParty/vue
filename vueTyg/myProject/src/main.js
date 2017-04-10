// The Vue build version to load with the `import` command
// 使用`import`命令加载 Vue 构建版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 已经在webpack.base.conf中使用别名设置了//（仅运行时或独立）。   「alias  n. 别名，化名」
import Vue from 'vue'
import App from './App'
import router from './router'
// 从“vue”导入Vue
// 从“./App”导入应用程序
// 从'./router'导入路由器
Vue.config.productionTip = false

/* eslint-disable no-new */
// eslint禁用 没有新的
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    }
  })
  // 新Vue（{
  //    el：'#app'，
  //    路由器，
  //    模板：'<App />'，
  //    组件：{App}