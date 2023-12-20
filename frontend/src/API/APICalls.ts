import axios from "axios";

const API_URL = "http://localhost:3000";

export const CreatePassword = async (password: string) => {
  try {
    const response = await axios.post(`${API_URL}/passwords`, {
      password: password,
    });
    return response.data;
  } catch (error) {
    throw "Could not create password!";
  }
};
