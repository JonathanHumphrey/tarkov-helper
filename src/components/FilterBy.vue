<script setup>
// Vue / Pinia Imports
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
import {reactive} from 'vue'

const { ammo } = storeToRefs(useStore());
const { getCaliber } = useStore();

let data = reactive({
    selectedCaliber: '762x39',
    filterValue: 'none'
})
const ammoSelection = () => {
    let selection = document.getElementById("caliber");
    data.selectedCaliber = selection.value
    console.log(data.selectedCaliber)
}
const filterList = (event) => {
    data.filterValue = event.target.value
    console.log(data.filterValue)
}
const getFilteredList = (event) => {
    console.log(this.ammo['762x39'])
    let filteredList = []
}
</script>

<template>
    <div class="filter-wrapper">
        <select id="caliber" @change="ammoSelection()">
            <option value="" selected disabled>Select Caliber</option>
            <option value="762x39">7.62x39</option>
            <option value="762x54">7.62x54R</option>
            <option value="556x45">5.56x45</option>
            <option value="545x39">5.45x39</option>
        </select>
        <label for="filter">Sort By:
            <select 
                name="filter" 
                id="filter" 
                class="filter-select"
                @change="filterList($event)"
            >
                <option value="none" selected disabled hidden>Select</option>
                <option value="pen">Penetration</option>
                <option value="dam">Damage</option>
            </select>
        </label>
        <button @click="getFilteredList($event)">Sort</button>
    </div>
</template>

<style scoped>

</style>