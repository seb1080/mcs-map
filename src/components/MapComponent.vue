<template>
  <div ref="mapContainer" id="mapId" class="map-container"></div>
</template>

<script lang="ts">

import mapboxgl from "mapbox-gl";
import { mapOptions } from "../config/map-configs";

export default {
  mounted() {
    this.map = new mapboxgl.Map(mapOptions);
  },

  unmounted() {
    this.map.remove();
    this.map = null;
  }
}
</script>

<style>
.map-container {
  flex: 1;
}
</style>