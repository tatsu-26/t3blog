<template>
  <div class="contents">
    <div class="content">
      <div class="uk-text-lead ">{{ head }}</div>
      <div v-for="post in posts" v-bind:key="post.id">
        <div class="uk-card uk-card-body card">
          <h3 class="uk-card-title">
            <a @click="Target = post.id; showModal = true" v-on:click="searchPost">{{ post.title }}</a>
          </h3>
        </div>
      </div>
        <modal v-if="showModal" @cancel="showModal = false">
          <div slot="body">
            <!-- <p id="mmm" v-bind:title="showPost | mark-filter">{{ showPost | mark-filter }}</p> -->
            <p v-html="convert(showPost)"></p>
            <a v-bind:href="'/posts/' + id">{{ edit }}</a>
            <a v-bind:href="'/posts/' + id" data-method="delete">{{ destroy }}</a>
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
          head: "記事一覧",
          edit: "編集",
          id: "",
          destroy: "削除"
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
          axios.get(`/api/posts/${this.Target}`).then(response =>{
            this.showPost = response.data.post.post.text
            this.id = response.data.post.post.id
          })          
        },
        convert: function(showPost) {
          return marked(showPost)
      }
      
       
  }
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

