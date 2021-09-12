import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parents from '@/components/Parents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellovue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parents',
      name: 'Parents',
      component: Parents
    }
  ]
})
