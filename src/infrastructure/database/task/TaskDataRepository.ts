import { CrudDataFirestoreOperations } from "../../common/CrudDataFirestoreOperations";
import { TaskData } from "./TaskData";

export interface TaskDataRepository
  extends CrudDataFirestoreOperations<TaskData, string> {}
