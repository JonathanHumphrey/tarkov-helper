<script setup>
// Component Imports
import FilterBy from "@/components/FilterBy.vue";
// Vue / Pinia Imports
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const { filteredList } = storeToRefs(useStore());

const data = reactive({
  filteredList: [],
});
</script>

<template>
  <div>
    <h2>Ammo Information</h2>
    <p></p>
    <FilterBy />
    <div class="header">
      <h2>Type</h2>
      <h3>Penetration</h3>
      <h3>Damage</h3>
    </div>
    <div
      class="data"
      v-for="ammoType in filteredList"
      :key="ammoType.item.shortName"
    >
      <h2>{{ ammoType.item.shortName }}</h2>
      <div class="pen">
        <p>Penetration: {{ ammoType.penetrationPower }}</p>
        <p>Chance: {{ (ammoType.penetrationChance * 100).toFixed(0) }}%</p>
      </div>
      <div class="dam">
        <p>Damage: {{ ammoType.damage }}</p>
        <p>Damage to Armor: {{ ammoType.armorDamage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header{
    display: flex;
    justify-content: space-around;
    border-bottom: 4px solid rgb(211, 211, 211);
  }
.data {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgb(211, 211, 211);
  color: rgb(219, 192, 69);
}
.pen {
  text-align: left;
}
.dam {
  text-align: left;
}
h2 {
  width: 20rem;
  text-align: left;
}
h3{
  text-align: left;
  width: 8rem;
}
select {
  line-height: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: none;
}
</style>