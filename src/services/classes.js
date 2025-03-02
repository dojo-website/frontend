import api from "@/utils/api";

export const getClassesData = async () => {
  try {
    const response = await api.get("/course");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch Classes page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
