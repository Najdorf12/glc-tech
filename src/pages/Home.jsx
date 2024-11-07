import { useEffect, useState } from "react";
import Store from "../pages/Store";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import imgHome from "/bg/bg5.webp";
import About from "./About";
import AcoyteService from "../components/AcoyteService";
import Review from "../components/Review";
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
      <main className="w-full h-screen overflow-hidden flex flex-col items-center bg-white relative ">
        <nav className="fixed z-[100] w-full flex justify-end items-center mt-1 mr-2 xl:mr-3 xl:mt-3 2xl:mt-6 2xl:mr-12 ">
          <Link
            target="blank"
            to={"https://api.whatsapp.com/send/?phone=541125043539"}
          >
            <button class="animated-button text-zinc-100 bg-zinc-800 rounded-3xl shadow-sm shadow-gray-300">
              <i className="bx bxl-whatsapp arr-2 text-3xl  text-[#25D366]"></i>
              <span className="text font-title font-medium text-base">
                Escríbenos
              </span>
              <span className="circle bg-zinc-800"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </nav>

        <div className="w-full h-screen absolute inset-0 z-10 flex items-center justify-center ">
          <picture className="w-full lg:w-[75%] overflow-visible h-screen flex justify-center items-center">
            <img
              src={imgHome}
              alt=""
              className="w-full h-full  object-cover object-[-350px_30px] z-50 md:object-center  "
            />
          </picture>
        </div>

        <section className="relative mt-16 z-50 flex flex-col justify-center items-center xl:mt-3">
          <span className="bg-gradient-to-b from-stone-600 via-rose-500 to-stone-800   text-transparent bg-clip-text z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:text-[12rem] xl:text-[14rem] xl:-mt-[93px] 2xl:text-[17rem] 2xl:-mt-[95px] ">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50 ">
            <h1 className="bg-gradient-to-t from-stone-700 via-stone-200 to-stone-700    text-transparent bg-clip-text text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[12rem]  z-50">
              GLC TECH
            </h1>
            <h2 className=" text-[1.25rem] font-semibold text- inline-block  font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold -mt-3 lg:text-[1.7rem] 2xl:text-[1.8rem] text-stone-400 z-50">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-6 flex font-title text-sm text-white font-bold justify-start gap-5 2xl:gap-12 xl:text-base 2xl:text-xl xl:mt-6 2xl:mt-8 z-50">
              <a href="#store">
                <button
                  className="py-2 px-5 text-white xl:py-[9px] bg-gradient-to-br from-rose-600 via-stone-800 to-stone-800 xl:px-12 hover:scale-105 hover:duration-500 tracking-wider hover:bg-zinc-800 hover:text-stone-400   rounded-3xl  border-[2px] border-stone-600 shadow-md shadow-gray-700 "
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
