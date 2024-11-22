import { useEffect, useState } from "react";
import Store from "../pages/Store";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import imgHome from "/bg/bg8.webp";
import About from "./About";
import AcoyteService from "../components/AcoyteService";
import Review from "../components/Review";
import PrimaryBtn from "../components/buttons/PrimaryBtn"

import axios from "../api/axios";

const Home = ({
  handleChangeTheme,
  theme,
  allProducts,
  setAllProducts,
  arsPrice,
  isLoading,
}) => {
  useEffect(() => {
    // Verificar si el usuario ya ha visitado el Home antes
    const hasVisitedHome = sessionStorage.getItem("hasVisitedHome");

    if (!hasVisitedHome) {
      // Si es la primera vez que visita el Home, desplazarse a la parte superior
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Guardar en sessionStorage que ya visitó el Home
      sessionStorage.setItem("hasVisitedHome", "true");
    }
  }, []);

  const [imagesData, setImagesData] = useState([]);
 
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("/dinamicImages");
        setImagesData(res.data);
      } catch (error) {
        console.error("Error fetching dynamic images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <main className="w-full h-[100vh] overflow-hidden flex flex-col items-center bg-white relative  lg:items-start z-50 ">
        <nav className="fixed z-50 w-full flex justify-end items-center mt-1 mr-2 xl:mr-3 xl:mt-3 2xl:mt-6 lg:pr-9 2xl:pr-12 ">
          <Link
            target="blank"
            to={"https://api.whatsapp.com/send/?phone=541125043539"}
            className="text-white bg-zinc-800 rounded-3xl z-50"
          >
           <PrimaryBtn btnname="Escríbenos" />
          </Link>
        </nav>

        <div className="w-full h-[90vh] absolute inset-0 z-30 ">
          <figure className="w-full h-full">
            <img
              src={imgHome}
              alt=""
              className="w-full h-full  object-cover object-[-1000px] lg:object-[70%] 2xl:object-center "
            />
          </figure>
        </div>

        <section className="relative mt-20 z-50 flex flex-col justify-center items-center xl:mt-[3%]   lg:ml-[3%]  ">
          <span className="bg-gradient-to-b from-white via-stone-400 to-zinc-800  text-transparent bg-clip-text z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:text-[12rem]  xl:text-[16rem] xl:-mt-[112px] 2xl:text-[18rem] 2xl:-mt-[110px] xl:-mr-40">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50 lg:justify-start ">
            <h1 className="text-zinc-100 text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[12rem]  z-50">
              GLC TECH
            </h1>
            <h2 className=" text-[1.25rem] font-semibold text- inline-block  font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold -mt-3 lg:text-[1.7rem] 2xl:text-[1.8rem] text-stone-300 z-50 xl:-mt-6">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-6 flex font-title text-sm text-white font-bold justify-start gap-5 2xl:gap-12 xl:text-base 2xl:text-xl xl:mt-6 2xl:mt-8 z-50">
              <a href="#store">
                <button
                  className="py-2 px-5 text-white xl:py-[9px] bg-gradient-to-br from-zinc-800 via-stone-700 to-stone-800 xl:px-12 hover:scale-105 hover:duration-500 tracking-wider hover:bg-zinc-800 hover:text-stone-400   rounded-3xl  border-[2px] border-stone-600 shadow-md shadow-gray-800 "
                >
                  <span>NUESTRA TIENDA</span>
                </button>
              </a>
            </div>
          </article>
        </section>
      </main>
      {isLoading && <Loader />}

      <About imagesData={imagesData} />
      <Review />
      <AcoyteService />
      
      <Store
        theme={theme}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        arsPrice={arsPrice}
      />
    </>
  );
};

export default Home;
