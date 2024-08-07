import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminForm />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
