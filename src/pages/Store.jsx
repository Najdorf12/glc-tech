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
    }, 1000);

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
        className=" relative w-full pb-24 bg-gray-300  flex flex-wrap  gap-4 sm:gap-5 justify-center pt-56 sm:pt-56  lg:pt-52  lg:px-10 lg:gap-8 lg:pb-32 xl:pt-60 2xl:pt-64 2xl:gap-10 2xl:px-20"
      >
        {isLoading && <Loader />}

        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-y-6 gap-x-[2.5rem] mt-20 px-  md:gap-8 lg:gap-14 xl:mt-28 2xl:mt-32 2xl:gap-16">
          {btns.map((btn, i) => (
            <button
              onClick={(e) => searchByCategory(e.target?.innerText)}
              key={i}
              className="btn-home2 py-[5px] px-8 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 lg:w-[200px] text-stone-500 font-extrabold font-title xl:text-base 2xl:text-lg tracking-wider border-[2px] border-white"
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
