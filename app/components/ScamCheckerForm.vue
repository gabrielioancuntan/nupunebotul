<template>
  <section class="card checker-card" aria-label="Formular verificare mesaj">
    <label class="field-label" for="scam-message">Mesaj suspect</label>
    <textarea
      id="scam-message"
      v-model="message"
      class="message-box"
      placeholder="Lipește aici mesajul suspect..."
      rows="11"
    />

    <p v-if="error" class="form-error">{{ error }}</p>

    <div class="button-row form-actions">
      <button class="button button-primary" type="button" @click="analyzeMessage">
        Analizează mesajul
      </button>
      <button v-if="message" class="button button-secondary" type="button" @click="clearMessage">
        Șterge
      </button>
    </div>

    <div class="examples">
      <p class="examples-title">Testează rapid cu un exemplu:</p>
      <div class="example-buttons">
        <button
          v-for="example in examples"
          :key="example.title"
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

<style scoped>
.checker-card {
  display: grid;
  gap: 14px;
}

.field-label {
  color: #162018;
  font-weight: 800;
}

.message-box {
  width: 100%;
  min-height: 260px;
  resize: vertical;
  border: 1px solid #c9d7cc;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  color: #17211b;
  outline: none;
}

.message-box:focus {
  border-color: #147a5a;
  box-shadow: 0 0 0 3px rgba(20, 122, 90, 0.14);
}

.form-actions {
  margin-top: 0;
}

.form-error {
  margin: 0;
  color: #a13b10;
  font-weight: 700;
}

.examples {
  border-top: 1px solid #dce5dc;
  padding-top: 16px;
}

.examples-title {
  margin: 0 0 10px;
  color: #536056;
  font-weight: 700;
}

.example-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.example-buttons button {
  border: 1px solid #cad7cc;
  border-radius: 8px;
  background: #f7fbf7;
  padding: 9px 11px;
  color: #1f3328;
  cursor: pointer;
  font-weight: 700;
}

.example-buttons button:hover {
  background: #e6f2e8;
}
</style>
