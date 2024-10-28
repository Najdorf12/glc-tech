import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";

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
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right, #301b55, #291c4b, #231c40, #1e1b35, #1b1a2a, #1a1925, #191920, #18181b, #18181b, #18181b, #18181b, #18181b)",
        }}
        className="min-h-screen w-full overflow-hidden bg-zinc-800 flex flex-col text-white gap-2"
      >
        <nav className="w-full flex items-center justify-end px-1 xl:px-8 2xl:px-12 2xl:pt-2 ">
          <Link to={"/"}>
            <button className="btn-home2 flex items-center text-stone-500 dark:text-gray-100 text-base font-normal font-title mt-2 border-[2px] rounded-[1rem] px-6 border-white xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold hover:scale-105 ">
              Volver
            </button>
          </Link>
        </nav>
        <article className="flex flex-col items-center mt-2 gap-4 text-balance text-center">
          <h5 className="text-5xl font-title font-semibold">INFINIX</h5>
          <p className="text-stone-300  text-base font-medium px-3">
            Aquí encontraras todos nuestros dispositivos Infinix.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
        </article>

        <section className="mt-6">
          {allProductsInfinix?.map((productInfinix, i) => (
            <Card key={i} product={productInfinix} arsPrice={arsPrice} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Infinix;
