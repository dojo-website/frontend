import api from "@/utils/api";
import { aboutData } from "../utils/Mocks/Data";

export const getAboutUs = async () => {
  return aboutData;
  // try {
  //   const response = await api.get("/about_us");
  //   return response.data;
  // } catch (error) {
  //   console.error(
  //     "Failed to fetch home page data:",
  //     error.response?.data || error.message
  //   );
  //   throw error;
  // }
};
