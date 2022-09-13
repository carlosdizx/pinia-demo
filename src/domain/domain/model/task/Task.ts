import { Mapper } from "../common/Mapper";

export class Task implements Mapper<Task, any> {
  map(src: Task): any {
    return Object.assign(new Task(), src);
  }
}
