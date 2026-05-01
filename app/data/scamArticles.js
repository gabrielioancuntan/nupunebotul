export const scamArticles = [
  {
    slug: 'colet-fals',
    category: 'Curier / livrare',
    cardTitle: 'Țeapa cu colet fals',
    title: 'Țeapa cu colet fals: cum recunoști mesajele false de curier',
    seoTitle: 'Țeapa cu colet fals: semne clare și ce să faci | NuPuneBotul.ro',
    seoDescription: 'Află cum recunoști mesajele false despre colete blocate, taxe de livrare, locker sau linkuri suspecte trimise în numele curierilor.',
    description: 'Țeapa cu colet fals apare de obicei prin SMS, email sau WhatsApp și folosește pretextul unei livrări blocate, al unei taxe mici sau al unei redirecționări.',
    summary: 'Mesaje despre colete blocate, taxe mici, redirecționări și linkuri care cer date de card.',
    intro: [
      'Țeapa cu colet fals vizează oameni care așteaptă o comandă sau care primesc des livrări. Mesajul pare trimis de un curier, de Poșta Română sau de o platformă de livrare.',
      'Funcționează pentru că suma cerută pare mică, iar utilizatorul este împins să rezolve rapid problema ca să nu piardă coletul.'
    ],
    howItStarts: [
      'De obicei primești un SMS sau un email despre un colet blocat, o livrare care nu a putut fi finalizată sau o taxă de redirecționare.',
      'Mesajul include un link și folosește cuvinte precum „achită”, „confirmă livrarea”, „actualizează datele” sau „alege lockerul”.'
    ],
    goals: ['datele cardului', 'o plată mică inițială', 'coduri 3D Secure', 'date personale de livrare', 'acces la conturi prin pagini false'],
    warningSigns: [
      'colet blocat sau reținut fără detalii clare despre expeditor',
      'taxă foarte mică cerută urgent',
      'link cu domeniu ciudat, scurtat sau diferit de site-ul oficial',
      'cerere de date card pentru o simplă livrare',
      'text vag, fără AWB real sau fără informații verificabile'
    ],
    dontDo: [
      'Nu accesa linkul din mesaj.',
      'Nu introduce datele cardului pentru o taxă primită prin SMS.',
      'Nu trimite coduri 3D Secure sau coduri primite prin SMS.',
      'Nu te grăbi doar pentru că mesajul spune că livrarea expiră.'
    ],
    ifVictim: [
      'Sună imediat la bancă dacă ai introdus datele cardului.',
      'Blochează cardul din aplicația băncii dacă există risc de plată neautorizată.',
      'Verifică livrarea doar în aplicația sau site-ul oficial al curierului.',
      'Păstrează mesajul ca dovadă și raportează-l ca phishing/spam.'
    ],
    examples: [
      'Poșta Română: coletul tău este blocat din cauza unei taxe vamale de 8,74 RON. Achită acum pentru livrare: https://posta-romana-taxare.top',
      'Curier: nu am putut finaliza livrarea. Actualizează datele și achită taxa de redirecționare aici: https://livrare-client.click'
    ],
    checklist: [
      'Ai primit un link neașteptat?',
      'Ți se cere o taxă mică și urgentă?',
      'Ți se cer date de card?',
      'Domeniul nu pare site oficial?',
      'Nu poți verifica mesajul în aplicația curierului?'
    ],
    faq: [
      {
        question: 'Un mesaj cu AWB este automat o țeapă?',
        answer: 'Nu. AWB-ul poate apărea într-un mesaj legitim. Devine suspect când este combinat cu plată urgentă, link ciudat sau cerere de date bancare.'
      },
      {
        question: 'Pot plăti o taxă de livrare din linkul primit prin SMS?',
        answer: 'Este mai sigur să intri manual pe site-ul oficial al curierului sau în aplicația oficială, nu prin linkul primit în mesaj.'
      },
      {
        question: 'Ce fac dacă am introdus cardul?',
        answer: 'Contactează imediat banca, blochează cardul dacă este nevoie și urmărește tranzacțiile.'
      },
      {
        question: 'De ce cer escrocii sume mici?',
        answer: 'Sumele mici par mai credibile și îi fac pe oameni să acționeze repede, fără verificări.'
      }
    ],
    related: ['olx', 'whatsapp-cod', 'banca-falsa']
  },
  {
    slug: 'banca-falsa',
    category: 'Bancă / card',
    cardTitle: 'Bancă falsă',
    title: 'Bancă falsă prin SMS sau email: semne clare și ce să faci',
    seoTitle: 'Bancă falsă prin SMS sau email: cum recunoști frauda | NuPuneBotul.ro',
    seoDescription: 'Ghid practic despre mesaje false trimise în numele băncilor: cont blocat, OTP, parolă, date card, linkuri de confirmare.',
    description: 'Frauda de bancă falsă folosește numele unei bănci sau al unui serviciu financiar pentru a obține coduri, parole, date de card sau acces la cont.',
    summary: 'Mesaje despre cont blocat, verificare urgentă, OTP, parole, date card și linkuri false.',
    intro: [
      'Mesajele de bancă falsă sunt printre cele mai periculoase pentru că imită situații sensibile: cont blocat, tranzacție suspectă, verificare de securitate sau card suspendat.',
      'Atacul funcționează prin presiune și autoritate. Utilizatorul se teme că pierde accesul la bani și apasă rapid pe link.'
    ],
    howItStarts: [
      'Primești un SMS, email sau mesaj care pare de la bancă. Textul spune că trebuie să confirmi identitatea, să deblochezi contul sau să verifici o tranzacție.',
      'Mesajul trimite către o pagină falsă unde ți se cer parola, codul OTP, PIN-ul, CVV-ul sau datele cardului.'
    ],
    goals: ['coduri OTP', 'parole', 'date card', 'CVV/CVC', 'PIN', 'acces la aplicația bancară'],
    warningSigns: [
      'cont blocat, suspendat sau restricționat temporar',
      'cerere de OTP, parolă, PIN sau cod de autentificare',
      'link care nu este domeniul oficial al băncii',
      'amenințare cu închiderea contului dacă nu acționezi imediat',
      'formulări vagi precum „stimate client” sau „verifică identitatea”'
    ],
    dontDo: [
      'Nu introduce date bancare în linkuri primite prin SMS sau email.',
      'Nu trimite coduri OTP sau coduri de autentificare nimănui.',
      'Nu instala aplicații cerute de un presupus operator bancar.',
      'Nu suna la numere primite în mesajul suspect.'
    ],
    ifVictim: [
      'Contactează imediat banca folosind numărul de pe card sau din aplicația oficială.',
      'Schimbă parola contului dacă ai introdus-o pe o pagină suspectă.',
      'Blochează cardul dacă ai introdus datele cardului.',
      'Verifică tranzacțiile recente și activează notificările de plată.'
    ],
    examples: [
      'Banca: contul dvs a fost restricționat temporar. Pentru deblocare introduceți codul OTP și parola aici: https://client-secure.top',
      'BT: confirmă urgent datele cardului pentru a evita suspendarea contului: www.bt-client-validare.xyz'
    ],
    checklist: [
      'Ți se cere OTP, parolă sau PIN?',
      'Mesajul spune că ai contul blocat?',
      'Linkul pare diferit de site-ul oficial?',
      'Există presiune de timp?',
      'Poți verifica situația direct în aplicația băncii?'
    ],
    faq: [
      {
        question: 'Banca poate cere codul OTP prin SMS?',
        answer: 'Nu ar trebui să trimiți coduri OTP nimănui. Codurile sunt pentru autentificarea ta, nu pentru comunicare cu un operator.'
      },
      {
        question: 'Ce fac dacă linkul arată aproape ca site-ul băncii?',
        answer: 'Nu îl folosi. Intră manual în aplicația băncii sau tastează adresa oficială în browser.'
      },
      {
        question: 'Ce fac dacă am dat parola?',
        answer: 'Schimbă parola imediat, contactează banca și verifică dacă există operațiuni suspecte.'
      },
      {
        question: 'Un mesaj fără greșeli poate fi fals?',
        answer: 'Da. Unele mesaje false sunt scrise corect și folosesc logo-uri sau nume reale.'
      }
    ],
    related: ['anaf-fals', 'whatsapp-cod', 'olx']
  },
  {
    slug: 'anaf-fals',
    category: 'Instituții / autorități',
    cardTitle: 'ANAF fals',
    title: 'ANAF fals: mesaje despre datorii, amenzi sau rambursări',
    seoTitle: 'ANAF fals: mesaje despre datorii, amenzi sau rambursări | NuPuneBotul.ro',
    seoDescription: 'Învață să recunoști mesajele false în numele ANAF: datorii urgente, penalizări, rambursări, linkuri și cereri de date.',
    description: 'Țeapa ANAF fals folosește numele unei instituții pentru a crea teamă sau speranță: datorii urgente, penalizări, documente fiscale sau rambursări.',
    summary: 'Mesaje false despre datorii, penalizări, executări, rambursări sau documente urgente.',
    intro: [
      'Mesajele false în numele ANAF mizează pe frica de amenzi sau pe promisiunea unei rambursări. Ținta este orice persoană care poate reacționa rapid la un mesaj oficial.',
      'Escrocul folosește ton autoritar, termene scurte și linkuri care imită o pagină oficială.'
    ],
    howItStarts: [
      'Poți primi un email, SMS sau mesaj cu un document fiscal, o datorie restantă, o penalizare sau o sumă de recuperat.',
      'Mesajul cere să descarci un fișier, să accesezi un link, să confirmi date sau să plătești rapid o sumă.'
    ],
    goals: ['date personale', 'CNP', 'date bancare', 'plăți false', 'parole', 'instalarea unor fișiere periculoase'],
    warningSigns: [
      'amenințări cu executare sau penalizare imediată',
      'linkuri care nu sunt domenii oficiale',
      'cerere de card pentru rambursare',
      'atașamente neașteptate',
      'presiune de tip „plătește azi” sau „confirmă urgent”'
    ],
    dontDo: [
      'Nu plăti din linkul primit în mesaj.',
      'Nu descărca atașamente suspecte.',
      'Nu introduce CNP, card sau parole într-o pagină primită prin email.',
      'Nu te baza pe tonul oficial al mesajului.'
    ],
    ifVictim: [
      'Contactează banca dacă ai făcut o plată sau ai introdus date de card.',
      'Schimbă parolele dacă ai introdus date de autentificare.',
      'Verifică situația fiscală doar prin canalele oficiale.',
      'Păstrează mesajul și raportează-l ca tentativă de phishing.'
    ],
    examples: [
      'ANAF: aveți o penalizare neachitată. Pentru a evita executarea, achitați imediat suma restantă accesând https://anaf-plata.click',
      'ANAF: aveți de primit o rambursare. Confirmați datele cardului pentru virament: https://anaf-returnare.top'
    ],
    checklist: [
      'Mesajul promite bani sau amenință cu penalizare?',
      'Ți se cere cardul pentru o rambursare?',
      'Există un link neobișnuit?',
      'Mesajul cere acțiune urgentă?',
      'Poți verifica separat pe canalul oficial?'
    ],
    faq: [
      {
        question: 'ANAF trimite mesaje reale?',
        answer: 'Pot exista comunicări oficiale, dar nu trebuie să introduci date sensibile prin linkuri primite pe neașteptate.'
      },
      {
        question: 'Ce fac dacă mesajul pare foarte oficial?',
        answer: 'Verifică separat prin canalele oficiale. Aspectul oficial nu garantează autenticitatea.'
      },
      {
        question: 'Este normal să mi se ceară cardul pentru rambursare?',
        answer: 'Cererea de date de card printr-un link primit în mesaj este un semn serios de risc.'
      },
      {
        question: 'Pot deschide atașamentul?',
        answer: 'Nu deschide atașamente neașteptate. Verifică întâi sursa printr-un canal oficial.'
      }
    ],
    related: ['banca-falsa', 'colet-fals', 'olx']
  },
  {
    slug: 'whatsapp-cod',
    category: 'WhatsApp / conturi',
    cardTitle: 'Cod WhatsApp',
    title: 'Țeapa cu cod WhatsApp: cum îți poate fi preluat contul',
    seoTitle: 'Țeapa cu cod WhatsApp: semne și pași de protecție | NuPuneBotul.ro',
    seoDescription: 'Află cum funcționează frauda cu cod WhatsApp, voturi false, concursuri și cereri de cod de verificare.',
    description: 'Țeapa cu cod WhatsApp urmărește preluarea contului tău printr-un cod de verificare sau asociere pe care escrocul te convinge să îl trimiți.',
    summary: 'Mesaje cu voturi, concursuri, burse sau cereri de cod WhatsApp pentru preluarea contului.',
    intro: [
      'În această fraudă, escrocul încearcă să îți preia contul WhatsApp sau să îl folosească pentru a cere bani contactelor tale.',
      'Atacul funcționează pentru că mesajul poate părea trimis de un prieten, o rudă sau o persoană cunoscută.'
    ],
    howItStarts: [
      'Primești un mesaj de tip „mă ajuți cu un vot?”, „am trimis din greșeală codul la tine” sau „intră pe link pentru concurs”.',
      'Apoi ți se cere un cod primit prin SMS, un PIN WhatsApp sau un cod de asociere.'
    ],
    goals: ['codul de verificare WhatsApp', 'preluarea contului', 'acces la contacte', 'cereri de bani trimise în numele tău'],
    warningSigns: [
      'cerere de cod WhatsApp sau cod de verificare',
      'link pentru vot, concurs, bursă sau competiție',
      'mesaj aparent de la un contact care insistă repede',
      'formulări precum „trimite-mi codul primit”',
      'cereri ulterioare de bani către prieteni'
    ],
    dontDo: [
      'Nu trimite coduri WhatsApp nimănui.',
      'Nu introduce coduri de asociere pe pagini primite prin link.',
      'Nu te baza doar pe faptul că mesajul vine dintr-o conversație existentă.',
      'Nu trimite bani unui contact fără confirmare prin apel.'
    ],
    ifVictim: [
      'Încearcă să te reconectezi în WhatsApp cu numărul tău și să verifici codul primit oficial.',
      'Verifică dispozitivele asociate contului și elimină accesul necunoscut.',
      'Anunță rapid contactele că mesajele de bani pot fi false.',
      'Activează verificarea în doi pași în WhatsApp.'
    ],
    examples: [
      'Salut, te rog votează-mă la concurs. Intră pe linkul WhatsApp și introdu codul de asociere primit prin SMS.',
      'Ți-am trimis din greșeală codul meu WhatsApp pe numărul tău. Trimite-mi codul de verificare, te rog.'
    ],
    checklist: [
      'Ți se cere un cod primit prin SMS?',
      'Mesajul include vot, concurs sau bursă?',
      'Vine de la un contact care se grăbește?',
      'Ți se cere să asociezi un dispozitiv?',
      'Apare apoi o cerere de bani?'
    ],
    faq: [
      {
        question: 'Pot trimite codul dacă persoana pare cunoscută?',
        answer: 'Nu. Codul WhatsApp nu trebuie trimis nimănui, nici măcar unui contact cunoscut.'
      },
      {
        question: 'De ce cer escrocii voturi sau concursuri?',
        answer: 'Este un pretext care pare prietenos și reduce atenția. Scopul real poate fi obținerea codului.'
      },
      {
        question: 'Ce fac dacă mi-a fost preluat contul?',
        answer: 'Reautentifică-te, elimină dispozitivele necunoscute, activează verificarea în doi pași și anunță contactele.'
      },
      {
        question: 'Un link WhatsApp este mereu periculos?',
        answer: 'Nu mereu, dar combinat cu vot, cod, PIN sau asociere devine un semn clar de risc.'
      }
    ],
    related: ['olx', 'colet-fals', 'banca-falsa']
  },
  {
    slug: 'olx',
    category: 'Marketplace',
    cardTitle: 'Țeapă pe OLX',
    title: 'Țeapă pe OLX: cumpărător fals, link de încasare și date de card',
    seoTitle: 'Țeapă pe OLX: cumpărător fals și link de încasare | NuPuneBotul.ro',
    seoDescription: 'Ghid practic despre fraude pe OLX: cumpărător fals, link de încasare, curier fals, date de card și cod 3D Secure.',
    description: 'Țeapa pe OLX apare des când vinzi un produs și primești un mesaj de la un cumpărător grăbit care trimite un link pentru încasarea banilor.',
    summary: 'Cumpărători falși, linkuri de încasare, date de card, curier inventat și presiune să muți conversația.',
    intro: [
      'Fraudele pe OLX vizează mai ales vânzătorii. Escrocul se dă drept cumpărător, spune că a plătit sau că trimite curierul și te împinge către un link fals.',
      'Funcționează pentru că oamenii se bucură că au găsit rapid un cumpărător și pot accepta pași neobișnuiți.'
    ],
    howItStarts: [
      'Primești un mesaj de la un cumpărător foarte hotărât, care nu pune multe întrebări despre produs.',
      'Apoi ți se trimite un link unde ar trebui să „primești banii”, „confirmi livrarea” sau „introduci cardul pentru încasare”.'
    ],
    goals: ['datele cardului', 'cod 3D Secure', 'coduri bancare', 'plăți neautorizate', 'mutarea conversației în afara platformei'],
    warningSigns: [
      'cumpărătorul insistă să continui pe WhatsApp sau Telegram',
      'primești link pentru încasarea banilor',
      'ți se cer datele cardului ca să primești bani',
      'apare un curier ales de cumpărător fără verificare',
      'cumpărătorul se grăbește și evită detalii normale'
    ],
    dontDo: [
      'Nu introduce datele cardului pentru a primi bani.',
      'Nu trimite coduri 3D Secure.',
      'Nu muta conversația dacă apare un link de plată sau încasare.',
      'Nu accepta pași care nu există în fluxul oficial al platformei.'
    ],
    ifVictim: [
      'Contactează banca imediat dacă ai introdus datele cardului.',
      'Blochează cardul dacă există risc de tranzacții neautorizate.',
      'Raportează conversația în platformă și blochează utilizatorul.',
      'Păstrează capturi cu mesajele și linkurile.'
    ],
    examples: [
      'Am plătit produsul pe OLX. Intră pe link ca să primești banii pe card: https://olx-plati-client.xyz/confirmare',
      'Curierul vine azi. Pentru încasare introdu datele cardului și codul 3D Secure: https://olx-incasare.click'
    ],
    checklist: [
      'Ți se cere cardul pentru a primi bani?',
      'Cumpărătorul trimite un link extern?',
      'Vrea să mutați discuția rapid?',
      'Pare prea grăbit și fără întrebări despre produs?',
      'Ți se cere cod 3D Secure?'
    ],
    faq: [
      {
        question: 'Trebuie să introduc cardul ca să primesc bani pe OLX?',
        answer: 'Nu introduce datele cardului într-un link trimis de cumpărător. Verifică doar fluxurile oficiale ale platformei.'
      },
      {
        question: 'Este suspect dacă un cumpărător trimite curierul?',
        answer: 'Nu întotdeauna, dar devine suspect dacă apare un link extern, o cerere de card sau presiune să acționezi rapid.'
      },
      {
        question: 'Ce fac dacă am introdus codul 3D Secure?',
        answer: 'Contactează imediat banca, verifică tranzacțiile și cere blocarea cardului dacă este nevoie.'
      },
      {
        question: 'De ce vor să mut conversația pe WhatsApp?',
        answer: 'Pentru a evita sistemele de raportare ale platformei și pentru a controla mai ușor conversația.'
      }
    ],
    related: ['colet-fals', 'whatsapp-cod', 'banca-falsa']
  }
]

export function getScamArticle(slug) {
  return scamArticles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article) {
  return article.related
    .map((slug) => getScamArticle(slug))
    .filter(Boolean)
}

export function buildArticleJsonLd(article) {
  const url = `https://nupunebotul.ro/tepe/${article.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription,
    articleSection: article.category,
    about: article.cardTitle,
    inLanguage: 'ro-RO',
    mainEntityOfPage: url,
    url,
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Biblioteca de țepe online',
      url: 'https://nupunebotul.ro/tepe'
    },
    publisher: {
      '@type': 'Organization',
      name: 'NuPuneBotul.ro',
      url: 'https://nupunebotul.ro'
    }
  }
}

export function buildBreadcrumbJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://nupunebotul.ro'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Biblioteca de țepe',
        item: 'https://nupunebotul.ro/tepe'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://nupunebotul.ro/tepe/${article.slug}`
      }
    ]
  }
}

export function buildFaqJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function buildLibraryJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Biblioteca de țepe online',
    description: 'Ghiduri educaționale despre fraude online frecvente în România.',
    inLanguage: 'ro-RO',
    url: 'https://nupunebotul.ro/tepe',
    hasPart: scamArticles.map((article) => ({
      '@type': 'Article',
      name: article.title,
      url: `https://nupunebotul.ro/tepe/${article.slug}`
    }))
  }
}
