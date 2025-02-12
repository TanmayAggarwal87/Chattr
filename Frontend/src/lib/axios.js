import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE==="development" ? "https://chattr-theta.vercel.app//api":"/api",
    withCredentials:true,
})


