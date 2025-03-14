import { User } from "./user";

export interface Comment {
    id: number;
    content: string;
    postId: number;
    createdAt: string;
    updatedAt: string;
    user: User;
}