const hasAny = (text, words) => words.some((word) => text.includes(word))

export const scamRules = [
  {
    id: 'sensitive-context',
    label: 'Context sensibil',
    description: 'Mesajul menționează o instituție, un cont, o plată, un cod sau un serviciu unde verificarea oficială este importantă.',
    weight: 1,
    match: (text) => hasAny(text, ['banca', 'anaf', 'politie', 'curier', 'olx', 'whatsapp', 'booking', 'revolut', 'cont blocat', 'cod', 'link', 'plata']),
    recommendations: [
      'Nu acționa direct din mesaj.',
      'Verifică separat pe canalul oficial.',
      'Nu introduce date sensibile.'
    ]
  },
  {
    id: 'urgency',
    label: 'Urgență falsă',
    description: 'Mesajul încearcă să te facă să acționezi imediat.',
    weight: 2,
    match: (text) => hasAny(text, ['urgent', 'imediat', 'in 10 minute', 'in 24 de ore', 'expira', 'ultima sansa', 'cont blocat', 'suspendat']),
    recommendations: ['Nu acționa în grabă.', 'Verifică situația din aplicația sau site-ul oficial.']
  },
  {
    id: 'payment',
    label: 'Cerere de plată',
    description: 'Apare o taxă, plată sau confirmare financiară cerută rapid.',
    weight: 2,
    match: (text) => hasAny(text, ['achita', 'plateste', 'plata', 'taxa', 'transfer', 'cardul', 'datele cardului', 'iban']),
    recommendations: ['Nu introduce date bancare dintr-un link primit prin mesaj.', 'Dacă ai introdus datele cardului, sună imediat la bancă.']
  },
  {
    id: 'banking-data',
    label: 'Date bancare sau parole',
    description: 'Mesajul cere date sensibile pe care o instituție serioasă nu le cere prin mesaj.',
    weight: 3,
    match: (text) => hasAny(text, ['parola', 'pin', 'date bancare', 'datele cardului', 'cvv', 'cod securitate', 'autentificare', 'verificarea contului']),
    recommendations: ['Nu trimite parole, PIN sau CVV.', 'Contactează banca doar prin numărul de pe card sau din aplicația oficială.']
  },
  {
    id: 'sms-code',
    label: 'Cod primit prin SMS',
    description: 'Ți se cere un cod de verificare, semn foarte riscant.',
    weight: 3,
    match: (text) => hasAny(text, ['cod sms', 'codul primit', 'cod de verificare', 'cod otp', 'otp', 'codul de securitate']),
    recommendations: ['Nu trimite coduri primite prin SMS.', 'Dacă ai trimis un cod bancar, contactează imediat banca.']
  },
  {
    id: 'suspicious-link',
    label: 'Link suspect',
    description: 'Mesajul conține un link sau te împinge să deschizi o pagină.',
    weight: 2,
    match: (text, originalText) => /(https?:\/\/|www\.|bit\.ly|tinyurl|t\.me|wa\.me|\.click|\.top|\.xyz)/i.test(originalText),
    recommendations: ['Nu apăsa linkul.', 'Intră manual pe site-ul oficial, nu prin linkul din mesaj.']
  },
  {
    id: 'impersonation',
    label: 'Imită o instituție sau un brand',
    description: 'Textul pare să folosească numele unei bănci, firme sau instituții cunoscute.',
    weight: 2,
    match: (text) => hasAny(text, ['banca', 'anaf', 'politie', 'curier', 'fan courier', 'sameday', 'olx', 'whatsapp', 'booking', 'revolut', 'posta romana']),
    recommendations: ['Contactează instituția doar prin canalele oficiale.', 'Nu folosi numere sau linkuri primite în mesajul suspect.']
  },
  {
    id: 'quick-money',
    label: 'Promisiune de bani rapizi',
    description: 'Apare o promisiune de câștig rapid, premiu sau investiție sigură.',
    weight: 2,
    match: (text) => hasAny(text, ['castig garantat', 'ai castigat', 'premiu', 'investitie', 'profit rapid', 'bani rapid', 'castiga acum', 'fara risc']),
    recommendations: ['Fii atent la promisiuni de bani rapizi sau câștiguri garantate.', 'Caută informații din surse independente înainte de orice plată.']
  },
  {
    id: 'fear-pressure',
    label: 'Presiune sau frică',
    description: 'Mesajul încearcă să te sperie cu blocări, amenzi sau consecințe imediate.',
    weight: 2,
    match: (text) => hasAny(text, ['amenda', 'dosar', 'blocare', 'restrictionat', 'inchis contul', 'penalizare', 'executare', 'confirmati acum']),
    recommendations: ['Ia o pauză înainte să răspunzi.', 'Verifică informația printr-un canal oficial.']
  },
  {
    id: 'install-app',
    label: 'Cere instalarea unei aplicații',
    description: 'Mesajul te împinge să instalezi o aplicație sau să oferi acces pe telefon.',
    weight: 3,
    match: (text) => hasAny(text, ['instaleaza aplicatia', 'descarca aplicatia', 'anydesk', 'teamviewer', 'acces la telefon', 'control la distanta']),
    recommendations: ['Nu instala aplicații cerute de necunoscuți.', 'Nu oferi acces la telefon sau calculator unei persoane necunoscute.']
  },
  {
    id: 'move-chat',
    label: 'Mută conversația pe alt canal',
    description: 'Ți se cere să continui discuția pe WhatsApp, Telegram sau alt canal privat.',
    weight: 1,
    match: (text) => hasAny(text, ['scrie-mi pe whatsapp', 'continua pe whatsapp', 'telegram', 't.me', 'muta conversatia', 'discutam pe whatsapp']),
    recommendations: ['Păstrează discuția pe platforma oficială atunci când vinzi sau cumperi ceva.', 'Nu accepta mutarea conversației dacă apare o plată sau un link suspect.']
  },
  {
    id: 'bad-phrasing',
    label: 'Formulare ciudată',
    description: 'Textul are formulări neobișnuite sau greșeli care apar des în mesaje false.',
    weight: 1,
    match: (text) => hasAny(text, ['draga client', 'stimate utilizator', 'contul dvs a fost', 'va rugam confirmati', 'pentru a evita suspendarea', 'verificati identitatea dvs']),
    recommendations: ['Privește cu atenție mesajele cu formulări nefirești.', 'Compară mesajul cu exemple de pe site-ul oficial al instituției.']
  }
]

export const defaultRecommendations = {
  low: [
    'Nu trata rezultatul ca pe o confirmare că mesajul este sigur.',
    'Verifică expeditorul printr-un canal oficial înainte să răspunzi.',
    'Nu introduce date sensibile într-un link primit prin mesaj.'
  ],
  medium: [
    'Nu apăsa linkul până nu verifici sursa.',
    'Nu trimite coduri, parole sau date bancare.',
    'Contactează instituția doar prin canalele oficiale.'
  ],
  high: [
    'Nu apăsa linkul.',
    'Nu trimite coduri primite prin SMS.',
    'Nu introduce date bancare.',
    'Contactează instituția doar prin canalele oficiale.',
    'Dacă ai introdus datele cardului, sună imediat la bancă.'
  ]
}
