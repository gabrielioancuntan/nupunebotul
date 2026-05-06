<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            Ghid practic anti-frauda
          </p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
            Reguli simple pentru mesaje, apeluri si situatii suspecte
          </h1>
          <p class="mt-[18px] max-w-[720px] text-[1.15rem] text-[#46534a]">
            Un ghid in romana pentru oameni care vor sa reactioneze mai calm si mai sigur cand primesc
            un mesaj dubios, un apel neasteptat sau o cerere de bani.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
              Verifica un mesaj
            </NuxtLink>
            <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
              Vezi tipuri de tepe
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">Regula de baza</p>
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Opreste-te. Verifica separat. Protejeaza-te.</h2>
          <p class="m-0 text-[#46534a]">
            Escrocii se bazeaza pe graba, frica sau promisiuni prea bune. O pauza de cateva minute poate
            opri o pierdere reala.
          </p>
        </aside>
      </div>
    </section>

    <section class="pb-14">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6">
        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Frauda sau escrocherie?</h2>
          <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">Frauda</h3>
              <p class="m-0 text-[#536056]">
                Inseamna folosirea ilegala a datelor, cardului, contului sau accesului tau pentru tranzactii
                ori modificari pe care nu le-ai autorizat.
              </p>
            </div>
            <div class="rounded-lg bg-[#f7fbf7] p-4">
              <h3 class="mb-1 mt-0 text-lg text-[#162018]">Escrocheria</h3>
              <p class="m-0 text-[#536056]">
                Este situatia in care esti convins sa crezi o poveste falsa: o institutie, un curier, un job,
                o investitie sau o persoana care nu este cine spune.
              </p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#fff7e6] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Daca ai fost deja pacalit</h2>
          <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div v-for="step in victimSteps" :key="step" class="rounded-lg bg-white/80 p-4 text-[#5b3b0a]">
              {{ step }}
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum iti protejezi parolele, accesul si banii</h2>
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
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum verifici daca cineva chiar este cine spune</h2>
          <p class="max-w-[820px] text-[#46534a]">
            Nu te baza doar pe numele afisat, pe un logo sau pe un numar care pare cunoscut. Daca mesajul
            sau apelul a venit pe neasteptate, inchide conversatia si verifica separat.
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
            Un singur semn nu inseamna mereu frauda. Riscul creste cand apar mai multe impreuna:
          </p>
          <ul class="grid grid-cols-2 gap-3 pl-5 text-[#46534a] max-md:grid-cols-1">
            <li v-for="signal in riskSignals" :key="signal">{{ signal }}</li>
          </ul>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce sa nu faci niciodata</h2>
          <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div v-for="item in neverDo" :key="item" class="rounded-lg bg-[#f7fbf7] p-4 text-[#39483f]">
              {{ item }}
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Tipuri de tepe pe care merita sa le cunosti</h2>
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
            Ghidul te ajuta sa gandesti mai clar. Pentru un SMS, email sau mesaj de WhatsApp, foloseste
            verificatorul si apoi confirma separat prin surse oficiale.
          </p>
          <div class="mt-5 flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
              Verifica un mesaj suspect
            </NuxtLink>
            <NuxtLink to="/quiz" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
              Incearca quizul
            </NuxtLink>
          </div>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Intrebari frecvente</h2>
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
  'Opreste comunicarea cu persoana care te preseaza.',
  'Blocheaza cardul sau contul afectat cat mai repede.',
  'Contacteaza banca ori furnizorul financiar prin canal oficial.',
  'Raporteaza tranzactiile suspecte si pastreaza dovezile.',
  'Schimba parolele daca ai oferit coduri, parole sau acces.',
  'Mergi catre politie daca exista pierdere financiara sau amenintari.'
]

const protectionGroups = [
  {
    title: 'Parole si conturi',
    items: ['foloseste parole diferite', 'evita date evidente, precum ziua de nastere', 'activeaza autentificarea in doi pasi']
  },
  {
    title: 'Telefon si acces',
    items: ['foloseste blocare biometrica unde exista', 'revizuieste dispozitivele conectate', 'nu instala aplicatii cerute prin apel']
  },
  {
    title: 'Bani si carduri',
    items: ['urmareste alertele de tranzactie', 'nu ignora avertismentele de securitate', 'nu muta bani intr-un cont indicat de un apelant']
  }
]

const identityChecks = [
  { title: 'Inchide si verifica', text: 'Daca apelul este neasteptat, inchide si cauta tu numarul oficial.' },
  { title: 'Foloseste canale oficiale', text: 'Verifica in aplicatia, site-ul sau contul oficial, nu prin linkul primit.' },
  { title: 'Confirma persoanele apropiate', text: 'Daca o ruda cere bani urgent, suna pe un numar cunoscut sau intreaba alt membru al familiei.' }
]

const riskSignals = [
  'presiune de timp sau urgenta',
  'apel, SMS sau email neasteptat',
  'cerere de coduri, parole, PIN sau date de card',
  'cerere de acces la telefon sau calculator',
  'transfer rapid catre un cont necunoscut',
  'cerere de a ignora avertismentele din aplicatie',
  'profit mare prezentat ca sigur',
  'mutarea discutiei pe WhatsApp sau Telegram',
  'poveste foarte convenabila sau dramatica',
  'site, link sau expeditor greu de verificat'
]

const neverDo = [
  'Nu trimite coduri OTP, coduri WhatsApp, PIN sau parole.',
  'Nu introduce datele cardului intr-un link primit pe neasteptate.',
  'Nu muta bani intr-un asa-zis cont sigur indicat la telefon.',
  'Nu lasa pe nimeni sa iti controleze telefonul sau calculatorul.',
  'Nu primi si retrimite bani pentru persoane necunoscute.',
  'Nu plati taxe ca sa recuperezi un premiu, un job sau o investitie.'
]

const featuredArticles = scamArticles.filter((article) =>
  ['phishing', 'uzurpare-identitate', 'investitii-false', 'job-fals', 'achizitii-false', 'caraus-de-bani'].includes(article.slug)
)

const faq = [
  {
    question: 'Cum imi dau seama daca e doar un mesaj ciudat sau o frauda?',
    answer: 'Cauta combinatii de semnale: urgenta, link, bani, coduri, parole, date de card sau presiune sa nu verifici separat.'
  },
  {
    question: 'Ce fac daca am dat click, dar nu am completat nimic?',
    answer: 'Inchide pagina, nu descarca nimic si verifica separat contul oficial. Daca ai instalat ceva, cere ajutor tehnic.'
  },
  {
    question: 'Ce fac daca am introdus datele cardului?',
    answer: 'Contacteaza banca imediat, blocheaza cardul daca este nevoie si urmareste tranzactiile.'
  },
  {
    question: 'Este suficient sa verific numarul de telefon?',
    answer: 'Nu. Numele sau numarul afisat pot induce in eroare. Verifica prin aplicatia, site-ul sau numarul oficial gasit separat.'
  }
]

useSeoMeta({
  title: 'Ghid anti-frauda: reguli simple pentru mesaje suspecte | NuPuneBotul.ro',
  description: 'Ghid practic in romana despre fraude, escrocherii, parole, conturi, bani, verificarea identitatii si ce faci daca ai fost pacalit.',
  ogTitle: 'Ghid anti-frauda pentru mesaje, apeluri si situatii suspecte',
  ogDescription: 'Reguli clare: opreste-te, verifica separat si protejeaza-ti rapid conturile si banii.',
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
        name: 'Ghid anti-frauda',
        description: 'Reguli practice pentru recunoasterea si evitarea fraudelor online.',
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
          { '@type': 'ListItem', position: 1, name: 'Acasa', item: 'https://nupunebotul.ro' },
          { '@type': 'ListItem', position: 2, name: 'Ghid anti-frauda', item: 'https://nupunebotul.ro/ghid' }
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
