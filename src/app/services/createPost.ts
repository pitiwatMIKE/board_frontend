import { CreatePostData } from "@/app/interfaces/request/creratePostData";
import apiClient from "./apiClient";

export async function createPost(data: CreatePostData) {
  try {
    const response = await apiClient.post("/post", data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
