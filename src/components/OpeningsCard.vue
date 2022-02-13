<template>
  <div class="oc">
    <div class="op-fname">
      <div class="op-name">Test Opening</div>
      <div class="op-variation">Test Variation</div>
    </div>
    <div class="op-stats">50%</div>
  </div>
</template>

<script setup></script>

<style>
.oc {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: steelblue;
  margin: 5px;
}
.op-fname {
  display: grid;
  grid-template-rows: 2fr 1fr;
}
.op-name {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.op-variation {
  font-size: 1rem;
}
</style>
