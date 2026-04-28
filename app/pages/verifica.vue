<template>
  <section class="py-16 max-md:py-11">
    <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6">
      <header>
        <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Verifică mesajul</p>
        <h1 class="m-0 max-w-[760px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">Analiză rapidă pentru mesaje suspecte</h1>
        <p class="mt-[18px] max-w-[700px] text-[1.15rem] text-[#46534a]">
          Lipește un SMS, email, mesaj de WhatsApp sau text suspect și vezi ce semne de țeapă apar.
        </p>
      </header>

      <div class="rounded-lg border-l-4 border-[#d97706] bg-[#fff7e6] px-[18px] py-4 font-bold text-[#5b3b0a]">
        Nu lipi parole, CNP, coduri bancare, coduri primite prin SMS sau date personale.
      </div>

      <div class="grid grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] items-start gap-[22px] max-[860px]:grid-cols-1">
        <ScamCheckerForm @analyzed="result = $event" />
        <RiskResultCard :result="result" />
      </div>
    </div>
  </section>
</template>

<script setup>
const result = ref(null)
</script>
