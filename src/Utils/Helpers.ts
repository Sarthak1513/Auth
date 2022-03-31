import axios, {AxiosRequestConfig} from 'axios';

export const fetcher = (config: AxiosRequestConfig<any>) => {
  return axios.request({
    baseURL: 'https://api.chapterhq.co/api',
    method: 'GET',
    ...config,
  });
};

// export const fetcher = () => {

// }

// export const fetcher3 = () => {

// }

// const fetcher2 = () => {

// }

// export default fetcher2;
