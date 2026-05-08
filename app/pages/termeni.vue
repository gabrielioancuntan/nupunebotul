<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(960px,calc(100%_-_32px))] gap-7">
        <header>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Utilizarea site-ului</p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.2rem)] leading-none text-[#162018]">
            Termeni de utilizare
          </h1>
          <p class="mt-[18px] max-w-[760px] text-[1.12rem] text-[#46534a]">
            Acești termeni descriu modul corect de folosire a conținutului și instrumentelor de pe NuPuneBotul.ro.
          </p>
        </header>

        <section v-for="section in sections" :key="section.title" class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-[#46534a]">
            {{ paragraph }}
          </p>
          <ul v-if="section.items" class="grid gap-2 pl-5 text-[#46534a]">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Pagini utile</h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/disclaimer" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Disclaimer</NuxtLink>
            <NuxtLink to="/confidentialitate" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Confidențialitate</NuxtLink>
            <NuxtLink to="/cookies" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Cookies</NuxtLink>
            <NuxtLink to="/contact" class="rounded-md bg-[#162018] px-4 py-2 font-bold text-white">Contact</NuxtLink>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
const sections = [
  { title: 'Acceptarea utilizării site-ului', paragraphs: ['Prin folosirea NuPuneBotul.ro, accepți acești termeni în forma publicată pe site.', 'Dacă nu ești de acord cu termenii, poți opri folosirea site-ului.'] },
  { title: 'Scopul informațiilor de pe site', paragraphs: ['Conținutul este oferit pentru informare, educație și prevenție. Scopul este să ajute utilizatorii să recunoască mai repede semnele de risc din mesaje suspecte.', 'Nu trebuie să te bazezi exclusiv pe rezultatul verificatorului pentru decizii importante.'] },
  { title: 'Utilizare permisă', paragraphs: ['Poți folosi site-ul pentru a învăța despre tipare de fraudă, pentru a verifica orientativ un mesaj și pentru a trimite exemple anonimizate prin formular.', 'Poți distribui paginile site-ului către familie, prieteni sau colegi, cu link către sursa originală.'] },
  { title: 'Utilizare interzisă', paragraphs: ['Nu folosi site-ul într-un mod înșelător, abuziv, ilegal sau care poate afecta funcționarea lui.', 'Nu trimite prin formular date sensibile, materiale ilegale, mesaje abuzive sau conținut care nu îți aparține și nu poate fi folosit în mod rezonabil pentru scop educațional.'], items: ['nu încerca să compromiți site-ul sau serviciile integrate', 'nu folosi conținutul pentru a induce în eroare alte persoane', 'nu republica integral conținutul site-ului fără acord', 'nu prezenta analiza ca verdict oficial'] },
  { title: 'Proprietate intelectuală și conținut', paragraphs: ['Textele, structura, exemplele și materialele de pe site sunt create pentru NuPuneBotul.ro, cu excepția cazurilor în care se indică altfel.', 'Poți cita scurt sau distribui linkuri către pagini, dar republicarea integrală sau folosirea în scop înșelător nu este permisă fără acord.'] },
  { title: 'Linkuri externe', paragraphs: ['Site-ul poate include linkuri către servicii sau resurse externe. NuPuneBotul.ro nu controlează acele site-uri și nu garantează conținutul lor.', 'Verifică separat termenii și politicile serviciilor externe.'] },
  { title: 'Limitarea răspunderii', paragraphs: ['Site-ul este oferit ca resursă educațională, fără garanția că toate informațiile sunt complete, actuale sau aplicabile fiecărei situații.', 'Pentru situații urgente, financiare, juridice sau de securitate, contactează instituția relevantă, banca, platforma afectată sau autoritățile.'] },
  { title: 'Modificări', paragraphs: ['NuPuneBotul.ro poate modifica textele, structura, exemplele, funcțiile sau acești termeni fără notificare prealabilă.', 'Versiunea curentă este cea publicată pe această pagină.'] },
  { title: 'Contact', paragraphs: ['Pentru întrebări despre acești termeni sau despre folosirea site-ului, folosește pagina de contact.', 'Nu trimite date sensibile prin formular.'] }
]

useSeoMeta({
  title: 'Termeni de utilizare | NuPuneBotul.ro',
  description: 'Vezi termenii de utilizare pentru NuPuneBotul.ro și modul corect de folosire a conținutului și instrumentelor site-ului.',
  ogTitle: 'Termeni de utilizare | NuPuneBotul.ro',
  ogDescription: 'Condiții clare pentru folosirea conținutului, verificatorului și formularului NuPuneBotul.ro.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/termeni',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/termeni' }]
})
</script>
