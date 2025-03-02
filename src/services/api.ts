import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("task-manager-token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, (error) => {
  return Promise.reject(error)
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError<{ message: string, statusCode: number }>) {
  if (error.response?.data.statusCode === 401) {
    localStorage.removeItem("task-manager-token")
    window.location.href = "/login"
  }
  return Promise.reject(error);
});

export { api }

