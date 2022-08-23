<script setup>
import CardGallery from "../components/CardGallery.vue";
import { useStore } from "@/stores/itemData";
const { getItemData } = useStore();
</script>

<template>
  <div class="converter">
    <button @click="getItemData()">grab</button>
    <CardGallery />
  </div>
</template>

<style scoped>
.converter {
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: solid white;
  width: 100%;
  min-height: 100vh;
}
button{   
  background: none;
  border: none;
  width: 10rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border-radius: .5rem;
  cursor: pointer;

}
button:hover{
  background: rgb(255, 249, 241);

}
</style>
