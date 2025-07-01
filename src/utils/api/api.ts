import axios from "axios";
import Toast from "react-native-toast-message";
import { useAuthStore } from "src/store/auth/useAuthStore";

const api = axios.create({
  baseURL: "https://apiconsumoconsciente-fzdqhch7epc4hwht.canadaeast-01.azurewebsites.net",
});

api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = token;
    }

    console.log("request2", config);
    return config;
  },
  (error) => {
    console.log("error Request: ", error)
    Promise.reject(error)
  },
);


api.interceptors.response.use(
  (response) => {
    console.log("📥 Resposta da API:", response);
    return response;
  },
  (error) => {
    Toast.show({
        type: 'error',
        text1: 'Erro na requisição',
        text2: error?.response?.data?.reasonPhrase || 'Erro desconhecido!',
        });
    return Promise.reject(error);
  }
);

export default api;
