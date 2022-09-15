import { CrudDataFirestoreOperations } from "../../common/CrudDataFirestoreOperations";
import { Person } from "../../../domain/model/person/Person";
import { PersonRepository } from "../../../domain/model/person/PersonRepository";
import { PersonDataRepository } from "./PersonDataRepository";

const collectionDB: string = "persons";

export class PersonDataAdapter extends CrudDataFirestoreOperations<Person> {
  async save(entity: Person): Promise<Person> {
    return super.save(entity, collectionDB);
  }

  async list(): Promise<Person[]> {
    return super.list(collectionDB);
  }

  async findById(id: string): Promise<Person> {
    return super.findById(id, collectionDB);
  }
}
