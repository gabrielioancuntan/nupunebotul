<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            Ghid practic în pregătire
          </p>
          <h1 class="m-0 max-w-[780px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
            Ghid anti-țeapă pentru familie
          </h1>
          <p class="mt-[18px] max-w-[720px] text-[1.15rem] text-[#46534a]">
            Un ghid simplu, în română, pentru părinți, bunici și oameni care vor să recunoască
            mai repede fraudele online fără explicații tehnice complicate.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#interes" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
              Mă interesează ghidul
            </a>
            <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
              Vezi biblioteca de țepe
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">Format planificat</p>
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">PDF practic, ușor de trimis în familie</h2>
          <ul class="grid gap-2 pl-5 text-[#46534a]">
            <li>scris pe înțelesul tuturor</li>
            <li>ușor de citit pe telefon</li>
            <li>posibil de printat</li>
            <li>potrivit pentru WhatsApp sau email</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="pb-14">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6">
        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cui i se potrivește</h2>
          <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            <div v-for="item in audiences" :key="item.title" class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">{{ item.title }}</h3>
              <p class="m-0 text-[#536056]">{{ item.text }}</p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce conține ghidul</h2>
          <ul class="grid grid-cols-2 gap-3 pl-5 text-[#46534a] max-md:grid-cols-1">
            <li v-for="item in guideContents" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">De ce este util</h2>
          <p class="max-w-[820px] text-[#46534a]">
            Ghidul este gândit ca material de familie: scurt, practic și ușor de revenit la el
            când apare un mesaj dubios. Scopul este să reducă panica și să ofere reguli clare:
            oprește-te, verifică separat, nu trimite coduri, nu introduce date bancare.
          </p>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce NU promite</h2>
          <ul class="grid gap-2 pl-5 text-[#46534a]">
            <li>Nu garantează detectarea tuturor fraudelor.</li>
            <li>Nu înlocuiește verificarea prin canalele oficiale.</li>
            <li>Nu este consultanță juridică sau bancară.</li>
            <li>Este un material educațional și preventiv.</li>
          </ul>
        </section>

        <section id="interes" class="rounded-lg border border-[#bbdec8] bg-[#eefaf1] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Vrei să afli când este gata?</h2>
          <p class="max-w-[760px] text-[#46534a]">
            Ghidul este în pregătire. Într-o etapă următoare vom adăuga aici un formular simplu
            de interes, fără cont și fără date inutile.
          </p>
          <div class="mt-4 rounded-lg border border-dashed border-[#7ab48a] bg-white/70 p-4 text-[#3f5d46]">
            Formularul de interes va fi adăugat aici. Până atunci, poți folosi verificatorul
            și biblioteca de țepe pentru exemple concrete.
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
              Verifică un mesaj suspect
            </NuxtLink>
            <NuxtLink to="/quiz" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
              Încearcă quizul
            </NuxtLink>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Întrebări frecvente</h2>
          <div v-for="item in faq" :key="item.question" class="border-t border-[#dce5dc] py-4 first:border-t-0">
            <h3 class="m-0 text-lg text-[#162018]">{{ item.question }}</h3>
            <p class="mb-0 text-[#46534a]">{{ item.answer }}</p>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Legături utile până apare ghidul</h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#162018] px-4 py-2 font-bold text-white">Verifică un mesaj</NuxtLink>
            <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Biblioteca de țepe</NuxtLink>
            <NuxtLink to="/quiz" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Quiz pentru familie</NuxtLink>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
const audiences = [
  {
    title: 'Părinți și bunici',
    text: 'Pentru oameni care primesc SMS-uri, emailuri sau mesaje pe WhatsApp și vor reguli simple.'
  },
  {
    title: 'Persoane mai puțin tehnice',
    text: 'Explicații clare, fără jargon, cu exemple apropiate de situațiile de zi cu zi.'
  },
  {
    title: 'Familii',
    text: 'Un material care poate fi trimis mai departe și folosit ca punct de discuție în familie.'
  }
]

const guideContents = [
  'cele mai comune tipuri de țepe online',
  'semne clare de risc explicate simplu',
  'checklist-uri rapide pentru SMS, email și WhatsApp',
  'ce faci dacă ai dat click',
  'ce faci dacă ai introdus date bancare',
  'ce faci dacă ai trimis un cod de verificare',
  'reguli scurte care pot fi printate',
  'exemple de mesaje false marcate clar ca exemple'
]

const faq = [
  {
    question: 'Pentru cine este ghidul?',
    answer: 'Pentru părinți, bunici, familii și orice persoană care vrea reguli simple pentru mesaje suspecte.'
  },
  {
    question: 'Este doar pentru seniori?',
    answer: 'Nu. Este scris simplu, dar poate fi util oricui primește SMS-uri, emailuri sau mesaje de WhatsApp dubioase.'
  },
  {
    question: 'Înlocuiește verificarea oficială?',
    answer: 'Nu. Ghidul este educațional și preventiv. Verificarea importantă se face prin site-ul, aplicația sau numărul oficial.'
  },
  {
    question: 'Va fi PDF?',
    answer: 'Direcția planificată este un PDF practic, ușor de citit pe telefon și posibil de printat.'
  },
  {
    question: 'Va putea fi trimis în familie?',
    answer: 'Da, ideea este să fie ușor de trimis pe WhatsApp sau email, fără explicații complicate.'
  },
  {
    question: 'Ce fac până apare?',
    answer: 'Poți folosi verificatorul de mesaje și biblioteca de țepe pentru exemple și reguli rapide.'
  }
]

useSeoMeta({
  title: 'Ghid anti-țeapă pentru familie | NuPuneBotul.ro',
  description: 'Ghid practic în pregătire pentru părinți, bunici și familii: reguli simple, checklist-uri și pași clari pentru mesaje suspecte.',
  ogTitle: 'Ghid anti-țeapă pentru familie',
  ogDescription: 'Un ghid simplu, în română, pentru familii care vor să recunoască mai repede fraudele online.',
  ogType: 'website',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/ghid' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Ghid anti-țeapă pentru familie',
        description: 'Ghid practic în pregătire pentru recunoașterea fraudelor online.',
        inLanguage: 'ro-RO',
        url: 'https://nupunebotul.ro/ghid',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NuPuneBotul.ro',
          url: 'https://nupunebotul.ro'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: 'https://nupunebotul.ro' },
          { '@type': 'ListItem', position: 2, name: 'Ghid anti-țeapă pentru familie', item: 'https://nupunebotul.ro/ghid' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      })
    }
  ]
})
</script>
