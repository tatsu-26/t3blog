<template>
  <div class="contents">
    <div class="content">
      <div v-for="post in posts" v-bind:key="post.id">
        <div class="uk-card uk-card-body card">
          <h3 class="uk-card-title">
            <div>{{ post.title }}</div>
              <button @click="deleteTarget = post.id; showModal = true" v-on:click="searchPost">Delete</button>
          </h3>
        </div>
      </div>
        <modal v-if="showModal" @cancel="showModal = false">
          <div slot="body">
            <!-- <p id="mmm" v-bind:title="showPost | mark-filter">{{ showPost | mark-filter }}</p> -->
            <p v-html="convert(showPost)"></p>
          </div>
        </modal>
    </div>
  </div>
       
  
</template>

<script>
  import axios from "axios";
  import Modal from "./MyModal.vue";
  import marked from 'marked';
  export default {
      components: {
        Modal
      },
      data: function () {
        return {
          posts: [],
          showPost: "",
          showModal: false,
          errors: '',
          text: "",
          post: "",

        }
      },
      mounted: function () { 
        this.fetchPosts();
      },
      methods: {
        fetchPosts: function()  {
          axios.get("/api/posts").then((response) => {
            for(var i = 0; i < response.data.posts.length; i++) {
              this.posts.push(response.data.posts[i])
            }
          }, (error) => { 
            console.log(error);
          })
        },
        searchPost: function()  {
          axios.get(`/api/posts/${this.deleteTarget}`).then(response =>{
            this.showPost = response.data.post.post.text
            
          })          
        },
        convert: function(showPost) {
          return marked(showPost)
      }
      
       
  }c
}
//  Vue.filter("mark", function() {
//         console.log("kkk")
//           if (typeof showPost == "string") {
//             showPost = showPost.toString()
//             return marked(showPost)
//           }
//         })
// Vue.filter("mark-filter", function(){ 
//   return marked(showPost)
// })


 

</script>

