<script setup>
// Vue / Pinia Imports
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";

// Store interactions
const { getItemData } = useStore();
const { ammoData } = useStore();
const { getHideoutInfo } = useStore();
const { items } = storeToRefs(useStore());
const { ammo } = storeToRefs(useStore());

// Temp function, may put this onCreated in the future
const grabAllData = () =>{
  //getItemData()
  getHideoutInfo()
  //ammoData()
}
</script>

<template>
  <div class="home">
    <h1>Welcome to Tarkov Helper!</h1>
    <p>This is a tool designed to gain some insight into curent market prices and whether purchasing items at that price is worth it</p>
    <button @click="grabAllData()" data-cy="grab" v-if="items.length === 0">grab data</button>
  </div>
</template>

<style>

.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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