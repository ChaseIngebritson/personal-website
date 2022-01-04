<template>
  <b-container fluid class="app" :class="{ 'route-scroll': routeScroll }">
    <b-row no-gutters class="app-contents">
      <portal-target name="mobile-nav" class="mobile-nav" v-if="!$screen.md" />
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
      <b-col class="app-sub-contents" :class="{ 'route-scroll': routeScroll }">
        <b-container fluid class="content-grid">
          <!-- Nav -->
          <b-row>
            <b-col class="nav-container">
              <portal to="mobile-nav" :disabled="$screen.md">
                <Nav :bordered="!scrollIsTop" class="nav" />
              </portal>
            </b-col>
          </b-row>

          <!-- Router -->
          <b-row class="router-container" :class="{ 'route-scroll': routeScroll }" ref="router-container">
            <router-view />

            <!-- Icons -->
            <b-col cols="12" class="social-icons">
              <b-link href="https://github.com/ChaseIngebritson"><BIconGithub /></b-link>
              <b-link href="https://twitter.com/Goslopo"><BIconTwitter /></b-link>
              <b-link href="https://www.linkedin.com/in/chase-ingebritson/"><BIconLinkedin /></b-link>
            </b-col>
          </b-row>
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
    mapZoom: 12.055186286143732,
    scrollIsTop: true
  }),
  computed: {
    routeScroll () {
      return this.$route.meta.routeScroll === true
    }
  },
  mounted () {
    const routerContainer = this.$refs['router-container']
    routerContainer.addEventListener('scroll', this.handleRouterScroll)
  },
  beforeDestroy () {
    const routerContainer = this.$refs['router-container']
    routerContainer.removeEventListener('scroll', this.handleRouterScroll)
  },
  methods: {
    handleRouterScroll (e) {
      const target = e.target

      if (!this.scrollIsTop && target.scrollTop === 0) {
        this.scrollIsTop = true
      } else if (this.scrollIsTop && target.scrollTop !== 0) {
        this.scrollIsTop = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/shared.scss';

.app {
  height: 100vh;
  padding: 0;

  &.route-scroll {
    overflow: hidden;
  }
}

.app-contents {
  flex-flow: column;
  height: 100%;
}

.app-sub-contents {
  flex: 1 1 auto;

  &.route-scroll {
    overflow: auto;
  }
}

.map-container {
  position: sticky;
  flex: 0 0 15vh;
  overflow: visible;
  border-bottom: 5px solid var(--secondary);
}

.nav-container {
  padding: 0;
}

.nav {
  position: sticky;
  top: 0;
}

.mobile-nav {
  position: sticky;
  flex: 0 1 auto;
  top: 0;
  z-index: 3;
  width: 100%;
  background-color: var(--primary);
}

.social-icons {
  background-color: var(--primary);
  width: 100%;
  padding: 5px;

  a {
    color: var(--secondary);
    font-size: 1.5rem;
    margin-left: 1rem;

    &:hover {
      color: #34ff8e;
    }
  }
}

.router-container {
  display: flex;
  flex-grow: 1;
  align-content: space-between;
  align-items: flex-end;

  &.route-scroll {
    overflow: auto;
  }
}

.content-grid {
  position: relative;
  height: 100%;
  flex-flow: column;
  display: flex;
}

@include media-breakpoint-up(md) {
  .app-contents {
    flex-flow: row;
  }

  .map-container {
    flex: 0 0 20vh;
  }

  .map {
    height: 100vh;
    border-right: 5px solid var(--secondary);
    border-bottom: none;
  }

  .router-container {
    align-content: normal;
  }
}
</style>