export class Person {
  private readonly _name: string;
  private readonly _lastName: string;

  constructor(name: string, lastName: string) {
    this._name = name;
    this._lastName = lastName;
  }

  get name(): string {
    return this._name;
  }

  get lastName(): string {
    return this._lastName;
  }
}
