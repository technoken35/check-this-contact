import axios from 'axios';
import { baseURL } from './config';

// setting baseURL to url string we imported. Now baseURL only has to be edited in one place
export default axios.create({
  baseURL,
});
