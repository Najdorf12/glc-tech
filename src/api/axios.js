import axios from "axios";

const instance= axios.create({
    baseURL:"https://www.grupolacomunidad.com.ar/api",
    withCredentials: "true"
})
export default instance