import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Store = () => {
  const btns = ["Todos", "Motorola", "Xiaomi", "Samsung"];
  const [allProducts, setAllProducts] = useState([]);
  const [ARSPrice,setARSPrice] = useState([])

  const getARSPrice = () => {
    axios
    .get("https://glc-tech-backend.vercel.app/api/usdPrice")
    .then((res) => setARSPrice(res.data))
    .catch((error) => console.error(error));
  }

  const getProducts = () => {
    axios
      .get("https://glc-tech-backend.vercel.app/api/products")
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.error(error));
  };
  const getProductsByCategory = (category) => {
    console.log(category)
    axios
      .get(`https://glc-tech-backend.vercel.app/api/products/category/${category}`)
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.error(error));
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
        className=" relative w-full pb-24 bg-zinc-900  flex flex-wrap  gap-2 sm:gap-3 justify-center pt-52 sm:pt-56  lg:pt-52 lg:px-10 lg:gap-8 lg:pb-32 2xl:gap-10 2xl:px-20"
      >
        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-5 mt-10 px-2 sm:mt-14 lg:gap-10 2xl:gap-14">
          {btns.map((btn, i) => (
            <button
              onClick={(e) => searchByCategory(e.target.innerText)}
              key={i}
              className="w-[160px] py-2 border border-[#92856e] rounded-[6px] font-title  font-medium text-lg  text-gray-200 hover:scale-105 duration-500 2xl:font-semibold 2xl:text-xl lg:w-[200px]"
            >
              {btn.toUpperCase()}
            </button>
          ))}
        </div>
        {allProducts?.map((product, i) => (
          <Card key={i} product={product} arsPrice ={ARSPrice} />
        ))}
      </section>
    </>
  );
};

export default Store;
