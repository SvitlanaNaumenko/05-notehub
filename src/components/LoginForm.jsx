import { api } from "../services/api";

export const LoginForm = () => {
  const handleLogin = async (credentials) => {
    try {
      // 1. Відправляємо запит на авторизацию / створення токена
      const response = await api.post("/auth", credentials);

      // 2. Отримуємо токен з відповіді сервера
      const token = response.data.token;

      // 3. ЗБЕРІГАЄМО ТОКЕН у localStorage браузера
      localStorage.setItem("token", token);

      console.log("Токен успішно збережено!");
    } catch (error) {
      console.error("Помилка авторизації:", error);
    }
  };

  // ... остальная частина вашого компонента/форми
};
