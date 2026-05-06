<template>
  <article class="py-14 max-md:py-9">
    <div class="mx-auto grid w-[min(960px,calc(100%_-_32px))] gap-8">
      <nav class="text-sm font-bold text-[#0f766e]" aria-label="Navigare articol">
        <NuxtLink to="/tepe">Biblioteca de țepe</NuxtLink>
      </nav>

      <header>
        <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">
          {{ article.category }}
        </p>
        <h1 class="m-0 text-[clamp(2rem,5vw,3.8rem)] leading-none text-[#162018]">
          {{ article.title }}
        </h1>
        <p class="mt-4 max-w-[760px] text-[1.12rem] text-[#46534a]">
          {{ article.description }}
        </p>
        <div class="mt-5 flex flex-wrap gap-3">
          <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
            Verifică un mesaj suspect
          </NuxtLink>
          <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
            Înapoi la bibliotecă
          </NuxtLink>
        </div>
      </header>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Introducere</h2>
        <p v-for="paragraph in article.intro" :key="paragraph" class="text-[#46534a]">
          {{ paragraph }}
        </p>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum începe</h2>
        <p v-for="paragraph in article.howItStarts" :key="paragraph" class="text-[#46534a]">
          {{ paragraph }}
        </p>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce vrea escrocul</h2>
        <ul class="grid gap-2 pl-5 text-[#46534a]">
          <li v-for="item in article.goals" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Semne clare</h2>
        <ul class="grid gap-2 pl-5 text-[#46534a]">
          <li v-for="item in article.warningSigns" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce să nu faci</h2>
        <ul class="grid gap-2 pl-5 text-[#46534a]">
          <li v-for="item in article.dontDo" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ce faci dacă ai căzut în plasă</h2>
        <ul class="grid gap-2 pl-5 text-[#46534a]">
          <li v-for="item in article.ifVictim" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-[#fff7e6] p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Exemplu de mesaj fals</h2>
        <p class="text-[#5b3b0a]">Exemplele de mai jos sunt fictive, dar inspirate din tipare des întâlnite.</p>
        <blockquote v-for="example in article.examples" :key="example" class="rounded-lg bg-white/80 p-4 text-[#29372f]">
          {{ example }}
        </blockquote>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Checklist rapid</h2>
        <ul class="grid gap-2 pl-5 text-[#46534a]">
          <li v-for="item in article.checklist" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Întrebări frecvente</h2>
        <div v-for="item in article.faq" :key="item.question" class="border-t border-[#dce5dc] py-4 first:border-t-0">
          <h3 class="m-0 text-lg text-[#162018]">{{ item.question }}</h3>
          <p class="mb-0 text-[#46534a]">{{ item.answer }}</p>
        </div>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Articole similare</h2>
        <p class="mt-0 text-[#536056]">
          Merită citite împreună, pentru că multe fraude combină aceleași tactici:
          presiune, linkuri, coduri și cereri de bani.
        </p>
        <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          <NuxtLink
            v-for="relatedArticle in relatedArticles"
            :key="relatedArticle.slug"
            :to="`/tepe/${relatedArticle.slug}`"
            class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-4 font-bold text-[#162018]"
          >
            {{ relatedArticle.cardTitle }}
            <span class="mt-1 block font-normal text-[#536056]">{{ relatedArticle.summary }}</span>
          </NuxtLink>
        </div>
      </section>

      <section class="rounded-lg border border-[#bbdec8] bg-[#eefaf1] p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Ai primit un mesaj asemănător?</h2>
        <p class="max-w-[720px] text-[#46534a]">
          Nu te grăbi să dai click, să trimiți bani sau să introduci coduri. Lipește textul
          în verificator și caută separat canalul oficial al instituției sau platformei.
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <NuxtLink to="/verifica" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
            Verifică un mesaj suspect
          </NuxtLink>
          <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
            Înapoi la biblioteca de țepe
          </NuxtLink>
        </div>
      </section>

      <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
        <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Legături utile în site</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/verifica" class="rounded-md bg-[#162018] px-4 py-2 font-bold text-white">Verifică un mesaj</NuxtLink>
          <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Toate ghidurile</NuxtLink>
          <NuxtLink to="/ghid" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Ghid pentru familie</NuxtLink>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { getRelatedArticles } from '~/data/scamArticles'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const relatedArticles = computed(() => getRelatedArticles(props.article))
</script>
