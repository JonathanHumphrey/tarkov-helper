<script setup>
import ItemCard from "./ItemCard.vue";
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
        <p data-cy="card-prop-footer">{{ slotProps.footer }}</p>
      </template>
    </ItemCard>
  </div>
</template>

<style scoped>
.card-wrapper {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
}
img {
  width: 250px;
  height: 250px;
  align-self: center;
}
</style>