<template>
  <div class="container">
  <table class="table mt-4">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
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
export default {
  name: 'PostsExample',
  data() {
    return {
      posts: [
        {id:1, title: 'Number 1', body: 'loremIpsumDolorthingthing'},
        {id:2, title: 'Number 2', body: 'loremIpsumDolorthingthing'},
        {id:3, title: 'Number 3', body: 'loremIpsumDolorthingthing'},
        {id:4, title: 'Number 4', body: 'loremIpsumDolorthingthing'},
        {id:5, title: 'Number 5', body: 'loremIpsumDolorthingthing'}
      ]
    }
  }
}
</script>


<style>

</style>

