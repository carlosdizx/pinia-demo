<template>
  <h1>Home view: {{ counterStore.counter }}</h1>
  <h3>Numero de cambios: {{ counterStore.numberOfChanges }}</h3>
  <button @click="guardar">Guardar!!</button>
  <button @click="listar">Listar!!</button>
  <button @click="buscar">Buscar!!</button>
  <button @click="actualizar">Actualizar!!</button>
  <button @click="eliminar">Eliminar!!</button>
</template>

<script lang="ts" setup>
import { PersonDataAdapter } from "../../infrastructure/database/person/PersonDataAdapter";

const personAdapter: PersonDataAdapter = new PersonDataAdapter();
import { useCounterStore } from "../../infrastructure/store/counter";
import { Person } from "../../domain/model/person/Person";
const guardar = async () => {
  const person: Person = new Person().map({ id: "1", name: "xd" });
  await personAdapter.save(person);
  console.log("guardar", person);
};
const listar = async () => {
  const lista: Person[] = await personAdapter.list();
  console.log("listar:", lista);
};

const buscar = async () => {
  const person = await personAdapter.findById("HaEqsKdaeZD0NpBcStgv");
  console.log(person);
};

const actualizar = async () => {
  const person: Person = new Person().map({ id: "1", name: "Carlos" });
  const personUpdated = await personAdapter.update(
    person,
    "HaEqsKdaeZD0NpBcStgv"
  );
  console.log("actualizado", personUpdated);
};

const eliminar = () => {
  personAdapter.delete("HaEqsKdaeZD0NpBcStgv");
  console.log("elimiando id:", "HaEqsKdaeZD0NpBcStgv");
};

const counterStore = useCounterStore();
</script>
