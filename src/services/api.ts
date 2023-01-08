import axios, { AxiosRequestConfig } from 'axios';
import { merge } from 'lodash';

const idbInstance = axios.create({
  baseURL: `https://gw.openapi.org.tw`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

const idbResHeaders = () => ({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default class Api {
  static idbReq(
    method: string,
    url: string,
    data = null,
    config?: AxiosRequestConfig<null> | undefined,
  ) {
    switch (method) {
      case 'post':
        return idbInstance.post(url, data, merge({}, idbResHeaders(), config));
      case 'get':
        return idbInstance.get(url, { params: data });
      default:
        return Promise.reject();
    }
  }
}
