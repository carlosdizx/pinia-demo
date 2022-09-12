import { Person } from "../../../domain/domain/model/common/Person";

export class UserData extends Person {
  private readonly _id: string;
  private _username: string;
  private _password: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    username: string,
    password: string
  ) {
    super(name, lastName);
    this._id = id;
    this._username = username;
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }

  set username(value: string) {
    this._username = value;
  }

  set password(value: string) {
    this._password = value;
  }
}
