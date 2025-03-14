import { Category } from "./category";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  category: Category;
  user: User;
  createdAt: string;
  updatedAt: string;
}
