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
      fetchProducts();  // Asegúrate de que los productos se carguen siempre si no hay una categoría seleccionada
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

  const bgStore =
    theme === "dark"
      ? {
          backgroundImage:
            "linear-gradient(to right, #301b55, #291c4b, #231c40, #1e1b35, #1b1a2a, #1a1925, #191920, #18181b, #18181b, #18181b, #18181b, #18181b)",
        } //dark
      : {
          backgroundImage:
            "linear-gradient(to right, #482e71, #67528c, #8778a7, #a89fc1, #ccc7dc, #d8d6e5, #e6e5ee, #f4f4f6, #ececef, #e3e4e8, #dadde2, #d1d5db)",
        };

  return (
    <>
      <section
        style={bgStore}
        id="store"
        className=" relative w-full pb-12 bg-gray-300 dark:bg-[#212121]  flex flex-wrap  gap-x-4 gap-y-7 sm:gap-x-5 md:gap-x-8 justify-center pt-[33rem] md:pt-[24rem]  lg:pt-80  lg:px-10 lg:gap-x-12 lg:gap-y-12 lg:pb-32 xl:pt-[25rem] 2xl:pt-[31rem] 2xl:gap-12 2xl:px-32 "
      >
        {isLoading && <Loader />}
        <article className="absolute top-0 font-title flex flex-col justify-center items-center gap-5 mt-12 xl:mt-20 xl:gap-5 2xl:gap-9 2xl:mt-[6rem] ">
          <p className="text-gray-600 text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-br from-[#051937] to-[#845EC2] dark:text-gray-200 inline-block text-transparent bg-clip-text">
            TIENDA
          </p>
          <p className="text-stone-600 dark:text-stone-400 text-xl font-semibold flex items-center justify-center gap-2 xl:text-2xl 2xl:gap-3 2xl:text-[1.7rem]">
            Busca por categoría
            <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i>
          </p>
        </article>
        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-y-3 gap-x-[2rem] mt-40 md:gap-8 lg:max-w-[900px] lg:gap-x-6 lg:gap-y-3  xl:mt-[13rem] 2xl:mt-[15rem]  xl:max-w-[1000px] 2xl:max-w-[1200px] 2xl:gap-x-7 2xl:px-0 2xl:">
          {btns.map((btn, i) => (
            <button
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="mt-3 py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105   tracking-wider font-title font-bold text-stone-100  2xl:text-xl 2xl:mt-7 bg-gradient-to-br from-[#051937] to-[#845EC2]  rounded-br-xl rounded-tl-xl shadow-2xl shadow-gray-700 dark:shadow-black hover:shadow-white dark:hover:shadow-[#666] hover:text-white duration-500"
            >
              <span>{btn.toUpperCase()}</span>
            </button>
          ))}
        </div>
        {allProducts?.map((product, i) => (
          <Card key={i} product={product} arsPrice={arsPrice} />
        ))}
      </section>
      <footer style={bgStore} className="pb-12 lg:pb-28">
        <Link target="blank" to={"https://serviciotecnicoxiaomi.com.ar"}>
          <figure style={bgStore} className="flex justify-center">
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
