<template>
  <section class="py-12 max-md:py-8">
    <div class="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-6">
      <header>
        <p
          class="mb-2 mt-0 text-[0.85rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]"
        >
          Teste interne
        </p>
        <h1
          class="m-0 max-w-[820px] text-[clamp(2rem,5vw,3.8rem)] leading-none text-[#162018]"
        >
          Validare analizor mesaje suspecte
        </h1>
        <p class="mt-4 max-w-[760px] text-[1.05rem] text-[#46534a]">
          Pagina compara riscul asteptat pentru exemple romanesti realiste cu
          rezultatul curent al analizorului. Este o unealta interna pentru
          calibrare, nu o pagina publica de produs.
        </p>
      </header>

      <div
        class="grid grid-cols-4 gap-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1"
      >
        <div class="rounded-lg border border-[#dce5dc] bg-white/75 p-4">
          <span
            class="block text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
            >Total</span
          >
          <strong class="mt-1 block text-3xl text-[#162018]">{{
            evaluatedCases.length
          }}</strong>
        </div>
        <div class="rounded-lg border border-[#bbdec8] bg-[#eefaf1] p-4">
          <span
            class="block text-sm font-bold uppercase tracking-[0.04em] text-[#2f7b49]"
            >Potriviri</span
          >
          <strong class="mt-1 block text-3xl text-[#14532d]">{{
            matchCount
          }}</strong>
        </div>
        <div class="rounded-lg border border-[#f4b4b4] bg-[#fff1f1] p-4">
          <span
            class="block text-sm font-bold uppercase tracking-[0.04em] text-[#a52a2a]"
            >Nepotriviri</span
          >
          <strong class="mt-1 block text-3xl text-[#991b1b]">{{
            mismatchCount
          }}</strong>
        </div>
        <div class="rounded-lg border border-[#dce5dc] bg-white/75 p-4">
          <span
            class="block text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
            >Acuratete</span
          >
          <strong class="mt-1 block text-3xl text-[#162018]"
            >{{ accuracy }}%</strong
          >
        </div>
      </div>

      <div
        class="flex flex-wrap items-end gap-3 rounded-lg border border-[#dce5dc] bg-white/75 p-4"
      >
        <label class="grid gap-1 text-sm font-bold text-[#39483f]">
          Categorie
          <select
            v-model="selectedCategory"
            class="rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]"
          >
            <option value="all">Toate categoriile</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </label>

        <label class="grid gap-1 text-sm font-bold text-[#39483f]">
          Risc asteptat
          <select
            v-model="selectedRisk"
            class="rounded-md border border-[#bfcdc0] bg-white px-3 py-2 font-medium text-[#162018]"
          >
            <option value="all">Toate nivelurile</option>
            <option v-for="risk in riskOrder" :key="risk" :value="risk">
              {{ riskLabels[risk] }}
            </option>
          </select>
        </label>

        <label
          class="flex items-center gap-2 rounded-md border border-[#bfcdc0] bg-white px-3 py-2 text-sm font-bold text-[#39483f]"
        >
          <input
            v-model="showOnlyMismatches"
            type="checkbox"
            class="h-4 w-4 accent-[#0f766e]"
          />
          Doar nepotriviri
        </label>
      </div>

      <div class="grid gap-4">
        <article
          v-for="testCase in filteredCases"
          :key="testCase.id"
          class="rounded-lg border p-4"
          :class="
            testCase.matches
              ? 'border-[#bbdec8] bg-[#f6fff8]'
              : 'border-[#f4b4b4] bg-[#fff7f7]'
          "
        >
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p
                class="m-0 text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
              >
                {{ testCase.category }}
              </p>
              <h2 class="mb-0 mt-1 text-xl text-[#162018]">
                {{ testCase.label }}
              </h2>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                class="rounded-full px-3 py-1 text-sm font-extrabold"
                :class="
                  testCase.matches
                    ? 'bg-[#dff5e6] text-[#14532d]'
                    : 'bg-[#fee2e2] text-[#991b1b]'
                "
              >
                {{ testCase.matches ? "Potrivire" : "Nepotrivire" }}
              </span>
              <span
                v-if="!testCase.matches"
                class="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-[#991b1b]"
              >
                {{ mismatchLabel(testCase) }}
              </span>
            </div>
          </div>

          <blockquote class="my-4 rounded-lg bg-white/80 p-4 text-[#29372f]">
            {{ testCase.message }}
          </blockquote>

          <div
            class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-3 max-[760px]:grid-cols-1"
          >
            <div class="rounded-lg bg-white/80 p-3">
              <span
                class="block text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
                >Risc asteptat</span
              >
              <strong class="mt-1 block text-[#162018]">{{
                riskLabels[testCase.expectedRisk]
              }}</strong>
            </div>
            <div class="rounded-lg bg-white/80 p-3">
              <span
                class="block text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
                >Risc analizor</span
              >
              <strong class="mt-1 block text-[#162018]">{{
                riskLabels[testCase.actualRisk]
              }}</strong>
            </div>
            <div class="rounded-lg bg-white/80 p-3">
              <span
                class="block text-sm font-bold uppercase tracking-[0.04em] text-[#617065]"
                >Scor</span
              >
              <strong class="mt-1 block text-[#162018]">{{
                testCase.result.score
              }}</strong>
            </div>
          </div>

          <div class="mt-4 grid gap-3">
            <div v-if="testCase.result.detectedRules.length">
              <h3 class="mb-2 mt-0 text-base text-[#162018]">
                Semnale detectate
              </h3>
              <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
                <li
                  v-for="rule in testCase.result.detectedRules"
                  :key="rule.id"
                  class="rounded-full bg-white px-3 py-1 text-sm font-bold text-[#39483f]"
                  :title="rule.description"
                >
                  {{ rule.label }}
                </li>
              </ul>
            </div>

            <div v-else class="rounded-lg bg-white/80 p-3 text-[#536056]">
              Nu au fost detectate reguli pentru acest mesaj.
            </div>

            <p
              v-if="testCase.notes"
              class="m-0 rounded-lg bg-white/80 p-3 text-sm text-[#536056]"
            >
              <strong>Nota:</strong> {{ testCase.notes }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { riskLabels, scamTestCases } from "~/data/scamTestCases";

const { analyzeScamMessage } = useScamAnalyzer();

const riskOrder = ["low", "medium", "high"];
const selectedCategory = ref("all");
const selectedRisk = ref("all");
const showOnlyMismatches = ref(false);

const evaluatedCases = computed(() =>
  scamTestCases.map((testCase) => {
    const result = analyzeScamMessage(testCase.message);
    const actualRisk = getRiskKey(result);

    return {
      ...testCase,
      result,
      actualRisk,
      matches: actualRisk === testCase.expectedRisk,
    };
  }),
);

const categories = computed(() => [
  ...new Set(scamTestCases.map((testCase) => testCase.category)),
]);

const filteredCases = computed(() =>
  evaluatedCases.value.filter((testCase) => {
    const categoryMatches =
      selectedCategory.value === "all" ||
      testCase.category === selectedCategory.value;
    const riskMatches =
      selectedRisk.value === "all" ||
      testCase.expectedRisk === selectedRisk.value;
    const mismatchMatches = !showOnlyMismatches.value || !testCase.matches;

    return categoryMatches && riskMatches && mismatchMatches;
  }),
);

const matchCount = computed(
  () => evaluatedCases.value.filter((testCase) => testCase.matches).length,
);
const mismatchCount = computed(
  () => evaluatedCases.value.length - matchCount.value,
);
const accuracy = computed(() => {
  if (!evaluatedCases.value.length) {
    return 0;
  }

  return Math.round((matchCount.value / evaluatedCases.value.length) * 100);
});

function getRiskKey(result) {
  if (result.levelClass === "risk-high") {
    return "high";
  }

  if (result.levelClass === "risk-medium") {
    return "medium";
  }

  return "low";
}

function mismatchLabel(testCase) {
  const expectedIndex = riskOrder.indexOf(testCase.expectedRisk);
  const actualIndex = riskOrder.indexOf(testCase.actualRisk);

  if (actualIndex < expectedIndex) {
    return "Posibil fals negativ";
  }

  if (actualIndex > expectedIndex) {
    return "Posibil fals pozitiv";
  }

  return "De calibrat";
}
</script>
