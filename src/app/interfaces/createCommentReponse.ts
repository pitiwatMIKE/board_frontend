import apiClient from "../services/apiClient";
import { CreateCommentData } from "./request/createCommentData";

export async function createComment(params: CreateCommentData) {
  try {
    const response = await apiClient.post(`/comment`, params);
    return response.data;
  } catch (error) {
    throw error;
  }
}
