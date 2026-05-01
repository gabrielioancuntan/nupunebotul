const escapeRegExp = (term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const hasTerm = (text, term) => {
  if (term.includes(' ')) {
    return text.includes(term)
  }

  return new RegExp(`\\b${escapeRegExp(term)}\\b`).test(text)
}

const hasAny = (text, words) => words.some((word) => hasTerm(text, word))
const hasAllGroups = (text, groups) => groups.every((words) => hasAny(text, words))

const legitimateLogisticsWords = [
  'awb',
  'tracking',
  'urmarire colet',
  'easybox',
  'locker',
  'fanbox',
  'ship & go',
  'cod de ridicare',
  'pin de ridicare',
  'qr de ridicare',
  'ridicare colet'
]
const officialInfoWords = ['aplicatia oficiala', 'site-ul oficial', 'siteul oficial', 'site-ul fancourier.ro', 'nu iti vom cere niciodata']

const urgencyWords = ['urgent', 'imediat', 'acum', 'repede', 'azi', 'te rog repede', 'in 10 minute', 'in 24 de ore', 'ultima sansa']
const verificationWords = ['verifica', 'verificare', 'confirma', 'confirmare', 'deblocheaza', 'deblocare', 'actualizeaza', 'validare', 'activeaza']
const secrecyWords = ['nu spune nimanui', 'nu anunta pe nimeni', 'ramane intre noi']
const privateChannelWords = ['whatsapp', 'telegram', 'signal', 't.me', 'wa.me']
const courierWords = ['colet', 'coletul', 'curier', 'curierul', 'livrare', 'pachet', 'pachetul', 'fan courier', 'sameday', 'posta romana', 'easybox', 'locker', 'fanbox']
const deliveryProblemWords = ['retinut', 'nu poate fi livrat', 'nu a putut finaliza livrarea', 'redirectionare', 'taxa de livrare', 'confirma livrarea', 'actualizare date livrare', 'actualizeaza datele de livrare']
const moneyWords = ['bani', 'banii', 'suma', 'lei', 'euro', 'ron', 'plata', 'plati', 'transfer', 'taxa', 'comision', 'iban', 'revolut']
const sendMoneyWords = ['trimite', 'trimiti', 'trimite-mi', 'transfera', 'transferati', 'plateste', 'platiti', 'achita', 'achitati']
const imperativeWords = ['vreau sa', 'trebuie sa', 'te rog sa', 'am nevoie sa', 'fa plata', 'trimite acum', 'transfera acum']
const bankContextWords = ['banca', 'cont', 'contul', 'card', 'bt', 'bcr', 'brd', 'cec', 'ing', 'raiffeisen', 'unicredit', 'revolut']
const institutionWords = ['banca', 'anaf', 'politie', 'bnr', 'institutie', 'cont', 'contul', 'revolut', 'cec', 'bcr', 'brd', 'ing', 'raiffeisen', 'unicredit', 'bt']
const authorityWords = ['politie', 'bnr', 'anaf', 'institutie']
const accountProblemWords = ['cont blocat', 'cont suspendat', 'acces suspendat', 'verificarea contului', 'confirmarea contului', 'confirmati contul', 'confirma contul', 'contul tau este investigat', 'contul tau a fost blocat', 'contul tau a fost suspendat', 'contul dvs a fost blocat', 'contul dvs a fost suspendat', 'contul a fost blocat', 'contul a fost suspendat', 'restrictionat temporar', 'cont compromis', 'card blocat', 'mi s-a blocat cardul', 'mi sa blocat cardul']
const sensitiveDataWords = ['cnp', 'date personale', 'parola', 'pin', 'cvc', 'cvv', 'datele cardului', 'date card', 'date bancare']
const codeWords = ['cod sms', 'codul primit', 'cod de verificare', 'codul de verificare', 'cod de autentificare', 'codul de autentificare', 'cod otp', 'otp', 'codul de securitate', 'cod 3d secure', '3d secure', 'cod whatsapp', 'pin whatsapp', 'cod de asociere', 'codul de asociere']
const voteContestWords = ['voteaza', 'vot', 'concurs', 'bursa', 'scholarship', 'competitie', 'dance', 'ajuta-ma', 'ajuta ma']
const prizeWords = ['premiu', 'revendica', 'ai castigat', 'am castigat', 'castig', 'castigat rapid', 'castig garantat', 'bani rapizi', 'recompensa', 'profit rapid', 'profit garantat', 'investitie', 'investeste acum', 'investit', 'fara risc', 'castiga acum', 'plata zilnica', 'oportunitate remote']
const friendFamilyWords = ['mama', 'tata', 'frate', 'sora', 'fiule', 'prietene', 'sunt eu', 'whatsapp nou', 'poti sa ma ajuti', 'am nevoie de bani', 'mi s-a blocat cardul', 'mi sa blocat cardul']
const marketplaceWords = ['olx', 'vanzare', 'cumparator', 'cumparatorul', 'articol platit', 'livrare prin olx', 'primesti banii', 'incasare', 'incasezi']
const authorityPressureWords = ['urgenta', 'urgent', 'document', 'ancheta', 'cont compromis', 'dosar', 'activitate suspecta', 'juridica']
const linkPattern = /(https?:\/\/|www\.|bit\.ly|tinyurl|t\.me|wa\.me|\.click|\.top|\.xyz)/i

export const legitimateContextRules = [
  {
    id: 'logistics-operational-context',
    label: 'Context logistic obișnuit',
    description: 'Textul menționează AWB, tracking, locker sau cod de ridicare. Acestea nu sunt semnale puternice singure.',
    weight: -1,
    match: (text) => hasAny(text, legitimateLogisticsWords),
    recommendations: ['Verifică statusul coletului doar în aplicația sau site-ul oficial al curierului.']
  }
]

export const mediumRiskRules = [
  {
    id: 'sensitive-context',
    label: 'Context sensibil',
    description: 'Mesajul menționează o instituție, un cont, o plată sau un serviciu unde verificarea oficială este importantă.',
    weight: 1,
    match: (text) => hasAny(text, ['banca', 'anaf', 'politie', 'bnr', 'curier', 'olx', 'whatsapp', 'booking', 'revolut', 'cont blocat', 'plata']),
    recommendations: ['Nu acționa direct din mesaj.', 'Verifică separat pe canalul oficial.', 'Nu introduce date sensibile.']
  },
  {
    id: 'courier-context',
    label: 'Context de livrare sau colet',
    description: 'Mesajul menționează colet, curier, livrare sau redirecționare.',
    weight: 1,
    match: (text) => hasAny(text, courierWords),
    recommendations: ['Verifică livrarea doar în aplicația sau site-ul oficial al curierului.']
  },
  {
    id: 'delivery-problem',
    label: 'Problemă de livrare invocată',
    description: 'Textul sugerează o problemă de livrare sau o redirecționare care cere acțiune.',
    weight: 2,
    match: (text) => hasAny(text, courierWords) && hasAny(text, [...deliveryProblemWords, 'blocat']),
    recommendations: ['Nu plăti taxe de livrare din linkuri primite prin mesaj.']
  },
  {
    id: 'direct-money-request',
    label: 'Cerere directă de bani',
    description: 'Mesajul cere trimiterea, plata sau transferul unor bani, chiar dacă nu include link sau nume de bancă.',
    weight: 3,
    match: (text) => hasAllGroups(text, [moneyWords, sendMoneyWords]),
    recommendations: ['Nu trimite bani doar pe baza unui mesaj.', 'Verifică persoana sau instituția printr-un canal separat.', 'Sună direct la numărul cunoscut, nu la un număr primit în mesaj.']
  },
  {
    id: 'short-financial-pressure',
    label: 'Mesaj scurt cu presiune financiară',
    description: 'Mesajul este scurt și cere bani într-un mod grăbit sau imperativ, fără context normal.',
    weight: 2,
    match: (text) => text.length < 120 && hasAllGroups(text, [moneyWords, sendMoneyWords]) && hasAny(text, [...urgencyWords, ...imperativeWords]),
    recommendations: ['Oprește-te înainte să faci plata.', 'Cere confirmare printr-un canal cunoscut și independent.', 'Nu folosi numărul de telefon primit în mesaj ca singură verificare.']
  },
  {
    id: 'urgency',
    label: 'Presiune de timp',
    description: 'Mesajul încearcă să te facă să acționezi imediat.',
    weight: 1,
    match: (text) => hasAny(text, [...urgencyWords, 'expira', 'suspendat']),
    recommendations: ['Nu acționa în grabă.', 'Verifică situația din aplicația sau site-ul oficial.']
  },
  {
    id: 'verification-pressure',
    label: 'Cerere de verificare sau confirmare',
    description: 'Mesajul cere confirmare, verificare, deblocare sau actualizare.',
    weight: 1,
    match: (text) => hasAny(text, verificationWords) && !hasAny(text, officialInfoWords),
    recommendations: ['Nu confirma date sau conturi dintr-un mesaj primit pe neașteptate.']
  },
  {
    id: 'payment',
    label: 'Cerere de plată',
    description: 'Apare o taxă, plată sau confirmare financiară cerută rapid.',
    weight: 2,
    match: (text) => hasAny(text, ['achita', 'achitati', 'plateste', 'platiti', 'plata', 'taxa', 'comision', 'transfer', 'transfera', 'cardul', 'iban']),
    recommendations: ['Nu introduce date bancare dintr-un link primit prin mesaj.', 'Dacă ai introdus datele cardului, sună imediat la bancă.']
  },
  {
    id: 'impersonation',
    label: 'Imită o instituție sau un brand',
    description: 'Textul pare să folosească numele unei bănci, firme sau instituții cunoscute.',
    weight: 1,
    match: (text) => hasAny(text, [...institutionWords, 'olx', 'whatsapp', 'booking', 'posta romana', 'fan courier', 'sameday']),
    recommendations: ['Contactează instituția doar prin canalele oficiale.', 'Nu folosi numere sau linkuri primite în mesajul suspect.']
  },
  {
    id: 'marketplace-context',
    label: 'Context de marketplace',
    description: 'Mesajul menționează vânzare, cumpărător, OLX sau încasarea banilor.',
    weight: 2,
    match: (text) => hasAny(text, marketplaceWords),
    recommendations: ['Nu introduce datele cardului pentru a primi bani.', 'Verifică plățile doar în platforma oficială.']
  },
  {
    id: 'vote-contest',
    label: 'Vot, concurs sau ajutor cerut online',
    description: 'Textul cere vot, ajutor într-un concurs sau asocierea unui cont prin link/cod.',
    weight: 2,
    match: (text) => hasAny(text, voteContestWords),
    recommendations: ['Nu introduce coduri de verificare pentru a ajuta pe cineva într-un concurs.']
  },
  {
    id: 'friend-family-pressure',
    label: 'Presiune de la o persoană cunoscută',
    description: 'Mesajul pare să vină de la o rudă sau prieten și cere ajutor rapid.',
    weight: 2,
    match: (text) => hasAny(text, friendFamilyWords),
    recommendations: ['Sună persoana pe un număr deja cunoscut înainte să trimiți bani.']
  },
  {
    id: 'invoice-context',
    label: 'Factură sau plată neclară',
    description: 'Mesajul menționează o factură sau plată fără context suficient.',
    weight: 2,
    forceMinimum: 'medium',
    match: (text) => hasAny(text, ['factura', 'facturi', 'restanta']),
    recommendations: ['Verifică factura direct în contul furnizorului sau printr-un canal cunoscut.']
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
    id: 'move-chat',
    label: 'Mută conversația pe alt canal',
    description: 'Ți se cere să continui discuția pe WhatsApp, Telegram sau alt canal privat.',
    weight: 1,
    match: (text) => hasAny(text, [...privateChannelWords, 'whatsapp nou', 'scrie-mi pe whatsapp', 'continua pe whatsapp', 'muta conversatia', 'discutam pe whatsapp']),
    recommendations: ['Păstrează discuția pe platforma oficială atunci când vinzi sau cumperi ceva.', 'Nu accepta mutarea conversației dacă apare o plată sau un link suspect.']
  },
  {
    id: 'secrecy-pressure',
    label: 'Cere discreție neobișnuită',
    description: 'Mesajul cere să nu spui nimănui sau să acționezi fără verificare.',
    weight: 2,
    match: (text) => hasAny(text, secrecyWords),
    recommendations: ['Nu accepta presiunea de a păstra secretă o plată sau o acțiune financiară.']
  },
  {
    id: 'bad-phrasing',
    label: 'Formulare ciudată',
    description: 'Textul are formulări neobișnuite sau greșeli care apar des în mesaje false.',
    weight: 1,
    forceMinimum: 'medium',
    match: (text) => hasAny(text, ['draga client', 'stimate utilizator', 'contul dvs a fost', 'va rugam confirmati', 'pentru a evita suspendarea', 'verificati identitatea dvs']),
    recommendations: ['Privește cu atenție mesajele cu formulări nefirești.', 'Compară mesajul cu exemple de pe site-ul oficial al instituției.']
  }
]

export const highRiskRules = [
  {
    id: 'dangerous-code-request',
    label: 'Cerere de cod sensibil',
    description: 'Mesajul cere OTP, cod de verificare, cod WhatsApp, PIN sau 3D Secure.',
    weight: 4,
    forceMinimum: 'medium',
    match: (text) => hasAny(text, codeWords),
    recommendations: ['Nu trimite coduri primite prin SMS.', 'Dacă ai introdus un cod WhatsApp sau bancar, securizează imediat contul.']
  },
  {
    id: 'dangerous-data-request',
    label: 'Cerere de date sensibile',
    description: 'Mesajul cere parolă, CNP, CVV/CVC, date de card sau date bancare.',
    weight: 4,
    forceMinimum: 'medium',
    match: (text) => hasAny(text, sensitiveDataWords) && hasAny(text, ['trimite', 'introdu', 'confirma', 'confirmati', 'verifica', 'verificati', 'completeaza', 'actualizeaza', 'comunica']),
    recommendations: ['Nu introduce parole, CNP, CVV sau date de card în linkuri primite prin mesaj.']
  },
  {
    id: 'account-blocked',
    label: 'Cont blocat sau suspendat',
    description: 'Mesajul invocă blocarea, suspendarea sau restricționarea unui cont.',
    weight: 3,
    match: (text) => hasAny(text, accountProblemWords),
    recommendations: ['Intră manual în aplicația oficială, nu prin linkul primit în mesaj.']
  },
  {
    id: 'suspicious-link',
    label: 'Link suspect',
    description: 'Mesajul conține un link sau domeniu neobișnuit.',
    weight: 2,
    match: (text, originalText) => linkPattern.test(originalText) || hasAny(text, ['link', 'linkul']),
    recommendations: ['Nu accesa linkul.', 'Intră manual pe site-ul oficial, nu prin linkul din mesaj.']
  },
  {
    id: 'quick-money-strong',
    label: 'Premiu, câștig sau investiție suspectă',
    description: 'Mesajul promite premiu, câștig rapid, profit garantat sau investiție fără risc.',
    weight: 3,
    forceMinimum: 'medium',
    match: (text) => hasAny(text, prizeWords),
    recommendations: ['Nu trimite bani pentru premii, investiții sau câștiguri promise prin mesaj.', 'Caută informații din surse independente înainte de orice plată.']
  },
  {
    id: 'delivery-data-update',
    label: 'Actualizare suspectă de livrare',
    description: 'Textul cere actualizarea datelor de livrare.',
    weight: 3,
    match: (text) => hasAny(text, ['actualizare date livrare', 'actualizeaza datele de livrare', 'confirma livrarea', 'redirectionare colet']),
    recommendations: ['Nu actualiza datele de livrare din linkuri primite prin SMS sau WhatsApp.']
  },
  {
    id: 'install-app',
    label: 'Cere instalarea unei aplicații',
    description: 'Mesajul te împinge să instalezi o aplicație sau să oferi acces pe telefon.',
    weight: 3,
    match: (text) => hasAny(text, ['instaleaza aplicatia', 'descarca aplicatia', 'anydesk', 'teamviewer', 'acces la telefon', 'control la distanta']),
    recommendations: ['Nu instala aplicații cerute de necunoscuți.', 'Nu oferi acces la telefon sau calculator unei persoane necunoscute.']
  }
]

export const signalRules = [
  ...legitimateContextRules,
  ...mediumRiskRules,
  ...highRiskRules
]

export const scenarioRules = [
  {
    id: 'courier-payment-link',
    label: 'Scenariu de curier fals',
    description: 'Mesajul combină livrare/colet cu plată, taxă, actualizare de date sau link.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids) => ids.has('courier-context') && (ids.has('payment') || ids.has('delivery-data-update')) && (ids.has('suspicious-link') || ids.has('dangerous-data-request')),
    recommendations: ['Nu accesa linkul.', 'Verifică livrarea pe site-ul sau aplicația oficială a curierului.']
  },
  {
    id: 'bank-account-verification',
    label: 'Scenariu de bancă sau cont blocat',
    description: 'Mesajul combină context bancar/cont cu verificare, deblocare, coduri, parole, date de card sau link.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => (ids.has('account-blocked') || hasAny(text, bankContextWords)) && hasAny(text, verificationWords) && (ids.has('dangerous-code-request') || ids.has('dangerous-data-request') || ids.has('suspicious-link')),
    recommendations: ['Nu introduce date bancare, parole sau coduri.', 'Contactează instituția doar prin canalele oficiale.']
  },
  {
    id: 'olx-fake-payment',
    label: 'Scenariu OLX cu plată falsă',
    description: 'Mesajul combină OLX/vânzare/cumpărător cu link și card, plată, încasare sau cod.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => ids.has('marketplace-context') && ids.has('suspicious-link') && (ids.has('payment') || ids.has('dangerous-code-request') || ids.has('dangerous-data-request') || hasAny(text, ['incasare', 'incasezi', 'card'])),
    recommendations: ['Nu introduce datele cardului pentru a încasa bani.', 'Verifică tranzacția doar în platforma oficială OLX.']
  },
  {
    id: 'brand-payment-link',
    label: 'Brand sau platformă cu plată prin link',
    description: 'Mesajul folosește un brand sau o platformă cunoscută și cere confirmare/plată prin link.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => ids.has('impersonation') && ids.has('payment') && ids.has('suspicious-link') && hasAny(text, ['booking', 'banca', 'cont', 'card', 'rezervarea', 'confirmati cardul']),
    recommendations: ['Nu confirma cardul din linkul primit în mesaj.', 'Verifică rezervarea, contul sau plata doar în aplicația oficială.']
  },
  {
    id: 'whatsapp-takeover',
    label: 'Scenariu de preluare cont WhatsApp',
    description: 'Mesajul combină vot/concurs/bursă cu link și WhatsApp, PIN sau cod de asociere.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => ids.has('vote-contest') && ids.has('suspicious-link') && (text.includes('whatsapp') || ids.has('dangerous-code-request') || hasAny(text, ['pin', 'asociere'])),
    recommendations: ['Nu introduce coduri de asociere WhatsApp.', 'Dacă ai introdus un cod, securizează imediat contul.']
  },
  {
    id: 'whatsapp-code-request',
    label: 'Cerere de cod WhatsApp',
    description: 'Mesajul menționează WhatsApp și cere un cod de verificare sau asociere.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => text.includes('whatsapp') && ids.has('dangerous-code-request'),
    recommendations: ['Nu trimite codul WhatsApp nimănui.', 'Dacă ai introdus codul, verifică imediat dispozitivele asociate contului.']
  },
  {
    id: 'urgent-money-pressure',
    label: 'Cerere urgentă de bani',
    description: 'Mesajul combină presiunea de timp cu o cerere directă de bani și detalii de transfer.',
    severity: 'medium',
    minimumRisk: 'medium',
    weight: 3,
    match: (ids, text) => ids.has('urgency') && ids.has('direct-money-request') && hasAny(text, ['numar', 'cont', 'iban', 'revolut', 'telefon']),
    recommendations: ['Nu trimite bani doar pe baza mesajului.', 'Confirmă printr-un canal separat înainte de orice transfer.']
  },
  {
    id: 'urgent-money-strong',
    label: 'Cerere urgentă de bani cu presiune puternică',
    description: 'Mesajul cere bani rapid și include detalii de transfer sau context de contact compromis.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 4,
    match: (ids, text) => ids.has('urgency') && ids.has('direct-money-request') && (ids.has('friend-family-pressure') || hasAny(text, ['iban', 'revolut', 'cont blocat', 'card blocat', 'returnez azi'])),
    recommendations: ['Nu trimite bani.', 'Confirmă prin apel direct la un număr deja cunoscut.']
  },
  {
    id: 'prize-claim-link',
    label: 'Premiu sau câștig cu link de revendicare',
    description: 'Mesajul promite premiu/câștig/investiție și cere revendicare, activare sau verificare rapidă.',
    severity: 'medium',
    minimumRisk: 'medium',
    weight: 3,
    match: (ids, text) => ids.has('quick-money-strong') && hasAny(text, ['revendica', 'activeaza', 'verifica', 'confirma', 'raspunde']) && (ids.has('suspicious-link') || ids.has('urgency') || ids.has('payment')),
    recommendations: ['Nu revendica premii prin linkuri primite în mesaje.', 'Verifică sursa dintr-un canal oficial.']
  },
  {
    id: 'quick-money-messaging',
    label: 'Promisiune de bani rapizi mutată pe mesagerie',
    description: 'Mesajul combină câștiguri rapide sau investiții cu mutarea discuției pe un canal privat.',
    severity: 'medium',
    minimumRisk: 'medium',
    weight: 3,
    match: (ids) => ids.has('quick-money-strong') && ids.has('move-chat'),
    recommendations: ['Nu continua discuția financiară pe canale private fără verificări independente.', 'Nu trimite bani pentru promisiuni de câștig rapid.']
  },
  {
    id: 'quick-money-direct-transfer',
    label: 'Investiție sau câștig rapid cu transfer de bani',
    description: 'Mesajul promite câștig rapid sau profit garantat și cere trimiterea unei sume.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 4,
    match: (ids) => ids.has('quick-money-strong') && ids.has('direct-money-request') && ids.has('urgency'),
    recommendations: ['Nu trimite bani pentru investiții sau profituri garantate.', 'Verifică orice ofertă financiară din surse independente.']
  },
  {
    id: 'job-app-private-channel',
    label: 'Ofertă falsă cu aplicație și canal privat',
    description: 'Mesajul combină o ofertă financiară sau de lucru cu instalarea unei aplicații și mutarea discuției pe Telegram/WhatsApp.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids) => ids.has('install-app') && ids.has('move-chat') && (ids.has('quick-money-strong') || ids.has('payment') || ids.has('suspicious-link')),
    recommendations: ['Nu instala aplicația cerută în mesaj.', 'Nu continua discuția financiară pe Telegram, WhatsApp sau alt canal privat.', 'Verifică oferta din surse independente înainte de orice acțiune.']
  },
  {
    id: 'authority-pressure',
    label: 'Scenariu de autoritate falsă',
    description: 'Mesajul folosește numele unei autorități și pune presiune pentru date, coduri sau mutarea discuției.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 4,
    match: (ids, text) => hasAny(text, authorityWords) && hasAny(text, authorityPressureWords) && (ids.has('move-chat') || ids.has('dangerous-data-request') || ids.has('dangerous-code-request') || hasAny(text, ['confirmati acum datele', 'confirma datele'])),
    recommendations: ['Nu continua discuția pe WhatsApp, Telegram sau Signal la cererea unei presupuse autorități.', 'Verifică separat prin numerele oficiale publicate de instituție.']
  },
  {
    id: 'authority-urgent-contact',
    label: 'Autoritate cu solicitare urgentă',
    description: 'Mesajul folosește numele unei autorități și cere contact sau acțiune urgentă.',
    severity: 'medium',
    minimumRisk: 'medium',
    weight: 3,
    match: (ids, text) => ids.has('impersonation') && ids.has('urgency') && hasAny(text, authorityWords),
    recommendations: ['Nu suna la numere primite în mesaj.', 'Caută separat datele oficiale de contact ale instituției.']
  },
  {
    id: 'invoice-payment-link',
    label: 'Factură sau plată restantă prin link',
    description: 'Mesajul combină o plată restantă, presiune și link de plată.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 4,
    match: (ids, text) => ids.has('payment') && ids.has('suspicious-link') && (ids.has('fear-pressure') || ids.has('urgency')) && hasAny(text, ['factura', 'restanta', 'penalizare', 'achitati', 'plateste']),
    recommendations: ['Nu plăti facturi din linkuri primite pe neașteptate.', 'Intră manual în contul furnizorului sau contactează-l separat.']
  },
  {
    id: 'remote-access-support',
    label: 'Suport fals cu acces la dispozitiv',
    description: 'Mesajul cere instalarea unei aplicații sau comunicarea unui cod sub pretext de securizare.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids, text) => ids.has('install-app') && (ids.has('dangerous-code-request') || hasAny(text, ['antifrauda', 'securizarea contului', 'operatorului codul', 'codul afisat'])),
    recommendations: ['Nu instala aplicații de control la distanță la cererea unui necunoscut.', 'Nu comunica niciun cod afișat pe telefon sau calculator.']
  },
  {
    id: 'link-plus-sensitive-data',
    label: 'Link combinat cu date sensibile',
    description: 'Mesajul conține link și cere date bancare, parole sau coduri.',
    severity: 'high',
    minimumRisk: 'high',
    weight: 5,
    match: (ids) => ids.has('suspicious-link') && (ids.has('dangerous-data-request') || ids.has('dangerous-code-request')),
    recommendations: ['Nu accesa linkul.', 'Nu introduce date bancare, parole sau coduri.']
  }
]

export const defaultRecommendations = {
  low: [
    'Nu trata rezultatul ca pe o confirmare că mesajul este în regulă.',
    'Verifică expeditorul printr-un canal oficial înainte să răspunzi.',
    'Nu introduce date sensibile într-un link primit prin mesaj.'
  ],
  medium: [
    'Nu accesa linkul până nu verifici sursa.',
    'Nu trimite coduri, parole sau date bancare.',
    'Contactează instituția doar prin canalele oficiale.'
  ],
  high: [
    'Nu accesa linkul.',
    'Nu introduce date bancare, parole sau coduri.',
    'Nu trimite bani.',
    'Verifică separat prin site-ul, aplicația sau numărul oficial.',
    'Dacă ai introdus date bancare, contactează imediat banca.',
    'Dacă ai introdus un cod de asociere WhatsApp sau un cod de verificare, securizează imediat contul.'
  ]
}
