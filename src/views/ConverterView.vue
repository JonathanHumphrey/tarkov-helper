<script setup>
import CardGallery from "../components/CardGallery.vue";
import ConverterTool from "../components/ConverterTool.vue"
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";

const { getItemData } = useStore();
const { items } = storeToRefs(useStore());
</script>

<template>
  <div class="converter">
    <h2>Ruble to Dollar</h2>
    <p>This tool will grab the information items that Peacekeeper will purchase. If the number is green, then you'll get a few extra dollars for the regular conversion price.</p>
    <ConverterTool />
    <button @click="getItemData()" data-cy="grab" v-if="items.length === 0">grab data</button>
    <CardGallery />
  </div>
</template>

<style scoped>
.converter {
  margin: auto;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: rgb(219, 192, 69);
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
h2{
  margin-top: 0;
}
p{
  margin: 0;
}
</style>
