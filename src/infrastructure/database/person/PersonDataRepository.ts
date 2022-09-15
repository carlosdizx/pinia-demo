import { CrudFirestoreOperations } from "../../../domain/model/common/CrudFirestoreOperations";
import { Person } from "../../../domain/model/person/Person";

export interface PersonDataRepository
  extends CrudFirestoreOperations<Person, String> {}
