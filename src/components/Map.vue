<template>
  <MglMap
    :accessToken="mapboxToken"
    :mapStyle="mapStyle"
    :interactive="false"
    :center="mapCenter"
    :zoom="mapZoom"
    @load="onMapLoaded"
    ref="map"
  />
</template>

<script>
import { MglMap } from "vue-mapbox";
import { MINNEAPOLIS_COORDINATES, MINNEAPOLIS_ZOOM } from '@/constants/map'

export default {
  name: 'Map',
  components: { MglMap },
  data: () => ({
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    mapCenter: MINNEAPOLIS_COORDINATES,
    mapZoom: MINNEAPOLIS_ZOOM,
    mapboxToken: process.env.VUE_APP_MAPBOX_TOKEN,
  }),
  watch: {
    async $route (to, from) {
      const origin = from.meta?.map?.coordinates
      const originZoom = from.meta?.map?.zoom
      const destination = to.meta?.map?.coordinates
      const destinationZoom = to.meta?.map?.zoom

      if (origin !== destination || originZoom !== destinationZoom) {
        if (this.$refs.map.actions.easeTo) {
          await this.$refs.map.actions.easeTo({
            center: destination,
            zoom: destinationZoom
          })
        }

        this.mapCenter = destination
        this.mapZoom = destinationZoom
      }
    }
  },
  methods: {
    onMapLoaded (e) {
      // This is a work around for when a page is navigated to directly using the URL
      e.map.setCenter(this.mapCenter)
      e.map.setZoom(this.mapZoom)
    }
  }
}
</script>