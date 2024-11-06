import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { getAllProducts } from "../api/handlers";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const Store = ({ theme, allProducts, arsPrice, setAllProducts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const btns = [
    "Motorola",
    "Xiaomi",
    "Samsung",
    "Iphone",
    "Infinix",
    "Realme",
    "Tablets",
    "Consolas",
    "Todos",
  ];
  useEffect(() => {
    // Verifica si el usuario ya ha visitado el Home
    const hasVisitedHome = sessionStorage.getItem("hasVisitedHome");

    if (hasVisitedHome) {
      const section = document.getElementById("store");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    sessionStorage.setItem("hasVisitedHome", true);
  }, []);
  // Función para obtener productos por categoría
  const getProductsByCategory = async (category) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/products/category/${category}`);
      setAllProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const productsData = await getAllProducts();
      setAllProducts(productsData);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const savedCategory = sessionStorage.getItem("selectedCategory");

    if (!savedCategory || savedCategory === "TODOS") {
      fetchProducts(); // Asegúrate de que los productos se carguen siempre si no hay una categoría seleccionada
    } else {
      getProductsByCategory(savedCategory);
    }
  }, []);

  // Función para manejar la selección de categoría
  const searchByCategory = (category) => {
    const str = category.at(0) + category.slice(1).toLowerCase();
    sessionStorage.setItem("selectedCategory", category); // Guardar la categoría en sessionStorage
    if (category === "TODOS") {
      fetchProducts();
    } else {
      getProductsByCategory(str);
    }
  };

  return (
    <>
      <section
        id="store"
        className="bg-zinc-900 relative w-full pt-12 xl:pt-16"
      >
        {/* {isLoading && <Loader />} */}
        <article className="font-title flex flex-col justify-center items-center gap-5  2xl:gap-7  ">
          <p className="text-gray-600 text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-t from-stone-300 via-stone-200 to-white bg-clip-text text-transparent inline-block ">
            TIENDA
          </p>
          <p className="text-stone-600 text-xl font-medium flex items-center justify-center gap-2 xl:gap-0 xl:text-3xl 2xl:text-4xl">
            BUSCA POR CATEGORÍA
            <i className="bx bx-log-in-circle text-3xl  text-white xl:text-5xl xl:ml-3"></i>
          </p>
        </article>
        <div className="flex flex-wrap justify-center items-center gap-y-4 mt-5 gap-x-[2rem] md:gap-8 lg:max-w-[900px] lg:gap-x-6 lg:gap-y-5  lg:mx-auto self-center  xl:max-w-[1000px] xl:mt-8 2xl:max-w-[1200px] 2xl:gap-x-7 2xl:px-0 2xl:">
          {btns.map((btn, i) => (
            <button
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105   tracking-wider font-title font-bold text-stone-100  2xl:text-xl 2xl:mt-7  bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border border-stone-500  rounded-br-xl rounded-tl-xl shadow-sm shadow-gray-500  hover:shadow-white  hover:text-stone-400 duration-500"
            >
              <span>{btn.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <div className="w-full flex flex-wrap justify-center items-center mt-12 gap-y-6 gap-x-3 sm:gap-x-4 lg:gap-x-6 lg:gap-y-12 xl:mt-14 xl:px-[6%]">
          {allProducts?.map((product, i) => (
            <Card key={i} product={product} arsPrice={arsPrice} />
          ))}
        </div>
      </section>

      <footer className="pb-12 lg:pb-28">
        <Link target="blank" to={"https://serviciotecnicoxiaomi.com.ar"}>
          <figure className="flex justify-center">
            <img
              loading="lazy"
              className="lg:w-[90%] lg:rounded-3xl 2xl:w-[80%] shadow-lg shadow-zinc-800"
              src={banner}
              alt=""
            />
          </figure>
        </Link>
      </footer>
    </>
  );
};

export default Store;
