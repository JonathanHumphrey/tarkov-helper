<script setup>
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";

const { ammoData } = useStore();
const { ammo } = storeToRefs(useStore());

const ammoGrab = () => {
  console.log('we here')
  ammoData();
}
</script>

<template>
    <div>
        <button @click="ammoGrab()"></button>
        <div class="data" v-for="ammoType in ammo['762x54']">
            <h2>{{ammoType.item.shortName}}</h2>
            <div class="pen">
              <p>Penetration:{{ammoType.penetrationPower}}</p>
              <p>Chance:{{ammoType.penetrationChance * 100}}%</p>
            </div>
            <div class="dam">
              <p>Damage:{{ammoType.damage}}</p>
              <p>Damage to Armor:{{ammoType.armorDamage}}</p>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.data{
    border: solid white;
    display: flex;
    justify-content: space-around;
}
.pen{
    text-align: left;

}
.dam{
    text-align: left;
}
h2{
    width: 10rem;
}
</style>