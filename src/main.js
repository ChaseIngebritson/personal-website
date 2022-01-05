import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import VueScreen from 'vue-screen'
import Amplify from 'aws-amplify'

import awsconfig from './aws-exports'
import Home from '@/views/Home'

import '@/styles/app.scss'

import App from '@/App.vue'

Amplify.configure(awsconfig)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(VueScreen, 'bootstrap')

const Portfolio = () => import('@/views/Portfolio')
const Tools = () => import('@/views/Tools')
const Contact = () => import('@/views/Contact')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home,  meta: { alignNormal: true } },
    // routeScroll allows the nested contents of the route to scroll instead of the full page
    { name: 'portfolio', path: '/portfolio', component: Portfolio, meta: { routeScroll: true }},
    { name: 'tools', path: '/tools', component: Tools, meta: { routeScroll: true }},
    { name: 'contact', path: '/contact', component: Contact, meta: { routeScroll: true }}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
