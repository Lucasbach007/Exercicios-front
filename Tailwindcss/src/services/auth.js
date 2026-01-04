import api from "./api";

export async function loginRequest(credentials) {
  const response = await api.post("/login", credentials);
  return response.data;
}
