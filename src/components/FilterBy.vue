<script setup>
// Vue / Pinia Imports
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const { ammo } = storeToRefs(useStore());
const { saveSorted } = useStore();

let data = reactive({
  selectedCaliber: "762x39",
  filterValue: "pen",
});

// On change of the first select, grabs and updates a reactive variable containing the correct caliber 
const ammoSelection = () => {
  let selection = document.getElementById("caliber");
  data.selectedCaliber = selection.value;
};
// On change of the second select, grabs the value which the list will be sorted by: Damage, or Penetration chance of the bullet~
const filterList = (event) => {
  data.filterValue = event.target.value;
};
// Combines the data from other functions and sorts the list from saved state and then updates the sorted list into state
const getFilteredList = (event) => {
  let string = data.selectedCaliber;
  let filteredList = [];
  if (data.filterValue === "pen") {
    filteredList = ammo.value[`${data.selectedCaliber}`].sort(
      (a, b) => parseFloat(b.penetrationPower) - parseFloat(a.penetrationPower)
    );
  } else if (data.filterValue === "dam") {
    filteredList = ammo.value[`${data.selectedCaliber}`].sort(
      (a, b) => parseFloat(b.damage) - parseFloat(a.damage)
    );
  }
  saveSorted(filteredList);
};
</script>

<template>
  <div class="filter-wrapper">
    <div class="selects">
      <select id="caliber" @change="ammoSelection()">
        <option value="762x39" selected default>7.62x39</option>
        <option value="762x54">7.62x54R</option>
        <option value="556x45">5.56x45</option>
        <option value="545x39">5.45x39</option>
        <option value="9x19PARA">9x19 PARA</option>
        <option value="12g">12g</option>
        <option value="57x28">57x28</option>
        <option value="46x30">46x30</option>
        <option value="9x18PM">9x18PM</option>
      </select>
    <label for="filter"
      >Sort By:
      <select
        name="filter"
        id="filter"
        class="filter-select"
        @change="filterList($event)"
      >
        <option value="pen" selected default>Penetration</option>
        <option value="dam">Damage</option>
      </select>
    </label>
    </div>
    <button @click="getFilteredList($event)">Sort</button>
  </div>
</template>

<style scoped>
.filter-wrapper{
  display: flex;
  border: solid white;
  width: 40rem;
  margin: auto;
  flex-direction: column;
}
button{
  margin: auto;
  margin-top: 2rem; 
}
select[caliber]{
  border-radius: .5rem;
  height: 1.5rem;
  padding: 1rem;
  border: none;
}
</style>