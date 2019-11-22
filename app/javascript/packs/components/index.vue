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
          <div slot="body">{{ showPost.post.text}}</div>
        </modal>               
    </div>
  </div>
      
  
</template>

<script>
  import axios from "axios";
  import Modal from "./MyModal.vue"

export default {
    components: {
      Modal
    },
    data: function () {
      return {
        posts: [],
        showPost: "",
        showModal: false,
        errors: ''
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
          this.showPost = response.data.post
        })
      }
    }
  // mounted () {
  //   this.updateEmployees();
  // },
  // methods: {
  //   deleteEmployee: function() {
  //     if (this.deleteTarget <= 0) {
  //       console.warn('deleteTarget should be grater than zero.');
  //       return;
  //     }

  //     axios
  //       .delete(`/api/v1/employees/${this.deleteTarget}`)
  //       .then(response => {
  //         this.deleteTarget = -1;
  //         this.updateEmployees();
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         if (error.response.data && error.response.data.errors) {
  //           this.errors = error.response.data.errors;
  //         }
  //       });
  //   }
  // }
}
  
</script>

