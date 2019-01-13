import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import DynamicPosts from './components/DynamicPosts'
import Contact from './components/Contact'
import Posts from './components/Posts'

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: DynamicPosts
  },
  {
    path: '/contact', component: Contact
  },
  {
    path: '/local_data', component: Posts
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
