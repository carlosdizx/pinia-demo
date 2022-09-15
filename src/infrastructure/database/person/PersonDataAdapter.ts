import { CrudDataFirestoreOperations } from "../../common/CrudDataFirestoreOperations";
import { Person } from "../../../domain/model/person/Person";
import { PersonRepository } from "../../../domain/model/person/PersonRepository";
import { PersonDataRepository } from "./PersonDataRepository";

const collectionDB: string = "person";

export class PersonDataAdapter extends CrudDataFirestoreOperations<
  Person,
  string
> {
  async save(entity: Person): Promise<Person> {
    return super.save(entity, collectionDB);
  }
}
