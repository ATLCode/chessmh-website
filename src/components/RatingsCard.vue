<template>
  <div class="ratings-card">
    <div class="hd">RATINGS</div>
    <div class="variant">
      <div>BULLET</div>
      <div class="ratings">
        <div>1500</div>
        <div>1400</div>
        <div>1600</div>
      </div>
      <div class="games">
        <div>50 games</div>
        <div>45 games</div>
        <div>20 games</div>
      </div>
      <div class="extras">
        <div>Lichess</div>
        <div>Chess.com</div>
        <div>Chessable</div>
      </div>
    </div>
    <div class="variant">
      <div>BLITZ</div>
      <div class="ratings">
        <div>1500</div>
        <div>1500</div>
        <div>1500</div>
      </div>
      <div class="games">
        <div>20 games</div>
        <div>20 games</div>
        <div>20 games</div>
      </div>
      <div class="extras">
        <div>Lichess</div>
        <div>Chess.com</div>
        <div>Chessable</div>
      </div>
    </div>
    <div class="variant">
      <div>RAPID</div>
      <div class="ratings">
        <div>1500</div>
        <div>1500</div>
        <div>1500</div>
      </div>
      <div class="games">
        <div>20 games</div>
        <div>20 games</div>
        <div>20 games</div>
      </div>
      <div class="extras">
        <div>Lichess</div>
        <div>Chess.com</div>
        <div>Chessable</div>
      </div>
    </div>
    <div class="variant">
      <div>CLASSICAL</div>
      <div class="ratings">
        <div>1500</div>
        <div>1500</div>
        <div>1500</div>
      </div>
      <div class="games">
        <div>20 games</div>
        <div>20 games</div>
        <div>20 games</div>
      </div>
      <div class="extras">
        <div>Lichess</div>
        <div>Chess.com</div>
        <div>Chessable</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.ratings-card {
  display: grid;
  grid-template-rows: 0.7fr 1fr 1fr 1fr 1fr;
  background: #142f79;
  color: white;
}

.hd {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
}

.variant {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  margin: 5px;
}

.ratings {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.games {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.extras {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
