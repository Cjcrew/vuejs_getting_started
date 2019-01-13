<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navi</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!-- <a class="nav-link" href="/">API<span class="sr-only">(current)</span></a> -->
          <router-link class="nav-link" :to="'/'">API</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/contact">contact</a> -->
          <router-link class="nav-link" :to="'/contact'">Contact</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Disabled</a> -->
          <router-link class="nav-link" :to="'/local_data'">Local Data</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts'
import DynamicPosts from './components/DynamicPosts'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    DynamicPosts,
    Contact
  }
}
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
