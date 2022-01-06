import VueRouter from 'vue-router'
import Home from '@/views/Home'
import { STTHOMAS_COORDINATES, MINNEAPOLIS_COORDINATES, MINNEAPOLIS_ZOOM, STTHOMAS_ZOOM } from '@/constants/map'

const Portfolio = () => import('@/views/Portfolio')
const Tools = () => import('@/views/Tools')
const Contact = () => import('@/views/Contact')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      name: 'home', 
      path: '/', 
      component: Home,  
      meta: { 
        alignNormal: true, 
        map: {
          coordinates: MINNEAPOLIS_COORDINATES,
          zoom: MINNEAPOLIS_ZOOM
        } 
      }
    },
    // routeScroll allows the nested contents of the route to scroll instead of the full page
    { 
      name: 'portfolio', 
      path: '/portfolio', 
      component: Portfolio, 
      meta: { 
        routeScroll: true,
        map: {
          coordinates: STTHOMAS_COORDINATES,
          zoom: STTHOMAS_ZOOM
        } 
      }
    },
    { 
      name: 'tools', 
      path: '/tools', 
      component: Tools, 
      meta: { 
        routeScroll: true, 
        map: {
          coordinates: MINNEAPOLIS_COORDINATES,
          zoom: MINNEAPOLIS_ZOOM
        }  
      }
    },
    { 
      name: 'contact', 
      path: '/contact', 
      component: Contact, 
      meta: { 
        routeScroll: true, 
        map: {
          coordinates: MINNEAPOLIS_COORDINATES,
          zoom: MINNEAPOLIS_ZOOM
        } 
      }
    }
  ]
})

export default router