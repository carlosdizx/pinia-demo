<template>
  <h1>Counter view: {{ counterStore.counter }}</h1>
  <button @click="counterStore.increment(1)">+1</button>
  <button @click="counterStore.increment(2)">+2</button>
  <button @click="counterStore.increment(5)">+5</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../store/counter";

const counterStore = useCounterStore();
</script>
