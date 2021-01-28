import axios from 'axios';
import { DEFAULT_FETCH_DOMAIN } from './default';

export default axios.create({
  baseURL: process.env.REACT_APP_FETCH_DOMAIN || DEFAULT_FETCH_DOMAIN,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
