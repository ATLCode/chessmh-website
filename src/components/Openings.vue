<template>
  <div class="op">
    <div class="heading">OPENINGS</div>
    <div class="colors">
      <div class="white">WHITE</div>
      <div class="black">BLACK</div>
    </div>
    <div class="openings">
      <OpeningsCard />
    </div>
  </div>
</template>

<script setup>
import OpeningsCard from "@/components/OpeningsCard";
</script>

<style>
.op {
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  background: #142f79;
  color: white;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
}

.colors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5px;
}
.white {
  background: #fff2cc;
  color: black;
}
.black {
  background: black;
}
</style>
