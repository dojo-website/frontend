import api from "@/utils/api";

// Function to generate a slug from a title
const generateSlug = (title, id) => {
  return `${title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-")}-${id}`; // Append ID
};

// Fetch blogs data based on category
export const getBlogs = async (category = "all") => {
  try {
    const response = await api.get(`/blogs?category=${category}`);
    return response.data.map((blog) => ({
      ...blog,
      slug: generateSlug(blog.title, blog.id), // Pass ID to ensure unique slug
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
