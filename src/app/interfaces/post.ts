import { Category } from "./category";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  category: Category;
  user: User;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
}
