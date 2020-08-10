// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import '@babel/polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
/* eslint-disable no-use-before-define */
Vue.use(Vuetify)

Vue.config.productionTip = false 

new Vue({ 
  router,
  render: h => h(App)
}).$mount('#app')
