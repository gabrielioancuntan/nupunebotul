<template>
  <div>
    <section class="section hero">
      <div class="container two-columns">
        <div>
          <p class="eyebrow">Verificare anti-țeapă</p>
          <h1 class="page-title">Ai primit un mesaj suspect?</h1>
          <p class="page-intro">
            Verifică-l rapid și vezi dacă are semne de țeapă.
          </p>

          <div class="button-row">
            <NuxtLink to="/verifica" class="button button-primary">Verifică mesajul</NuxtLink>
            <NuxtLink to="/tepe" class="button button-secondary">Vezi cele mai comune țepe</NuxtLink>
          </div>
        </div>

        <aside class="notice">
          Nu introduce parole, CNP, coduri bancare sau date personale.
        </aside>
      </div>
    </section>

    <section class="section-small">
      <div class="container grid">
        <article class="card">
          <h2>Verificare rapidă</h2>
          <p>Primești o listă scurtă de semne la care merită să fii atent înainte să răspunzi.</p>
        </article>
        <article class="card">
          <h2>Explicații clare</h2>
          <p>Fără limbaj complicat. Doar explicații simple despre ce pare riscant și de ce.</p>
        </article>
        <article class="card">
          <h2>Ghid pentru familie</h2>
          <p>Materiale ușor de trimis părinților, bunicilor sau prietenilor care au nevoie de ajutor.</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container two-columns">
        <div>
          <p class="eyebrow">Pentru cei dragi</p>
          <h2>Ajută-ți părinții și bunicii să nu pună botul.</h2>
          <p>
            Multe țepe online se bazează pe grabă, frică sau promisiuni prea bune ca să fie adevărate.
            NuPuneBotul.ro va strânge exemple și explicații pe înțelesul tuturor, ca discuțiile din familie
            să fie mai simple.
          </p>
        </div>

        <div class="placeholder-box">
          În curând: exemple de mesaje suspecte, pași simpli de verificare și recomandări de siguranță.
        </div>
      </div>
    </section>

    <section class="section-small">
      <div class="container">
        <p class="eyebrow">Țepe comune</p>
        <h2>Tipuri de mesaje care merită verificate</h2>
        <ul class="simple-list scam-list">
          <li>SMS-uri cu livrări false sau taxe de colet.</li>
          <li>Mesaje care cer coduri bancare, parole sau confirmări urgente.</li>
          <li>Promisiuni de premii, investiții rapide sau câștiguri garantate.</li>
          <li>Conturi false care se dau drept rude, firme cunoscute sau instituții.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container grid">
        <article class="card">
          <h2>Ghid practic</h2>
          <p>O pagină dedicată unui ghid clar, pregătit pentru familie și prieteni.</p>
          <NuxtLink to="/ghid" class="inline-link">Vezi pagina ghidului</NuxtLink>
        </article>
        <article class="card">
          <h2>Quiz anti-țeapă</h2>
          <p>Un test scurt care va ajuta oamenii să recunoască situațiile riscante.</p>
          <NuxtLink to="/quiz" class="inline-link">Vezi quiz-ul</NuxtLink>
        </article>
        <article class="card">
          <h2>Biblioteca de exemple</h2>
          <p>Un loc pentru cele mai întâlnite scenarii de fraudă online.</p>
          <NuxtLink to="/tepe" class="inline-link">Vezi biblioteca</NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding-top: 80px;
}

h2 {
  margin: 0 0 14px;
  color: #162018;
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  line-height: 1.1;
}

p {
  color: #4b5b50;
  font-size: 1.05rem;
}

.scam-list {
  margin-top: 20px;
}

.inline-link {
  display: inline-flex;
  margin-top: 16px;
  color: #0f766e;
  font-weight: 800;
}
</style>
