import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      return Promise.resolve({ data: null });
    }
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
