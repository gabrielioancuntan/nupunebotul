export const additionalScamArticles = [
  {
    slug: 'sms-spam',
    category: 'SMS / phishing',
    cardTitle: 'SMS spam și phishing',
    title: 'SMS spam și phishing: semne clare că mesajul merită verificat',
    seoTitle: 'SMS spam și phishing: cum recunoști mesajele suspecte | NuPuneBotul.ro',
    seoDescription: 'Învață să recunoști SMS-urile suspecte: cont blocat, colet întârziat, premii false, linkuri dubioase, cereri de coduri și alte semne de risc.',
    description: 'SMS-urile suspecte folosesc urgență, frică, premii false sau linkuri dubioase ca să te convingă să apeși, să trimiți date ori să confirmi coduri.',
    summary: 'Linkuri dubioase, cont blocat, premii false, cereri de coduri sau date și mesaje spam care merită verificate.',
    intro: [
      'Multe fraude încep cu un SMS scurt. Textul poate părea de la o bancă, curier, magazin, instituție sau firmă cunoscută, dar scopul este să te grăbească.',
      'Un SMS devine riscant mai ales când combină presiunea cu un link neclar, lipsă de context și cereri de date, bani sau coduri.'
    ],
    howItStarts: [
      'Primești un mesaj despre un cont suspendat, o plată blocată, un colet întârziat, un premiu sau o ofertă care pare prea bună.',
      'Mesajul te împinge spre un link, un răspuns rapid sau o verificare urgentă, fără să îți lase timp să verifici separat.'
    ],
    goals: ['date personale', 'date de card', 'parole', 'coduri OTP', 'plăți mici inițiale', 'acces la conturi'],
    warningSigns: [
      'cere acțiune imediată sau folosește presiune de timp',
      'cere parole, OTP, PIN, CNP, date de card sau alte date sensibile',
      'include un link scurt, dubios sau greu de verificat',
      'nu spune clar cine trimite mesajul sau de ce ai primit notificarea',
      'promite premii, bani, cadouri sau acces exclusiv',
      'vorbește despre cont blocat, verificare urgentă sau activitate neobișnuită',
      'invocă o livrare, taxă mică sau problemă neașteptată cu un colet',
      'folosește multe majuscule, semne de exclamare sau limbaj agresiv',
      'propune împrumuturi, investiții sau joburi nesolicitate',
      'pare oficial, dar nu poate fi verificat ușor din surse independente'
    ],
    safeActions: {
      title: 'Ce să faci în loc să apeși',
      items: [
        'Nu apăsa pe linkul din SMS.',
        'Nu trimite coduri, parole sau date bancare.',
        'Verifică situația în aplicația sau site-ul oficial.',
        'Intră manual pe site, nu din SMS.',
        'Contactează instituția printr-un canal oficial.',
        'Dacă mesajul rămâne dubios, șterge-l și raportează-l ca spam sau phishing.'
      ]
    },
    dontDo: [
      'Nu apăsa pe linkul din SMS.',
      'Nu trimite coduri, parole sau date bancare.',
      'Nu răspunde cu DA doar ca să vezi ce urmează.',
      'Nu instala aplicații sau fișiere indicate în mesaj.',
      'Nu lua decizii financiare dintr-un SMS primit pe neașteptate.'
    ],
    notAutomaticallyScam: {
      title: 'Ce nu înseamnă automat țeapă',
      paragraphs: [
        'Nu orice SMS despre bancă, livrare, programare sau cont este fraudă. Există notificări legitime, inclusiv mesaje cu AWB, cod de ridicare sau informări de securitate.',
        'Combinația contează: grabă, link dubios, lipsă de context și cerere de date, bani sau coduri. Dacă apar împreună, verifică separat înainte să faci orice acțiune.'
      ]
    },
    ifVictim: [
      'Dacă ai introdus date de card, contactează imediat banca.',
      'Dacă ai trimis un cod de verificare, securizează contul afectat cât mai repede.',
      'Schimbă parola contului dacă ai autentificat pe o pagină primită prin SMS.',
      'Păstrează mesajul și raportează-l ca spam sau phishing.'
    ],
    examplesTitle: 'Exemple de mesaje care merită verificate',
    examplesIntro: 'Exemplele de mai jos sunt fictive, dar inspirate din tipare comune de SMS spam și phishing.',
    examples: [
      'BRD: contul dumneavoastră a fost suspendat temporar. Verificați urgent accesul aici: https://client-validare.top',
      'Curier: coletul nu a putut fi livrat. Actualizați adresa pentru reprogramare: https://livrare-info.click',
      'Felicitări! Ai câștigat un card cadou. Revendică premiul în următoarele 10 minute: bit.ly/premiu-ro',
      'Ai fost selectat pentru o ofertă specială. Răspunde DA pentru activare.',
      'Împrumut preaprobat de 20.000 RON. Confirmă datele pentru virare rapidă.',
      'Job remote, 900 RON pe zi. Locuri limitate. Intră aici pentru task-uri.',
      'Contul tău necesită verificare urgentă. Confirmă codul primit prin SMS.',
      'Ai o plată blocată. Accesează linkul pentru a evita suspendarea serviciului.'
    ],
    checklist: [
      'Mesajul are sens în contextul tău real?',
      'Poți verifica direct în aplicația sau site-ul oficial?',
      'Linkul pare domeniu oficial sau doar seamănă?',
      'Ți se cer coduri, card, parolă sau bani?',
      'Mesajul încearcă să te grăbească?'
    ],
    faq: [
      { question: 'Un SMS cu AWB este automat țeapă?', answer: 'Nu. Un AWB poate apărea într-o notificare legitimă. Devine suspect când apare cu taxă urgentă, link dubios, lipsă de context sau cerere de date.' },
      { question: 'Dacă mesajul pare de la bancă, ce fac?', answer: 'Nu folosi linkul din SMS. Deschide aplicația băncii sau contactează banca prin numărul oficial.' },
      { question: 'Pot avea încredere într-un link scurt?', answer: 'Nu ca verificare principală. Linkurile scurte ascund destinația, deci este mai sigur să intri manual pe site-ul oficial.' },
      { question: 'E suspect dacă scrie doar „ai fost selectat”?', answer: 'Poate fi doar spam, dar merită atenție. Devine mai riscant dacă promite bani, cere răspuns rapid sau trimite spre un link.' },
      { question: 'Ce fac dacă am apăsat deja?', answer: 'Nu introduce date. Dacă ai completat card, parolă sau coduri, contactează banca ori serviciul afectat și schimbă parola cât mai repede.' }
    ],
    cta: {
      title: 'Ai primit un SMS dubios?',
      text: 'Nu te grăbi. Verifică separat înainte să apeși pe link sau să trimiți date.'
    },
    related: ['phishing', 'banca-falsa', 'colet-fals', 'investitii-false', 'job-fals']
  },
  {
    slug: 'premii-false',
    category: 'Premii / promoții',
    cardTitle: 'Premii false',
    title: 'Premii false: „ai câștigat”, card cadou și link de revendicare',
    seoTitle: 'Premii false: cum recunoști mesajele cu „ai câștigat” | NuPuneBotul.ro',
    seoDescription: 'Ghid despre mesaje cu premii false, carduri cadou, „ai fost selectat”, răspunde DA și linkuri de revendicare care cer date sau bani.',
    description: 'Premiile false folosesc entuziasmul și graba ca să te ducă spre un link, o taxă de procesare, date de card sau coduri de verificare.',
    summary: 'Mesaje cu „ai câștigat”, card cadou, „ai fost selectat”, răspunde DA și revendicare prin link.',
    intro: [
      'Un mesaj despre un premiu poate părea inofensiv, mai ales când suma este atractivă sau brandul pare cunoscut.',
      'Riscul apare când premiul nesolicitat cere un pas rapid: intră pe link, răspunde DA, achită o taxă sau completează datele cardului.'
    ],
    howItStarts: [
      'Primești SMS, email sau mesaj pe WhatsApp cu „ai câștigat”, „ai fost selectat” sau „revendică acum”.',
      'Apoi apare un link, o taxă de procesare, un formular cu date personale sau o cerere de cod.'
    ],
    goals: ['date personale', 'date de card', 'taxe inventate', 'abonări ascunse', 'coduri de verificare'],
    warningSigns: [
      'premiu nesolicitat de la un concurs la care nu ai participat',
      'card cadou sau recompensă cu termen foarte scurt',
      'cerere de taxă pentru revendicare',
      'link scurtat sau domeniu care doar imită un brand',
      'mesaj de tip „răspunde DA” fără context clar'
    ],
    dontDo: [
      'Nu plăti taxe ca să primești un premiu.',
      'Nu introduce cardul pentru o recompensă primită pe neașteptate.',
      'Nu trimite coduri de verificare pentru validarea premiului.',
      'Nu te baza pe logo sau pe numele brandului din mesaj.'
    ],
    ifVictim: [
      'Contactează banca dacă ai introdus date de card sau ai făcut o plată.',
      'Schimbă parolele dacă ai creat cont prin linkul primit.',
      'Dezactivează eventuale abonări suspecte și urmărește tranzacțiile.',
      'Raportează mesajul ca spam sau phishing.'
    ],
    examples: [
      'Felicitări! Ai câștigat un card cadou de 1.000 RON. Revendică premiul aici: https://premiu-client.top',
      'Ai fost selectat pentru o recompensă exclusivă. Răspunde DA și achită taxa de procesare pentru activare.'
    ],
    checklist: [
      'Ai participat la acel concurs?',
      'Ți se cere să plătești pentru premiu?',
      'Linkul pare verificabil?',
      'Ți se cere cardul sau un cod?',
      'Mesajul te presează să acționezi acum?'
    ],
    faq: [
      { question: 'Poate exista un premiu real prin SMS?', answer: 'Da, dar trebuie verificat separat prin site-ul oficial al campaniei sau al companiei, nu prin linkul din mesaj.' },
      { question: 'De ce cer o taxă mică?', answer: 'Taxa mică reduce suspiciunea și poate fi folosită pentru a obține datele cardului.' },
      { question: 'E sigur să răspund DA?', answer: 'Nu este o verificare sigură. Poate confirma că numărul este activ sau poate declanșa pași suplimentari.' },
      { question: 'Ce fac dacă am completat formularul?', answer: 'Schimbă parolele relevante, contactează banca dacă ai dat date de card și urmărește tranzacțiile.' }
    ],
    related: ['sms-spam', 'phishing', 'investitii-false']
  },
  {
    slug: 'investitii-false',
    category: 'Investitii',
    cardTitle: 'Investitii false',
    title: 'Investitii false: profit garantat, brokeri falsi si taxe de retragere',
    seoTitle: 'Investitii false: semne clare si reguli de protectie | NuPuneBotul.ro',
    seoDescription: 'Ghid practic despre investitii false, brokeri falsi, profit garantat, taxe de retragere si presiune sa trimiti bani rapid.',
    description: 'Investitiile false promit castiguri mari si sigure, dar scopul este sa te faca sa depui bani de mai multe ori sau sa platesti taxe inventate.',
    summary: 'Profit garantat, brokeri necunoscuti, platforme greu de verificat si taxe pentru retragerea banilor.',
    intro: [
      'O investitie reala are risc, documente clare si o companie verificabila. O teapa de investitii incearca sa para simpla, rapida si sigura.',
      'Escrocii pot arata castiguri mici la inceput, doar ca sa para credibili si sa ceara apoi sume mai mari.'
    ],
    howItStarts: [
      'De multe ori incepe cu o reclama pe retele sociale, un mesaj privat sau un apel de la un presupus consultant.',
      'Ti se promite profit mare, risc mic si ajutor pas cu pas pentru depunerea banilor.'
    ],
    goals: ['depuneri repetate', 'taxe de retragere inventate', 'date personale', 'acces la conturi', 'transferuri catre persoane sau platforme neclare'],
    warningSigns: [
      'profit garantat sau risc prezentat ca aproape zero',
      'presiune sa investesti imediat',
      'mesaj nesolicitat de la un broker sau consultant necunoscut',
      'promisiuni de câștig rapid prin crypto, acțiuni sau platforme obscure',
      'broker sau firma greu de verificat',
      'castiguri afisate doar in platforma lor',
      'cereri de taxe suplimentare ca sa iti retragi banii'
    ],
    dontDo: [
      'Nu trimite bani doar pentru ca vezi un randament afisat intr-o platforma.',
      'Nu instala aplicatii cerute de un presupus consultant.',
      'Nu plati taxe ca sa iti recuperezi banii fara verificare oficiala.',
      'Nu trimite copii de acte catre firme pe care nu le poti verifica.'
    ],
    ifVictim: [
      'Opreste comunicarea cu persoana sau platforma.',
      'Contacteaza banca daca ai facut plati recente.',
      'Schimba parolele daca ai oferit acces sau ai instalat aplicatii.',
      'Pastreaza mesajele, adresele, conturile si dovezile de plata pentru raportare.'
    ],
    examples: [
      'Salut, sunt consultant financiar. Ai fost selectat pentru o investitie crypto cu profit garantat de 30% pe saptamana. Locurile se inchid azi.',
      'Contul tau are profit, dar pentru retragere trebuie achitata taxa de deblocare de 900 RON.'
    ],
    checklist: [
      'Ti se promite profit garantat?',
      'Compania este greu de verificat?',
      'Ti se cere sa trimiti bani rapid?',
      'Trebuie sa platesti ca sa retragi fondurile?',
      'Conversatia se muta pe WhatsApp sau Telegram?'
    ],
    faq: [
      { question: 'Exista investitii fara risc?', answer: 'Nu in sensul promis de escroci. Cand cineva promite castig mare si sigur, merita tratat ca semnal de risc.' },
      { question: 'Ce fac daca platforma arata profit?', answer: 'Profitul afisat intr-o platforma controlata de escroci poate fi inventat. Verifica firma si nu plati taxe suplimentare.' },
      { question: 'Pot recupera banii platind o taxa?', answer: 'Fii foarte atent. Cererea de taxa pentru deblocare este frecventa in fraude.' },
      { question: 'Ce verific inainte sa investesc?', answer: 'Verifica firma din surse independente, autorizarea, domeniul site-ului si modul in care se fac platile.' }
    ],
    related: ['sms-spam', 'banca-falsa', 'phishing', 'caraus-de-bani']
  },
  {
    slug: 'job-fals',
    category: 'Locuri de munca',
    cardTitle: 'Job fals',
    title: 'Job fals online: lucru usor, bani rapizi si taxe de inceput',
    seoTitle: 'Job fals online: semne clare si ce sa nu faci | NuPuneBotul.ro',
    seoDescription: 'Afla cum recunosti un job fals: lucru remote prea usor, plata zilnica, grupuri pe Telegram, taxe de training si cereri de date.',
    description: 'Joburile false promit castiguri usoare si rapide, apoi cer bani, date personale sau folosirea contului tau pentru alte scheme.',
    summary: 'Oferte remote prea bune, fara interviu real, cu taxe, task-uri platite si grupuri false.',
    intro: [
      'Un job fals este construit sa para o oportunitate simpla: program flexibil, sarcini usoare si bani rapizi.',
      'In realitate, oferta poate urmari taxe, comisioane, date personale sau implicarea ta in transferuri suspecte.'
    ],
    howItStarts: [
      'Primesti un mesaj despre un job remote, uneori fara sa fi aplicat undeva.',
      'Discutia se muta rapid pe WhatsApp sau Telegram, unde apar instructiuni, grupuri si presupusi colegi.'
    ],
    goals: ['taxe de training', 'comisioane pentru task-uri', 'date personale', 'date bancare', 'folosirea contului tau pentru bani suspecti'],
    warningSigns: [
      'castig mare pentru efort foarte mic',
      'job nesolicitat primit prin SMS, WhatsApp sau Telegram',
      'lucru de acasă foarte bine plătit, fără interviu real',
      'nu exista interviu real sau contract clar',
      'ti se cer bani ca sa incepi',
      'pași ciudați: garanții, activări, task-uri blocate sau comisioane',
      'compania nu poate fi verificata',
      'grupuri cu persoane care par sa confirme castiguri'
    ],
    dontDo: [
      'Nu plati pentru training, uniforma sau deblocarea task-urilor.',
      'Nu trimite acte inainte sa verifici angajatorul.',
      'Nu primi si retrimite bani pentru un presupus job.',
      'Nu cumpara crypto sau carduri cadou pentru altcineva.'
    ],
    ifVictim: [
      'Opreste comunicarea si paraseste grupurile.',
      'Contacteaza banca daca ai facut plati sau ai primit bani suspecti.',
      'Schimba parolele daca ai creat conturi prin linkurile lor.',
      'Pastreaza conversatiile si datele de plata.'
    ],
    examples: [
      'Buna, avem job part-time remote. Castig 500-800 RON pe zi. Pentru activare trebuie sa platesti garantia de task.',
      'Intra in grupul nostru Telegram si urmeaza instructiunile. Dupa primele sarcini trebuie sa alimentezi contul ca sa continui.'
    ],
    checklist: [
      'Ai fost contactat fara sa aplici?',
      'Ti se promite plata mare si rapida?',
      'Ti se cer bani ca sa incepi?',
      'Totul se face doar pe mesagerie?',
      'Ti se cere sa muti bani pentru altcineva?'
    ],
    faq: [
      { question: 'Este suspect un job remote?', answer: 'Nu. Devine suspect cand nu exista verificare serioasa, contract clar sau cand ti se cer bani.' },
      { question: 'De ce folosesc grupuri cu alti angajati?', answer: 'Ca sa creeze incredere si presiune sociala. Unele conturi pot fi false.' },
      { question: 'Pot trimite actul de identitate?', answer: 'Nu inainte sa verifici angajatorul din surse independente.' },
      { question: 'Ce legatura are cu carausii de bani?', answer: 'Unele joburi false ajung sa ceara primirea si retrimiterea unor sume prin contul tau.' }
    ],
    related: ['sms-spam', 'premii-false', 'caraus-de-bani', 'phishing', 'investitii-false']
  },
  {
    slug: 'achizitii-false',
    category: 'Cumparaturi online',
    cardTitle: 'Achizitii false',
    title: 'Achizitii false si site-uri clonate: cum verifici o oferta prea buna',
    seoTitle: 'Achizitii false si site-uri clonate: semne clare | NuPuneBotul.ro',
    seoDescription: 'Ghid despre cumparaturi false, site-uri clonate, bilete inexistente, produse ieftine, linkuri externe si plati in avans.',
    description: 'Achizitiile false folosesc produse populare, preturi foarte mici sau site-uri care imita magazine reale pentru a obtine bani ori date de card.',
    summary: 'Produse inexistente, preturi prea mici, site-uri clonate, bilete false si plati in afara platformei.',
    intro: [
      'O oferta buna poate fi reala, dar o oferta prea buna combinata cu presiune si verificari slabe merita tratata cu prudenta.',
      'Escrocii folosesc produse cautate, bilete, chirii, electronice sau articole greu de gasit pentru a grabi plata.'
    ],
    howItStarts: [
      'Vezi o reclama, un anunt pe marketplace sau un site care seamana cu un magazin cunoscut.',
      'Vanzatorul cere plata rapida, avans sau transfer pe un link extern.'
    ],
    goals: ['plata in avans', 'datele cardului', 'transfer bancar', 'coduri de confirmare', 'redirectionarea catre site-uri false'],
    warningSigns: [
      'pret mult sub piata pentru un produs cautat',
      'URL usor diferit de magazinul real',
      'recenzii putine, false sau exagerat de perfecte',
      'plata ceruta prin transfer sau link extern',
      'presiune ca oferta expira imediat'
    ],
    dontDo: [
      'Nu plati in afara platformei cand exista un sistem securizat.',
      'Nu introduce cardul pe un site cu domeniu ciudat.',
      'Nu trimite avans pentru un produs sau o chirie greu de verificat.',
      'Nu ignora lipsa datelor clare despre vanzator.'
    ],
    ifVictim: [
      'Contacteaza banca daca ai platit cu cardul.',
      'Raporteaza anuntul sau magazinul in platforma unde l-ai gasit.',
      'Pastreaza linkul, conversatia, dovada platii si datele vanzatorului.',
      'Schimba parolele daca ai creat cont pe site-ul fals.'
    ],
    examples: [
      'Ultimele bilete disponibile la jumatate de pret. Rezerva acum prin transfer rapid, oferta expira in 15 minute.',
      'Magazin oficial lichidare stoc. iPhone nou la 1.299 RON. Plata doar azi prin linkul securizat: https://magazin-oferta.top'
    ],
    checklist: [
      'Pretul este mult prea mic?',
      'Site-ul are un domeniu modificat?',
      'Ti se cere plata in afara platformei?',
      'Vanzatorul evita intrebari normale?',
      'Nu gasesti informatii reale despre magazin?'
    ],
    faq: [
      { question: 'Un pret mic inseamna automat frauda?', answer: 'Nu, dar pretul foarte mic combinat cu urgenta si plata externa este un semnal important.' },
      { question: 'Cum verific un site de magazin?', answer: 'Uita-te la domeniu, date de contact, recenzii independente si cauta manual magazinul, nu doar prin reclama.' },
      { question: 'Este sigur transferul bancar?', answer: 'Pentru cumparaturi de la necunoscuti, transferul poate fi greu de recuperat. Foloseste metode protejate cand exista.' },
      { question: 'Ce fac daca produsul nu mai vine?', answer: 'Strange dovezile, contacteaza banca sau platforma si raporteaza vanzatorul.' }
    ],
    related: ['olx', 'colet-fals', 'phishing']
  },
  {
    slug: 'uzurpare-identitate',
    category: 'Identitate falsa',
    cardTitle: 'Uzurpare de identitate',
    title: 'Uzurpare de identitate: apeluri si mesaje de la persoane care par oficiale',
    seoTitle: 'Uzurpare de identitate: cum verifici un apel sau mesaj | NuPuneBotul.ro',
    seoDescription: 'Ghid despre escroci care se dau drept banca, autoritati, curier, suport tehnic sau persoane apropiate si cer bani, coduri sau acces.',
    description: 'Uzurparea de identitate apare cand cineva pretinde ca este o institutie, o firma, un operator sau o persoana apropiata pentru a castiga incredere.',
    summary: 'Apeluri neasteptate, autoritate falsa, bani in pericol, acces la dispozitiv si transferuri in conturi asa-zis sigure.',
    intro: [
      'Nu toate fraudele incep cu un link. Uneori inceputul este un apel convingator sau un mesaj de la cineva care pare legitim.',
      'Escrocul poate sti cateva detalii despre tine si le foloseste ca sa para credibil.'
    ],
    howItStarts: [
      'Primesti un apel sau mesaj de la cineva care spune ca reprezinta o banca, o institutie, un curier sau suport tehnic.',
      'Ti se spune ca exista o urgenta: banii sunt in pericol, contul trebuie verificat sau trebuie sa actionezi rapid.'
    ],
    goals: ['increderea ta', 'coduri de securitate', 'date personale', 'date bancare', 'transferul banilor intr-un cont controlat de escroc'],
    warningSigns: [
      'apel neasteptat care cere actiune imediata',
      'ti se spune ca banii trebuie mutati intr-un cont sigur',
      'ti se cere sa ignori avertismentele din aplicatie',
      'ti se cere acces la telefon sau calculator',
      'o persoana apropiata cere bani urgent, dar situatia nu poate fi confirmata'
    ],
    dontDo: [
      'Nu continua apelul daca simti presiune sau amenintare.',
      'Nu muta bani intr-un cont indicat la telefon.',
      'Nu oferi acces remote la dispozitiv.',
      'Nu divulga coduri, parole sau date de card.'
    ],
    ifVictim: [
      'Contacteaza imediat banca prin numarul oficial.',
      'Blocheaza cardurile sau conturile afectate daca este nevoie.',
      'Schimba parolele si elimina aplicatiile instalate la cererea escrocului.',
      'Raporteaza incidentul si pastreaza numerele, mesajele si dovezile.'
    ],
    examples: [
      'Sunt de la departamentul antifrauda. Contul tau este atacat. Transfera urgent banii in contul securizat indicat de noi.',
      'Sunt suport tehnic. Pentru a opri tranzactia trebuie sa instalezi aplicatia de control si sa imi spui codul afisat.'
    ],
    checklist: [
      'Apelul a venit pe neasteptate?',
      'Ti se cere sa actionezi imediat?',
      'Ti se cere sa muti bani?',
      'Ti se cere acces la dispozitiv?',
      'Poti verifica separat din surse oficiale?'
    ],
    faq: [
      { question: 'Poate un numar afisat sa para real?', answer: 'Da. Numele sau numarul afisat nu sunt suficiente pentru verificare.' },
      { question: 'Ce fac daca persoana spune ca este de la banca?', answer: 'Inchide apelul si suna tu la banca folosind numarul oficial.' },
      { question: 'Exista cont securizat unde trebuie sa mut banii?', answer: 'O institutie serioasa nu iti cere sa iti transferi singur banii intr-un cont indicat la telefon.' },
      { question: 'Cum verific o ruda care cere bani?', answer: 'Suna persoana pe un numar cunoscut sau confirma printr-un alt membru al familiei.' }
    ],
    related: ['banca-falsa', 'anaf-fals', 'whatsapp-cod']
  },
  {
    slug: 'phishing',
    category: 'Phishing',
    cardTitle: 'Phishing',
    title: 'Phishing: linkuri false, pagini de autentificare si cereri de coduri',
    seoTitle: 'Phishing: cum recunosti linkurile si paginile false | NuPuneBotul.ro',
    seoDescription: 'Ghid practic despre phishing prin SMS, email, apeluri si linkuri false care cer parole, OTP, carduri sau instalarea de programe.',
    description: 'Phishingul incearca sa te convinga sa intri pe o pagina falsa, sa introduci date sau sa descarci ceva periculos.',
    summary: 'Emailuri, SMS-uri si linkuri false care cer autentificare, date bancare, coduri OTP sau descarcari.',
    intro: [
      'Phishingul imita o sursa de incredere: banca, magazin online, curier, autoritate sau aplicatie cunoscuta.',
      'Scopul este sa faci un pas aparent normal, cum ar fi autentificarea, confirmarea unei livrari sau verificarea contului.'
    ],
    howItStarts: [
      'Primesti un email, SMS, mesaj sau apel cu o problema falsa de cont, livrare, plata sau securitate.',
      'Mesajul include un link, un formular, un atasament sau o cerere de cod.'
    ],
    goals: ['parole', 'coduri OTP', 'date personale', 'date de card', 'instalarea de malware', 'acces la conturi'],
    warningSigns: [
      'link scurtat sau domeniu apropiat de cel real',
      'formulări de tip „verifică acum”, „cont suspendat” sau „alertă de securitate”',
      'cerere de autentificare imediata',
      'formular care cere prea multe date',
      'ton urgent sau amenintator',
      'cerere de cod OTP, PIN, parola sau CVV'
    ],
    dontDo: [
      'Nu apasa linkuri suspecte din mesaje neasteptate.',
      'Nu introduce parola sau cardul pe pagini primite prin link.',
      'Nu trimite coduri unice nimanui.',
      'Nu descarca fisiere sau aplicatii din surse neclare.'
    ],
    ifVictim: [
      'Schimba imediat parola contului afectat.',
      'Activeaza autentificarea in doi pasi unde este posibil.',
      'Contacteaza banca daca ai introdus date de card sau coduri.',
      'Verifica sesiunile active si deconecteaza dispozitivele necunoscute.'
    ],
    examples: [
      'Contul tau va fi suspendat. Autentifica-te acum pentru verificare: https://login-client-secure.xyz',
      'Livrarea a fost oprita. Completeaza formularul si confirma codul OTP pentru reluare.'
    ],
    checklist: [
      'Ai primit linkul pe neasteptate?',
      'Pagina cere parola, OTP sau card?',
      'Domeniul pare ciudat sau schimbat?',
      'Mesajul creeaza urgenta?',
      'Poti verifica direct in aplicatia oficiala?'
    ],
    faq: [
      { question: 'Un link cu lacat este sigur?', answer: 'Nu neaparat. Lacatul arata conexiune criptata, nu faptul ca site-ul este legitim.' },
      { question: 'Ce fac daca am introdus parola?', answer: 'Schimba parola imediat si activeaza autentificarea in doi pasi.' },
      { question: 'Pot deschide atasamentul?', answer: 'Nu daca mesajul este neasteptat sau sursa nu este verificata.' },
      { question: 'Cum verific un link?', answer: 'Nu te baza pe linkul din mesaj. Intra manual in site-ul sau aplicatia oficiala.' }
    ],
    related: ['sms-spam', 'banca-falsa', 'colet-fals', 'achizitii-false']
  },
  {
    slug: 'caraus-de-bani',
    category: 'Bani suspecti',
    cardTitle: 'Caraus de bani',
    title: 'Caraus de bani: cand cineva iti cere sa muti bani pentru altcineva',
    seoTitle: 'Caraus de bani: semne clare si riscuri | NuPuneBotul.ro',
    seoDescription: 'Afla ce inseamna caraus de bani, cum apar cererile prin joburi false sau ajutor aparent si de ce nu trebuie sa muti bani pentru altii.',
    description: 'Un caraus de bani primeste si transfera mai departe fonduri suspecte, uneori crezand ca face un job simplu sau ajuta pe cineva.',
    summary: 'Cereri de a primi bani in contul tau, retrimiteri, crypto, carduri cadou si comisioane usoare.',
    intro: [
      'Unele fraude nu iti cer doar sa platesti. Iti cer sa folosesti contul tau pentru bani care nu iti apartin.',
      'Chiar daca pare un favor sau un job, mutarea banilor pentru altcineva poate avea consecinte serioase.'
    ],
    howItStarts: [
      'Poate porni dintr-un job fals, o relatie online, o rugaminte de ajutor sau o promisiune de comision rapid.',
      'Ti se cere sa primesti bani, sa retrimiti o parte, sa cumperi crypto sau carduri cadou.'
    ],
    goals: ['folosirea contului tau', 'transferul banilor suspecti', 'cumpararea de crypto', 'cumpararea de carduri cadou', 'ascunderea traseului banilor'],
    warningSigns: [
      'ti se cere sa primesti bani pentru altcineva',
      'ti se promite comision mare pentru efort mic',
      'ti se cere sa retrimiti banii rapid',
      'ti se cere sa cumperi crypto sau carduri cadou',
      'explicatiile sunt vagi sau se schimba'
    ],
    dontDo: [
      'Nu lasa pe nimeni sa foloseasca contul tau.',
      'Nu primi si retrimite bani pentru persoane necunoscute.',
      'Nu cumpara crypto sau carduri cadou pentru altcineva.',
      'Nu accepta comisioane pentru transferuri pe care nu le intelegi.'
    ],
    ifVictim: [
      'Opreste imediat transferurile.',
      'Contacteaza banca si explica situatia.',
      'Pastreaza conversatiile, datele conturilor si dovezile.',
      'Cere ajutor oficial daca banuiesti ca ai fost implicat intr-o activitate ilegala.'
    ],
    examples: [
      'Ai nevoie doar sa primesti banii in contul tau si sa ii trimiti mai departe. Pastrezi 10% comision.',
      'Cumpara carduri cadou din suma primita si trimite codurile. Este o procedura normala pentru job.'
    ],
    checklist: [
      'Banii nu sunt ai tai?',
      'Ti se cere sa ii retrimiti?',
      'Primul contact a fost un job sau o relatie online?',
      'Ti se promite comision rapid?',
      'Ti se cere crypto sau carduri cadou?'
    ],
    faq: [
      { question: 'Daca nu stiam, tot este riscant?', answer: 'Da. De aceea este important sa opresti imediat si sa ceri ajutor cand ceva pare suspect.' },
      { question: 'Este normal ca un job sa foloseasca contul meu?', answer: 'Nu. Un angajator legitim nu iti cere sa muti banii companiei prin contul personal.' },
      { question: 'Ce fac daca am primit bani?', answer: 'Nu ii retrimite fara sa vorbesti cu banca si fara sa clarifici sursa.' },
      { question: 'De ce cer carduri cadou?', answer: 'Pentru ca sunt greu de recuperat si usor de valorificat de escroci.' }
    ],
    related: ['job-fals', 'investitii-false', 'teapa-romantica']
  },
  {
    slug: 'teapa-romantica',
    category: 'Relatii online',
    cardTitle: 'Teapa romantica',
    title: 'Teapa romantica: relatie falsa, incredere rapida si cereri de bani',
    seoTitle: 'Teapa romantica online: semne clare si protectie | NuPuneBotul.ro',
    seoDescription: 'Ghid despre tepe romantice pe dating si retele sociale: love bombing, identitati false, povesti dramatice, crypto si cereri de bani.',
    description: 'Teapa romantica foloseste increderea si apropierea emotionala pentru a cere bani, ajutor urgent sau investitii suspecte.',
    summary: 'Identitati false, apropiere emotionala rapida, povesti dramatice, evitare intalniri si cereri de bani.',
    intro: [
      'O teapa romantica nu incepe mereu cu bani. De obicei incepe cu atentie, incredere si o relatie care pare sincera.',
      'Escrocul poate folosi fotografii false, povesti elaborate sau chiar materiale generate cu tehnologie moderna.'
    ],
    howItStarts: [
      'Contactul apare pe site-uri de dating, retele sociale sau printr-un mesaj aparent gresit.',
      'Relatia avanseaza rapid, dar intalnirile reale sunt amanate mereu prin explicatii dramatice.'
    ],
    goals: ['bani pentru urgente', 'transferuri bancare', 'crypto', 'carduri cadou', 'date personale', 'implicarea in alte scheme'],
    warningSigns: [
      'declaratii intense dupa foarte putin timp',
      'cereri de discretie sau secrete',
      'povesti dramatice greu de verificat',
      'evitarea apelurilor video reale sau a intalnirilor',
      'cereri de bani pentru calatorii, taxe, sanatate, acte sau investitii'
    ],
    dontDo: [
      'Nu trimite bani unei persoane pe care nu ai intalnit-o si verificat-o.',
      'Nu cumpara carduri cadou sau crypto pentru o relatie online.',
      'Nu pastra secretul daca apar cereri financiare.',
      'Nu ignora faptul ca intalnirile sunt amanate repetat.'
    ],
    ifVictim: [
      'Opreste comunicarea si nu mai trimite bani.',
      'Vorbeste cu cineva de incredere din afara relatiei online.',
      'Contacteaza banca daca ai facut transferuri recente.',
      'Pastreaza conversatiile, conturile, fotografiile si dovezile de plata.'
    ],
    examples: [
      'Stiu ca ne cunoastem de putin timp, dar am nevoie urgent de ajutor pentru biletul de avion. Iti returnez banii imediat ce ajung.',
      'Nu pot folosi contul meu momentan. Cumpara te rog carduri cadou si trimite-mi codurile, este singura solutie azi.'
    ],
    checklist: [
      'Relatia avanseaza neobisnuit de repede?',
      'Persoana evita intalnirile reale?',
      'A aparut o urgenta financiara?',
      'Ti se cere discretie?',
      'Metoda de plata este greu de recuperat?'
    ],
    faq: [
      { question: 'Poate fi falsa o persoana care vorbeste zilnic cu mine?', answer: 'Da. Unele fraude romantice dureaza saptamani sau luni tocmai pentru a construi incredere.' },
      { question: 'Este suspect mesajul cu numar gresit?', answer: 'Nu mereu, dar poate fi un inceput folosit pentru conversatii manipulative.' },
      { question: 'Ce fac daca imi este rusine?', answer: 'Fraudele sunt construite sa manipuleze. Opreste platile si cere ajutor fara sa te invinovatesti.' },
      { question: 'De ce cer crypto sau carduri cadou?', answer: 'Pentru ca sunt greu de anulat, urmarit sau recuperat.' }
    ],
    related: ['caraus-de-bani', 'investitii-false', 'uzurpare-identitate']
  }
]
