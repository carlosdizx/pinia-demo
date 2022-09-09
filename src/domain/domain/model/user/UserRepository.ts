import { User } from "./User";

export interface UserRepository {
  create(user: User): User;
  update(user: User, id: number): User;
}
