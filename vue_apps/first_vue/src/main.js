import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import Posts from './components/Posts'

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: Posts
  }
]

const router = new VueRouter({routes: routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
