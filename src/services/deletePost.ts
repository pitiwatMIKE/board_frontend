import apiClient from "./apiClient";

export async function deletePost(id: number) {
  try {
    const response = await apiClient.delete(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
