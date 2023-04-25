<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<v-container>
  <header>
      <nav style="text-align: center;">
        <RouterLink to="/">today</RouterLink>
        <RouterLink to="/comps">comps</RouterLink>
        <RouterLink to="/teams">teams</RouterLink>
      </nav>
  </header>
  <div style="max-width: 1000px; margin: auto">
  <RouterView />
  </div>
</v-container>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

</style>
