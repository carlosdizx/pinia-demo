<template>
  <h1>Home view: {{ counterStore.counter }}</h1>
  <h3>Numero de cambios: {{ counterStore.numberOfChanges }}</h3>
  <button @click="guardar">Click!!</button>
</template>

<script lang="ts" setup>
import { PersonDataAdapter } from "../../infrastructure/database/person/PersonDataAdapter";

const personAdapter: PersonDataAdapter = new PersonDataAdapter();
import { useCounterStore } from "../../infrastructure/store/counter";
import { Person } from "../../domain/model/person/Person";
const guardar = () => {
  const person: Person = new Person().map({ id: "1", name: "xd" });
  console.log("guardar", person);
  personAdapter.save(person);
};

const counterStore = useCounterStore();
</script>
