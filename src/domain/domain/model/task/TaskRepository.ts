import { Task } from "./Task";

export interface TaskRepository {
  save(task: Task): Task;
  list(): Task[];
  findById(id: string): Task;
  update(task: Task, id: string): Task;
  delete(id: string): void;
}
