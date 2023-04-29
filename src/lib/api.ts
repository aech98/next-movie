import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
  };
};

export default function api(param: AxiosRequestConfig) {
  return client(axios.create(param));
}
