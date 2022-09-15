import { Mapper } from "../../../domain/model/common/Mapper";

export class TaskData implements Mapper<TaskData, any> {
  map(src: TaskData): any {
    return Object.assign(new TaskData(), src);
  }

  public id?: string;
  public title?: string;
}
