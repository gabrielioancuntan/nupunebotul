<template>
  <main>
    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-7">
        <header>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            Quiz pentru familie
          </p>
          <h1 class="m-0 max-w-[820px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">
            Cât de ușor recunoști o țeapă?
          </h1>
          <p class="mt-[18px] max-w-[760px] text-[1.15rem] text-[#46534a]">
            Răspunde la 10 situații scurte inspirate din fraude online frecvente. Quiz-ul este pentru învățare,
            nu pentru rușinare: scopul este să observi mai repede semnele de risc.
          </p>
        </header>

        <section v-if="!finished" class="grid grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] gap-5 max-[860px]:grid-cols-1">
          <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
            <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p class="m-0 font-bold text-[#0f766e]">
                Întrebarea {{ currentIndex + 1 }} din {{ quizQuestions.length }}
              </p>
              <span class="rounded-full bg-[#eefaf1] px-3 py-1 text-sm font-bold text-[#14532d]">
                {{ currentQuestion.topic }}
              </span>
            </div>

            <div class="h-2 overflow-hidden rounded-full bg-[#dce5dc]">
              <div class="h-full rounded-full bg-[#0f766e]" :style="{ width: progressPercent + '%' }" />
            </div>

            <h2 class="mt-6 text-2xl text-[#162018]">{{ currentQuestion.question }}</h2>
            <p class="text-[#536056]">{{ currentQuestion.context }}</p>

            <div class="mt-5 grid gap-3">
              <button
                v-for="option in currentQuestion.options"
                :key="option.text"
                type="button"
                class="rounded-lg border p-4 text-left font-bold transition"
                :class="selectedAnswer === option.text
                  ? 'border-[#0f766e] bg-[#eefaf1] text-[#14532d]'
                  : 'border-[#dce5dc] bg-white text-[#29372f] hover:border-[#0f766e]'"
                @click="selectAnswer(option.text)"
              >
                {{ option.text }}
              </button>
            </div>

            <div class="mt-6 flex flex-wrap justify-between gap-3">
              <button
                type="button"
                class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018] disabled:opacity-50"
                :disabled="currentIndex === 0"
                @click="previousQuestion"
              >
                Înapoi
              </button>
              <button
                type="button"
                class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white disabled:opacity-50"
                :disabled="!selectedAnswer"
                @click="nextQuestion"
              >
                {{ isLastQuestion ? 'Vezi rezultatul' : 'Următoarea întrebare' }}
              </button>
            </div>
          </article>

          <aside class="rounded-lg border border-[#dce5dc] bg-[#f7fbf7] p-6">
            <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Cum se calculează</h2>
            <p class="text-[#46534a]">
              Primești câte un punct pentru fiecare răspuns prudent. La final vezi explicațiile,
              nu doar scorul.
            </p>
            <p class="rounded-lg bg-white/80 p-3 text-[#536056]">
              Dacă nu ești sigur, alege varianta care te ajută să verifici separat, fără grabă.
            </p>
            <div class="mt-4 rounded-lg border border-[#dce5dc] bg-white/80 p-3 text-[#536056]">
              Trimite quiz-ul unui părinte sau bunic și vedeți împreună ce semne sunt cel mai ușor de ratat.
            </div>
          </aside>
        </section>

        <section v-else class="grid gap-6">
          <article class="rounded-lg border border-[#bbdec8] bg-[#eefaf1] p-6">
            <p class="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.04em] text-[#0f766e]">Rezultatul tău</p>
            <h2 class="mb-3 mt-0 text-3xl text-[#162018]">{{ result.title }}</h2>
            <p class="text-lg font-bold text-[#14532d]">{{ score }} din {{ quizQuestions.length }} răspunsuri prudente</p>
            <p class="max-w-[760px] text-[#46534a]">{{ result.description }}</p>
            <ul class="grid gap-2 pl-5 text-[#46534a]">
              <li v-for="item in result.recommendations" :key="item">{{ item }}</li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-3">
              <NuxtLink to="/ghid" class="rounded-md bg-[#0f766e] px-5 py-3 font-extrabold text-white">
                Vezi ghidul pentru familie
              </NuxtLink>
              <NuxtLink to="/tepe" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
                Citește cele mai comune țepe
              </NuxtLink>
              <NuxtLink to="/verifica" class="rounded-md border border-[#bfcdc0] bg-white px-5 py-3 font-extrabold text-[#162018]">
                Verifică un mesaj suspect
              </NuxtLink>
            </div>
          </article>

          <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
            <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Explicații pe întrebări</h2>
            <div v-for="(question, index) in quizQuestions" :key="question.id" class="border-t border-[#dce5dc] py-4 first:border-t-0">
              <h3 class="m-0 text-lg text-[#162018]">{{ index + 1 }}. {{ question.question }}</h3>
              <p class="mb-1 text-[#536056]">
                Răspunsul tău: <strong>{{ answers[index] || 'Fără răspuns' }}</strong>
              </p>
              <p class="mb-1 text-[#14532d]">
                Răspuns prudent: <strong>{{ question.options[question.correctIndex].text }}</strong>
              </p>
              <p class="mb-0 text-[#46534a]">{{ question.explanation }}</p>
            </div>
          </section>

          <section class="rounded-lg border border-[#dce5dc] bg-white/75 p-6">
            <h2 class="mb-3 mt-0 text-2xl text-[#162018]">Trimite quiz-ul mai departe</h2>
            <p class="max-w-[760px] text-[#46534a]">
              Îl poți trimite unui părinte, bunic sau prieten. Uneori o discuție scurtă în familie
              previne o plată grăbită sau trimiterea unui cod.
            </p>
            <button type="button" class="rounded-md bg-[#162018] px-5 py-3 font-extrabold text-white" @click="restartQuiz">
              Reia quiz-ul
            </button>
          </section>
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
const quizQuestions = [
  {
    id: 'colet-taxa',
    topic: 'Curier',
    question: 'Primești SMS: „Colet blocat. Achită taxa de 6,99 RON aici: livrare-client.click”. Ce faci?',
    context: 'Mesajul pare despre o livrare, dar include taxă mică și link.',
    correctIndex: 1,
    options: [
      { text: 'Plătesc taxa, suma este mică.' },
      { text: 'Nu accesez linkul și verific livrarea în aplicația curierului.' },
      { text: 'Trimit mesajul mai departe ca să întrebe altcineva.' }
    ],
    explanation: 'Taxa mică plus linkul sunt un tipar comun de phishing. Verificarea se face separat, nu din link.'
  },
  {
    id: 'banca-otp',
    topic: 'Bancă',
    question: 'Un mesaj spune că banca ți-a blocat contul și cere codul OTP pentru deblocare. Care este reacția prudentă?',
    context: 'Codurile de autentificare sunt foarte sensibile.',
    correctIndex: 2,
    options: [
      { text: 'Trimit codul, dacă mesajul pare de la bancă.' },
      { text: 'Răspund și cer mai multe detalii.' },
      { text: 'Nu trimit codul și contactez banca din aplicația oficială sau de pe card.' }
    ],
    explanation: 'Băncile nu ar trebui să îți ceară coduri OTP prin SMS sau mesaje. Codul este pentru autentificarea ta.'
  },
  {
    id: 'anaf-rambursare',
    topic: 'ANAF',
    question: 'Primești email: „ANAF îți returnează bani. Confirmă datele cardului aici.” Ce semn este cel mai important?',
    context: 'Mesajul promite bani și cere date financiare.',
    correctIndex: 0,
    options: [
      { text: 'Cererea de date de card printr-un link primit pe email.' },
      { text: 'Faptul că mesajul menționează ANAF.' },
      { text: 'Faptul că emailul are un ton oficial.' }
    ],
    explanation: 'Promisiunea unei rambursări combinată cu date de card și link este un semnal serios de risc.'
  },
  {
    id: 'whatsapp-cod',
    topic: 'WhatsApp',
    question: 'Un prieten îți scrie: „Ți-am trimis din greșeală codul meu WhatsApp. Trimite-mi codul primit.” Ce faci?',
    context: 'Mesajul poate veni chiar dintr-un cont compromis.',
    correctIndex: 1,
    options: [
      { text: 'Îi trimit codul, este prietenul meu.' },
      { text: 'Nu trimit codul și îl sun pe un număr cunoscut.' },
      { text: 'Îi cer să promită că nu îl folosește pentru altceva.' }
    ],
    explanation: 'Codul WhatsApp poate permite preluarea contului. Confirmarea se face prin apel separat, nu prin conversația curentă.'
  },
  {
    id: 'olx-incasare',
    topic: 'OLX',
    question: 'Vinzi ceva pe OLX. Cumpărătorul trimite un link pentru „încasarea banilor pe card”. Ce faci?',
    context: 'Fraudele de marketplace vizează des vânzătorii.',
    correctIndex: 2,
    options: [
      { text: 'Introduc datele cardului ca să primesc banii.' },
      { text: 'Îl rog să trimită linkul pe WhatsApp.' },
      { text: 'Nu folosesc linkul și păstrez tranzacția în fluxul oficial al platformei.' }
    ],
    explanation: 'Nu ai nevoie să introduci datele cardului într-un link trimis de cumpărător ca să primești bani.'
  },
  {
    id: 'premiu',
    topic: 'Premiu',
    question: 'Mesaj: „Ai câștigat 2.000 RON. Revendică premiul și achită taxa de procesare.” Ce este suspect?',
    context: 'Promisiunile de câștig rapid sunt folosite des în fraude.',
    correctIndex: 0,
    options: [
      { text: 'Premiul combinat cu taxă de procesare și acțiune rapidă.' },
      { text: 'Faptul că suma este rotundă.' },
      { text: 'Faptul că mesajul te felicită.' }
    ],
    explanation: 'Premiul plus taxă, link sau presiune de timp este o combinație riscantă.'
  },
  {
    id: 'bani-urgent',
    topic: 'Bani urgent',
    question: 'Primești: „Sunt eu, am telefon nou. Trimite urgent 700 lei pe Revolut, îți returnez azi.” Ce faci?',
    context: 'Mesajul pare personal și pune presiune financiară.',
    correctIndex: 1,
    options: [
      { text: 'Trimit banii, pare o urgență.' },
      { text: 'Sun persoana pe un număr deja cunoscut înainte de orice transfer.' },
      { text: 'Cer doar un IBAN în loc de Revolut.' }
    ],
    explanation: 'Cererea urgentă de bani trebuie verificată pe un canal separat, mai ales dacă apare un număr nou.'
  },
  {
    id: 'link-scurtat',
    topic: 'Link suspect',
    question: 'Un mesaj de la o firmă cunoscută conține un link scurtat și cere confirmare rapidă. Care este varianta prudentă?',
    context: 'Numele unui brand real nu garantează că mesajul este real.',
    correctIndex: 2,
    options: [
      { text: 'Apăs linkul, dacă firma este cunoscută.' },
      { text: 'Dau mai departe mesajul ca să pară verificat de grup.' },
      { text: 'Intru manual pe site-ul oficial sau în aplicația oficială.' }
    ],
    explanation: 'Linkurile scurtate sau domeniile ciudate trebuie evitate. Intrarea manuală reduce riscul.'
  },
  {
    id: 'date-card',
    topic: 'Date bancare',
    question: 'Un formular primit prin SMS cere numărul cardului, CVV și parola contului. Ce alegi?',
    context: 'Sunt date sensibile care pot duce la pierderi financiare.',
    correctIndex: 0,
    options: [
      { text: 'Nu completez formularul și contactez instituția oficială.' },
      { text: 'Completez doar numărul cardului, fără parolă.' },
      { text: 'Completez dacă pagina are logo-ul băncii.' }
    ],
    explanation: 'Logo-ul poate fi copiat. Datele cardului, CVV-ul și parola nu trebuie introduse în linkuri primite prin mesaj.'
  },
  {
    id: 'instalare-aplicatie',
    topic: 'Aplicație',
    question: 'Un „operator antifraudă” îți cere să instalezi AnyDesk sau TeamViewer pentru securizarea contului. Ce faci?',
    context: 'Aplicațiile de acces la distanță pot oferi control asupra telefonului sau calculatorului.',
    correctIndex: 1,
    options: [
      { text: 'Instalez aplicația dacă spune că este urgent.' },
      { text: 'Refuz și contactez banca sau instituția prin canal oficial.' },
      { text: 'Instalez aplicația, dar nu spun parola.' }
    ],
    explanation: 'Instalarea unei aplicații de control la distanță la cererea unui necunoscut este un semn puternic de risc.'
  }
]

const faq = [
  {
    question: 'Este quiz-ul doar pentru seniori?',
    answer: 'Nu. Este util pentru oricine primește SMS-uri, emailuri sau mesaje de WhatsApp și vrea să recunoască mai repede semnele de risc.'
  },
  {
    question: 'Pot să-l fac cu familia?',
    answer: 'Da. Quiz-ul este gândit tocmai ca punct de discuție pentru părinți, bunici, prieteni sau colegi.'
  },
  {
    question: 'Dacă răspund corect, înseamnă că sunt în siguranță?',
    answer: 'Nu. Un scor bun nu garantează că vei recunoaște toate fraudele. Verifică întotdeauna prin canale oficiale.'
  },
  {
    question: 'Ce fac dacă nu sunt sigur de un mesaj?',
    answer: 'Nu acționa în grabă. Poți folosi verificatorul de mesaje și poți consulta biblioteca de țepe.'
  }
]

const answers = ref(Array(quizQuestions.length).fill(''))
const currentIndex = ref(0)
const finished = ref(false)

const currentQuestion = computed(() => quizQuestions[currentIndex.value])
const selectedAnswer = computed(() => answers.value[currentIndex.value])
const isLastQuestion = computed(() => currentIndex.value === quizQuestions.length - 1)
const progressPercent = computed(() => Math.round(((currentIndex.value + 1) / quizQuestions.length) * 100))
const score = computed(() => quizQuestions.reduce((total, question, index) => {
  return total + (answers.value[index] === question.options[question.correctIndex].text ? 1 : 0)
}, 0))

const result = computed(() => {
  if (score.value >= 8) {
    return {
      title: 'Nivel bun de atenție',
      description: 'Ai observat majoritatea semnelor importante. Păstrează obiceiul de a verifica separat, mai ales când apar bani, coduri sau linkuri.',
      recommendations: [
        'Continuă să verifici mesajele prin canale oficiale.',
        'Trimite quiz-ul cuiva din familie.',
        'Citește ghidurile despre tiparele pe care le-ai ratat.'
      ]
    }
  }

  if (score.value >= 5) {
    return {
      title: 'Ai nevoie de puțină atenție în plus',
      description: 'Ai prins câteva semne importante, dar unele situații pot părea convingătoare. O regulă bună: nu da click și nu trimite coduri când ești presat.',
      recommendations: [
        'Recitește explicațiile întrebărilor ratate.',
        'Parcurge biblioteca de țepe pentru exemple concrete.',
        'Folosește verificatorul când primești un mesaj dubios.'
      ]
    }
  }

  return {
    title: 'Risc de a cădea în plase comune',
    description: 'Mai multe tipare importante au trecut neobservate. Nu este o problemă de rușine: fraudele sunt făcute tocmai ca să pară credibile.',
    recommendations: [
      'Nu lua decizii în grabă când apare presiune.',
      'Nu trimite coduri, parole sau date bancare.',
      'Citește ghidul pentru familie și discută exemplele cu cineva apropiat.'
    ]
  }
})

function selectAnswer(answer) {
  answers.value[currentIndex.value] = answer
}

function nextQuestion() {
  if (isLastQuestion.value) {
    finished.value = true
    return
  }

  currentIndex.value += 1
}

function previousQuestion() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

function restartQuiz() {
  answers.value = Array(quizQuestions.length).fill('')
  currentIndex.value = 0
  finished.value = false
}

useSeoMeta({
  title: 'Quiz: Cât de ușor recunoști o țeapă? | NuPuneBotul.ro',
  description: 'Quiz interactiv în română despre mesaje suspecte, colete false, coduri WhatsApp, OLX, bănci false și alte fraude online.',
  ogTitle: 'Quiz: Cât de ușor recunoști o țeapă?',
  ogDescription: 'Testează-ți atenția cu 10 situații scurte despre fraude online și vezi explicațiile la final.',
  ogType: 'website',
  twitterCard: 'summary',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://nupunebotul.ro/quiz' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Quiz: Cât de ușor recunoști o țeapă?',
        description: 'Quiz educațional despre recunoașterea mesajelor suspecte și a fraudelor online.',
        inLanguage: 'ro-RO',
        url: 'https://nupunebotul.ro/quiz',
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
          { '@type': 'ListItem', position: 2, name: 'Quiz anti-țeapă', item: 'https://nupunebotul.ro/quiz' }
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
