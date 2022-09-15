import { Person } from "./Person";

export interface PersonRepository {
  save(person: Person): Person;
}
