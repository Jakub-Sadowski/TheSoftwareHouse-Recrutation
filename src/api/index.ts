import axios from 'axios';
export const API_URL = "https://join-tsh-api-staging.herokuapp.com/";
export const API_TIMEOUT = 3000;

const config = {
    url: API_URL,
    accessControlAllowOrigin: '*',
    timeout: API_TIMEOUT,
  };
  
const axiosInstance = (
  baseURL: string = API_URL,
  timeout: number = API_TIMEOUT
) =>
  axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export interface UseFetchDataProps {
    path: string;
    headers?: unknown;
    config?: unknown;
    data?: unknown;
    baseURL?: string;
    timeout?: number;
}

export const fetchData = async <T>({
    path,
    baseURL,
    timeout,
  }: UseFetchDataProps): Promise<T> => {
    const response = await axiosInstance(baseURL, timeout).get<T>(path);
    return response.data;
};