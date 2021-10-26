<template>
  <b-container fluid class="app">
    <b-row no-gutters>
      <portal-target name="mobile-nav" />
      <b-col cols="12" md="2" class="map-container">
        <MglMap
          :accessToken="mapboxToken"
          :mapStyle.sync="mapStyle"
          :interactive="false"
          :center.sync="mapCenter"
          :zoom.sync="mapZoom"
          class="map"
        />
      </b-col>
      <b-col>
        <portal to="mobile-nav" :disabled="$screen.md">
          <Nav />
        </portal>
        <b-container fluid class="content">
          <b-row class="landing" align-v="center">
            <router-view />
          </b-row>
        </b-container>
        <b-row>
          <b-col>
            <b-link class="social-icon"><BIconGithub /></b-link>
            <b-link class="social-icon"><BIconTwitter /></b-link>
            <b-link class="social-icon"><BIconLinkedin /></b-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { MglMap } from "vue-mapbox";
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {
    MglMap,
    Nav
  },
  data: () => ({
    mapboxToken: process.env.VUE_APP_MAPBOX_TOKEN,
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    mapCenter: [-93.26499482579126, 44.97659137876903],
    mapZoom: 12.055186286143732
  }),
  mounted () {
    console.log(this.mapCetner)
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/bootstrap/scss/bootstrap.scss';

.app {
  height: 100vh;
  padding: 0;
  position: fixed;
}

.map-container {
  position: sticky;
}

.map {
  height: 20vh;
  border-bottom: 5px solid var(--secondary);
}

.social-icon {
  color: var(--secondary);
}

@include media-breakpoint-up(md) {
  .map {
    height: 100vh;
    border-right: 5px solid var(--secondary);
    border-bottom: none;
  }

  .landing {
    height: calc(100vh - 60px - 100px);
  }
}
</style>