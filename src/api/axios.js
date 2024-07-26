import axios from "axios";

const instance= axios.create({
    baseURL:" https://glc-tech-backend.vercel.app/api",
    withCredentials: "true",

})
export default instance

/*http://localhost:1212/api*/