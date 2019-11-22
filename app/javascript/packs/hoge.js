import Vue from 'vue/dist/vue.esm.js'
import Router from "./router/router"
import VModal from 'vue-js-modal'
Vue.use(VModal)

var app = new Vue({
  router: Router,
  el: '#app',
});
