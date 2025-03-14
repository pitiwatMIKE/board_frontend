import { CreateCommentData } from "../interfaces/request/createCommentData";
import apiClient from "./apiClient";

export async function createComment(data: CreateCommentData) {
  try {
    const response = await apiClient.post("/comment", data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
