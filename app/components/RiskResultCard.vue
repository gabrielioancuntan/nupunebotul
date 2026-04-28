<template>
  <aside class="card result-card" aria-live="polite">
    <div v-if="result">
      <p class="result-label">Rezultat</p>
      <div class="risk-heading">
        <span class="risk-dot" :class="result.levelClass" />
        <h2>{{ result.level }}</h2>
      </div>
      <p class="result-explanation">{{ result.explanation }}</p>

      <section>
        <h3>Semne detectate</h3>
        <ul v-if="result.detectedRules.length" class="result-list">
          <li v-for="rule in result.detectedRules" :key="rule.id">
            <strong>{{ rule.label }}</strong>
            <span>{{ rule.description }}</span>
          </li>
        </ul>
        <p v-else class="muted">
          Nu am găsit semne evidente, dar verifică în continuare expeditorul și linkurile.
        </p>
      </section>

      <section>
        <h3>Ce poți face mai departe</h3>
        <ul class="action-list">
          <li v-for="action in result.recommendations" :key="action">{{ action }}</li>
        </ul>
      </section>
    </div>

    <div v-else class="empty-state">
      <p class="result-label">Rezultat</p>
      <h2>Analiza va apărea aici</h2>
      <p>
        Lipește mesajul în formular și apasă „Analizează mesajul”. Verificarea folosește reguli simple,
        nu inteligență artificială.
      </p>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  result: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
.result-card {
  position: sticky;
  top: 96px;
}

.result-label {
  margin: 0 0 8px;
  color: #0f766e;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.risk-heading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.risk-heading h2,
.empty-state h2 {
  margin: 0;
  font-size: 1.8rem;
}

.risk-dot {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  border-radius: 999px;
}

.risk-low {
  background: #16a34a;
}

.risk-medium {
  background: #d97706;
}

.risk-high {
  background: #dc2626;
}

.result-explanation,
.empty-state p,
.muted {
  color: #536056;
}

section {
  margin-top: 22px;
}

h3 {
  margin: 0 0 10px;
  color: #162018;
}

.result-list,
.action-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.result-list li,
.action-list li {
  border-radius: 8px;
  background: #f7fbf7;
  padding: 12px;
  color: #39483f;
}

.result-list strong,
.result-list span {
  display: block;
}

.result-list span {
  margin-top: 3px;
  color: #617065;
}

@media (max-width: 860px) {
  .result-card {
    position: static;
  }
}
</style>
