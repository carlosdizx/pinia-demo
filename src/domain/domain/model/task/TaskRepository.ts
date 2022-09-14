import { Task } from "./Task";
import { CrudFireStoreOperations } from "../common/CrudFireStoreOperations";

export interface TaskRepository extends CrudFireStoreOperations<Task, string> {}
