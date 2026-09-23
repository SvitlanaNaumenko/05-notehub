import axios from "axios";

// Створюємо екземпляр axios із базовим URL
export const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

// Перехоплювач (interceptor): перед кожним запитом перевіряє, чи є токен у localStorage,
// і якщо є — додає його в заголовок Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
