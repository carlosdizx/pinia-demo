import { CrudDataFirestoreOperations } from "../../common/CrudDataFirestoreOperations";
import { Person } from "../../../domain/model/person/Person";
import { PersonRepository } from "../../../domain/model/person/PersonRepository";

const collectionDB: string = "persons";

export class PersonDataAdapter
  extends CrudDataFirestoreOperations<Person>
  implements PersonRepository
{
  async save(entity: Person): Promise<Person> {
    return super.save(entity, collectionDB);
  }

  async list(): Promise<Person[]> {
    return super.list(collectionDB);
  }

  async findById(id: string): Promise<Person> {
    return super.findById(id, collectionDB);
  }

  async update(entity: any, id: string): Promise<Person> {
    return super.update(entity, id, collectionDB);
  }

  async delete(id: string): Promise<void> {
    return super.delete(id, collectionDB);
  }
}
