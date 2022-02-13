<template>
  <div class="match-card">
    <div class="info">
      <div class="website">WEBSITE</div>
      <div class="date">02/02/2022</div>
      <div class="format">5+5</div>
      <div class="eco">D20</div>
      <div class="opening-info">
        <div class="opening">Queen's Gambit Accepted</div>
        <div class="variation">Central Variation, McDonnel Defense</div>
      </div>
      <div class="acl">137</div>
      <div class="end">Checkmate</div>
    </div>
    <div class="dropdown" @click="expanded = !expanded">
      <h1 v-if="expanded">▲</h1>
      <h1 v-else>▼</h1>
    </div>
    <div class="expanded-info" v-if="expanded"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const expanded = ref(false);
</script>

<style>
.match-card {
  height: 100px;
  margin: 5px;
  border: 2px solid blue;
  display: grid;
  grid-template-columns: 1fr 50px;
}
.info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr 4fr 1fr 1fr;
  background: #d9ead3;
  align-items: center;
}
.dropdown {
  background: #fff2cc;
}
</style>
