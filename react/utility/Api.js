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
      .catch((error) => failure(error));
  },
  post: ({ endpoint, token = null, contentType = null, data, success, failure }) => {
    return API.post(endpoint, data, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error));
  },
  delete: ({ endpoint, token = null, contentType = null, success, failure }) => {
    return API.delete(endpoint, setHeaders(token, contentType))
      .then(async (response) => await success(response))
      .catch((error) => failure(error));
  }
};

export const handleApiResponse = async (response) => {

  let result = {};

  if (response.status === 200) {
    result.status = "SUCCESS";
    result.data = await response.data;
  } else if (response.status === 400) {
    result.status = "FAIL";
    result.data = await response.data;
  } else {
    result.status = "FAIL";
    result.message = "Could not establish connection.";
  }

  // console.log(result)


  return result;
}

export const handleApiError = (error) => {

  let result = {};

  if (error.response) {
    result.status = "FAIL";
    result.data = error.response.data;
  } else {
    result.status = "FAIL";
    result.message = error.message;
  }

  return result;

}

// Usage Example
const usageExample = () => {
  ApiRequest.post({
    endpoint: 'auth/login',
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    // contentType: 'application/json',
    data: {},
    success: (response) => { },
    failure: (response) => { }
  });
}