<template>
  <h1>Home view: {{ counterStore.counter }}</h1>
  <h3>Numero de cambios: {{ counterStore.numberOfChanges }}</h3>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../store/counter";

const counterStore = useCounterStore();
</script>
