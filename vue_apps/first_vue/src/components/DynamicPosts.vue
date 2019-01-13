<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">User Id</th>
          <th scope="col">Id</th>
          <th scope="col">Body</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DynamicPosts',
  data() {
    return {
      posts: [
      ]
    },
    created() {

    }
  }
}
</script>

<style>

</style>


