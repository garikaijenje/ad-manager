import axios from 'axios';
import { API_URL } from '../Config';
const API = axios.create({ baseURL: API_URL, responseType: 'json' });

const setHeaders = (token, contentType) => {

  let headers = {
    Accept: "application/json"
  }

  if (contentType) headers["Content-Type"] = contentType;
  if (token) headers.Authorization = `Bearer ${token}`;

  return { headers };
}




export const ApiRequest = {
  get: ({ baseUrl = null, endpoint, token = null, contentType = null, success, failure }) => {
    if (baseUrl) API.defaults.baseURL = baseUrl;
    return API.get(endpoint, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error) );
  },
  post: ({ endpoint, token = null, contentType = null, data, success, failure }) => {
    return API.post(endpoint, data, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error));
  },
  put: ({ endpoint, token = null, contentType = null, data, success, failure }) => {
    return API.put(endpoint, data, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error));
  },
  delete: ({ endpoint, token = null, contentType = null, success, failure }) => {
    return API.delete(endpoint, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error));
  }
};

export const handleSuccess = (response) => {
  return response.data;
}

export const handleErrors = (response) => {

  // if(response.response === undefined){
  //   window.location.replace('/logout')
  // }

  // return []

  if(response.response && typeof response.response.data !== undefined ) {
    return response.response.data.errors ?? [{error: response.response.data.message}];
  }else{
    // window.location.replace('/logout');
    return []
  }

}

// Usage Example
function usageExample() {
  ApiRequest.post({
    endpoint: 'auth/login',
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    // contentType: 'application/json',
    data: {},
    success: (response) => { },
    failure: (response) => { }
  });
}