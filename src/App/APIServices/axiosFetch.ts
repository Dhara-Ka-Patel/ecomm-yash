import axios from 'axios';
import { ENDPOINT } from '@configs/constants';
import { LoggerService } from '@libs/LoggerService';

export const Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const axiosBuilder = (config = {}) =>
  axios.create({
    baseURL: ENDPOINT,
    timeout: 5000,
    withCredentials: true,
    headers: Headers,
    ...config,
  });

export const axiosFetch = axiosBuilder();

export const parseJsonString = (str: any) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (err) {
    const logger = new LoggerService();
    logger.error(
      'axiosFetch.parseJsonString() JSON.parse() error returning input'
    );
    return str;
  }
};
