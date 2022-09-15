import { Task } from "./Task";
import { CrudFirestoreOperations } from "../common/CrudFirestoreOperations";

export interface TaskRepository extends CrudFirestoreOperations<Task, string> {}
