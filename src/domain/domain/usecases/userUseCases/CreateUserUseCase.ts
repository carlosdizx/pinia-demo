import { UserRepository } from "../../model/user/UserRepository";
import { User } from "../../model/user/User";

export class CreateUserUseCase implements UserRepository {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  create(user: User): User {
    //return new User(user.name, user.lastName, user.username, user.password);
    return this.repository.create(user);
  }

  update(user: User, id: number): User {
    return new User(user.name, user.lastName, user.username, user.password);
  }
}
/*
 import { User } from "../../model/user/User";

 export const createUser = (user: User) => {};

 */
