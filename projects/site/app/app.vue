<script setup lang="ts">
const indexOpen = ref(false)
const entrance = useTemplateRef<HTMLButtonElement>('entrance')
const back = useTemplateRef<HTMLButtonElement>('back')
const destinations = ['Projects', 'Writing', 'Collection', 'Artifacts', 'Archive']

async function openIndex() {
  indexOpen.value = true
  await nextTick()
  back.value?.focus({ preventScroll: true })
}

async function closeIndex() {
  indexOpen.value = false
  await nextTick()
  entrance.value?.focus({ preventScroll: true })
}
</script>

<template>
  <main class="sky-room" @keydown.esc="indexOpen && closeIndex()">
    <img
      class="sky"
      src="/landing-sky.webp"
      alt=""
      width="1672"
      height="941"
      fetchpriority="high"
    >

    <div class="upper-plane" aria-hidden="true" />
    <div class="edge-mark" aria-hidden="true" />

    <section class="entry" aria-labelledby="site-name">
      <div class="identity">
        <h1 id="site-name">tsui.moe</h1>
        <span class="identity-mark" aria-hidden="true">×</span>
      </div>

      <div class="menu-space">
        <div v-if="!indexOpen" class="entrance-view">
          <button
            ref="entrance"
            class="enter-control"
            type="button"
            :aria-expanded="indexOpen"
            @click="openIndex"
          >
            <span>Enter</span>
            <span class="control-arrow" aria-hidden="true">↗</span>
          </button>
        </div>

        <section v-else id="site-index" class="index-view" aria-labelledby="index-title">
          <div class="index-heading">
            <h2 id="index-title">Index</h2>
            <button ref="back" class="back-control" type="button" @click="closeIndex">
              <span aria-hidden="true">←</span> Back
            </button>
          </div>

          <ul class="destinations">
            <li v-for="destination in destinations" :key="destination">
              <button class="destination" type="button" disabled>
                <span>{{ destination }}</span>
                <span class="availability">Unavailable</span>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <div class="lower-plane" aria-hidden="true" />
    <div class="bottom-rule" aria-hidden="true" />
  </main>
</template>

<style>
@font-face {
  font-family: 'Barlow Condensed';
  src: url('/fonts/barlow-condensed-medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

:root {
  color-scheme: light;
  font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
  font-synthesis: none;
  font-weight: 500;
  color: #000;
  background: #fff;
}

* { box-sizing: border-box; }
body { margin: 0; }
button { font: inherit; }
button:enabled { cursor: pointer; }
button:focus-visible { outline: 2px solid #000; outline-offset: 5px; }
::selection { background: #000; color: #fff; }

.sky-room {
  position: relative;
  isolation: isolate;
  min-height: max(760px, 100svh);
  overflow: clip;
}

.sky {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% center;
}

.upper-plane {
  position: absolute;
  z-index: -1;
  inset: 0 0 auto auto;
  width: 25%;
  height: 13vh;
  min-height: 64px;
  background: #fff;
  border-bottom: 9px solid #000;
}

.edge-mark {
  position: absolute;
  top: 24%;
  left: 0;
  width: 28px;
  height: 1px;
  background: #000;
}

.entry {
  position: relative;
  width: 280px;
  margin-left: 15.2%;
  padding-top: clamp(150px, 31vh, 370px);
  padding-bottom: 130px;
}

.identity {
  position: relative;
  width: fit-content;
  margin-bottom: 38px;
}

h1 {
  margin: 0;
  font-size: clamp(68px, 7.4vw, 108px);
  line-height: .91;
  letter-spacing: -.035em;
  font-weight: 500;
}

.identity-mark {
  position: absolute;
  top: -12px;
  right: -23px;
  font-family: Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
}

.menu-space { min-height: 309px; }

.enter-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  min-height: 42px;
  padding: 0 13px;
  border: 1px solid #000;
  border-radius: 0;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: 13px;
  transition: background 120ms, color 120ms;
}

.enter-control:hover { background: #fff; color: #000; }
.control-arrow { font-family: Arial, sans-serif; font-size: 17px; }
.index-view { animation: reveal 140ms ease-out; }

.index-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 42px;
  border-top: 3px solid #000;
  border-bottom: 1px solid #000;
}

h2 {
  margin: 0;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.back-control {
  align-self: stretch;
  min-width: 65px;
  padding: 0 8px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #000;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.back-control span { padding-right: 7px; }
.back-control:hover { background: #000; color: #fff; }
.destinations { margin: 9px 0 0; padding: 0; list-style: none; }

.destination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  min-height: 45px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid rgb(0 0 0 / 13%);
  background: transparent;
  color: #61676b;
  font-size: 16px;
  letter-spacing: .035em;
  text-align: left;
  cursor: not-allowed;
  opacity: 1;
}

.availability {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .09em;
}

.lower-plane {
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  width: 3.2%;
  min-width: 12px;
  height: 27%;
  background: #000;
}

.bottom-rule {
  position: absolute;
  bottom: 37px;
  right: 0;
  width: 17%;
  height: 1px;
  background: #000;
}

@keyframes reveal { from { opacity: 0; } to { opacity: 1; } }

@media (min-width: 1700px) {
  .entry { margin-left: 18%; }
}

@media (max-width: 600px) {
  .sky-room { min-height: max(680px, 100svh); }
  .sky { object-position: 70% center; }
  .upper-plane { width: 31%; height: 10svh; border-bottom-width: 6px; }
  .entry {
    width: min(260px, calc(100% - 92px));
    margin-left: 46px;
    padding-top: 25svh;
    padding-bottom: 110px;
  }
  h1 { font-size: 76px; }
  .identity { margin-bottom: 32px; }
  .lower-plane { height: 18%; }
  .bottom-rule { width: 24%; bottom: 25px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
</style>
