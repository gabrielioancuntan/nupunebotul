<template>
  <footer class="border-t border-[#d8e2d8] bg-[#17211b] text-white">
    <div class="mx-auto flex w-[min(1120px,calc(100%_-_32px))] justify-between gap-6 py-8 max-md:flex-col">
      <div>
        <p class="m-0 font-extrabold">NuPuneBotul.ro</p>
        <p class="mt-2 max-w-[520px] text-[#d9e6dc]">
          Un proiect simplu pentru oameni care vor să recunoască mai repede mesajele suspecte.
        </p>
      </div>

      <nav class="flex flex-wrap content-start justify-end gap-3 max-md:justify-start" aria-label="Linkuri secundare">
        <NuxtLink class="font-bold text-[#d9e6dc] hover:text-white" to="/verifica">Verifică mesajul</NuxtLink>
        <NuxtLink class="font-bold text-[#d9e6dc] hover:text-white" to="/tepe">Biblioteca de țepe</NuxtLink>
        <NuxtLink class="font-bold text-[#d9e6dc] hover:text-white" to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </footer>
</template>
