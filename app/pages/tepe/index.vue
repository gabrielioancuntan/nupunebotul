<template>
  <section class="py-16 max-md:py-11">
    <div class="mx-auto w-[min(1120px,calc(100%_-_32px))]">
      <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
        Biblioteca de tepe
      </p>
      <h1 class="m-0 max-w-[880px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
        Tipare de fraude online explicate pe intelesul tuturor
      </h1>
      <p class="mt-[18px] max-w-[780px] text-[1.15rem] text-[#46534a]">
        Ghiduri practice despre colete false, banci false, phishing, investitii, joburi, cumparaturi,
        identitati false si alte situatii in care escrocii incearca sa obtina bani, coduri sau acces.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
          Verifica un mesaj suspect
        </NuxtLink>
        <NuxtLink to="/ghid" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
          Citeste ghidul general
        </NuxtLink>
      </div>

      <div class="mt-10 grid gap-8">
        <section v-for="group in articleGroups" :key="group.title">
          <div class="mb-4">
            <h2 class="mb-1 mt-0 text-2xl text-[#162018]">{{ group.title }}</h2>
            <p class="m-0 max-w-[760px] text-[#536056]">{{ group.description }}</p>
          </div>
          <div class="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-md:grid-cols-1">
            <article v-for="article in group.articles" :key="article.slug" class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
              <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">
                {{ article.category }}
              </p>
              <h3 class="mb-2.5 mt-0 text-xl text-[#162018]">{{ article.cardTitle }}</h3>
              <p class="text-[#536056]">{{ article.summary }}</p>
              <NuxtLink :to="`/tepe/${article.slug}`" class="mt-4 inline-flex rounded-md bg-[#162018] px-4 py-2 font-bold text-white">
                Vezi semnele
              </NuxtLink>
            </article>
          </div>
        </section>
      </div>

      <section class="mt-10 rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum folosesti biblioteca</h2>
        <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <div>
            <h3 class="mb-1 mt-0 text-lg text-[#162018]">1. Alege scenariul</h3>
            <p class="m-0 text-[#536056]">Porneste de la ce seamana cel mai mult cu mesajul sau apelul primit.</p>
          </div>
          <div>
            <h3 class="mb-1 mt-0 text-lg text-[#162018]">2. Cauta combinatia de semne</h3>
            <p class="m-0 text-[#536056]">Uita-te dupa urgenta, bani, linkuri, coduri, acces la dispozitiv sau identitate greu de verificat.</p>
          </div>
          <div>
            <h3 class="mb-1 mt-0 text-lg text-[#162018]">3. Verifica separat</h3>
            <p class="m-0 text-[#536056]">Nu actiona direct din mesaj. Foloseste surse oficiale si, daca vrei, verificatorul de mesaje.</p>
          </div>
        </div>
      </section>

      <section class="mt-10 rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">De ce conteaza tiparele</h2>
        <p class="max-w-[840px] text-[#46534a]">
          Escrocii schimba textele, numele si linkurile, dar repeta aceleasi mecanisme: presiune,
          incredere falsa, bani trimisi rapid, coduri, parole sau pagini care imita servicii reale.
          De aceea este util sa inveti scenariile, nu doar un singur exemplu.
        </p>
        <NuxtLink to="/verifica" class="mt-3 inline-flex rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
          Verifica un mesaj acum
        </NuxtLink>
      </section>
    </div>
  </section>
</template>

<script setup>
import { buildLibraryJsonLd, scamArticles } from '~/data/scamArticles'

const groupDefinitions = [
  {
    title: 'Mesaje, linkuri si conturi',
    description: 'Fraude care pornesc de la SMS, email, linkuri, coduri sau conturi preluate.',
    slugs: ['phishing', 'banca-falsa', 'whatsapp-cod', 'colet-fals', 'anaf-fals']
  },
  {
    title: 'Bani, cumparaturi si oportunitati false',
    description: 'Situatii in care promisiunea unui castig, unei oferte sau unui job ascunde cereri de bani ori date.',
    slugs: ['investitii-false', 'job-fals', 'achizitii-false', 'olx', 'caraus-de-bani']
  },
  {
    title: 'Identitate si incredere manipulata',
    description: 'Atacuri in care escrocul se prezinta ca o institutie, o persoana apropiata sau o relatie online.',
    slugs: ['uzurpare-identitate', 'teapa-romantica']
  }
]

const articleGroups = groupDefinitions.map((group) => ({
  ...group,
  articles: group.slugs.map((slug) => scamArticles.find((article) => article.slug === slug)).filter(Boolean)
}))

useSeoMeta({
  title: 'Biblioteca de tepe online in Romania | NuPuneBotul.ro',
  description: 'Ghiduri clare despre phishing, colete false, banci false, ANAF fals, OLX, investitii false, joburi false, cumparaturi false si tepe romantice.',
  ogTitle: 'Biblioteca de tepe online in Romania',
  ogDescription: 'Invata sa recunosti tiparele folosite in fraude online frecvente si verifica separat inainte sa actionezi.',
  ogType: 'website',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/tepe' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(buildLibraryJsonLd())
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasa', item: 'https://nupunebotul.ro' },
          { '@type': 'ListItem', position: 2, name: 'Biblioteca de tepe', item: 'https://nupunebotul.ro/tepe' }
        ]
      })
    }
  ]
})
</script>
