import api from "@/utils/api";

// Function to generate a slug from a title
// Fetch blogs data based on category
export const getBlogs = async (category = "all") => {
  try {
    const response = await api.get(`/blogs?category=${category}`);
    return response.data.map((blog) => ({
      ...blog,
      slug: blog.meta_title, // Use meta_title as the slug
    }));
  } catch (error) {
    console.error(
      "Failed to fetch Blogs Page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
// Fetch blog header data
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
