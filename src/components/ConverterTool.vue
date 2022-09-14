<script setup>
import { reactive } from 'vue'


const data = reactive({
  cost: 0
})

// Updates the reactive cost in data
const convertDollahs = () => {
    data.cost = document.getElementById("dollah-bills").value
}


</script>

<template>
    <div class="conversion-tool">
        <label for="desired-dollar">
            Enter Desired Dollar Amount
            <input data-cy="dollar" type="number" name="desired-dollar" id="dollah-bills" v-on:input="convertDollahs()" min="1">
            <div>
                <p>₽</p>
                <p data-cy="converted">{{data.cost * 112}}</p>
            </div>
        </label>
    </div>
</template>

<style scoped>
.conversion-tool{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    color: rgb(219, 192, 69);
} 
input{
    line-height: 2rem;
    border-radius: 1rem;
    padding: .5rem;
    border: none;
}
p{
    color: beige;
    display: inline;
}
</style>