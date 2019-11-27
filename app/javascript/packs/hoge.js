import Vue from 'vue/dist/vue.esm.js'
import Router from "./router/router"
import VModal from 'vue-js-modal'
import marked from 'marked';
import 'stylesheets/application';

Vue.use(VModal)

Vue.filter("mark-filter", function(showPost){ 
  var post = marked(showPost)
  var content = document.getElementById("mmm");
  
  return post
})


  

var app = new Vue({
  router: Router,
  el: '#app',
  data: {
    post: "",
    options: { 
      gfm: true,
      breaks: true,
      xhtml: true,
    }
  }
});

// Vue.directive("markdown", function(el, binding, vnode, oldVnode){ 
//   el.innerHTML = marked(el.textContent, binding.value)
// })

