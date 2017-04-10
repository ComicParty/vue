  // 基本的Vue生成的默认代码
  // The Vue build version to load with the `import` command
  // 使用`import`命令加载 Vue 构建版本
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  // 已经在webpack.base.conf中使用别名设置了//（仅运行时或独立）。   「alias  n. 别名，化名」
  import Vue from 'vue'
  import App from './App'
  //App.vue这个文件，这是一个视图（或者说组件和页面），想象一下我们的index.html中什么也没有，只有一个视图，这个视图相当于一个容器，然后我们往这个容器中放各种各样的积木（其他组件或者其他页面），App.vue中的内容我们后面说；
  import router from './router'
  //句代码引入一段路由配置
  // 从“vue”导入Vue
  // 从“./App”导入应用程序
  // 从'./router'导入路由器
  // 在vue中引入文件可以直接用import,文件后缀名可以是.vue，这是Vue自己的文件类型
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  // eslint禁用 没有新的
  new Vue({ //new Vue实例化，其实就相当于平时我们写js时候常用的init啦
      el: '#app', //声明el：'#app'，意思是将所有视图放在id值为app这个dom元素中，
      router,
      template: '<App/>',
      components: { //components表明引入的文件，即上述的App.vue文件，这个文件的内容将以<App/>这样的标签写进去#app中，
        App
      }
    })
  // 总的来说，这段代码意思就是将App.vue放到#app中，然后以<App/>来指代我们的#app。
    // 新Vue（{
    //    el：'#app'，
    //    路由器，
    //    模板：'<App />'，
    //    组件：{App}
    //    

  import Vue from 'vue'
  import App from './App' /*引入App这个组件*/
  import router from './router' /*引入路由配置*/

  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    /*最后效果将会替换页面中id为app的div元素*/
    router,
    /*使用路由*/
    template: '<App/>',
    /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
    components: {
      App
    } /*告知当前页面想使用App这个组件*/
  })