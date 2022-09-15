import { TaskRepository } from "../../../domain/model/task/TaskRepository";
import { Task } from "../../../domain/model/task/Task";
import { TaskDataRepository } from "./TaskDataRepository";
import { TaskData } from "./TaskData";
import { AdapterFirestoreOperation } from "../../common/AdapterFirestoreOperation";

export class TaskAdapter
  extends AdapterFirestoreOperation<Task, TaskData, String, TaskDataRepository>
  implements TaskRepository
{
  private readonly collection: string = "task";

  save(entity: Task, collectionDB: string): Promise<Task> {
    return this.repository.save(new TaskData().map(entity), collectionDB);
  }

  list(): Promise<Task[]> {
    return this.repository.list(this.collection);
  }

  findById(id: string): Promise<Task> {
    return this.repository.findById(id, this.collection);
  }

  update(entity: Task, id: string): Promise<Task> {
    return this.repository.update(
      new TaskData().map(entity),
      id,
      this.collection
    );
  }
}
