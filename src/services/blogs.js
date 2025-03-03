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

export const getBlogsHeader = async () => {
  try {
    const response = await api.get("/blog_header");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch Blog Headers data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
