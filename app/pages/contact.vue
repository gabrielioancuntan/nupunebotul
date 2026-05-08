<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Contact</p>
          <h1 class="m-0 max-w-[760px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">Trimite un exemplu sau o sugestie</h1>
          <p class="mt-[18px] max-w-[700px] text-[1.15rem] text-[#46534a]">
            Ai primit un SMS, email sau mesaj suspect? Îl poți trimite anonimizat ca să ne ajuți să îmbunătățim
            biblioteca de exemple și explicațiile de pe site.
          </p>

          <div class="mt-8 grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-5">
              <h2 class="mb-2 mt-0 text-xl text-[#162018]">Ce poți trimite aici</h2>
              <ul class="m-0 grid gap-2 pl-5 text-[#46534a]">
                <li>exemple de mesaje suspecte, fără date personale</li>
                <li>sugestii pentru ghiduri sau pagini noi</li>
                <li>întrebări generale despre folosirea site-ului</li>
              </ul>
            </section>

            <section class="rounded-lg border border-[#f0c27a] bg-[#fff7e6] p-5">
              <h2 class="mb-2 mt-0 text-xl text-[#162018]">Ce să NU trimiți</h2>
              <ul class="m-0 grid gap-2 pl-5 text-[#5b3b0a]">
                <li>parole, coduri SMS, OTP sau PIN</li>
                <li>date de card, CNP, IBAN complet sau documente</li>
                <li>adrese, numere de telefon sau date personale complete</li>
              </ul>
            </section>
          </div>
        </div>

        <form
          :action="formAction"
          method="POST"
          class="rounded-lg border border-[#dce5dc] bg-white/75 p-6"
          @submit.prevent="handleSubmit"
        >
          <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">Formular MVP</p>
          <h2 class="mb-4 mt-0 text-2xl text-[#162018]">Scrie mesajul</h2>

          <div
            v-if="showSuccessMessage"
            class="mb-4 flex items-start justify-between gap-3 rounded-lg border border-[#a7d7b8] bg-[#e8f8ee] p-4 text-[#14532d]"
            role="status"
            aria-live="polite"
          >
            <p class="m-0 text-sm font-bold leading-relaxed">
              Mesajul a fost trimis. Mulțumim! Exemplul tău ne poate ajuta să îmbunătățim ghidurile și biblioteca de țepe.
            </p>
            <button
              type="button"
              class="rounded-md px-2 py-1 text-sm font-extrabold text-[#14532d] hover:bg-white/70"
              aria-label="Închide mesajul de succes"
              @click="dismissSuccessMessage"
            >
              x
            </button>
          </div>

          <p v-if="!formAction" class="rounded-lg bg-[#fff7e6] p-3 text-sm font-bold text-[#5b3b0a]">
            Formularul nu este configurat încă.
          </p>

          <p v-if="submitStatus === 'error'" class="rounded-lg bg-[#fff1f1] p-3 text-sm font-bold text-[#991b1b]">
            Nu am putut trimite mesajul. Încearcă din nou mai târziu.
          </p>

          <label class="mb-4 grid gap-1 font-bold text-[#39483f]">
            Nume sau pseudonim <span class="font-normal text-[#617065]">(opțional)</span>
            <input name="name" type="text" autocomplete="name" class="rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]">
          </label>

          <label class="mb-4 grid gap-1 font-bold text-[#39483f]">
            Email <span class="font-normal text-[#617065]">(opțional)</span>
            <input name="email" type="email" autocomplete="email" class="rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]">
          </label>

          <label class="mb-4 grid gap-1 font-bold text-[#39483f]">
            Tip mesaj
            <select name="message_type" class="rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]">
              <option>Exemplu de țeapă</option>
              <option>Sugestie</option>
              <option>Întrebare</option>
            </select>
          </label>

          <label class="mb-4 grid gap-1 font-bold text-[#39483f]">
            Mesaj <span class="text-[#b45309]">*</span>
            <textarea
              name="message"
              required
              rows="7"
              placeholder="Lipește aici mesajul suspect după ce ai șters datele personale."
              class="resize-y rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]"
            />
          </label>

          <label class="mb-5 flex items-start gap-3 rounded-lg bg-[#f7fbf7] p-3 text-sm font-bold text-[#39483f]">
            <input name="no_sensitive_data" type="checkbox" required class="mt-1 h-4 w-4 flex-none accent-[#0f766e]">
            <span>Confirm că nu trimit parole, coduri SMS, date bancare, CNP sau alte date sensibile.</span>
          </label>

          <button
            type="submit"
            class="w-full rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white disabled:cursor-not-allowed disabled:bg-[#9fb3a7]"
            :disabled="!formAction || isSubmitting"
          >
            {{ isSubmitting ? 'Se trimite...' : 'Trimite mesajul' }}
          </button>

          <p class="mb-0 mt-4 text-sm text-[#536056]">
            Mesajele primite pot fi folosite pentru îmbunătățirea site-ului și a bibliotecii de exemple.
            Nu trimite date sensibile. Răspunsul personal nu este garantat imediat.
            Detalii despre prelucrarea datelor sunt în
            <NuxtLink to="/confidentialitate" class="font-extrabold text-[#0f766e] hover:text-[#0b5f59]">
              Politica de confidențialitate
            </NuxtLink>.
          </p>
        </form>
      </div>
    </section>

    <section class="pb-14">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6">
        <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
          <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Înainte să trimiți</h2>
          <p class="max-w-[820px] text-[#46534a]">
            Dacă mesajul pare urgent sau implică bani, verifică separat prin surse oficiale. Pentru o analiză rapidă,
            poți folosi verificatorul înainte să ne trimiți exemplul.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <NuxtLink to="/verifica" class="rounded-md bg-[#162018] px-4 py-2 font-bold text-white">Verifică un mesaj</NuxtLink>
            <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Biblioteca de țepe</NuxtLink>
            <NuxtLink to="/ghid" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Ghid anti-fraudă</NuxtLink>
            <NuxtLink to="/confidentialitate" class="rounded-md border border-[#bfcdc0] bg-white px-4 py-2 font-bold text-[#162018]">Confidențialitate</NuxtLink>
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
const config = useRuntimeConfig()
const formAction = computed(() => config.public.formspreeEndpoint || '')
const isSubmitting = ref(false)
const submitStatus = ref('')
const showSuccessMessage = computed(() => submitStatus.value === 'success')
let successMessageTimer

const faq = [
  {
    question: 'Pot trimite un SMS suspect?',
    answer: 'Da, dar șterge înainte numele, numerele de telefon, codurile, adresele și orice date personale.'
  },
  {
    question: 'Pot trimite captură de ecran?',
    answer: 'Pentru MVP, formularul este gândit pentru text. Dacă folosești ulterior o soluție cu fișiere, anonimizează captura înainte.'
  },
  {
    question: 'Ce fac dacă am dat deja datele cardului?',
    answer: 'Contactează imediat banca, blochează cardul dacă este nevoie și verifică tranzacțiile. Nu aștepta răspuns prin formular.'
  },
  {
    question: 'Trimiteți răspuns personalizat?',
    answer: 'Nu garantăm răspuns rapid sau personalizat. Mesajele ajută în primul rând la îmbunătățirea materialelor educaționale.'
  }
]

async function handleSubmit(event) {
  if (!formAction.value) {
    return
  }

  clearSuccessMessageTimer()
  isSubmitting.value = true
  submitStatus.value = ''

  try {
    const response = await fetch(formAction.value, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Formspree submit failed')
    }

    event.target.reset()
    submitStatus.value = 'success'
    successMessageTimer = window.setTimeout(() => {
      submitStatus.value = ''
    }, 7000)
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

function dismissSuccessMessage() {
  clearSuccessMessageTimer()
  submitStatus.value = ''
}

function clearSuccessMessageTimer() {
  if (successMessageTimer) {
    window.clearTimeout(successMessageTimer)
    successMessageTimer = null
  }
}

onBeforeUnmount(() => {
  clearSuccessMessageTimer()
})

useSeoMeta({
  title: 'Contact | Trimite exemple de mesaje suspecte | NuPuneBotul.ro',
  description: 'Trimite exemple anonimizate de mesaje suspecte, sugestii sau întrebări pentru NuPuneBotul.ro. Nu trimite parole, coduri, date bancare sau CNP.',
  ogTitle: 'Contact NuPuneBotul.ro',
  ogDescription: 'Trimite exemple anonimizate de mesaje suspecte, sugestii sau întrebări, fără date sensibile.',
  ogType: 'website',
  ogUrl: 'https://nupunebotul.ro/contact',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/contact' }]
})
</script>
