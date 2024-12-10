import { useEffect } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import BannerInfinix from "../components/BannerInfinix";
import { getAllProducts } from "../api/handlers";
import imgAcoyteService from "/banneracoyte.png";
import imgBannerXiaomi from "/bannerxiaomi.png";


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

const Store = ({ theme, allProducts, arsPrice, setAllProducts }) => {
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
    try {
      const res = await axios.get(`/products/category/${category}`);
      setAllProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setAllProducts(productsData);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    const savedCategory = sessionStorage.getItem("selectedCategory");

    if (!savedCategory || savedCategory === "TODOS") {
      fetchProducts();
    } else {
      getProductsByCategory(savedCategory);
    }
  }, []);

  const searchByCategory = (category) => {
    const str = category.at(0) + category.slice(1).toLowerCase();
    sessionStorage.setItem("selectedCategory", category);
    if (category === "TODOS") {
      fetchProducts();
    } else {
      getProductsByCategory(str);
    }
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
  
    // Si el último chunk tiene menos elementos, puedes rellenarlo o estilizarlo.
    const lastChunk = result[result.length - 1];
    if (lastChunk && lastChunk.length < size) {
      const placeholders = Array(size - lastChunk.length).fill(null); // Espacios vacíos
      result[result.length - 1] = [...lastChunk, ...placeholders];
    }
  
    return result;
  };
  const productChunks = chunkArray(allProducts || [], 12);

  return (
    <>
      <section
      id="store"
      className="bg-zinc-900 relative w-full pt-12 xl:pt-14 2xl:pt-20"
    >
      <article className="font-title flex flex-col justify-center items-center gap-5 xl:gap-10">
        <p className="text-gray-600 text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-t from-stone-300 via-stone-200 to-white bg-clip-text text-transparent inline-block">
          TIENDA
        </p>
        <p className="text-stone-600 text-xl font-medium flex items-center justify-center gap-2 xl:gap-0 xl:text-3xl 2xl:text-4xl">
          BUSCA POR CATEGORÍA
          <i className="bx bx-log-in-circle text-3xl text-white xl:text-5xl xl:ml-3"></i>
        </p>
      </article>

      <div className="flex flex-wrap justify-center items-center gap-y-4 mt-5 gap-x-[2rem] lg:max-w-[900px] lg:gap-x-6 lg:mx-auto self-center xl:max-w-[1000px] xl:mt-7 2xl:max-w-[1200px] 2xl:gap-x-7 2xl:px-0">
        {btns.map((btn, i) => (
          <button
            onClick={(e) => searchByCategory(e.target?.innerText)}
            key={i}
            className="py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105 tracking-wider font-title font-bold text-stone-100 2xl:text-xl bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border border-stone-700 rounded-br-xl rounded-tl-xl shadow-sm shadow-gray-500 hover:shadow-white hover:text-stone-400 duration-500"
          >
            <span>{btn.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col items-center mt-12 gap-y-6 xl:mt-24 xl:px-[6%]">
        {productChunks.map((chunk, index) => (
          <div
            key={index}
            className="w-full flex flex-wrap justify-center items-center gap-y-5 gap-x-3 sm:gap-x-4 lg:gap-x-9 lg:gap-y-14"
          >
            {chunk.map((product, i) => (
              <Card key={i} product={product} arsPrice={arsPrice} />
            ))}
          </div>
        ))}
        {/* Renderizar banners al final */}
        <div className="w-full flex justify-center my-8 lg:mb-12">
          {productChunks.length % 2 === 0 ? (
            <img
              src={imgAcoyteService}
              alt="Banner"
              className="w-full h-full object-contain object-center rounded-sm z-40 lg:w-[85%]"
            />
          ) : (
            <img
              src={imgBannerXiaomi}
              alt="Banner"
              className="w-full h-full object-contain object-center rounded-sm z-40 lg:w-[85%]"
            />
          )}
        </div>
      </div>
    </section>
      {/* <BannerInfinix /> */}
    </>
  );
};

export default Store;
