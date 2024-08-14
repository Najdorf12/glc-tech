import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Store = () => {
  const btns = ["Motorola", "Xiaomi", "Samsung", "Redmi", "Iphone", "Infinix", "Tablets", "Consolas","Todos"
  ];
  const [allProducts, setAllProducts] = useState([]);
  const [ARSPrice, setARSPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getARSPrice = () => {
    axios
      .get("/usdPrice")
      .then((res) => setARSPrice(res.data))
      .catch((error) => console.error(error));
  };

  const getProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
      .get("/products")
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.error(error))
     .finally(() => setIsLoading(false)); 
    }, 1500);

  };
  const getProductsByCategory = (category) => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`/products/category/${category}`)
        .then((res) => setAllProducts(res.data))
        .catch((error) => console.error(error))
         .finally(() => setIsLoading(false)); 
    }, 1000);
  };

  useEffect(() => {
    getARSPrice();
    getProducts();
  }, []);

  const searchByCategory = (category) => {
    const str = category.at(0) + category.slice(1).toLowerCase();
    if (category === "TODOS") return getProducts();
    else {
      getProductsByCategory(str);
    }
  };

  return (
    <>
      <section
        id="store"
        className=" relative w-full pb-24 bg-gray-300 dark:bg-[#212121]  flex flex-wrap  gap-x-4 gap-y-7 sm:gap-x-5 justify-center pt-[32rem]  lg:pt-52  lg:px-10 lg:gap-x-10 lg:gap-y-8 lg:pb-32 xl:pt-96 2xl:pt-[29rem] 2xl:gap-10 2xl:px-32"
      >
        {isLoading && <Loader />}
        <article className="absolute top-0 font-title flex flex-col justify-center items-center gap-3 mt-12 2xl:gap-7 2xl:mt-[4.5rem]">
        <p className="text-gray-600 text-4xl 2xl:text-6xl font-bold bg-gradient-to-br from-[#051937] to-[#845EC2] dark:text-gray-200 inline-block text-transparent bg-clip-text">TIENDA</p>
        <p className="text-stone-500 dark:text-stone-400 text-xl font-semibold flex items-center justify-center gap-2 2xl:gap-3 2xl:text-[1.7rem]">
          Busca por categoría
          <i className='bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl'></i>
        </p>
        </article>
        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-y-3 gap-x-[2rem] mt-36 md:gap-8 lg:gap-x-6 lg:gap-y-3 xl:px-20 xl:mt-[10rem] 2xl:mt-[13rem] 2xl:max-w-[1200px] 2xl:px-0 2xl:">
          {btns.map((btn, i) => (
            <button
          
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="mt-3 py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105   tracking-wider font-title font-bold text-stone-100  2xl:text-xl 2xl:mt-7 bg-gradient-to-br from-[#051937] to-[#845EC2] rounded-br-xl rounded-tl-xl shadow-2xl shadow-gray-700 dark:shadow-black hover:shadow-white hover:text-white duration-500"
            >
              <span>{btn.toUpperCase()}</span>
            </button>
          ))}
        </div>
        {allProducts?.map((product, i) => (
          <Card key={i} product={product} arsPrice={ARSPrice} />
        ))}
      </section>
    </>
  );
};

export default Store;
