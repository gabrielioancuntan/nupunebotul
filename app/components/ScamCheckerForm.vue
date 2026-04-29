<template>
  <section class="grid gap-3.5 rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]" aria-label="Formular verificare mesaj">
    <label class="font-extrabold text-[#162018]" for="scam-message">Mesaj suspect</label>
    <textarea
      id="scam-message"
      v-model="message"
      class="min-h-[260px] w-full resize-y rounded-lg border border-[#c9d7cc] bg-white p-4 text-[#17211b] outline-none focus:border-[#147a5a] focus:shadow-[0_0_0_3px_rgba(20,122,90,0.14)]"
      placeholder="Lipește aici mesajul suspect..."
      rows="11"
    />

    <p v-if="error" class="m-0 font-bold text-[#a13b10]">{{ error }}</p>

    <div class="mt-0 flex flex-wrap items-center gap-3">
      <button class="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#147a5a] px-[18px] py-3 font-bold text-white max-md:w-full" type="button" @click="analyzeMessage">
        Analizează mesajul
      </button>
      <button v-if="message" class="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cad7cc] bg-white px-[18px] py-3 font-bold text-[#1e2a22] max-md:w-full" type="button" @click="clearMessage">
        Șterge
      </button>
    </div>

    <div class="border-t border-[#dce5dc] pt-4">
      <p class="mb-2.5 mt-0 font-bold text-[#536056]">Testează rapid cu un exemplu:</p>
      <div class="flex flex-wrap gap-2.5">
        <button
          v-for="example in examples"
          :key="example.title"
          class="cursor-pointer rounded-lg border border-[#cad7cc] bg-[#f7fbf7] px-3 py-2 font-bold text-[#1f3328] hover:bg-[#e6f2e8]"
          type="button"
          @click="useExample(example.text)"
        >
          {{ example.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['analyzed'])
const { analyzeScamMessage } = useScamAnalyzer()

const message = ref('')
const error = ref('')

const examples = [
  {
    title: 'Colet fals',
    text: 'Coletul dvs. este blocat. Achitați urgent taxa de 7.99 lei aici: http://livrare-verificare.example/ro'
  },
  {
    title: 'Cod bancar',
    text: 'Banca vă informează că accesul va fi suspendat. Trimiteți codul primit prin SMS pentru verificarea contului.'
  },
  {
    title: 'Premiu rapid',
    text: 'Felicitări! Ați câștigat un premiu garantat. Instalați aplicația și confirmați datele cardului în 10 minute.'
  }
]

function analyzeMessage() {
  error.value = ''

  if (message.value.trim().length < 12) {
    error.value = 'Adaugă un mesaj puțin mai lung ca să îl putem verifica.'
    return
  }

  emit('analyzed', analyzeScamMessage(message.value))
}

function useExample(text) {
  message.value = text
  error.value = ''
  emit('analyzed', analyzeScamMessage(text))
}

function clearMessage() {
  message.value = ''
  error.value = ''
  emit('analyzed', null)
}
</script>
