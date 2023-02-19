import axios from 'axios';

// 브라우저에서 사용하는 싱글톤 Axios 객체
export const clientAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});
