<template>
  <div>
    <div class="uk-card uk-card-body card">
      <h3 class="uk-card-title">
        {{ posts }}
      </h3>
    </div>
  </div>
</template>

// <script>
//   import axios from "axios";

//   export default {
//     data: function () {
//       return {
//         posts: []
//       }
//     },
//     mounted: function () { 
//       this.fetchPosts();
//     },
//     methods: {
//       fetchPosts: function()  {
//         axios.get("/api/posts").then((response) => {
//           for(var i = 0; i < response.data.posts.length; i++) {
//             this.posts.push(response.data.posts[i])
//           }
//         }, (error) => { 
//           console.log(error);
//         })
//       }
//     }
//   }
// </script>