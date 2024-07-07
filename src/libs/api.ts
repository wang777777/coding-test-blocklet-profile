import { createAxios } from '@blocklet/js-sdk';
import { message } from 'antd';

const api = createAxios({
  baseURL: window?.blocklet?.prefix || '/',
});

api.interceptors.request.use(
  (response) => response,
  (error) => {
    message.error(error.message);
  },
);

export default api;
