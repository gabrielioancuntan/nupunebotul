<template>
  <div>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
:root {
  color: #17211b;
  background: #f8f5ef;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background:
    linear-gradient(180deg, #fffaf1 0%, #f8f5ef 42%, #eef5ef 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

main {
  min-height: 70vh;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 64px 0;
}

.section-small {
  padding: 40px 0;
}

.eyebrow {
  margin: 0 0 10px;
  color: #0f766e;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.page-title {
  max-width: 760px;
  margin: 0;
  color: #162018;
  font-size: clamp(2.2rem, 6vw, 4.7rem);
  line-height: 1;
}

.page-intro {
  max-width: 700px;
  margin: 18px 0 0;
  color: #46534a;
  font-size: 1.15rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 18px;
  font-weight: 700;
}

.button-primary {
  background: #147a5a;
  color: #ffffff;
}

.button-secondary {
  border: 1px solid #cad7cc;
  background: #ffffff;
  color: #1e2a22;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card {
  border: 1px solid #dce5dc;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.76);
  padding: 22px;
}

.card h2,
.card h3 {
  margin: 0 0 10px;
  color: #162018;
}

.card p {
  margin: 0;
  color: #536056;
}

.notice {
  border-left: 4px solid #d97706;
  border-radius: 8px;
  background: #fff7e6;
  padding: 16px 18px;
  color: #5b3b0a;
  font-weight: 700;
}

.two-columns {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 28px;
  align-items: start;
}

.simple-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.simple-list li {
  border: 1px solid #dce5dc;
  border-radius: 8px;
  background: #ffffff;
  padding: 14px 16px;
  color: #36433a;
}

.placeholder-box {
  border: 1px dashed #9fb3a7;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.58);
  padding: 24px;
  color: #4b5b50;
}

@media (max-width: 760px) {
  .section {
    padding: 44px 0;
  }

  .grid,
  .two-columns {
    grid-template-columns: 1fr;
  }

  .button {
    width: 100%;
  }
}
</style>
