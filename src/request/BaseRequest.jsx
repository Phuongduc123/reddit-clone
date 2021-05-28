import React from 'react';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');

const baseURL = 'https://vast-reef-49399.herokuapp.com';
const Token = async () => {
  const token = await AsyncStorage.getItem('token');
  return token || 'hello';
};

export default class BaseRequest {
  async get(url, params = {}) {
    try {
      const response = await axios.get(`${baseURL}/${url}/`, {
        params,
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async getWithTimeout(url, params = {}, timeout) {
    try {
      const response = await axios.get(`${baseURL}/${url}/`, {params, timeout});
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put(url, data = {}) {
    try {
      const response = await axios.put(`${baseURL}/${url}/`, data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      return response;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}, needToken) {
    try {
      if (needToken === true) {
        const token = await Token();
        const response = await axios.post(`${baseURL}/${url}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      }else{
        const response = await axios.post(`${baseURL}/${url}/`, data);
        return response.data
      }
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}) {
    try {
      const response = await axios.delete(`${baseURL}/${url}/`, {
        params,
        headers: {
          Authorization: `Bearer ${Token}`,
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
    console.log('error API', err);
    throw err;
  }
}
