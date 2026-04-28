<template>
  <section class="section">
    <div class="container verifica-layout">
      <header>
        <p class="eyebrow">Verifică mesajul</p>
        <h1 class="page-title">Analiză rapidă pentru mesaje suspecte</h1>
        <p class="page-intro">
          Lipește un SMS, email, mesaj de WhatsApp sau text suspect și vezi ce semne de țeapă apar.
        </p>
      </header>

      <div class="notice">
        Nu lipi parole, CNP, coduri bancare, coduri primite prin SMS sau date personale.
      </div>

      <div class="checker-grid">
        <ScamCheckerForm @analyzed="result = $event" />
        <RiskResultCard :result="result" />
      </div>
    </div>
  </section>
</template>

<script setup>
const result = ref(null)
</script>

<style scoped>
.verifica-layout {
  display: grid;
  gap: 24px;
}

.checker-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
  gap: 22px;
  align-items: start;
}

@media (max-width: 860px) {
  .checker-grid {
    grid-template-columns: 1fr;
  }
}
</style>
