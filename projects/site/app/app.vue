<script setup lang="ts">
const menu = useTemplateRef<HTMLDetailsElement>('menu')
const toggle = useTemplateRef<HTMLElement>('toggle')
const destinations = ['projects', 'writing', 'collection', 'artifacts', 'archive']

function closeMenu(restoreFocus = false) {
  if (!menu.value?.open) return
  menu.value.open = false
  if (restoreFocus) toggle.value?.focus({ preventScroll: true })
}

function dismissOutside(event: PointerEvent) {
  if (event.target instanceof Node && !menu.value?.contains(event.target)) closeMenu()
}
</script>

<template>
  <main class="sky-room" @pointerdown="dismissOutside" @keydown.esc="closeMenu(true)">
    <img
      class="sky"
      src="/landing-sky.webp"
      alt=""
      width="1672"
      height="941"
      fetchpriority="high"
    >

    <footer class="site-footer">
      <h1>tsui.moe</h1>
      <details ref="menu" class="site-menu">
        <summary ref="toggle">menu</summary>
        <nav class="menu-panel" aria-label="site index">
          <ul>
            <li v-for="destination in destinations" :key="destination">
              <button type="button" disabled>
                <span>{{ destination }}</span>
                <span class="availability">unavailable</span>
              </button>
            </li>
          </ul>
        </nav>
      </details>
    </footer>
  </main>
</template>

<style>
@font-face {
  font-family: 'Instrument Sans';
  src: url('/fonts/instrument-sans-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  color-scheme: light;
  font-family: 'Instrument Sans', Arial, sans-serif;
  font-synthesis: none;
  font-weight: 400;
  color: #41474a;
  background: #fff;
}

* { box-sizing: border-box; }
body { margin: 0; }
button { font: inherit; }
:focus-visible { outline: 1px solid #41474a; outline-offset: 4px; }

.sky-room {
  position: relative;
  isolation: isolate;
  min-height: 100svh;
}

.sky {
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% center;
}

.site-footer {
  position: absolute;
  bottom: max(20px, env(safe-area-inset-bottom));
  left: max(28px, env(safe-area-inset-left));
  right: max(28px, env(safe-area-inset-right));
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  letter-spacing: .02em;
}

h1 { margin: 0; font: inherit; }
.site-menu { position: relative; }

summary {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 44px;
  min-height: 44px;
  list-style: none;
  cursor: pointer;
  user-select: none;
}

summary::-webkit-details-marker { display: none; }
summary:hover, details[open] > summary { text-decoration: underline; text-underline-offset: 4px; }

.menu-panel {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  width: min(240px, calc(100vw - 56px));
  max-height: calc(100svh - 100px);
  overflow-y: auto;
  padding: 8px 16px;
  border: 1px solid #dce0e2;
  background: rgb(255 255 255 / 96%);
}

ul { margin: 0; padding: 0; list-style: none; }

.menu-panel button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  min-height: 42px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #747a7e;
  text-align: left;
  opacity: 1;
  cursor: not-allowed;
}

.availability { font-size: 12px; }

@media (max-width: 600px) {
  .sky { object-position: 70% center; }
  .site-footer { left: max(20px, env(safe-area-inset-left)); right: max(20px, env(safe-area-inset-right)); }
}
</style>
