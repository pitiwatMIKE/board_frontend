import { CreateUserData } from "../interfaces/request/creaetUserData";
import { CreateUserResponse } from "../interfaces/response/creaetUserResponse";
import apiClient from "./apiClient";

export async function createUser(
  params: CreateUserData,
): Promise<CreateUserResponse> {
  try {
    const response = await apiClient.post<CreateUserResponse>("/user", params);
    return response.data;
  } catch (error) {
    throw error;
  }
}
