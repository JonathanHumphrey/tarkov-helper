<script setup>
    import { useStore } from "@/stores/itemData";
    import { storeToRefs } from "pinia";
    
    const { hideoutStations } = storeToRefs(useStore());
    
    
</script>
    
<template>
    <div class="card" v-for="station in hideoutStations" :key="station.name">
    <slot name="header" :header="station.name"></slot>
        <div class="crafts" v-for="craft in station.crafts">
            <slot name="body" :body="craft.rewardItems[0].item.name"></slot>
            <div class="reqItems" v-for="item in craft.requiredItems">
                <slot name="reqItems" :object="item.name" :quantity="item.quantity"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
  color: rgb(219, 192, 69);
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  margin-bottom: 20px;
  border-radius: 2rem;
  background: #434547;
  width: 25rem;
  padding: 2rem;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);
}
</style>