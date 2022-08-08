import axios, { AxiosRequestConfig } from 'axios';
import NProgress from 'nprogress';

axios.defaults.baseURL = 'api';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 拦截请求
axios.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      //@ts-ignore
      config.headers.token = token;
      return config;
    }
  },
  (error) => {
    return error;
  }
);
// 拦截响应
axios.interceptors.response.use((res) => {
  if (res.data.code === 1) {
    sessionStorage.setItem('token', '1');
  }
  return res;
});

export interface ResType<T> {
  code: number;
  resMessage: string;
  data?: T;
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, data?: unknown): Promise<ResType<T>>;
  upload<T>(url: string, data?: unknown): Promise<ResType<T>>;
  download<T>(url: string): void;
}
const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};
export default http;
