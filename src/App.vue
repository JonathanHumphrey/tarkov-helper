<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="nav-bar">
      <nav>
        <RouterLink to="/" data-cy="home">Home</RouterLink>
        <RouterLink to="/ruble-dollar-conversion" data-cy="ruble">Ruble to Dollar Tool</RouterLink>
        <RouterLink to="/about" data-cy="about">About</RouterLink>
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
  width: 60%;
  display: flex;
  justify-content: space-evenly;
}
a{
  color: rgb(211, 211, 211);
  text-decoration: none;
  text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black;
  margin-right: 2rem;
  margin-left: 2rem;
}

nav a.router-link-exact-active {
   background-color: rgb(211, 211, 211);  
  color: white;
  border: none;
  width: 10rem;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border-radius: .5rem;
  cursor: pointer;
}

nav :hover {
  background-color: white;
  color: white;
  border: none;
  width: 10rem;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border-radius: .5rem;
  cursor: pointer;
}

</style>
