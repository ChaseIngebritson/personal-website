import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import PortalVue from 'portal-vue'
import VueScreen from 'vue-screen'
import Amplify from '@aws-amplify/core'
import VueRouter from 'vue-router'

import awsconfig from './aws-exports'
import App from '@/App.vue'
import router from '@/router'

import '@/styles/app.scss'

Amplify.configure(awsconfig)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(VueScreen, 'bootstrap')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
