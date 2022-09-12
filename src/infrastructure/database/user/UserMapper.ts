import { Mapper } from "../../../app/map/mapper";
import { User } from "../../../domain/domain/model/user/User";
import { UserData } from "./UserData";

export class UserMapper implements Mapper<User, UserData> {
  toEntity(data: UserData): User {
    return new User(
      data.id,
      data.name,
      data.lastName,
      data.username,
      data.password
    );
  }

  toData(domain: User): UserData {
    return new UserData(
        domain.id,
        domain.name,
        domain.lastName,
        domain.username,
        domain.password
    );
  }
}
