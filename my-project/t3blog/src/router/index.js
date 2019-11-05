import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewFeed from '@/components/layouts/NewFeed'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/hello', name: 'HelloWorld', component: HelloWorld },
    { path: '/new', name: 'NewFeed', component: NewFeed }
  ]
})
