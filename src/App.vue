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
        <b-container fluid class="content-grid">
          <!-- Nav -->
          <b-row>
            <b-col>
              <portal to="mobile-nav" :disabled="$screen.md">
                <Nav />
              </portal>
            </b-col>
          </b-row>

          <b-row align-v="center" class="router-container">
            <router-view />
          </b-row>

          <div class="social-icons mb-3">
            <b-link href="https://github.com/ChaseIngebritson"><BIconGithub /></b-link>
            <b-link href="https://twitter.com/Goslopo"><BIconTwitter /></b-link>
            <b-link href="https://www.linkedin.com/in/chase-ingebritson/"><BIconLinkedin /></b-link>
          </div>
        </b-container>
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
  })
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

.social-icons {
  position: absolute;
  bottom: 0;
  left: 1rem;

  a {
    color: var(--secondary);
    font-size: 1.5rem; 
    margin-right: 1rem;

    &:hover {
      color: #34ff8e;
    }
  }
}

.router-container {
  // Height - Nav - Footer
  height: calc(100% - 72px - 36px);
}

.content-grid {
  position: relative;
  height: 100%;
}

@include media-breakpoint-up(md) {
  .map {
    height: 100vh;
    border-right: 5px solid var(--secondary);
    border-bottom: none;
  }

  .social-icons {
    padding-left: 1rem;
  }
}
</style>