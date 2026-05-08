<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(960px,calc(100%_-_32px))] gap-7">
        <header>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Cookies</p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.2rem)] leading-none text-[#162018]">
            Politica de cookies
          </h1>
          <p class="mt-[18px] max-w-[760px] text-[1.12rem] text-[#46534a]">
            Această pagină explică modul în care NuPuneBotul.ro poate folosi cookies și tehnologii similare pentru funcționare, măsurare și îmbunătățire.
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
            <NuxtLink to="/confidentialitate" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Confidențialitate</NuxtLink>
            <NuxtLink to="/disclaimer" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Disclaimer</NuxtLink>
            <NuxtLink to="/termeni" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Termeni</NuxtLink>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
const sections = [
  { title: 'Ce sunt cookies', paragraphs: ['Cookies sunt fișiere mici sau tehnologii similare folosite de site-uri pentru funcționare, preferințe, securitate, măsurare sau analiză.', 'Unele tehnologii similare pot fi folosite de browser, furnizori de găzduire, servicii de formular sau servicii de analytics.'] },
  { title: 'Ce tipuri de cookies poate folosi site-ul', paragraphs: ['NuPuneBotul.ro poate folosi cookies strict necesare pentru funcționarea site-ului și, dacă sunt configurate, cookies sau tehnologii de măsurare pentru statistici agregate.', 'Pagina este scrisă astfel încât să rămână compatibilă cu o implementare viitoare de banner sau manager de consimțământ.'] },
  { title: 'Cookies necesare', paragraphs: ['Cookies necesare ajută site-ul să funcționeze corect, să livreze paginile, să păstreze securitatea sau să susțină funcții de bază.', 'Acestea nu sunt folosite pentru a promite o analiză perfectă a mesajelor.'] },
  { title: 'Cookies de măsurare / analytics', paragraphs: ['Dacă site-ul folosește analytics, datele sunt folosite pentru a înțelege traficul, paginile vizitate și performanța conținutului.', 'Scopul este îmbunătățirea site-ului, nu identificarea unui utilizator anume în analiza mesajelor suspecte.'] },
  { title: 'Cum poate utilizatorul controla cookies', paragraphs: ['Poți controla sau șterge cookies din setările browserului. Majoritatea browserelor permit blocarea cookies, ștergerea lor sau notificări înainte de salvare.', 'Blocarea unor cookies poate afecta funcționarea anumitor părți ale site-ului sau ale serviciilor integrate.'], items: ['verifică setările de confidențialitate ale browserului', 'șterge cookies salvate dacă dorești', 'folosește modurile de protecție oferite de browser', 'revino la această pagină pentru actualizări'] },
  { title: 'Modificări ale politicii', paragraphs: ['Politica de cookies poate fi actualizată când se schimbă serviciile folosite de site sau când apar funcții noi.', 'Versiunea curentă este cea publicată pe această pagină.'] }
]

useSeoMeta({
  title: 'Politica de cookies | NuPuneBotul.ro',
  description: 'Află cum folosește NuPuneBotul.ro cookies și tehnologii similare pentru funcționare, măsurare și îmbunătățirea site-ului.',
  ogTitle: 'Politica de cookies | NuPuneBotul.ro',
  ogDescription: 'Informații despre cookies necesare, analytics și opțiunile de control din browser.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/cookies',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/cookies' }]
})
</script>
