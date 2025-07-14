export const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3001"
    : "https://lingua-app-qmb9.onrender.com/api";
