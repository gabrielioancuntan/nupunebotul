export const scamTestCases = [
  {
    id: 'legit-awb-001',
    category: 'Probabil legitim',
    label: 'AWB curier informativ',
    message: 'FAN Courier: Expedierea cu AWB 123456789 este in tranzit. Poti verifica statusul in aplicatia oficiala sau pe site-ul fancourier.ro.',
    expectedRisk: 'low',
    notes: 'Mentioneaza AWB si curier, dar nu cere plata, date personale sau actiune urgenta.'
  },
  {
    id: 'legit-easybox-001',
    category: 'Probabil legitim',
    label: 'Cod ridicare easybox',
    message: 'Sameday: coletul tau a ajuns la easybox. Cod ridicare: 482913. Il poti ridica pana maine la ora 20:00.',
    expectedRisk: 'low',
    notes: 'Un cod de ridicare pentru locker poate fi legitim daca nu cere redirectionare, plata sau coduri de autentificare.'
  },
  {
    id: 'legit-delivery-001',
    category: 'Probabil legitim',
    label: 'Notificare livrare fara cereri',
    message: 'Cargus: coletul tau va fi livrat astazi intre 12:00 si 16:00. Pentru detalii verifica aplicatia sau contacteaza curierul asignat.',
    expectedRisk: 'low',
    notes: 'Mesaj operational, fara link suspect si fara solicitare de date.'
  },
  {
    id: 'legit-personal-001',
    category: 'Probabil legitim',
    label: 'Mesaj personal neutru',
    message: 'Salut, ajung cu 10 minute mai tarziu. Ne vedem in fata la intrare.',
    expectedRisk: 'low',
    notes: 'Nu contine semnale de frauda.'
  },
  {
    id: 'legit-appointment-001',
    category: 'Probabil legitim',
    label: 'Reminder programare',
    message: 'Clinica MedLife: Va reamintim programarea de maine, ora 09:30. Pentru modificari va rugam sa sunati la numarul din confirmarea initiala.',
    expectedRisk: 'low',
    notes: 'Reminder contextual, fara presiune sau link de plata.'
  },
  {
    id: 'legit-bank-info-001',
    category: 'Probabil legitim',
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
    notes: 'Neclar si posibil legitim, dar lipseste contextul furnizorului.'
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
  }
]

export const riskLabels = {
  low: 'Risc redus',
  medium: 'Risc mediu',
  high: 'Risc ridicat'
}
