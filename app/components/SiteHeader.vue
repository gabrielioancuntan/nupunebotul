<template>
  <header class="sticky top-0 z-10 border-b border-[#bfcdc0]/80 bg-[#fffaf1]/95 backdrop-blur">
    <div class="mx-auto flex w-[min(1120px,calc(100%_-_32px))] min-h-[72px] items-center justify-between gap-5 max-md:min-h-0 max-md:flex-col max-md:items-start max-md:py-4">
      <NuxtLink to="/" class="whitespace-nowrap text-xl font-extrabold text-[#142018]" aria-label="NuPuneBotul.ro">
        NuPuneBotul.ro
      </NuxtLink>

      <nav class="flex flex-wrap justify-end gap-2 max-md:justify-start" aria-label="Navigare principală">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-2.5 py-2 text-[0.95rem] font-bold text-[#405044] hover:bg-[#e6f2e8] hover:text-[#0f5f45] [&.router-link-active]:bg-[#e6f2e8] [&.router-link-active]:text-[#0f5f45]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const links = [
  { to: '/verifica', label: 'Verifică' },
  { to: '/tepe', label: 'Țepe' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/ghid', label: 'Ghid' },
  { to: '/despre', label: 'Despre' },
  { to: '/contact', label: 'Contact' }
]
</script>
