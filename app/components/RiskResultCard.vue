<template>
  <aside class="sticky top-24 rounded-lg border border-[#dce5dc] bg-white/75 p-[22px] max-[860px]:static" aria-live="polite">
    <div v-if="result">
      <p class="mb-2 mt-0 text-[0.9rem] font-extrabold uppercase tracking-[0.04em] text-[#0f766e]">Rezultat</p>
      <div class="flex items-center gap-2.5">
        <span class="h-3.5 w-3.5 flex-none rounded-full" :class="riskColorClass" />
        <h2 class="m-0 text-[1.8rem] font-bold text-[#162018]">{{ result.level }}</h2>
      </div>
      <p class="mt-4 text-[#536056]">{{ result.explanation }}</p>

      <section class="mt-[22px]">
        <h3 class="mb-2.5 mt-0 font-bold text-[#162018]">Semne detectate</h3>
        <ul v-if="result.detectedRules.length" class="m-0 grid list-none gap-2.5 p-0">
          <li v-for="rule in result.detectedRules" :key="rule.id" class="rounded-lg bg-[#f7fbf7] p-3 text-[#39483f]">
            <strong class="block">{{ rule.label }}</strong>
            <span class="mt-1 block text-[#617065]">{{ rule.description }}</span>
          </li>
        </ul>
        <p v-else class="text-[#536056]">
          Nu am găsit semne evidente, dar verifică în continuare expeditorul și linkurile.
        </p>
      </section>

      <section class="mt-[22px]">
        <h3 class="mb-2.5 mt-0 font-bold text-[#162018]">Ce poți face mai departe</h3>
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
        nu inteligență artificială.
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
