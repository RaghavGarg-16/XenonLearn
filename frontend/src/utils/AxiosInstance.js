import axios from "axios";

const token = localStorage.getItem("token") | "" ;
console.log( token , import.meta.env.VITE_APP_BASE_URL )
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  
});

export default axiosInstance ;
