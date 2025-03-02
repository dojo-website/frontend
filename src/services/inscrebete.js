// services/auth.js

import api from "@/utils/api";

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
