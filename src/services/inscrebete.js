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

export const createParticipant = async (participantData) => {
  try {
    const response = await api.post("/participants", participantData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // Handle 400 errors
      const errorMessage = error.response.data.email
        ? error.response.data.email[0] // Extract the first error message for the email field
        : "Validation failed. Please check your input.";
      return {
        error: true,
        message: errorMessage,
        details: error.response.data,
      };
    } else {
      // For other errors, log and return a generic error message
      console.error(
        "Failed to create participant:",
        error.response?.data || error.message
      );
      return {
        error: true,
        message: "An unexpected error occurred. Please try again.",
      };
    }
  }
};
