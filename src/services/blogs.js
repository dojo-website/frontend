import api from "@/utils/api";

export const getBlogs = async () => {
  try {
    const response = await api.get("/blogs");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch Blogs Page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
