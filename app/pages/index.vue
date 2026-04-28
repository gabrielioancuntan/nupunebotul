<template>
  <div>
    <section class="pb-16 pt-20 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Verificare anti-țeapă</p>
          <h1 class="m-0 max-w-[760px] text-[clamp(2.2rem,6vw,4.7rem)] leading-none text-[#162018]">Ai primit un mesaj suspect?</h1>
          <p class="mt-[18px] max-w-[700px] text-[1.15rem] text-[#46534a]">
            Verifică-l rapid și vezi dacă are semne de țeapă.
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <NuxtLink to="/verifica" class="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#147a5a] px-[18px] py-3 font-bold text-white max-md:w-full">Verifică mesajul</NuxtLink>
            <NuxtLink to="/tepe" class="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cad7cc] bg-white px-[18px] py-3 font-bold text-[#1e2a22] max-md:w-full">Vezi cele mai comune țepe</NuxtLink>
          </div>
        </div>

        <aside class="rounded-lg border-l-4 border-[#d97706] bg-[#fff7e6] px-[18px] py-4 font-bold text-[#5b3b0a]">
          Nu introduce parole, CNP, coduri bancare sau date personale.
        </aside>
      </div>
    </section>

    <section class="py-10">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-3 gap-[18px] max-md:grid-cols-1">
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Verificare rapidă</h2>
          <p class="m-0 text-[#536056]">Primești o listă scurtă de semne la care merită să fii atent înainte să răspunzi.</p>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Explicații clare</h2>
          <p class="m-0 text-[#536056]">Fără limbaj complicat. Doar explicații simple despre ce pare riscant și de ce.</p>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Ghid pentru familie</h2>
          <p class="m-0 text-[#536056]">Materiale ușor de trimis părinților, bunicilor sau prietenilor care au nevoie de ajutor.</p>
        </article>
      </div>
    </section>

    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] items-start gap-7 max-md:grid-cols-1">
        <div>
          <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Pentru cei dragi</p>
          <h2 class="mb-3.5 mt-0 text-[clamp(1.8rem,4vw,2.7rem)] leading-tight text-[#162018]">Ajută-ți părinții și bunicii să nu pună botul.</h2>
          <p class="text-[1.05rem] text-[#4b5b50]">
            Multe țepe online se bazează pe grabă, frică sau promisiuni prea bune ca să fie adevărate.
            NuPuneBotul.ro va strânge exemple și explicații pe înțelesul tuturor, ca discuțiile din familie
            să fie mai simple.
          </p>
        </div>

        <div class="rounded-lg border border-dashed border-[#9fb3a7] bg-white/60 p-6 text-[#4b5b50]">
          În curând: exemple de mesaje suspecte, pași simpli de verificare și recomandări de siguranță.
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))]">
        <p class="mb-2.5 mt-0 text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#0f766e]">Țepe comune</p>
        <h2 class="mb-3.5 mt-0 text-[clamp(1.8rem,4vw,2.7rem)] leading-tight text-[#162018]">Tipuri de mesaje care merită verificate</h2>
        <ul class="mt-5 grid list-none gap-3 p-0">
          <li class="rounded-lg border border-[#dce5dc] bg-white p-3.5 text-[#36433a]">SMS-uri cu livrări false sau taxe de colet.</li>
          <li class="rounded-lg border border-[#dce5dc] bg-white p-3.5 text-[#36433a]">Mesaje care cer coduri bancare, parole sau confirmări urgente.</li>
          <li class="rounded-lg border border-[#dce5dc] bg-white p-3.5 text-[#36433a]">Promisiuni de premii, investiții rapide sau câștiguri garantate.</li>
          <li class="rounded-lg border border-[#dce5dc] bg-white p-3.5 text-[#36433a]">Conturi false care se dau drept rude, firme cunoscute sau instituții.</li>
        </ul>
      </div>
    </section>

    <section class="py-16 max-md:py-11">
      <div class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-3 gap-[18px] max-md:grid-cols-1">
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Ghid practic</h2>
          <p class="m-0 text-[#536056]">O pagină dedicată unui ghid clar, pregătit pentru familie și prieteni.</p>
          <NuxtLink to="/ghid" class="mt-4 inline-flex font-extrabold text-[#0f766e]">Vezi pagina ghidului</NuxtLink>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Quiz anti-țeapă</h2>
          <p class="m-0 text-[#536056]">Un test scurt care va ajuta oamenii să recunoască situațiile riscante.</p>
          <NuxtLink to="/quiz" class="mt-4 inline-flex font-extrabold text-[#0f766e]">Vezi quiz-ul</NuxtLink>
        </article>
        <article class="rounded-lg border border-[#dce5dc] bg-white/75 p-[22px]">
          <h2 class="mb-2.5 mt-0 text-[#162018]">Biblioteca de exemple</h2>
          <p class="m-0 text-[#536056]">Un loc pentru cele mai întâlnite scenarii de fraudă online.</p>
          <NuxtLink to="/tepe" class="mt-4 inline-flex font-extrabold text-[#0f766e]">Vezi biblioteca</NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>
