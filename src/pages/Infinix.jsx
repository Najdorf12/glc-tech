import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import CardInfinix from "../components/CardInfinix";
import logoInfinix from "/InfinixLogo.png";
import imgbg from "/bg20.jpg";

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
      <section className="w-full min-h-screen relative flex flex-col justify-start ">
        <nav className="w-full flex items-center justify-end px-1 xl:px-8 2xl:px-12 2xl:pt-2 lg:justify-end fixed z-50">
          <Link to={"/"}>
            <button className="btn-home2 flex items-center gap-3 bg-zinc-700 text-[rgb(146,195,73)]  text-base font-medium  font-title mt-1 border-[2px] rounded-[1rem] pr-2 pl-4  border-zinc-600 xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold hover:scale-105 shadow-lg shadow-zinc-400 xl:mt-3">
              TIENDA
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
            </button>
          </Link>
        </nav>

        <article className="flex flex-col items-center mt-14 gap-4 text-balance text-center xl:mt-12 2xl:mt-20">
          <figure className="w-[90%] lg:w-[40%] xl:w-[45%]">
            <img src={logoInfinix} alt="logoInfinix" className="w-full" />
          </figure>
          <p className="text-stone-500  text-base font-semibold px-3 leading-4 font-title lg:text-lg xl:text-xl 2xl:text-2xl">
            Aquí encontraras todos nuestros dispositivos Infinix.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
        </article>

        <section className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-10 px-2 md:px-12 lg:px-12 lg:gap-y-20 xl:gap-x-6  xl:mt-14 2xl:mt-16 xl:px-[15%]">
          {allProductsInfinix?.map((productInfinix, i) => (
            <CardInfinix key={i} product={productInfinix} arsPrice={arsPrice} />
          ))}
        </section>
        <figure className="w-full mt-16  h-[40vh] md:h-[70vh] relative">
          <img src={imgbg} alt="" className="object-cover w-full h-full" />
          <div className="flex justify-center items-center  gap-3 2xl:gap-4 absolute left-0 rounded-tr-2xl bottom-0 pt-2 pl-3  pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-900 z-50">
            <p className="text-zinc-300 font-title text-lg xl:text-xl 2xl:text-2xl">
              Visita nuestra Tienda
            </p>
            <button className="button">
              <a
                href="https://www.grupolacomunidad.com.ar/products/infinix"
                target="_blank"
              >
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
      </section>
    </>
  );
};

export default Infinix;
