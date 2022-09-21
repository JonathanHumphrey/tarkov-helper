<script setup>
    import { useStore } from "@/stores/itemData";
    import { storeToRefs } from "pinia";
    
    const { hideoutStations } = storeToRefs(useStore());
    
    
</script>
    
<template>
    <div class="card" v-for="station in hideoutStations" :key="station.name">
    <slot name="header" :header="station.name"></slot>
    
    </div>
</template>