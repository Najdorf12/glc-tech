import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState(() => {
    // Leer el tema desde localStorage si está guardado, de lo contrario usar la preferencia del sistema
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    // Si no hay tema en localStorage, usar la preferencia del sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    // Actualizar la clase del tema en el <html> y guardar el tema en localStorage
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} handleChangeTheme={handleChangeTheme} />} />
          <Route path="/:id" element={<ProductDetail theme={theme} />} />

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
