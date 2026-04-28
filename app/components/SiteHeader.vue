<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="NuPuneBotul.ro">
        NuPuneBotul.ro
      </NuxtLink>

      <nav class="nav" aria-label="Navigare principală">
        <NuxtLink to="/verifica">Verifică</NuxtLink>
        <NuxtLink to="/tepe">Țepe</NuxtLink>
        <NuxtLink to="/quiz">Quiz</NuxtLink>
        <NuxtLink to="/ghid">Ghid</NuxtLink>
        <NuxtLink to="/despre">Despre</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(191, 205, 192, 0.82);
  background: rgba(255, 250, 241, 0.94);
  backdrop-filter: blur(12px);
}

.header-inner {
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  color: #142018;
  font-size: 1.2rem;
  font-weight: 800;
  white-space: nowrap;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.nav a {
  border-radius: 8px;
  padding: 8px 10px;
  color: #405044;
  font-size: 0.95rem;
  font-weight: 700;
}

.nav a:hover,
.nav a.router-link-active {
  background: #e6f2e8;
  color: #0f5f45;
}

@media (max-width: 760px) {
  .header-inner {
    min-height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
  }

  .nav {
    justify-content: flex-start;
  }
}
</style>
