import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/login/Login";
import InfinixPage from "./pages/categories/InfinixPage";
import SamsungPage from "./pages/categories/SamsungPage";
import MotorolaPage from "./pages/categories/MotorolaPage";
import Register from "./pages/login/Register";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import { useState, useEffect } from "react";
import { getArsPrice } from "./api/handlers";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [arsPrice, setArsPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                arsPrice={arsPrice}
                setARSPrice={setArsPrice}
                isLoading={isLoading}
              />
            }
          />
         
        
          <Route
            path="/products/infinix"
            element={<InfinixPage arsPrice={arsPrice} />}
          />
          <Route
            path="/products/samsung"
            element={<SamsungPage arsPrice={arsPrice} />}
          />
          <Route
            path="/products/motorola"
            element={<MotorolaPage arsPrice={arsPrice} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/:id" element={<ProductDetail />} />
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
