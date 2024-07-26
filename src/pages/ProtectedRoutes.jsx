import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Cookies from "js-cookie";


const ProtectedRoutes = () => {
 /*  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = async () => {
    try {
      const res = await axios.get("/auth/verify");
      if (res.data) {
        console.log(res.data)
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
    }
  }; */
 useEffect(() => {
  const token = Cookies.get("token");
  console.log(token)
 }, [])
 
 const token = Cookies.get("token");
 console.log(token)

  if (true) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
