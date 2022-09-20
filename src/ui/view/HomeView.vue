<template>
  <h1>Home view: {{ counterStore.counter }}</h1>
  <h3>Numero de cambios: {{ counterStore.numberOfChanges }}</h3>
  <button @click="guardar">Guardar!!</button>
  <button @click="listar">Listar!!</button>
  <button @click="buscar">Buscar!!</button>
  <button @click="actualizar">Actualizar!!</button>
  <button @click="eliminar">Eliminar!!</button>
  <hr />
  <button @click="singUp">SinUp</button>
  <button @click="singIn">SinIn</button>
</template>

<script lang="ts" setup>
import { PersonDataAdapter } from "../../infrastructure/database/person/PersonDataAdapter";
import { useCounterStore } from "../../infrastructure/store/counter";
import { Person } from "../../domain/model/person/Person";
import { AuthService } from "../../infrastructure/auth/AuthService";

const personAdapter: PersonDataAdapter = new PersonDataAdapter();
const auth = new AuthService();

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

//----------------------------------------------------------------------------------------------------------------------
const singUp = () => {
  console.log(auth.currentEmailUser());
  auth.singUp("carlosbiche98@gmail.com", "12345678");
  console.log(auth.currentEmailUser());
};

const singIn = () => {
  console.log(auth.currentEmailUser());
  auth.singIn("carlosbiche98@gmail.com", "12345678");
  console.log(auth.currentEmailUser());
};

const counterStore = useCounterStore();
</script>
