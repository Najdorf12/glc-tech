import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Store = () => {
  const btns = ["Todos", "Motorola", "Xiaomi", "Samsung"];
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
        className=" relative w-full pb-24 bg-gray-300 dark:bg-[#212121]  flex flex-wrap  gap-x-4 gap-y-7 sm:gap-x-5 justify-center pt-64  lg:pt-52  lg:px-10 lg:gap-x-10 lg:gap-y-8 lg:pb-32 xl:pt-60 2xl:pt-72 2xl:gap-10 2xl:px-32"
      >
        {isLoading && <Loader />}

        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-y-3 gap-x-[2rem] mt-20 md:gap-8 lg:gap-14 xl:mt-28 2xl:mt-32 2xl:gap-16">
          {btns.map((btn, i) => (
            <button
          
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="mt-3 py-2 px-6 min-w-36 xl:min-w-44 xl:py-[9px] xl:px-12 hover:scale-105   tracking-wider font-title font-bold text-stone-100  2xl:text-xl 2xl:mt-7 bg-gradient-to-br from-[#051937] to-[#845EC2] rounded-br-xl rounded-tl-xl shadow-2xl shadow-gray-700 dark:shadow-gray-600 hover:shadow-white hover:text-white duration-500"
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
