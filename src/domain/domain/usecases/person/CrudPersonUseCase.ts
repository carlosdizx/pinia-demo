import { PersonRepository } from "../../model/person/PersonRepository";
import { Person } from "../../model/person/Person";

export class CrudPersonUseCase {
  private repository: PersonRepository;

  constructor(repository: PersonRepository) {
    this.repository = repository;
  }

  emitirRegistroMySQL(person: Person) {
    console.log(person.name, "registrado");
    console.log("....");
    return this.repository.save(person);
  }
}
