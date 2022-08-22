<!-- eslint-disable prettier/prettier -->
<script setup>
import { useStore } from "@/stores/itemData";
import { storeToRefs } from "pinia";

const { items } = storeToRefs(useStore());
const { baselineValues } = storeToRefs(useStore());
</script>

<template>
  <div class="card" v-for="item in items" :key="item.name">
    <slot name="header" :header="item.name"></slot>
    <slot name="body" :body="item.body" :image="item.iconLink"></slot>
    <slot
      name="footer"
      :pk="item.sellFor[1].source"
      :pkPrice="item.sellFor[1].price"
      :flea="item.sellFor[2].source"
      :fleaPrice="item.sellFor[2].price"
    ></slot>
    <div class="difference">
      <p v-if="item.base > item.sellFor[2].price" class="green-text">
        + {{ (item.base / item.sellFor[2].price).toFixed([2]) }} %
      </p>
      <p v-else class="red-text">
        - {{ (item.base / item.sellFor[2].price).toFixed([2]) }} %
      </p>
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
.green-text {
  color: rgb(91, 255, 91);
}
.red-text {
  color: red;
}
</style>