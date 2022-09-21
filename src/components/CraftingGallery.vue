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
        
        
    </CraftingCard>
    </div>
</template>