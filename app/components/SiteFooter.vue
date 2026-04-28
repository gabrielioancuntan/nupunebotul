<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <p class="footer-brand">NuPuneBotul.ro</p>
        <p class="footer-text">
          Un proiect simplu pentru oameni care vor să recunoască mai repede mesajele suspecte.
        </p>
      </div>

      <nav class="footer-links" aria-label="Linkuri secundare">
        <NuxtLink to="/verifica">Verifică mesajul</NuxtLink>
        <NuxtLink to="/tepe">Biblioteca de țepe</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid #d8e2d8;
  background: #17211b;
  color: #ffffff;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 0;
}

.footer-brand {
  margin: 0;
  font-weight: 800;
}

.footer-text {
  max-width: 520px;
  margin: 8px 0 0;
  color: #d9e6dc;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: flex-start;
  justify-content: flex-end;
}

.footer-links a {
  color: #d9e6dc;
  font-weight: 700;
}

.footer-links a:hover {
  color: #ffffff;
}

@media (max-width: 760px) {
  .footer-inner {
    flex-direction: column;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
