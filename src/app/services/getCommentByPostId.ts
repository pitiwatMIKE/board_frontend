import apiClient from "./apiClient";

export async function getCommentByPostId(postId: number) {
  try {
    const response = await apiClient.get(`/comment/by-post/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
