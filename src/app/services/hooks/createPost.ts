import { CreatePostData } from "@/app/interfaces/request/creratePostData";
import apiClient from "../apiClient";

export async function createPost(data: CreatePostData) {
  const response = await apiClient.post("/posts", data);
  return response.data;
}
