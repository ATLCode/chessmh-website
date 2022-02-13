<template>
  <div class="match-history">
    <div class="uandr">
      <div class="update">
        <h1>UPDATE</h1>
      </div>
      <RatingsCard class="ratings" />
    </div>

    <QuickStats class="qs" />

    <Openings class="openings" />
    <div class="matches">
      <MatchCard />
    </div>
  </div>
</template>

<script setup>
import MatchCard from "@/components/MatchCard";
import QuickStats from "@/components/QuickStats";
import RatingsCard from "@/components/RatingsCard";
import Openings from "@/components/Openings";
</script>

<style scoped>
.match-history {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "uandr qs qs"
    "openings matches matches";
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 5px;
}
.uandr {
  grid-area: uandr;
  margin: 5px;
}

.update {
  height: 5vh;
  color: white;
  background: #142f79;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ratings {
  margin-top: 5px;
}
.qs {
  grid-area: qs;
  margin: 5px;
}
.openings {
  grid-area: openings;
  margin: 5px;
}

.matches {
  grid-area: matches;
  border: 5px solid black;
  margin: 5px;
}
</style>
