export const scamTestCases = [
  {
    id: 'legit-awb-001',
    category: 'Informativ / fără semnale clare',
    label: 'AWB curier informativ',
    message: 'FAN Courier: Expedierea cu AWB 123456789 este in tranzit. Poti verifica statusul in aplicatia oficiala sau pe site-ul fancourier.ro.',
    expectedRisk: 'low',
    notes: 'Mentioneaza AWB si curier, dar nu cere plata, date personale sau actiune urgenta.'
  },
  {
    id: 'legit-easybox-001',
    category: 'Informativ / fără semnale clare',
    label: 'Cod ridicare easybox',
    message: 'Sameday: coletul tau a ajuns la easybox. Cod ridicare: 482913. Il poti ridica pana maine la ora 20:00.',
    expectedRisk: 'low',
    notes: 'Un cod de ridicare pentru locker poate fi un mesaj operational daca nu cere redirectionare, plata sau coduri de autentificare.'
  },
  {
    id: 'legit-delivery-001',
    category: 'Informativ / fără semnale clare',
    label: 'Notificare livrare fara cereri',
    message: 'Cargus: coletul tau va fi livrat astazi intre 12:00 si 16:00. Pentru detalii verifica aplicatia sau contacteaza curierul asignat.',
    expectedRisk: 'low',
    notes: 'Mesaj operational, fara link suspect si fara solicitare de date.'
  },
  {
    id: 'legit-personal-001',
    category: 'Informativ / fără semnale clare',
    label: 'Mesaj personal neutru',
    message: 'Salut, ajung cu 10 minute mai tarziu. Ne vedem in fata la intrare.',
    expectedRisk: 'low',
    notes: 'Nu contine semnale de frauda.'
  },
  {
    id: 'legit-appointment-001',
    category: 'Informativ / fără semnale clare',
    label: 'Reminder programare',
    message: 'Clinica MedLife: Va reamintim programarea de maine, ora 09:30. Pentru modificari va rugam sa sunati la numarul din confirmarea initiala.',
    expectedRisk: 'low',
    notes: 'Reminder contextual, fara presiune sau link de plata.'
  },
  {
    id: 'legit-bank-info-001',
    category: 'Informativ / fără semnale clare',
    label: 'Informare bancara generala',
    message: 'BCR: In perioada 22:00-02:00 pot aparea intreruperi temporare pentru mentenanta. Nu iti vom cere niciodata PIN, parola sau coduri prin SMS.',
    expectedRisk: 'low',
    notes: 'Mentioneaza banca si PIN/parola ca avertisment defensiv, nu ca solicitare.'
  },
  {
    id: 'ambiguous-link-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Link generic de confirmare',
    message: 'Comanda ta este aproape gata. Confirma detaliile aici: https://livrare-info.ro/comanda/83921',
    expectedRisk: 'medium',
    notes: 'Are link si limbaj de confirmare, dar nu cere explicit bani sau date bancare.'
  },
  {
    id: 'ambiguous-courier-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Curier vag',
    message: 'Curierul nu a putut finaliza livrarea. Verifica optiunile disponibile pentru coletul tau.',
    expectedRisk: 'medium',
    notes: 'Mesaj vag, fara AWB, fara expeditor clar. Nu este suficient singur pentru risc ridicat.'
  },
  {
    id: 'ambiguous-confirm-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Confirmare neclara',
    message: 'Va rugam confirmati datele pentru a continua procesarea solicitarii. Daca nu ati facut aceasta cerere, ignorati mesajul.',
    expectedRisk: 'medium',
    notes: 'Formulare oficiala vaga, dar fara link, plata sau date sensibile explicite.'
  },
  {
    id: 'ambiguous-marketplace-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Cumparator insistent OLX',
    message: 'Salut, vreau produsul de pe OLX. Pot trimite curierul azi, trebuie doar sa confirmi primirea banilor.',
    expectedRisk: 'medium',
    notes: 'Context OLX si confirmare financiara, dar fara link sau cerere de date inca.'
  },
  {
    id: 'ambiguous-job-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Oferta job prea vaga',
    message: 'Buna ziua, avem o oportunitate remote cu plata zilnica. Daca va intereseaza, raspundeti cu DA pentru detalii.',
    expectedRisk: 'medium',
    notes: 'Promite bani usor, dar nu cere plata sau instalare de aplicatii.'
  },
  {
    id: 'ambiguous-invoice-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Factura neasteptata',
    message: 'Factura pentru serviciile lunii curente este disponibila. Daca nu recunoasteti aceasta notificare, contactati furnizorul.',
    expectedRisk: 'medium',
    notes: 'Neclar; lipseste contextul furnizorului.'
  },
  {
    id: 'high-courier-fee-001',
    category: 'Risc ridicat',
    label: 'Taxa falsa curier',
    message: 'Posta Romana: coletul tau este blocat din cauza unei taxe vamale de 8,74 RON. Achita acum pentru livrare: https://posta-romana-taxare.top',
    expectedRisk: 'high',
    notes: 'Taxa mica, presiune si domeniu suspect.'
  },
  {
    id: 'high-bank-blocked-001',
    category: 'Risc ridicat',
    label: 'Cont bancar blocat',
    message: 'Banca: contul dvs a fost restrictionat temporar. Pentru a evita suspendarea definitiva, verificati identitatea dvs aici: https://secure-cont-client.xyz',
    expectedRisk: 'high',
    notes: 'Blocare cont, urgenta, verificare identitate si link suspect.'
  },
  {
    id: 'high-whatsapp-code-001',
    category: 'Risc ridicat',
    label: 'Cerere cod WhatsApp',
    message: 'Salut, ti-am trimis din greseala codul meu WhatsApp pe numarul tau. Te rog trimite-mi codul de verificare primit prin SMS.',
    expectedRisk: 'high',
    notes: 'Cerere directa de cod de verificare.'
  },
  {
    id: 'high-prize-001',
    category: 'Risc ridicat',
    label: 'Premiu fals',
    message: 'Felicitari! Ai castigat un premiu de 2.000 RON. Pentru revendicare introdu datele cardului si achita taxa de procesare: bit.ly/premiu-rapid',
    expectedRisk: 'high',
    notes: 'Premiu, taxa, date card si link scurtat.'
  },
  {
    id: 'high-anaf-001',
    category: 'Risc ridicat',
    label: 'Presiune ANAF',
    message: 'ANAF: Aveti o penalizare neachitata. Pentru a evita executarea, achitati imediat suma restanta accesand https://anaf-plata.click',
    expectedRisk: 'high',
    notes: 'Institutie imitata, amenintare, plata imediata si domeniu suspect.'
  },
  {
    id: 'high-police-001',
    category: 'Risc ridicat',
    label: 'Presiune Politie',
    message: 'Politie: pe numele dvs exista un dosar pentru activitate online suspecta. Confirmati acum datele pentru inchiderea cazului.',
    expectedRisk: 'high',
    notes: 'Foloseste frica si autoritatea pentru a obtine date.'
  },
  {
    id: 'high-olx-001',
    category: 'Risc ridicat',
    label: 'OLX plata prin link',
    message: 'Am platit produsul pe OLX. Intra pe link ca sa primesti banii pe card: https://olx-plati-client.xyz/confirmare',
    expectedRisk: 'high',
    notes: 'Schema comuna: vanzatorul este impins sa introduca datele cardului.'
  },
  {
    id: 'high-booking-001',
    category: 'Risc ridicat',
    label: 'Booking verificare plata',
    message: 'Booking: rezervarea va fi anulata in 24 de ore daca nu confirmati cardul pentru verificare: https://booking-confirmare.top',
    expectedRisk: 'high',
    notes: 'Urgenta, anulare, card si domeniu suspect.'
  },
  {
    id: 'high-job-app-001',
    category: 'Risc ridicat',
    label: 'Job fals cu aplicatie',
    message: 'Oferta part-time remote, castig 700 RON pe zi. Pentru training instaleaza aplicatia si intra pe Telegram: t.me/joburi-plata-zilnica',
    expectedRisk: 'high',
    notes: 'Castig nerealist, mutare pe Telegram si instalare aplicatie.'
  },
  {
    id: 'high-crypto-001',
    category: 'Risc ridicat',
    label: 'Investitie crypto garantata',
    message: 'Investitie crypto fara risc, profit garantat 30% pe saptamana. Trimite 500 RON azi si primesti castigul maine.',
    expectedRisk: 'high',
    notes: 'Profit garantat si presiune financiara.'
  },
  {
    id: 'high-invoice-001',
    category: 'Risc ridicat',
    label: 'Factura falsa cu link',
    message: 'Factura restanta #RO-88421. Pentru a evita penalizarea, plateste urgent aici: https://facturi-clienti.xyz/pay',
    expectedRisk: 'high',
    notes: 'Factura nesolicitata, urgenta, plata si link suspect.'
  },
  {
    id: 'high-remote-access-001',
    category: 'Risc ridicat',
    label: 'Suport fals cu acces la telefon',
    message: 'Departamentul antifrauda: pentru securizarea contului instaleaza AnyDesk si comunica operatorului codul afisat.',
    expectedRisk: 'high',
    notes: 'Instalare remote access si pretext bancar/securitate.'
  },
  {
    id: 'high-locker-fee-001',
    category: 'Risc ridicat',
    label: 'Locker fals cu taxa',
    message: 'Alege lockerul pentru coletul tau. Pentru redirectionare achita taxa de 4,99 RON aici: https://locker-redirectionare.click',
    expectedRisk: 'high',
    notes: 'Locker/colet, redirectionare, taxa mica si link suspect.'
  },
  {
    id: 'high-olx-3ds-001',
    category: 'Risc ridicat',
    label: 'OLX cu 3D Secure',
    message: 'Cumparatorul a platit articolul prin OLX. Pentru incasare introdu datele cardului si codul 3D Secure: https://olx-incasare.xyz',
    expectedRisk: 'high',
    notes: 'OLX, incasare falsa, date card, 3D Secure si link.'
  },
  {
    id: 'high-whatsapp-vote-001',
    category: 'Risc ridicat',
    label: 'Vot concurs WhatsApp',
    message: 'Ma ajuti cu un vot la concurs? Intra pe linkul WhatsApp si introdu codul de asociere primit prin SMS.',
    expectedRisk: 'high',
    notes: 'Vot/concurs, WhatsApp, link si cod de asociere.'
  },
  {
    id: 'high-bnr-vishing-001',
    category: 'Risc ridicat',
    label: 'BNR / vishing cu mutare pe Signal',
    message: 'BNR: contul tau este investigat pentru activitate suspecta. Continua discutia pe Signal si confirma datele pentru verificare.',
    expectedRisk: 'high',
    notes: 'Autoritate imitata, presiune, mutare pe canal privat si colectare de date.'
  },
  {
    id: 'high-friend-revolut-001',
    category: 'Risc ridicat',
    label: 'Prieten cu Revolut blocat',
    message: 'Sunt eu, mi s-a blocat cardul. Trimite urgent 600 lei pe Revolut si iti returnez azi.',
    expectedRisk: 'high',
    notes: 'Contact cunoscut aparent, card blocat, urgenta si cerere de bani.'
  },
  {
    id: 'high-bank-otp-001',
    category: 'Risc ridicat',
    label: 'Banca cere OTP',
    message: 'Banca: pentru verificarea contului introdu codul OTP si parola aici: https://cont-client-secure.top',
    expectedRisk: 'high',
    notes: 'Banca, verificare cont, OTP, parola si link suspect.'
  },
  {
    id: 'medium-prize-no-link-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Premiu fara link',
    message: 'Felicitari, ai castigat un premiu. Raspunde REVENDIC pentru detalii.',
    expectedRisk: 'medium',
    notes: 'Promisiune de premiu fara link sau cerere de date inca.'
  },
  {
    id: 'medium-authority-call-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Apel autoritate vag',
    message: 'Politie: va rugam sa ne contactati urgent pentru clarificarea unei situatii juridice.',
    expectedRisk: 'medium',
    notes: 'Autoritate si urgenta, dar fara link, plata sau date sensibile.'
  },
  {
    id: 'medium-whatsapp-money-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Cerere bani pe WhatsApp fara detalii',
    message: 'Salut, sunt pe WhatsApp nou. Am nevoie de bani azi, poti sa ma ajuti?',
    expectedRisk: 'medium',
    notes: 'Contact si bani, dar fara IBAN/Revolut sau suma concreta.'
  },
  {
    id: 'low-locker-info-001',
    category: 'Informativ / fără semnale clare',
    label: 'Locker informativ fara plata',
    message: 'Coletul tau este in locker. Cod de ridicare 193842. Ridicare disponibila pana maine.',
    expectedRisk: 'low',
    notes: 'Context locker si cod de ridicare, fara plata, link sau date sensibile.'
  },
  {
    id: 'low-tracking-001',
    category: 'Informativ / fără semnale clare',
    label: 'Tracking colet fara cerere',
    message: 'AWB 778899: coletul este in tranzit. Urmarire colet disponibila in aplicatia oficiala.',
    expectedRisk: 'low',
    notes: 'Tracking si AWB fara plata, link suspect sau cerere de date.'
  },
  {
    id: 'low-pin-ridicare-001',
    category: 'Informativ / fără semnale clare',
    label: 'PIN de ridicare colet',
    message: 'Easybox: PIN de ridicare 839201. Ridicare colet disponibila pana maine la ora 20:00.',
    expectedRisk: 'low',
    notes: 'PIN de ridicare pentru colet, fara plata sau verificare de cont.'
  },
  {
    id: 'high-courier-update-data-001',
    category: 'Risc ridicat',
    label: 'Curier fals cu actualizare date',
    message: 'Curier: actualizare date livrare necesara. Achita taxa de redirectionare aici: https://livrare-client.click',
    expectedRisk: 'high',
    notes: 'Curier, actualizare date, taxa si link.'
  },
  {
    id: 'high-courier-card-data-001',
    category: 'Risc ridicat',
    label: 'Curier fals cere card',
    message: 'Coletul este retinut. Pentru livrare introdu datele cardului si achita comisionul: https://curier-plata.top',
    expectedRisk: 'high',
    notes: 'Colet retinut, comision, date card si link.'
  },
  {
    id: 'high-bank-card-code-001',
    category: 'Risc ridicat',
    label: 'Banca cere card si cod',
    message: 'Banca: contul este blocat. Confirma date card si cod OTP aici: https://client-secure.top',
    expectedRisk: 'high',
    notes: 'Cont blocat, verificare, date card, OTP si link.'
  },
  {
    id: 'high-bank-deblocare-001',
    category: 'Risc ridicat',
    label: 'Deblocare cont prin link',
    message: 'BT: pentru deblocare cont introdu parola si codul de autentificare pe www.bt-client-secure.xyz',
    expectedRisk: 'high',
    notes: 'Banca, deblocare, parola, cod de autentificare si link.'
  },
  {
    id: 'high-olx-buyer-card-001',
    category: 'Risc ridicat',
    label: 'OLX cumparator fals',
    message: 'Cumparator OLX: am platit articolul. Intra pe link pentru incasare si confirma cardul: https://olx-incasare.click',
    expectedRisk: 'high',
    notes: 'OLX, cumparator, link, incasare si card.'
  },
  {
    id: 'high-olx-code-001',
    category: 'Risc ridicat',
    label: 'OLX cere cod pentru incasare',
    message: 'Produsul tau a fost platit pe OLX. Pentru incasare intra pe https://olx-plata.top si confirma codul primit.',
    expectedRisk: 'high',
    notes: 'OLX, incasare, link si cod.'
  },
  {
    id: 'high-whatsapp-scholarship-001',
    category: 'Risc ridicat',
    label: 'Bursa falsa WhatsApp',
    message: 'Voteaza pentru bursa mea pe WhatsApp aici: https://voteaza.top si introdu codul de asociere.',
    expectedRisk: 'high',
    notes: 'Vot/bursa, link, WhatsApp si cod de asociere.'
  },
  {
    id: 'high-whatsapp-contest-pin-001',
    category: 'Risc ridicat',
    label: 'Concurs cu PIN WhatsApp',
    message: 'Ajuta-ma la concurs, intra pe linkul WhatsApp https://concurs-vot.click si pune PIN WhatsApp.',
    expectedRisk: 'high',
    notes: 'Concurs, link, WhatsApp si PIN.'
  },
  {
    id: 'medium-urgent-money-account-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Cerere urgenta de bani',
    message: 'Trimite urgent bani la acest numar de cont, iti explic dupa.',
    expectedRisk: 'medium',
    notes: 'Cerere urgenta de bani cu detalii de transfer, dar fara contact compromis clar.'
  },
  {
    id: 'high-urgent-money-iban-001',
    category: 'Risc ridicat',
    label: 'Cerere urgenta cu IBAN',
    message: 'Sunt eu, trimite urgent 900 lei in IBAN-ul acesta si iti returnez azi.',
    expectedRisk: 'high',
    notes: 'Contact aparent cunoscut, urgenta, suma, IBAN si promisiune de returnare.'
  },
  {
    id: 'medium-prize-claim-001',
    category: 'Ambiguu / necesita atentie',
    label: 'Premiu cu revendicare',
    message: 'Ai castigat un premiu. Raspunde pentru revendicare si verifica datele.',
    expectedRisk: 'medium',
    notes: 'Premiu si revendicare, fara link sau date sensibile explicite.'
  },
  {
    id: 'high-investment-link-001',
    category: 'Risc ridicat',
    label: 'Investitie cu link si urgenta',
    message: 'Investeste acum, profit garantat. Activeaza contul aici: https://profit-rapid.xyz',
    expectedRisk: 'high',
    notes: 'Investitie, profit garantat, urgenta si link suspect.'
  },
  {
    id: 'high-authority-telegram-001',
    category: 'Risc ridicat',
    label: 'Autoritate falsa pe Telegram',
    message: 'Politie: exista o ancheta pe numele dvs. Continuati urgent pe Telegram si confirmati CNP-ul.',
    expectedRisk: 'high',
    notes: 'Autoritate, ancheta, urgenta, canal privat si date personale.'
  },
  {
    id: 'high-anaf-document-code-001',
    category: 'Risc ridicat',
    label: 'ANAF document fals cu cod',
    message: 'ANAF: document urgent pentru cont compromis. Confirmati codul de autentificare pentru verificare.',
    expectedRisk: 'high',
    notes: 'Autoritate, document urgent, cont compromis si cod.'
  }
]

export const riskLabels = {
  low: 'Nivel redus de semnale de risc',
  medium: 'Mai multe semnale de risc',
  high: 'Semnale puternice de risc'
}
