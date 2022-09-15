import { CrudFirestoreOperations } from "../../../domain/domain/model/common/CrudFirestoreOperations";
import { Person } from "../../../domain/domain/model/person/Person";

export interface PersonDataRepository
  extends CrudFirestoreOperations<Person, string> {}
