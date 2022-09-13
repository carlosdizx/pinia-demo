import { TaskRepository } from "../../model/task/TaskRepository";
import { Task } from "../../model/task/Task";

export class CrudTaskUseCase {
  private repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  create = (task: Task) => this.repository.save(task);

  list = () => this.repository.list();

  findById = (id: string) => this.repository.findById(id);

  update = (task: Task, id: string) => this.repository.update(task, id);

  delete = (id: string) => this.repository.delete(id);
}
