import { TaskRepository } from "../../model/task/TaskRepository";
import {Task} from "../../model/task/Task";

export class CrudTaskUseCase {
  private repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  create = (task: Task) => this.repository.save(task);
}
