import api from "@/utils/api";

export const getBlogs = async (category = "all") => {
  try {
    const response = await api.get(`/blogs?category=${category}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Blogs Page data:", error.response?.data || error.message);
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
