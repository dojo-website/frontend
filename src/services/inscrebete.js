import api from "@/utils/api";

// Fetch signup page data from the API
export const getSignupData = async () => {
  try {
    const response = await api.get("/signup");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch home page data:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Create a new participant by sending data to the API
export const createParticipant = async (participantData) => {
  try {
    const response = await api.post("/participants", participantData);
    console.log("response status:", response.status);
    "Participant created:", response.data;
    return response.data;
  } catch (error) {
    console.error(
      "Failed to create participant:",
      error.response?.data || error.message
    );
    throw error;
  }
};
