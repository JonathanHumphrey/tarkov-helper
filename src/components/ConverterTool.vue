<script setup>
import { reactive } from 'vue'


const data = reactive({
  cost: 0
})


const convertDollahs = () => {
    console.log("dollas y'all")
    data.cost = document.getElementById("dollah-bills").value
    console.log(data.cost)
}


</script>

<template>
    <div class="conversion-tool">
        <label for="desired-dollar">
            Enter Desired Dollar Amount
             <input type="number" name="desired-dollar" id="dollah-bills" v-on:input="convertDollahs()" min="1">
            <p> ₽{{data.cost * 96}}</p>
        </label>
    </div>
</template>

<style scoped>
.conversion-tool{
    display: flex;
    flex-direction: column;
    border: solid white;
} 
input{
    line-height: 2rem;
    border-radius: 1rem;
    padding: .5rem;
    border: none;

}
span{
    z-index: -1;
    position: absolute;
    left: 50rem;
    
}
</style>