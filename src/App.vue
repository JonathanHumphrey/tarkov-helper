<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="nav-bar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ruble-dollar-conversion">Ruble to Dollar Tool</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<style>
html{
  background: rgb(31, 28, 28);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
.wrapper {
  width: 100%;
  height: 5rem;
}

.nav-bar {
  margin: auto;
  margin-top: 2rem;
}

nav{
  border-radius: .5rem;
}
nav a.router-link-exact-active {
  background-color: rgb(255, 249, 241);
}

nav :hover {
  background-color: rgb(255, 249, 241);
}
</style>
