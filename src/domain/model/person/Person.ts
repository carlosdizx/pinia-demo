import { Mapper } from "../common/Mapper";

export class Person implements Mapper<Person, any> {
  map(src: Person): any {
    return Object.assign(new Person(), src);
  }
  public readonly id?: string;
  public readonly name?: string;
}
