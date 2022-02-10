import Vue from 'vue'
import { 
  LayoutPlugin, 
  ImagePlugin, 
  ButtonPlugin, 
  NavPlugin, 
  LinkPlugin, 
  BadgePlugin, 
  FormTextareaPlugin, 
  FormGroupPlugin,
  FormPlugin,
  CollapsePlugin,
  NavbarPlugin,
  FormInputPlugin,
  BIconGithub,
  BIconTwitter,
  BIconLinkedin,
  BIconFileEarmarkArrowDownFill,
  BIconEnvelope,
  BIconCheckCircle
} from 'bootstrap-vue'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import PortalVue from 'portal-vue'
import VueScreen from 'vue-screen'
import VueRouter from 'vue-router'
import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import Storage from '@aws-amplify/storage'
import Analytics from '@aws-amplify/analytics'

import awsconfig from './aws-exports'
import App from '@/App.vue'
import router from '@/router'

import '@/styles/app.scss'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Storage.configure(awsconfig)
Analytics.configure(awsconfig)

// Bootstrap Vue
Vue.use(LayoutPlugin)
Vue.use(ImagePlugin)
Vue.use(ButtonPlugin)
Vue.use(NavPlugin)
Vue.use(LinkPlugin)
Vue.use(BadgePlugin)
Vue.use(FormTextareaPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormPlugin)
Vue.use(CollapsePlugin)
Vue.use(NavbarPlugin)
Vue.use(FormInputPlugin)

// Bootstrap Vue Icons
Vue.component('BIconGithub', BIconGithub)
Vue.component('BIconTwitter', BIconTwitter)
Vue.component('BIconLinkedin', BIconLinkedin)
Vue.component('BIconFileEarmarkArrowDownFill', BIconFileEarmarkArrowDownFill)
Vue.component('BIconEnvelope', BIconEnvelope)
Vue.component('BIconCheckFill', BIconCheckCircle)

Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(VueScreen, 'bootstrap')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
