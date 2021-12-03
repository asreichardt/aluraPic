import Vue from 'vue'
import App from './App.vue'
import VueResorce from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(VueResorce);      // FAZ REQUISIÇOES HTTP EQUIVALE AO AXIOS
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({ routes: routes, mode: 'history' })


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

//para rodar a api.> npm start