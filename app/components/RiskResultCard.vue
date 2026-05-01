<template>
  <aside class="sticky top-24 rounded-lg border border-[#dce5dc] bg-white/75 p-[22px] max-[860px]:static" aria-live="polite">
    <div v-if="result">
      <p class="mb-2 mt-0 text-[0.9rem] font-extrabold uppercase tracking-[0.04em] text-[#0f766e]">Rezultat</p>
      <div class="flex items-center gap-2.5">
        <span class="h-3.5 w-3.5 flex-none rounded-full" :class="riskColorClass" />
        <h2 class="m-0 text-[1.8rem] font-bold text-[#162018]">{{ result.level }}</h2>
      </div>
      <p v-if="result.warning" class="mt-4 rounded-lg bg-[#fff7e6] p-3 font-bold text-[#5b3b0a]">
        {{ result.warning }}
      </p>

      <section class="mt-[22px]">
        <h3 class="mb-2.5 mt-0 font-bold text-[#162018]">Ce am observat</h3>
        <div v-if="result.matchedScenarios.length" class="mb-3 grid gap-2">
          <div v-for="scenario in result.matchedScenarios" :key="scenario.id" class="rounded-lg bg-[#fff7e6] p-3 text-[#5b3b0a]">
            <strong class="block">{{ scenario.label }}</strong>
            <span class="mt-1 block">{{ scenario.description }}</span>
          </div>
        </div>
        <ul v-if="result.detectedRules.length" class="m-0 grid list-none gap-2.5 p-0">
          <li v-for="rule in result.detectedRules" :key="rule.id" class="rounded-lg bg-[#f7fbf7] p-3 text-[#39483f]">
            <strong class="block">{{ rule.label }}</strong>
            <span class="mt-1 block text-[#617065]">{{ rule.description }}</span>
          </li>
        </ul>
        <p v-else class="text-[#536056]">
          Nu am detectat suficiente semnale clare de risc în textul introdus.
        </p>
        <div class="mt-3 rounded-lg bg-[#fff7e6] p-3 text-[#5b3b0a]">
          Asta nu este o confirmare că mesajul este în regulă. Unele fraude pot arăta corect sau pot folosi texte foarte scurte.
        </div>
        <ul v-if="result.missingSignals.length" class="mt-3 grid list-none gap-2 p-0">
          <li v-for="item in result.missingSignals" :key="item" class="rounded-lg bg-[#f7fbf7] p-3 text-[#536056]">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="mt-[22px]">
        <h3 class="mb-2.5 mt-0 font-bold text-[#162018]">Ce înseamnă asta</h3>
        <p class="text-[#536056]">{{ result.explanation }}</p>
        <p class="rounded-lg bg-[#f7fbf7] p-3 text-[#39483f]">
          Analiza nu înlocuiește verificarea prin site-ul, aplicația sau numărul oficial al instituției.
        </p>
      </section>

      <section class="mt-[22px]">
        <h3 class="mb-2.5 mt-0 font-bold text-[#162018]">Ce faci acum</h3>
        <ul class="m-0 grid list-none gap-2.5 p-0">
          <li v-for="action in result.recommendations" :key="action" class="rounded-lg bg-[#f7fbf7] p-3 text-[#39483f]">{{ action }}</li>
        </ul>
      </section>
    </div>

    <div v-else>
      <p class="mb-2 mt-0 text-[0.9rem] font-extrabold uppercase tracking-[0.04em] text-[#0f766e]">Rezultat</p>
      <h2 class="m-0 text-[1.8rem] font-bold text-[#162018]">Analiza va apărea aici</h2>
      <p class="text-[#536056]">
        Lipește mesajul în formular și apasă „Analizează mesajul”. Verificarea folosește reguli simple,
        oferă indicii educaționale și nu confirmă că mesajul este în regulă.
      </p>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  result: {
    type: Object,
    default: null
  }
})

const riskColorClass = computed(() => {
  if (props.result?.levelClass === 'risk-high') {
    return 'bg-[#dc2626]'
  }

  if (props.result?.levelClass === 'risk-medium') {
    return 'bg-[#d97706]'
  }

  return 'bg-[#16a34a]'
})
</script>
