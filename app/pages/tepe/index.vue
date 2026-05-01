<template>
  <section class="py-16 max-md:py-11">
    <div class="mx-auto w-[min(1120px,calc(100%_-_32px))]">
      <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
        Biblioteca de țepe
      </p>
      <h1 class="m-0 max-w-[840px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
        Ghiduri despre cele mai comune țepe online din România
      </h1>
      <p class="mt-[18px] max-w-[760px] text-[1.15rem] text-[#46534a]">
        Aici găsești explicații clare despre mesaje false de curier, bancă, ANAF, WhatsApp și OLX.
        Paginile te ajută să recunoști tipare de risc mai repede, fără să tratezi rezultatul ca pe un verdict sigur.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
          Verifică un mesaj suspect
        </NuxtLink>
        <NuxtLink to="/ghid" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
          Vezi ghidul pentru familie
        </NuxtLink>
      </div>

      <div class="mt-10 grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-md:grid-cols-1">
        <article v-for="article in scamArticles" :key="article.slug" class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            {{ article.category }}
          </p>
          <h2 class="mb-2.5 mt-0 text-[#162018]">{{ article.cardTitle }}</h2>
          <p class="text-[#536056]">{{ article.summary }}</p>
          <NuxtLink :to="`/tepe/${article.slug}`" class="mt-4 inline-flex rounded-md bg-[#162018] px-4 py-2 font-bold text-white">
            Citește ghidul
          </NuxtLink>
        </article>
      </div>

      <section class="mt-10 rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">De ce contează tiparele</h2>
        <p class="max-w-[820px] text-[#46534a]">
          Nu toate mesajele dubioase sunt țepe, dar multe fraude repetă aceleași combinații:
          presiune de timp, linkuri neașteptate, cereri de coduri, date bancare sau bani trimiși rapid.
          Citește ghidurile, apoi folosește verificatorul pentru o analiză rapidă a unui mesaj concret.
        </p>
        <NuxtLink to="/verifica" class="mt-3 inline-flex rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
          Verifică un mesaj acum
        </NuxtLink>
      </section>
    </div>
  </section>
</template>

<script setup>
import { buildLibraryJsonLd, scamArticles } from '~/data/scamArticles'

useSeoMeta({
  title: 'Bibliotecă de țepe online în România | NuPuneBotul.ro',
  description: 'Ghiduri clare despre țepe online frecvente: colete false, bănci false, ANAF fals, cod WhatsApp și fraude pe OLX.',
  ogTitle: 'Bibliotecă de țepe online în România',
  ogDescription: 'Învață să recunoști mesajele suspecte și tiparele folosite în fraude online frecvente.',
  ogType: 'website',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/tepe' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(buildLibraryJsonLd())
    }
  ]
})
</script>
