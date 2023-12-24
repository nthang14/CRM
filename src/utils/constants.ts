import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export const METHOD = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};
export const PATH_API = ''