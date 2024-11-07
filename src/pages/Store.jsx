import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { getAllProducts } from "../api/handlers";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import imgbg from "/bg20.jpg";

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
      const hasVisitedHome = sessionStorage.getItem("hasVisitedHome");

    if (hasVisitedHome) {
      const section = document.getElementById("store");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    sessionStorage.setItem("hasVisitedHome", true); 
  }, []);

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
        className="bg-zinc-900 relative w-full pt-12 xl:pt-24"
      >
        {/* {isLoading && <Loader />} */}
        <article className="font-title flex flex-col justify-center items-center gap-5  xl:gap-10  ">
          <p className="text-gray-600 text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-t from-stone-300 via-stone-200 to-white bg-clip-text text-transparent inline-block ">
            TIENDA
          </p>
          <p className="text-stone-600 text-xl font-medium flex items-center justify-center gap-2 xl:gap-0 xl:text-3xl 2xl:text-4xl">
            BUSCA POR CATEGORÍA
            <i className="bx bx-log-in-circle text-3xl  text-white xl:text-5xl xl:ml-3"></i>
          </p>
        </article>
        <div className="flex flex-wrap justify-center items-center gap-y-4 mt-5 gap-x-[2rem]  lg:max-w-[900px] lg:gap-x-6   lg:mx-auto self-center  xl:max-w-[1000px] xl:mt-7 2xl:max-w-[1200px] 2xl:gap-x-7 2xl:px-0 2xl:">
          {btns.map((btn, i) => (
            <button
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105   tracking-wider font-title font-bold text-stone-100  2xl:text-xl bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border border-stone-700  rounded-br-xl rounded-tl-xl shadow-sm shadow-gray-500  hover:shadow-white  hover:text-stone-400 duration-500"
            >
              <span>{btn.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <div className="w-full flex flex-wrap justify-center items-center mt-12 gap-y-6 gap-x-3 sm:gap-x-4 lg:gap-x-8 lg:gap-y-12 xl:mt-24 xl:px-[8%]">
          {allProducts?.map((product, i) => (
            <Card key={i} product={product} arsPrice={arsPrice} />
          ))}
        </div>
      </section>

      <footer className=" pt-12 xl:pt-28  bg-zinc-900 ">
        <section className="flex flex-col justify-center items-center mt-6 lg:w-full xl:mt-[3%] relative">
        <figure className="w-full  h-[40vh] md:h-[70vh]  bg-zinc-900 absolute inset-0">
          <img src={imgbg} alt="" className="object-cover w-full h-full" />
          <div className="flex justify-center items-center  gap-3 2xl:gap-4 absolute left-0 rounded-tr-2xl bottom-0 pt-2 pl-3  pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-900 z-50">
            <p className="text-zinc-300 font-title text-lg xl:text-xl 2xl:text-2xl">
              Visita nuestra Tienda
            </p>
            <button className="button">
              <a href="https://www.grupolacomunidad.com.ar" target="_blank">
                <div className="button__circle">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon"
                    width="14"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon button__icon--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
        </figure>
          <article className="flex mt-3 flex-col justify-center items-center text-balance text-center xl:mt-6  z-50">
            <h6 className="text-5xl bg-gradient-to-t from-stone-300 via-stone-100 to-stone-600  bg-clip-text text-transparent inline-block font-title font-semibold xl:text-8xl 2xl:text-9xl">
              INFINIX SERVICE
            </h6>
            <p className="text-lg leading-5 mt-4 text-stone-300 font-semibold  xl:text-3xl xl:mt-6 2xl:mt-8 2xl:text-4xl">
              SERVICIO TECNICO ESPECIALIZADO EN DISPOSITIVOS INFINIX
            </p>
           
          </article>
        </section>
       
      </footer>
    </>
  );
};

export default Store;
