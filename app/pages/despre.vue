<template>
  <section class="py-16 max-md:py-11">
    <div class="mx-auto w-[min(1120px,calc(100%_-_32px))]">
      <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Despre proiect</p>
      <h1 class="m-0 max-w-[760px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">De ce există NuPuneBotul.ro</h1>
      <p class="mt-[18px] max-w-[700px] text-[1.15rem] text-[#46534a]">
        NuPuneBotul.ro este un proiect românesc, simplu și educativ, pentru oameni care vor să observe mai ușor semnele de risc din mesajele suspecte.
        Instrumentul nu oferă verdicte oficiale și nu confirmă că un mesaj este în regulă.
      </p>
      <div class="mt-7 flex flex-wrap gap-3">
        <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
          Verifică un mesaj suspect
        </NuxtLink>
        <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
          Vezi biblioteca de țepe
        </NuxtLink>
      </div>

      <div class="mt-8 grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Claritate</h2>
          <p class="m-0 text-[#536056]">Explicăm riscurile pe înțelesul tuturor, fără termeni tehnici inutili.</p>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Prevenție</h2>
          <p class="m-0 text-[#536056]">Scopul este să te oprești o clipă înainte să dai click, să plătești sau să trimiți date.</p>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Ajutor</h2>
          <p class="m-0 text-[#536056]">Materialele vor fi gândite ca să poată fi trimise ușor mai departe în familie.</p>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Limitări</h2>
          <p class="m-0 text-[#536056]">Analiza este bazată pe reguli simple și trebuie completată mereu cu verificarea prin canale oficiale.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'Despre NuPuneBotul.ro | Educație anti-țeapă în română',
  description: 'Află de ce există NuPuneBotul.ro: un proiect educațional românesc pentru recunoașterea mesajelor suspecte, fără verdicte oficiale sau promisiuni perfecte.',
  ogTitle: 'Despre NuPuneBotul.ro',
  ogDescription: 'Un proiect simplu și educațional despre mesaje suspecte, phishing și țepe online frecvente în România.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/despre',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/despre' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Despre NuPuneBotul.ro',
        description: 'Proiect educațional românesc pentru prevenirea fraudelor online prin exemple clare și verificare separată.',
        inLanguage: 'ro-RO',
        url: 'https://nupunebotul.ro/despre',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NuPuneBotul.ro',
          url: 'https://nupunebotul.ro'
        }
      })
    }
  ]
})
</script>
