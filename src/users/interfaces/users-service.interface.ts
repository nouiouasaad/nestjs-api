import { User } from "../entities/user.entity";

export const UsersServiceInterface = Symbol(
  'UsersServiceInterface',
);

export interface UsersServiceInterface {
    findOneByEmail(email: string): Promise<User>
}
