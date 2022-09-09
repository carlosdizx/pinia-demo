import { Person } from "../common/Person";

export class User extends Person {
  private readonly _username: string;
  private readonly _password: string;

  constructor(
    name: string,
    lastName: string,
    username: string,
    password: string
  ) {
    super(name, lastName);
    this._username = username;
    this._password = password;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}
