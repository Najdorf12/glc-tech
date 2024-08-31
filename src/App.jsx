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
import { getAllProducts, getArsPrice } from "./api/handlers";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [arsPrice, setArsPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    // Actualizar la clase del tema en el <html> y guardar el tema en localStorage
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

 /*  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setAllProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []); */

  useEffect(() => {
    const fetchUsdPrice = async () => {
      try {
        const arsPriceData = await getArsPrice();
        setArsPrice(arsPriceData);
      } catch (error) {
        console.error("Failed to fetch usdPrice:", error);
      }
    };

    fetchUsdPrice();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                theme={theme}
                handleChangeTheme={handleChangeTheme}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                arsPrice={arsPrice}
                setARSPrice={setArsPrice}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/:id" element={<ProductDetail theme={theme} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/admin"
              element={
                <AdminForm
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  arsPrice={arsPrice}
                  setARSPrice={setArsPrice}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
