import { defaultRecommendations, scamRules } from '~/data/scamRules'

export function useScamAnalyzer() {
  function analyzeScamMessage(message) {
    const normalizedMessage = normalizeText(message)
    const detectedRules = scamRules.filter((rule) => rule.match(normalizedMessage, message))
    const score = detectedRules.reduce((total, rule) => total + rule.weight, 0)
    const risk = getRiskLevel(score, detectedRules.length)
    const recommendations = getRecommendations(detectedRules, risk.level)

    return {
      score,
      level: risk.level,
      levelClass: risk.levelClass,
      explanation: getExplanation(risk.level, detectedRules),
      detectedRules,
      recommendations
    }
  }

  return {
    analyzeScamMessage
  }
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function getRiskLevel(score, detectedCount) {
  if (score >= 8 || detectedCount >= 5) {
    return {
      level: 'Risc ridicat',
      levelClass: 'risk-high'
    }
  }

  if (score >= 4 || detectedCount >= 3) {
    return {
      level: 'Risc mediu',
      levelClass: 'risk-medium'
    }
  }

  return {
    level: 'Risc scăzut',
    levelClass: 'risk-low'
  }
}

function getExplanation(level, detectedRules) {
  if (level === 'Risc ridicat') {
    return 'Mesajul are mai multe semne des întâlnite în tentative de fraudă. Tratează-l ca pe un mesaj periculos până verifici prin surse oficiale.'
  }

  if (level === 'Risc mediu') {
    return 'Mesajul conține câteva semnale suspecte. Nu acționa în grabă și verifică expeditorul înainte să dai click sau să trimiți informații.'
  }

  if (detectedRules.length) {
    return 'Am găsit puține semne suspecte, dar mesajul tot merită verificat cu atenție.'
  }

  return 'Nu am găsit semne evidente în acest text. Totuși, verifică linkurile, expeditorul și cererile neobișnuite înainte să răspunzi.'
}

function getRecommendations(detectedRules, level) {
  const recommendations = new Set(defaultRecommendations[level])

  detectedRules.forEach((rule) => {
    rule.recommendations.forEach((recommendation) => recommendations.add(recommendation))
  })

  return Array.from(recommendations).slice(0, 7)
}
