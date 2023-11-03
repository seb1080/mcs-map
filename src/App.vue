<script setup lang="ts">
import MapComponent from './components/MapComponent.vue'
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"

</script>

<template>
  <div id="app">
    <div class="layout">
      <MapComponent></MapComponent>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  flex: 1;
}

.layout {
  flex: 1;
  display: flex;
  position: relative;
}
</style>
