import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import axios from "axios";
import { readAccessToken } from "~/utils/storage";
import { METHOD } from "~/utils/constants";
import { PATH_API } from "~/utils/constants";
import {setLoading, setProgress} from "~/app/slices/commonSlice"
import {store} from "~/app/store";
const instance = axios.create({
  baseURL: PATH_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config: any) => {
    const accessToken = readAccessToken();
    config.headers["authorization"] = accessToken;
    if (!config.headers.hasOwnProperty('Content-Type')) {
      config.headers["Content-Type"] = "application/json; charset=utf-8";
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return error.response;
  }
);

const callApi = async (args: any) => {
  const header = args.headers || {}
  const method = args.method.toLowerCase();
  switch (method) {
    case METHOD.post:
      return await instance.post(`${PATH_API}${args.url}`, args.body, {
        headers: { ...header },
      });
    case METHOD.put:
      return await instance.put(`${PATH_API}${args.url}`, args.body);
    case METHOD.delete:
      return await instance.delete(`${PATH_API}${args.url}`);
    default:
      return await instance.get(`${PATH_API}${args.url}`, {
        params: args.params,
      });
  }
};

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api) => {
  await store.dispatch(setLoading(true));
  const response: any = {
    data: [],
  };
  let result: any = await callApi(args);
  await store.dispatch(setLoading(false));
  response.data = result?.data;
  if (result.status != 200) {
    switch (result.status) {
      case 400:
        
        break;
      case 401:
        
        break;
      case 403:
       
        break;
      case 422:
       
        break;
      case 500:
       
        break;
      case 501:
      case 502:
      case 503:
        
        break;
    }
  }
  return response;
};

export default baseQuery;
