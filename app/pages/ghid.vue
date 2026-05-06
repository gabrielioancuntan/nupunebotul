<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            Ghid practic anti-fraudă
          </p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
            Reguli simple pentru mesaje, apeluri și situații suspecte
          </h1>
          <p class="mt-[18px] max-w-[720px] text-[1.15rem] text-[#46534a]">
            Un ghid în română pentru oameni care vor să reacționeze mai calm și mai sigur când primesc
            un mesaj dubios, un apel neașteptat sau o cerere de bani.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
              Verifică un mesaj
            </NuxtLink>
            <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
              Vezi tipuri de țepe
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">Regula de bază</p>
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Oprește-te. Verifică separat. Protejează-te.</h2>
          <p class="m-0 text-[#46534a]">
            Escrocii se bazează pe grabă, frică sau promisiuni prea bune. O pauză de câteva minute poate
            opri o pierdere reală.
          </p>
        </aside>
      </div>
    </section>

    <section class="pb-14">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6">
        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Fraudă sau escrocherie?</h2>
          <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">Fraudă</h3>
              <p class="m-0 text-[#536056]">
                Înseamnă folosirea ilegală a datelor, cardului, contului sau accesului tău pentru tranzacții
                ori modificări pe care nu le-ai autorizat.
              </p>
            </div>
            <div class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">Escrocherie</h3>
              <p class="m-0 text-[#536056]">
                Este situația în care ești convins să crezi o poveste falsă: o instituție, un curier, un job,
                o investiție sau o persoană care nu este cine spune.
              </p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#fff7e6] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Dacă ai fost deja păcălit</h2>
          <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div v-for="step in victimSteps" :key="step" class="rounded-lg bg-white/80 p-4 text-[#5b3b0a]">
              {{ step }}
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum îți protejezi parolele, accesul și banii</h2>
          <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            <article v-for="group in protectionGroups" :key="group.title" class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-2 mt-0 text-lg text-[#162018]">{{ group.title }}</h3>
              <ul class="m-0 grid gap-2 pl-5 text-[#536056]">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum verifici dacă cineva chiar este cine spune</h2>
          <p class="max-w-[820px] text-[#46534a]">
            Nu te baza doar pe numele afișat, pe un logo sau pe un număr care pare cunoscut. Dacă mesajul
            sau apelul a venit pe neașteptate, închide conversația și verifică separat.
          </p>
          <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            <div v-for="item in identityChecks" :key="item.title" class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">{{ item.title }}</h3>
              <p class="m-0 text-[#536056]">{{ item.text }}</p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Semnale generale de risc</h2>
          <p class="max-w-[780px] text-[#46534a]">
            Un singur semn nu înseamnă mereu fraudă. Riscul crește când apar mai multe împreună:
          </p>
          <ul class="grid grid-cols-2 gap-3 pl-5 text-[#46534a] max-md:grid-cols-1">
            <li v-for="signal in riskSignals" :key="signal">{{ signal }}</li>
          </ul>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce să nu faci niciodată</h2>
          <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div v-for="item in neverDo" :key="item" class="rounded-lg bg-[#f7fbf7] p-4 text-[#39483f]">
              {{ item }}
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Tipuri de țepe pe care merită să le cunoști</h2>
          <div class="grid grid-cols-3 gap-3 max-[900px]:grid-cols-2 max-md:grid-cols-1">
            <NuxtLink
              v-for="article in featuredArticles"
              :key="article.slug"
              :to="`/tepe/${article.slug}`"
              class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-4 font-bold text-[#162018]"
            >
              {{ article.cardTitle }}
              <span class="mt-1 block font-normal text-[#536056]">{{ article.summary }}</span>
            </NuxtLink>
          </div>
        </section>

        <section class="rounded-lg border border-[#bbdec8] bg-[#eefaf1] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ai un mesaj concret de verificat?</h2>
          <p class="max-w-[760px] text-[#46534a]">
            Ghidul te ajută să gândești mai clar. Pentru un SMS, email sau mesaj de WhatsApp, folosește
            verificatorul și apoi confirmă separat prin surse oficiale.
          </p>
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { scamArticles } from '~/data/scamArticles'

const victimSteps = [
  'Oprește comunicarea cu persoana care te presează.',
  'Blochează cardul sau contul afectat cât mai repede.',
  'Contactează banca ori furnizorul financiar prin canal oficial.',
  'Raportează tranzacțiile suspecte și păstrează dovezile.',
  'Schimbă parolele dacă ai oferit coduri, parole sau acces.',
  'Mergi către poliție dacă există pierdere financiară sau amenințări.'
]

const protectionGroups = [
  {
    title: 'Parole și conturi',
    items: ['folosește parole diferite', 'evită date evidente, precum ziua de naștere', 'activează autentificarea în doi pași']
  },
  {
    title: 'Telefon și acces',
    items: ['folosește blocare biometrică unde există', 'revizuiește dispozitivele conectate', 'nu instala aplicații cerute prin apel']
  },
  {
    title: 'Bani și carduri',
    items: ['urmărește alertele de tranzacție', 'nu ignora avertismentele de securitate', 'nu muta bani într-un cont indicat de un apelant']
  }
]

const identityChecks = [
  { title: 'Închide și verifică', text: 'Dacă apelul este neașteptat, închide și caută tu numărul oficial.' },
  { title: 'Folosește canale oficiale', text: 'Verifică în aplicația, site-ul sau contul oficial, nu prin linkul primit.' },
  { title: 'Confirmă persoanele apropiate', text: 'Dacă o rudă cere bani urgent, sună pe un număr cunoscut sau întreabă alt membru al familiei.' }
]

const riskSignals = [
  'presiune de timp sau urgență',
  'apel, SMS sau email neașteptat',
  'cerere de coduri, parole, PIN sau date de card',
  'cerere de acces la telefon sau calculator',
  'transfer rapid către un cont necunoscut',
  'cerere de a ignora avertismentele din aplicație',
  'profit mare prezentat ca sigur',
  'mutarea discuției pe WhatsApp sau Telegram',
  'poveste foarte convenabilă sau dramatică',
  'site, link sau expeditor greu de verificat'
]

const neverDo = [
  'Nu trimite coduri OTP, coduri WhatsApp, PIN sau parole.',
  'Nu introduce datele cardului într-un link primit pe neașteptate.',
  'Nu muta bani într-un așa-zis cont sigur indicat la telefon.',
  'Nu lăsa pe nimeni să îți controleze telefonul sau calculatorul.',
  'Nu primi și retrimite bani pentru persoane necunoscute.',
  'Nu plăti taxe ca să recuperezi un premiu, un job sau o investiție.'
]

const featuredArticles = scamArticles.filter((article) =>
  ['phishing', 'uzurpare-identitate', 'investitii-false', 'job-fals', 'achizitii-false', 'caraus-de-bani'].includes(article.slug)
)

const faq = [
  {
    question: 'Cum îmi dau seama dacă e doar un mesaj ciudat sau o fraudă?',
    answer: 'Caută combinații de semnale: urgență, link, bani, coduri, parole, date de card sau presiune să nu verifici separat.'
  },
  {
    question: 'Ce fac dacă am dat click, dar nu am completat nimic?',
    answer: 'Închide pagina, nu descărca nimic și verifică separat contul oficial. Dacă ai instalat ceva, cere ajutor tehnic.'
  },
  {
    question: 'Ce fac dacă am introdus datele cardului?',
    answer: 'Contactează banca imediat, blochează cardul dacă este nevoie și urmărește tranzacțiile.'
  },
  {
    question: 'Este suficient să verific numărul de telefon?',
    answer: 'Nu. Numele sau numărul afișat pot induce în eroare. Verifică prin aplicația, site-ul sau numărul oficial găsit separat.'
  }
]

useSeoMeta({
  title: 'Ghid anti-fraudă: reguli simple pentru mesaje suspecte | NuPuneBotul.ro',
  description: 'Ghid practic în română despre fraude, escrocherii, parole, conturi, bani, verificarea identității și ce faci dacă ai fost păcălit.',
  ogTitle: 'Ghid anti-fraudă pentru mesaje, apeluri și situații suspecte',
  ogDescription: 'Reguli clare: oprește-te, verifică separat și protejează-ți rapid conturile și banii.',
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
        name: 'Ghid anti-fraudă',
        description: 'Reguli practice pentru recunoașterea și evitarea fraudelor online.',
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
          { '@type': 'ListItem', position: 2, name: 'Ghid anti-fraudă', item: 'https://nupunebotul.ro/ghid' }
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
