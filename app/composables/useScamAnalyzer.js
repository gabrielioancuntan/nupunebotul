import {
  defaultRecommendations,
  highRiskRules,
  legitimateContextRules,
  mediumRiskRules,
  scenarioRules
} from '~/data/scamRules'

export function useScamAnalyzer() {
  function analyzeScamMessage(message) {
    const normalizedMessage = normalizeText(message)
    const detectedLegitimateContext = legitimateContextRules.filter((rule) => rule.match(normalizedMessage, message))
    const detectedMediumRisks = mediumRiskRules.filter((rule) => rule.match(normalizedMessage, message))
    const detectedHighRisks = highRiskRules.filter((rule) => rule.match(normalizedMessage, message))
    const detectedSignals = [
      ...detectedLegitimateContext,
      ...detectedMediumRisks,
      ...detectedHighRisks
    ]
    const detectedIds = new Set(detectedSignals.map((rule) => rule.id))
    const matchedScenarios = scenarioRules.filter((rule) => rule.match(detectedIds, normalizedMessage, message))
    const detectedRules = [...matchedScenarios, ...detectedSignals]
    const rawScore = detectedRules.reduce((total, rule) => total + rule.weight, 0)
    const score = getAdjustedScore(rawScore, detectedLegitimateContext, detectedHighRisks, matchedScenarios)
    const risk = getRiskLevel(score, detectedMediumRisks, detectedHighRisks, matchedScenarios)
    const recommendations = getRecommendations(detectedRules, risk.key)

    return {
      score,
      level: risk.level,
      levelClass: risk.levelClass,
      warning: risk.key === 'high' ? 'Atenție: mesajul conține indicii specifice unor fraude cunoscute.' : '',
      explanation: getExplanation(risk.level, detectedSignals, matchedScenarios),
      detectedRules,
      detectedSignals,
      detectedLegitimateContext,
      detectedMediumRisks,
      detectedHighRisks,
      matchedScenarios,
      missingSignals: getMissingSignals(detectedSignals),
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

function getAdjustedScore(rawScore, detectedLegitimateContext, detectedHighRisks, matchedScenarios) {
  if (matchedScenarios.length || detectedHighRisks.length) {
    return rawScore
  }

  return Math.max(0, rawScore + detectedLegitimateContext.reduce((total, rule) => total + rule.weight, 0))
}

function getRiskLevel(score, detectedMediumRisks, detectedHighRisks, matchedScenarios) {
  if (matchedScenarios.some((scenario) => scenario.minimumRisk === 'high') || (score >= 7 && detectedHighRisks.length >= 2)) {
    return {
      key: 'high',
      level: 'Semnale puternice de risc',
      levelClass: 'risk-high'
    }
  }

  if (
    matchedScenarios.some((scenario) => scenario.minimumRisk === 'medium') ||
    detectedHighRisks.some((signal) => signal.forceMinimum === 'medium') ||
    detectedMediumRisks.some((signal) => signal.forceMinimum === 'medium') ||
    score >= 3
  ) {
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

function getExplanation(level, detectedSignals, matchedScenarios) {
  if (matchedScenarios.length) {
    return `Mesajul se potrivește cu ${matchedScenarios.length === 1 ? 'un scenariu cunoscut de risc' : 'mai multe scenarii cunoscute de risc'}. Nu da curs mesajului înainte să verifici separat pe canalul oficial.`
  }

  if (level === 'Semnale puternice de risc') {
    return 'Mesajul are mai multe indicii întâlnite în tentative de fraudă. Oprește-te și verifică separat înainte să faci orice acțiune.'
  }

  if (level === 'Mai multe semnale de risc') {
    return 'Mesajul conține câteva semnale suspecte. Nu acționa în grabă și verifică expeditorul înainte să dai click sau să trimiți informații.'
  }

  if (detectedSignals.length) {
    return 'Am detectat puține indicii în text, dar asta nu confirmă că mesajul este în regulă. Verifică separat înainte să acționezi.'
  }

  return 'Nu am detectat suficiente semnale clare de risc în textul introdus. Asta nu este o confirmare că mesajul este în regulă.'
}

function getMissingSignals(detectedSignals) {
  const detectedIds = new Set(detectedSignals.map((rule) => rule.id))
  const missing = []

  if (!detectedIds.has('suspicious-link')) {
    missing.push('Nu am detectat un link evident suspect în text.')
  }

  if (!detectedIds.has('auth-code-request') && !detectedIds.has('banking-data-request')) {
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

  return Array.from(recommendations).slice(0, 8)
}
