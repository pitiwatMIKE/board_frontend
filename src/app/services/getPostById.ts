import apiClient from "./apiClient";

export async function getPostById(id: number) {
  try {
    const response = await apiClient.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
