import api from "@/utils/api";

// Fetch About Us page data from the API
export const getAboutUs = async () => {
  try {
    const response = await api.get("/about_us");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch About us Page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
