<template>
  <div ref="threeContainerRef" class="three-container">empty</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { World } from "./World/World.js";

const threeContainerRef = ref("");

onMounted(() => {
  const world = new World(threeContainerRef.value);
  world.start();
  // world.render();
});
</script>

<style scoped>
.three-container {
  width: 600px;
  height: 300px;
}
</style>
