import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";



const ProtectedRoutes = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

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
  console.log("JSCOKIEEPROTECTEDROUTES------->",token)
  console.log("REACTCOOKIE-PROTECTEDROUTES------->", cookies ) 
 }, [])

  if (true) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
