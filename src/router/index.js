import Vue from 'vue'
import Router from 'vue-router'
import BoardList from '@/components/board/BoardList'
import BoardView from '@/components/board/BoardView'
import BoardWriter from '@/components/board/BoardWriter'
/* eslint-disable no-new */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/view/:seq',
      name: 'BoardView',
      component: BoardView
    },
    {
      path: '/writer',
      name: 'BoardWriter',
      component: BoardWriter
    }
  ]
})
