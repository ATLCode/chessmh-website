<template>
  <div class="quick-stats">
    <div class="graph"></div>
    <div class="tags"></div>
  </div>
</template>

<script setup></script>

<style>
.quick-stats {
  border: 2px solid blue;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.graph {
  background: teal;
}
.tags {
  background: violet;
}
</style>
