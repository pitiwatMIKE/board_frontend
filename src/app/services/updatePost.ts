import { CreatePostData } from "../interfaces/request/creratePostData";
import apiClient from "./apiClient";

export async function updatePost(id: number, params: CreatePostData) {
  try {
    const response = await apiClient.put(`/post/${id}`, params);
    return response.data;
  } catch (error) {
    throw error;
  }
}
