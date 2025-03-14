import { User } from "../user";

export interface CreateCommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}
