import api from "@/utils/api";
import axios from "axios";

export const getHomePage = async () => {
  try {
    const response = await api.get("/home_page");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch home page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
