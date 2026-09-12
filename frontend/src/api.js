import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({ baseURL: API_URL });

export const getProjects = () => api.get("/projects");
export const getSkills = () => api.get("/skills");
export const sendMessage = (data) => api.post("/contact", data);

export default api;
