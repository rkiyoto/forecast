import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

class APIClient {
  private axios: AxiosInstance;

  private baseURL = process.env.REACT_APP_API_URL;

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseURL,
      timeout: 30 * 1e3,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
      },
    });
  }

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.get(url, config);
  }
}

const client = new APIClient();

export default client;
