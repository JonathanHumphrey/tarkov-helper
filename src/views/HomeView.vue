<script setup>
import CardGallery from "../components/CardGallery.vue";
import { useStore } from "@/stores/itemData";
const { getItemData } = useStore();
</script>

<template>
  <div class="home">
    <button @click="getItemData()">grab</button>
    <CardGallery />
  </div>
</template>

<style scoped>
.home {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border: solid white;
  width: 100%;
}
</style>
