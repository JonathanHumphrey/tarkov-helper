<script setup>
import ItemCard from "./ItemCard.vue";
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
</script>

<template>
  <div class="card-wrapper">
    <ItemCard>
      <template v-slot:header="slotProps">
        <h2 data-cy="card-prop-header">{{ slotProps.header }}</h2>
      </template>
      <template v-slot:body="{ image }">
        <img data-cy="card-prop-body" :src="image" alt="" />
      </template>
      <template v-slot:footer="slotProps">
        <p data-cy="card-prop-footer1">Peacekeeper: ${{ slotProps.pkPrice }}</p>
        <p data-cy="card-prop-footer2">
          Flea: ₽{{ slotProps.fleaPrice.toLocaleString("en-US") }}
        </p>
      </template>
    </ItemCard>
  </div>
</template>

<style scoped>
.card-wrapper {
  width: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5rem;
  min-height: 100vh;
}
img {
  width: 40px;
  height: 40px;
  align-self: center;
}
</style>