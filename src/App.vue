<script setup lang="ts">
</script>

<template>
  <div class="grid-container">
    <h3 class="logo">
      <router-link to="/">Progression</router-link>
    </h3>
    <h3 class="logo">
      <router-link to="/new-exercise">New Exercise</router-link>
    </h3>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 80px;
}

.content {
  min-height: 800px;
}
</style>
