<script setup>
// Component Imports
import CardGallery from "../components/CardGallery.vue";
import ConverterTool from "../components/ConverterTool.vue"
</script>

<template>
  <div class="converter">
    <h2>Ruble to Dollar</h2>
    <p>This tool will grab the information items that Peacekeeper will purchase. If the number is green, then you'll get a few extra dollars for the regular conversion price.</p>
    <ConverterTool />
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

h2{
  margin-top: 0;
}
p{
  margin: 0;
}
</style>
