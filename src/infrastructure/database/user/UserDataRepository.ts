import { CrudOperations } from "../../common/CrudOperations";
import { UserData } from "./UserData";

export interface UserDataRepository extends CrudOperations<UserData, String> {}
