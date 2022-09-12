import { UserRepository } from "../../../domain/domain/model/user/UserRepository";
import { CrudOperations } from "../../common/CrudOperations";
import { UserData } from "./UserData";

export interface UserDataRepository extends CrudOperations<UserData, any> {}
