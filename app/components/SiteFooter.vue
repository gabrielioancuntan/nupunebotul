<template>
  <footer class="border-t border-[#d8e2d8] bg-[#17211b] text-white">
    <div
      class="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-[minmax(0,1fr)_auto] gap-8 py-8 max-md:grid-cols-1"
    >
      <div class="grid gap-3">
        <p class="m-0 font-extrabold">NuPuneBotul.ro</p>
        <p class="m-0 max-w-[520px] text-[#d9e6dc]">
          Un proiect simplu pentru oameni care vor să recunoască mai repede
          mesajele suspecte.
        </p>
        <p class="m-0 max-w-[680px] text-sm leading-relaxed text-[#b8c9bd]">
          NuPuneBotul.ro este un instrument educațional. Analiza nu înlocuiește
          verificarea prin canalul oficial și nu garantează că un mesaj este
          sigur.
        </p>
      </div>

      <nav
        class="grid grid-cols-2 justify-items-start gap-x-6 gap-y-2 text-sm"
        aria-label="Linkuri secundare"
      >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/verifica"
          >Verifică mesajul</NuxtLink
        >
        <NuxtLink class="font-bold text-[#d9e6dc] hover:text-white" to="/tepe"
          >Biblioteca de țepe</NuxtLink
        >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/disclaimer"
          >Disclaimer</NuxtLink
        >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/confidentialitate"
          >Confidențialitate</NuxtLink
        >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/cookies"
          >Cookies</NuxtLink
        >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/termeni"
          >Termeni</NuxtLink
        >
        <NuxtLink
          class="font-bold text-[#d9e6dc] hover:text-white"
          to="/contact"
          >Contact</NuxtLink
        >
      </nav>
    </div>
  </footer>
</template>
