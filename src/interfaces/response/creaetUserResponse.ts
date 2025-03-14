import { User } from "../user";

export interface CreateUserResponse {
  token: string;
  user: User;
}
