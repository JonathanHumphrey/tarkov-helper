<script setup>
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";
import {reactive} from 'vue'


const { ammo } = storeToRefs(useStore());

const data = reactive({
    selectedCaliber: '762x39'
})


const ammoSelection = () =>{
    let selection = document.getElementById("caliber");
    data.selectedCaliber = selection.value;
}
</script>

<template>
    <div>
        <button @click="ammoGrab()"></button>
        <h2>Ammo Information</h2>
        <p></p>
        <select id="caliber" @change="ammoSelection()">
            <option value="" selected disabled>Select Caliber</option>
            <option value="762x39">7.62x39</option>
            <option value="762x54">7.62x54R</option>
            <option value="556x45">5.56x45</option>
            <option value="545x39">5.45x39</option>
        </select>
        <div class="data" v-for="ammoType in ammo[data.selectedCaliber]">
            <h2>{{ammoType.item.shortName}}</h2>
            <div class="pen">
              <p>Penetration: {{ammoType.penetrationPower}}</p>
              <p>Chance: {{(ammoType.penetrationChance * 100).toFixed(0)}}%</p>
            </div>
            <div class="dam">
              <p>Damage: {{ammoType.damage}}</p>
              <p>Damage to Armor: {{ammoType.armorDamage}}</p>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.data{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgb(211, 211, 211);
    color: rgb(219, 192, 69);
}
.pen{
    text-align: left;

}
.dam{
    text-align: left;
}
h2{
    width: 20rem;
    text-align: left;
}
select{
    line-height: 2rem;
    border-radius: 1rem;
    padding: .5rem;
    border: none;
}
</style>