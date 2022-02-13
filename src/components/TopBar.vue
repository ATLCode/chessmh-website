<template>
  <div class="top-bar">
    <router-link to="/match-history" class="button">MATCH HISTORY</router-link>
    <router-link to="/match-history" class="button">STATISTICS</router-link>
    <router-link to="/match-history" class="button">SETTINGS</router-link>
  </div>
</template>

<script setup></script>

<style>
.top-bar {
  position: sticky;
  width: 100vw;
  height: 5vh;
  background: #142f79;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.button {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
}
</style>
