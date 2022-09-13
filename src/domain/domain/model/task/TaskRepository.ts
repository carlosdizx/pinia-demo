import { Task } from "./Task";
import { CrudOperations } from "../common/CrudOperations";

export interface TaskRepository extends CrudOperations<Task, string> {}
