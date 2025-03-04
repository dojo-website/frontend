import api from "@/utils/api";

// Fetch contacts data from the API
const getContacts = async () => {
  try {
    const response = await api.get("/contact");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching contact details:",
      error.response?.data || error.message
    );
    return null;
  }
};

export default getContacts;
