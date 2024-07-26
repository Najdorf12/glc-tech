import axios from "axios";

const instance= axios.create({
    baseURL:"https://glc-tech-backend.vercel.app/api",
    withCredentials: "true",

})
export default instance

/* https://glc-tech-backend.vercel.app/api */