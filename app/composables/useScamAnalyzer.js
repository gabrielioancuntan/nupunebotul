import { defaultRecommendations, scamRules } from '~/data/scamRules'

export function useScamAnalyzer() {
  function analyzeScamMessage(message) {
    const normalizedMessage = normalizeText(message)
    const detectedRules = scamRules.filter((rule) => rule.match(normalizedMessage, message))
    const score = detectedRules.reduce((total, rule) => total + rule.weight, 0)
    const risk = getRiskLevel(score, detectedRules.length)
    const recommendations = getRecommendations(detectedRules, risk.key)

    return {
      score,
      level: risk.level,
      levelClass: risk.levelClass,
      explanation: getExplanation(risk.level, detectedRules),
      detectedRules,
      missingSignals: getMissingSignals(detectedRules),
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
      key: 'high',
      level: 'Semnale puternice de risc',
      levelClass: 'risk-high'
    }
  }

  if (score >= 4 || detectedCount >= 3) {
    return {
      key: 'medium',
      level: 'Mai multe semnale de risc',
      levelClass: 'risk-medium'
    }
  }

  return {
    key: 'low',
    level: 'Nivel redus de semnale de risc',
    levelClass: 'risk-low'
  }
}

function getExplanation(level, detectedRules) {
  if (level === 'Semnale puternice de risc') {
    return 'Mesajul are mai multe semne des întâlnite în tentative de fraudă. Tratează-l ca pe un mesaj periculos până verifici prin surse oficiale.'
  }

  if (level === 'Mai multe semnale de risc') {
    return 'Mesajul conține câteva semnale suspecte. Nu acționa în grabă și verifică expeditorul înainte să dai click sau să trimiți informații.'
  }

  if (detectedRules.length) {
    return 'Am detectat puține indicii în text, dar asta nu confirmă că mesajul este în regulă. Verifică separat înainte să acționezi.'
  }

  return 'Nu am detectat suficiente semnale clare de risc în textul introdus. Asta nu înseamnă că mesajul este sigur.'
}

function getMissingSignals(detectedRules) {
  const detectedIds = new Set(detectedRules.map((rule) => rule.id))
  const missing = []

  if (!detectedIds.has('suspicious-link')) {
    missing.push('Nu am detectat un link evident suspect în text.')
  }

  if (!detectedIds.has('sms-code') && !detectedIds.has('banking-data')) {
    missing.push('Nu am detectat o cerere clară de cod SMS, parolă sau date bancare.')
  }

  if (!detectedIds.has('urgency') && !detectedIds.has('fear-pressure')) {
    missing.push('Nu am detectat presiune evidentă de tip „urgent”, blocare sau amenințare.')
  }

  return missing.slice(0, 3)
}

function getRecommendations(detectedRules, level) {
  const recommendations = new Set(defaultRecommendations[level])

  detectedRules.forEach((rule) => {
    rule.recommendations.forEach((recommendation) => recommendations.add(recommendation))
  })

  return Array.from(recommendations).slice(0, 7)
}
