import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import VueScreen from 'vue-screen'
import Home from '@/views/Home'

import './styles/app.scss'

import App from '@/App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(VueScreen, 'bootstrap')

const Portfolio = () => import('@/views/Portfolio')
const Tools = () => import('@/views/Tools')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'portfolio', path: '/portfolio', component: Portfolio },
    { name: 'tools', path: '/tools', component: Tools }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
