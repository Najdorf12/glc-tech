import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import CardInfinix from "../components/CardInfinix";
import logoInfinix from "/InfinixLogo.png"

const Infinix = ({ arsPrice }) => {
  const [allProductsInfinix, setAllProductsInfinix] = useState([]);
  console.log(allProductsInfinix);
  useEffect(() => {
    getProductsByCategory();
  }, []);

  const getProductsByCategory = async () => {
    try {
      const res = await axios.get(`/products/category/Infinix`);
      setAllProductsInfinix(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="w-full min-h-screen relative flex flex-col justify-start pb-20 xl:pb-48 2xl:pb-64"
      >
        <nav className="w-full flex items-center justify-end px-1 xl:px-8 2xl:px-12 2xl:pt-2 lg:justify-end fixed">
          <Link to={"/"}>
            <button className="btn-home2 flex items-center bg-zinc-700 text-[rgb(146,195,73)]  text-base font-medium  font-title mt-2 border-[2px] rounded-[1rem] px-6 border-zinc-600 xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold hover:scale-105 shadow-lg shadow-zinc-400 ">
              IR A LA TIENDA
            </button>
          </Link>
        </nav>
       
        <article className="flex flex-col items-center mt-2 gap-4 text-balance text-center xl:mt-12 2xl:mt-20">
          <figure className="w-[90%] lg:w-[40%] xl:w-[45%]">
          <img src={logoInfinix} alt="logoInfinix" className="w-full" />

          </figure>
          <p className="text-stone-500  text-base font-semibold px-3 leading-4 font-title lg:text-lg xl:text-xl 2xl:text-2xl">
            Aquí encontraras todos nuestros dispositivos Infinix.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
        </article>

        <section className="mt-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-12 px-2 md:px-12 lg:px-12 lg:gap-y-20 xl:gap-x-6  xl:mt-14 2xl:mt-16 2xl:px-[15%]">
          {allProductsInfinix?.map((productInfinix, i) => (
            <CardInfinix key={i} product={productInfinix} arsPrice={arsPrice} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Infinix;
