import axios from "axios";

const instance= axios.create({
    baseURL:"https://glc-tech-backend.vercel.app",
    withCredentials: "true"
})
export default instance