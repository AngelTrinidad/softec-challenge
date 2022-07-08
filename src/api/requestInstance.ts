import axios from 'axios';

import { RequestConfig } from './types';

const axiosInstance = axios.create({
  baseURL: 'https://softec.com.py',
});

export const buildRequest = async <TResponse = any>(request: RequestConfig): Promise<TResponse> => {
  const { data } = await axiosInstance.request<TResponse>(request);
  return data;
};

export default axiosInstance;
