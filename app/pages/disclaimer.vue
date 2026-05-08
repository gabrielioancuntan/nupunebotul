<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(960px,calc(100%_-_32px))] gap-7">
        <header>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Legal / încredere</p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.2rem)] leading-none text-[#162018]">
            Disclaimer și limitările site-ului
          </h1>
          <p class="mt-[18px] max-w-[760px] text-[1.12rem] text-[#46534a]">
            NuPuneBotul.ro este un site educațional. Informațiile și analiza mesajelor sunt orientative și trebuie folosite împreună cu verificarea separată prin canale oficiale.
          </p>
        </header>

        <section class="rounded-lg border-l-4 border-[#d97706] bg-[#fff7e6] p-5 text-[#5b3b0a]">
          <h2 class="mb-2 mt-0 text-xl text-[#162018]">Pe scurt</h2>
          <p class="m-0">
            Nu trata un rezultat cu risc scăzut ca garanție de siguranță. Dacă mesajul cere bani, coduri, date bancare sau acțiune urgentă, verifică separat prin site-ul, aplicația sau numărul oficial al instituției.
          </p>
        </section>

        <section v-for="section in sections" :key="section.title" class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-[#46534a]">
            {{ paragraph }}
          </p>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Linkuri utile</h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/confidentialitate" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Confidențialitate</NuxtLink>
            <NuxtLink to="/cookies" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Cookies</NuxtLink>
            <NuxtLink to="/termeni" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Termeni</NuxtLink>
            <NuxtLink to="/contact" class="rounded-md bg-[#162018] px-4 py-2 font-bold text-white">Contact</NuxtLink>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
const sections = [
  { title: 'Scopul site-ului', paragraphs: ['NuPuneBotul.ro are scop educațional și preventiv. Site-ul ajută utilizatorii să observe mai ușor semne de risc în SMS-uri, emailuri, mesaje de WhatsApp, linkuri sau situații online suspecte.', 'Informațiile sunt generale și nu sunt adaptate fiecărui caz concret.'] },
  { title: 'Ce oferă analiza', paragraphs: ['Verificatorul de mesaje folosește reguli simple pentru a evidenția indicii precum linkuri dubioase, cereri de coduri, presiune de timp, promisiuni nerealiste sau solicitări de date sensibile.', 'Rezultatul este orientativ și educațional. Nu reprezintă verdict oficial.'] },
  { title: 'Ce NU oferă analiza', paragraphs: ['NuPuneBotul.ro nu este bancă, instituție publică, autoritate, furnizor de securitate cibernetică sau serviciu de consultanță personalizată.', 'Site-ul nu oferă consultanță juridică, financiară, bancară sau tehnică personalizată și nu poate decide oficial dacă un mesaj este sigur sau fraudulos.'] },
  { title: 'Fără garanție de exactitate absolută', paragraphs: ['Escrocheriile se schimbă rapid. Pot exista erori, omisiuni, exemple incomplete sau situații în care un mesaj periculos pare legitim ori un mesaj legitim pare suspect.', 'Un risc scăzut nu trebuie interpretat ca garanție că mesajul este sigur.'] },
  { title: 'Verificarea trebuie făcută separat', paragraphs: ['Pentru decizii importante, verifică întotdeauna separat prin site-ul oficial, aplicația oficială sau numărul oficial al instituției, băncii, curierului ori platformei menționate.', 'Nu folosi numere, linkuri sau instrucțiuni primite în mesajul suspect ca singură sursă de verificare.'] },
  { title: 'Dacă ai oferit deja date sau bani', paragraphs: ['Dacă ai introdus date de card, parole, coduri SMS/OTP, PIN sau ai trimis bani, contactează urgent instituția relevantă: banca, furnizorul contului afectat, platforma folosită și, după caz, autoritățile.', 'Nu aștepta un răspuns prin formularul site-ului în situații urgente.'] },
  { title: 'Linkuri externe', paragraphs: ['Unele pagini pot include linkuri către resurse externe. Acestea sunt oferite pentru informare și nu înseamnă aprobare, garanție sau control asupra conținutului de pe site-urile respective.', 'Verifică separat adresele și politicile serviciilor externe pe care le folosești.'] },
  { title: 'Disponibilitate și probleme tehnice', paragraphs: ['Site-ul poate avea perioade de indisponibilitate, întârzieri, erori tehnice sau modificări de conținut.', 'NuPuneBotul.ro poate fi actualizat, reorganizat sau întrerupt fără notificare prealabilă.'] },
  { title: 'Răspundere limitată', paragraphs: ['Utilizarea site-ului se face pe propria apreciere. Site-ul este un sprijin educațional, nu un substitut pentru verificare oficială sau pentru ajutor specializat.', 'Pentru situații cu impact financiar, juridic sau de securitate, contactează instituțiile relevante și specialiștii potriviți.'] },
  { title: 'Actualizarea informațiilor', paragraphs: ['Conținutul poate fi modificat pe măsură ce apar tipare noi de fraudă sau pe măsură ce proiectul evoluează.', 'Versiunea publicată pe această pagină este versiunea curentă.'] }
]

useSeoMeta({
  title: 'Disclaimer și limitări | NuPuneBotul.ro',
  description: 'Află ce face și ce nu face NuPuneBotul.ro, cum trebuie folosit site-ul și care sunt limitele analizei mesajelor suspecte.',
  ogTitle: 'Disclaimer și limitări | NuPuneBotul.ro',
  ogDescription: 'Află limitele instrumentului educațional NuPuneBotul.ro și de ce verificarea oficială rămâne necesară.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/disclaimer',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/disclaimer' }]
})
</script>
