import React from 'react';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');

const baseURL = 'http://localhost:8000';
const Token = () => {
  const token = AsyncStorage.getItem('token');
  return token || 'hello';
};

export default class BaseRequest {
  async get(url, params = {}) {
    try {
      const response = await axios.get(`${baseURL}/${url}`, {
        params,
        headers: {
          Authorization: `Bearer ${await Token()}`,
        },
      });
      return response.data;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async getWithTimeout(url, params = {}, timeout) {
    try {
      const response = await axios.get(`${baseURL}/${url}`, {params, timeout});
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put(url, data = {}) {
    try {
      const response = await axios.put(`${baseURL}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${await Token()}`,
        },
      });
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}, needToken=true) {
    try {
      if (needToken === true) {
        const response = await axios.post(`${baseURL}/${url}`, data, {
          headers: {
            Authorization: `Bearer ${await Token()}`,
          },
        });
        return response.data;
      }else{
        const response = await axios.post(`${baseURL}/${url}`, data);
        return response.data
      }
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}) {
    try {
      const response = await axios.delete(`${baseURL}/${url}`, {
        params,
        headers: {
          Authorization: `Bearer ${await Token()}`,
        },
      });
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  _errorHandler(err) {
    // if (err.response && err.response.status === 401) { // Unauthorized (session timeout)
    //   // location.href = '/';
    // }
    console.log('error API', err.message);
    // throw err;
  }
}
