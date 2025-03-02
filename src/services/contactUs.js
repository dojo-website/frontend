import api from "@/utils/api";
import axios from "axios";

const getContacts = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/contact");
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
