<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(960px,calc(100%_-_32px))] gap-7">
        <header>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Date personale</p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.2rem)] leading-none text-[#162018]">
            Politica de confidențialitate
          </h1>
          <p class="mt-[18px] max-w-[760px] text-[1.12rem] text-[#46534a]">
            Această pagină explică, pe scurt și pe înțeles, ce date pot fi prelucrate când folosești NuPuneBotul.ro.
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

        <section class="rounded-lg border border-[#f0c27a] bg-[#fff7e6] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Nu trimite date sensibile</h2>
          <p class="m-0 text-[#5b3b0a]">
            Te rugăm să nu trimiți parole, coduri SMS, OTP, PIN, date bancare complete, CNP, adrese complete, documente personale sau alte date sensibile prin formularul de contact.
          </p>
        </section>

        <section class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Pagini utile</h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/disclaimer" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Disclaimer</NuxtLink>
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
  {
    title: 'Cine suntem',
    paragraphs: ['NuPuneBotul.ro este un site educațional în limba română despre mesaje suspecte, phishing și fraude online.', 'Pentru solicitări legate de date personale, poți folosi pagina de contact a site-ului.']
  },
  {
    title: 'Ce date putem colecta',
    paragraphs: ['În mod normal, poți citi site-ul fără să trimiți date personale direct.', 'Unele date pot apărea când folosești formularul de contact sau când browserul tău interacționează tehnic cu site-ul.'],
    items: ['nume sau pseudonim, dacă alegi să îl completezi', 'email, dacă alegi să îl completezi', 'conținutul mesajului trimis prin formular', 'date tehnice minime, precum informații de browser, pagini accesate, momentul accesării sau date similare necesare funcționării și securității']
  },
  {
    title: 'Date trimise prin formular',
    paragraphs: ['Formularul de contact este voluntar. Îl poți folosi pentru exemple anonimizate, sugestii sau întrebări.', 'Mesajele trimise pot fi folosite pentru îmbunătățirea site-ului, a ghidurilor și a bibliotecii de exemple, fără publicarea datelor personale.']
  },
  {
    title: 'Date tehnice și analytics',
    paragraphs: ['Site-ul poate colecta date tehnice minime pentru funcționare, securitate, diagnosticarea problemelor și statistici agregate.', 'Dacă este folosit un serviciu de analytics, acesta ajută la înțelegerea traficului și la îmbunătățirea conținutului. Nu folosim aceste informații pentru a stabili verdictul unui mesaj individual.']
  },
  {
    title: 'Scopurile prelucrării',
    paragraphs: ['Datele pot fi folosite pentru a răspunde solicitărilor trimise, pentru a proteja funcționarea site-ului, pentru a îmbunătăți materialele educaționale și pentru a înțelege ce pagini sunt utile utilizatorilor.', 'Nu vindem datele trimise prin formular.']
  },
  {
    title: 'Temeiul prelucrării',
    paragraphs: ['În funcție de situație, prelucrarea poate fi bazată pe consimțământul tău când trimiți voluntar un formular, pe interesul legitim de a menține site-ul funcțional și sigur sau pe obligații legale aplicabile.', 'Această formulare este generală și poate fi ajustată dacă modul de funcționare al site-ului se schimbă.']
  },
  {
    title: 'Furnizori și servicii folosite',
    paragraphs: ['Site-ul poate folosi furnizori tehnici pentru găzduire, livrare, formular și funcționare. Exemple relevante pentru proiect sunt Vercel pentru găzduire și Formspree pentru formularul de contact.', 'Acești furnizori pot prelucra date în numele site-ului, conform propriilor politici și setări tehnice.']
  },
  {
    title: 'Cât timp păstrăm datele',
    paragraphs: ['Păstrăm datele doar cât este rezonabil necesar pentru scopurile de mai sus: răspuns la solicitări, îmbunătățirea conținutului, securitate sau cerințe tehnice.', 'Exemplele trimise pot fi păstrate într-o formă anonimizată sau generalizată pentru calibrarea ghidurilor și a bibliotecii.']
  },
  {
    title: 'Ce drepturi are utilizatorul',
    paragraphs: ['În măsura în care se aplică, poți avea dreptul de acces, rectificare, ștergere, restricționare, opoziție, portabilitate și dreptul de a depune plângere la autoritatea competentă.', 'Pentru exercitarea acestor drepturi, contactează-ne prin pagina de contact și descrie clar solicitarea.']
  },
  {
    title: 'Modificări ale politicii',
    paragraphs: ['Politica poate fi actualizată când se schimbă site-ul, formularul, furnizorii tehnici sau cerințele aplicabile.', 'Versiunea publicată pe această pagină este versiunea curentă.']
  }
]

useSeoMeta({
  title: 'Politica de confidențialitate | NuPuneBotul.ro',
  description: 'Vezi ce date poate colecta NuPuneBotul.ro, de ce le folosește, cât timp le păstrează și ce drepturi ai.',
  ogTitle: 'Politica de confidențialitate | NuPuneBotul.ro',
  ogDescription: 'Informații despre datele trimise prin formular, date tehnice, analytics, furnizori și drepturile utilizatorului.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/confidentialitate',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/confidentialitate' }]
})
</script>
