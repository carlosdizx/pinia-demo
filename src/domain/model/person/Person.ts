import { Mapper } from "../common/Mapper";

export class Person implements Mapper<any, Person> {
  map(src: any): Person {
    return Object.assign(new Person(), src);
  }
  public readonly id?: string;
  public readonly name?: string;
}
