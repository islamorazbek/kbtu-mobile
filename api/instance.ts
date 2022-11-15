import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from 'expo-secure-store';

// автодобавление токена в заголовок запроса
const autoAddToken = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig<any>> => {
  const token = await SecureStore.getItemAsync("access_token");
  const access_token = `Bearer ${token}`;
  if (access_token) config!.headers!.Authorization = access_token;
  return { ...config };
};

// обычные json-запросы
const _axiosInstanceJSON = axios.create({
  // here should be env variable from .env
  baseURL: "http://104.248.141.101",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

_axiosInstanceJSON.interceptors.request.use(autoAddToken);

// обновление токена
// _axiosInstanceJSON.interceptors.response.use(
//   (response) => response,
//   (config) => responseInterceptionConfigOverride(config, _axiosInstanceJSON, _axiosInstanceJSON)
// );

export const instance = _axiosInstanceJSON;
