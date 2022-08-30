<script setup>
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";

const { ammoData } = useStore();

const ammoGrab = () => {
  console.log('we here')
  ammoData();
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="ammoGrab()"></button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
