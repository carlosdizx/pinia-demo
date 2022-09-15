import { CrudDataFirestoreOperations } from "../../common/CrudDataFirestoreOperations";
import { Person } from "../../../domain/domain/model/person/Person";
import { PersonRepository } from "../../../domain/domain/model/person/PersonRepository";
import { PersonDataRepository } from "./PersonDataRepository";

const collectionDB: string = "person";

export class PersonDataAdapter
  extends CrudDataFirestoreOperations<Person, string>
  implements PersonDataRepository
{
  async save(entity: Person): Promise<Person> {
    return super.save(entity, collectionDB);
  }
}
