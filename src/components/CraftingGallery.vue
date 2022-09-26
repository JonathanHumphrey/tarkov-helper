<script setup>
import CraftingCard from "./CraftingCard.vue";
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
</script>
    
<template>
    <div class="card-wrapper">
    <CraftingCard>
        <template v-slot:header="slotProps">
            <h2 data-cy="card-prop-header">{{ slotProps.header }}</h2>
        </template>
        <template v-slot:body="slotProps">
            <p> {{slotProps.body}}</p>
        </template>  
        <template v-slot:reqItems="slotProps">
            <p>{{slotProps.object}}</p>
            <p>x{{slotProps.quantity}}</p>
        </template>
    </CraftingCard>
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
</style>