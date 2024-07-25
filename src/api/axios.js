import axios from "axios";

const instance= axios.create({
<<<<<<< HEAD
    baseURL:"https://glc-tech-backend.vercel.app/",
=======
    baseURL:"https://www.grupolacomunidad.com.ar/api",
>>>>>>> c8a6e7753971ab0b2bbce9f1c9206490cac697c9
    withCredentials: "true"
})
export default instance