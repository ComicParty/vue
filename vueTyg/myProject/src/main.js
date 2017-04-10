  // 基本的Vue生成的默认代码
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
  // 在vue中引入文件可以直接用import,文件后缀名可以是.vue，这是Vue自己的文件类型
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
    //    


  // App.vue这个文件，这是一个视图（或者说组件和页面），想象一下我们的index.html中什么也没有，只有一个视图，这个视图相当于一个容器，然后我们往这个容器中放各种各样的积木（其他组件或者其他页面），App.vue中的内容我们后面说；