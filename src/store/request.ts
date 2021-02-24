import axios from 'axios';

const baseURL = '';
const service = axios.create({ timeout: 10000 });

// 请求拦截器
service.interceptors.request.use(
  (config: any) => config,
  (err: any) => Promise.reject(err),
);

// 响应拦截器
service.interceptors.response.use(
  (config: any) => config,
  (err: any) => Promise.reject(err),
)

function API (method: any, url: string, params: any) {
  return new Promise((resolve, reject) => {
    service({
      method,
      url,
      baseURL,
      withCredentials: false,
      data: method === 'post' || method === 'put' || method === 'delete' ? params : null,
      params: method === 'get' ? params : null,
    })
      .then((res) => {
        if (res.data.errCode) {
          console.log(res.data.errMsg);
        }
        resolve({
          ...res.data,
          headers: res.headers,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default API;
