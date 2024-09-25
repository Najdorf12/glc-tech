import { useState, useEffect } from "react";
import imgHome from "../assets/imgHome.png";
import Store from "../pages/Store";
import { Link } from "react-router-dom";
import banner from "../assets/banner2.png";
import Loader from "../components/Loader";
import axios from "../api/axios";

const Home = ({
  handleChangeTheme,
  theme,
  allProducts,
  setAllProducts,
  arsPrice,
  isLoading,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imagesData, setImagesData] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    imagesData[0]?.images?.instagram?.secure_url,
    imagesData[0]?.images?.facebook?.secure_url,
    imagesData[0]?.images?.youtube?.secure_url,
    imagesData[0]?.images?.tiktok?.secure_url,
  ];

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

  const dropShadowStyle =
    theme === "dark"
      ? { filter: "drop-shadow(9px 9px 9px #f1f1f1)" } // sombra oscura para tema claro
      : { filter: "drop-shadow(9px 9px 9px #212127)" };

  const btnHomeShadow =
    theme === "dark"
      ? { boxShadow: "6px 6px 12px black, -5px -5px 9px #f1f1f1" }
      : { boxShadow: "6px 6px 12px #6666, -6px -6px 12px #f1f1f1" };

  const bgHome =
    theme === "dark"
      ? {
          backgroundImage:
            "linear-gradient(to right, #301b55, #291c4b, #231c40, #1e1b35, #1b1a2a, #1a1925, #191920, #18181b, #18181b, #18181b, #18181b, #18181b)",
        } //dark
      : {
          backgroundImage:
            "linear-gradient(to right, #482e71, #67528c, #8778a7, #a89fc1, #ccc7dc, #d8d6e5, #e6e5ee, #f4f4f6, #ececef, #e3e4e8, #dadde2, #d1d5db)",
        };

  const bgHome2 =
    theme === "dark"
      ? {
          backgroundImage:
            "linear-gradient(to right, #301b55, #291c4b, #231c40, #1e1b35, #1b1a2a, #1a1925, #191920, #18181b, #18181b, #18181b, #18181b, #18181b)",
        } //dark
      : {
          background:
            "linear-gradient(to right, #482e71, #67528c, #8778a7, #a89fc1, #ccc7dc, #d8d6e5, #e6e5ee, #f4f4f6, #ececef, #e3e4e8, #dadde2, #d1d5db)",
        };

  return (
    <>
      <main
        style={bgHome}
        className="w-full h-screen overflow-hidden bg-gray-300  dark:bg-[#212121]  flex flex-col items-center pt-[85px] pr-1 md:pt-10 lg:pt-0 lg:justify-center 2xl:h-[100dvh] relative"
      >
        <button
          onClick={handleChangeTheme}
          style={{
            boxShadow: "3px 3px 9px #f1f1f1, -3px -3px 9px #666",
          }}
          className=" z-50 border-[1.5px] mt-3 ml-4 border-white  outline-none absolute top-0 left-0 w-9 h-9 rounded-full text-[1.4rem] flex justify-center items-center  lg:mr-0  hover:scale-105 duration-400 lg:left-0 lg:ml-5 lg:mt-4 lg:text-2xl lg:h-10 lg:w-10 2xl:text-[29px] 2xl:h-14 2xl:w-14 2xl:mt-5 2xl:ml-7 bg-gray-200 text-stone-400 dark:bg-gray-200  dark:text-stone-500"
        >
          {theme === "dark" ? (
            <i className="bx bxs-sun "></i>
          ) : (
            <i className="bx bxs-moon"></i>
          )}
        </button>
        <section className="relative flex flex-col items-center lg:flex-row lg:gap-28  xl:gap-44 2xl:gap-72">
          <span className="z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center text-white mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:-mt-[82px] md:-mr-36 md:text-[10.5rem] lg:justify-center lg:text-[15rem] lg:-mt-[38px] lg:mr-0 lg:-ml-3 xl:-mt-[36px] xl:text-[16rem] 2xl:-mt-[5px] 2xl:-ml-20 2xl:text-[17rem] dark:bg-gradient-to-br dark:text-transparent dark:from-[#301b55] dark:via-[#2a2631] dark:to-stone-900 dark:bg-clip-text ">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50">
            <h1 className=" text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] bg-gradient-to-tl from-stone-600 via-[#4f3a72] to-stone-900  inline-block text-transparent bg-clip-text dark:from-stone-700 dark:via-[#ffffff] dark:to-stone-700 z-50">
              GLC TECH
            </h1>
            <h2 className=" text-[1.25rem] font-semibold bg-gradient-to-tr   from-stone-700 to-stone-500 inline-block text-transparent bg-clip-text   font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold lg:-mt-2 lg:text-[1.7rem] 2xl:text-[1.8rem] dark:from-stone-600 dark:to-stone-400 ">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-4 flex font-title text-sm text-stone-700 font-bold justify-start gap-5 2xl:gap-12 xl:text-base 2xl:text-xl xl:mt-6 2xl:mt-8 ">
              <a href="#store">
                <button
                  style={btnHomeShadow}
                  className="py-2 px-5 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-stone-800 dark:hover:text-stone-100 rounded-3xl  "
                >
                  <span>NUESTRA TIENDA</span>
                </button>
              </a>
            </div>
          </article>

          <picture className="z-50  pl-8 lg:-mr-20">
            <img
              style={dropShadowStyle}
              className="img-home mt-12 h-auto max-w-96 lg:mt-0 xl:max-w-[420px]  2xl:max-w-[500px] z-50 relative "
              src={imgHome}
              alt=""
            />
          </picture>
        </section>
      </main>
      <section
        style={bgHome2}
        className="relative w-full h-[90vh]  dark:bg-[#212121] z-50 flex justify-center items-center px-2 sm:px-4 text-gray-300  md:mt-0 lg:min-h-screen lg:py-20 "
      >
        {isLoading && <Loader />}
        <article className="relative z-50 flex flex-col  justify-center items-center gap-4 lg:gap-5 text-center sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1000px]  xl:gap-8 2xl:gap-10 ">
          <h6 className="font-title text-[2.35rem] sm:text-[2.45rem]  font-bold md:text-6xl lg:text-[9dvh] bg-gradient-to-br from-[#051937] to-[#845EC2] dark:text-gray-200 inline-block text-transparent bg-clip-text ">
            SOBRE NOSOTROS
          </h6>
          <p className="text-about font-text2 px-[8px]  text-[.9rem] font-semibold sm:text-[.95rem]  xl:px-8 2xl:text-lg bg-gradient-to-br from-stone-900 to-[#5c3f8b] dark:from-stone-400 dark:to-[#845EC2] inline-block text-transparent bg-clip-text ">
            Ubicados en el corazón de Caballito, nos dedicamos a ofrecer la
            mejor experiencia en tecnología móvil. Contamos con dos locales
            donde te ofrecemos atención personalizada. Nuestro objetivo es
            guiarte para que encuentres el celular perfecto para vos. Entendemos
            que cada cliente es único, con necesidades y preferencias distintas.
            Por eso, hemos desarrollado videos comparativos y reviews detallados
            de todos los modelos de celulares para que puedas tomar la mejor
            decisión. Además, nuestro equipo de servicio técnico altamente
            capacitado está siempre listo para asistirte.
            {/*  proporcionando soluciones efectivas y confiables para cualquier problema que puedas enfrentar con tu celular. En Glc Tech, tu satisfacción es nuestra prioridad. */}
          </p>
          <div className="relative">
            <ul className="text-stone-500 text-[2.5rem] flex gap-8 mt-2 xl:text-5xl xl:gap-[4rem] 2xl:text-6xl 2xl:gap-20 dark:text-gray-200">
              <li
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={"https://www.instagram.com/grupolacomunidad/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram hover:scale-105 hover:text-white duration-500"></i>
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={"https://www.facebook.com/grupolacomunidadtech"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook-circle hover:scale-105 hover:text-white duration-500"></i>
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={"https://www.youtube.com/@GlcTech-GrupolaComunidad"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-youtube hover:scale-105 hover:text-white duration-500"></i>
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={"https://www.tiktok.com/@grupolacomunidad"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-tiktok hover:scale-105 hover:text-stone-600 duration-500"></i>
                </Link>
              </li>
            </ul>
            <div className="absolute   w-full flex justify-center items-center left-0 bg-red-600 z-50">
              {hoveredIndex !== null && (
                <img
                  src={images[hoveredIndex]}
                  alt="img-social"
                  className="max-w-[550px] 2xl:max-w-[650px] rounded-xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className=" text-about font-text2 px-[8px]  text-[.9rem] font-semibold sm:text-[.95rem]  xl:px-8 2xl:text-lg bg-gradient-to-br from-stone-800 to-[#5c3f8b] dark:from-stone-400 dark:to-[#845EC2] inline-block text-transparent bg-clip-text lg:mt-3">
              Puedes encontrar mas informacion sobre nosotros y opiniones de
              nuestros clientes
              <Link
                target="blank"
                to={
                  "https://www.google.com/search?q=glc+tech&sca_esv=11b9b55d5edba133&sca_upv=1&sxsrf=ADLYWIIPWK1hNt4Gu4HcexptVpTqzn-uAA%3A1727195653956&source=hp&ei=BeryZvihNvDe1sQP8duBqA4&iflsig=AL9hbdgAAAAAZvL4FTjaWgYkOvh6b1IUQmVsCo0irI_o&gs_ssp=eJzj4tVP1zc0rDTOLSg3NC0xYLRSNaiwNE1KTk4ySzZKMbMwNTa0tDKoMDNIsUwzSTVJskxOM7CwNPDiSM9JVihJTc4AAEoAElE&oq=glc+&gs_lp=Egdnd3Mtd2l6IgRnbGMgKgIIATIEECMYJzIQEC4YgAQYxwEYJxiKBRivATIEECMYJzIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigVI3StQswZY6AtwAXgAkAEAmAH8BaAB9g6qAQ0wLjEuMC4xLjAuMS4xuAEDyAEA-AEBmAIFoAKwEKgCCsICBxAjGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIHEC4YJxjqAsICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAAGIAEGLEDGIMBmANGkgcLMS4wLjEuMS4wLjKgB-gv&sclient=gws-wiz#lrd=0x95bccb6c2d685319:0x60d9f4e4b9cf0890,1,,,,"
                }
              >
                <span className="text-stone-600 ml-1 dark:text-gray-100 xl:ml-2">
                  aquí.
                </span>
              </Link>
            </p>
            <Link
              target="blank"
              to={
                "https://www.google.com/search?q=glc+tech&sca_esv=11b9b55d5edba133&sca_upv=1&sxsrf=ADLYWIIPWK1hNt4Gu4HcexptVpTqzn-uAA%3A1727195653956&source=hp&ei=BeryZvihNvDe1sQP8duBqA4&iflsig=AL9hbdgAAAAAZvL4FTjaWgYkOvh6b1IUQmVsCo0irI_o&gs_ssp=eJzj4tVP1zc0rDTOLSg3NC0xYLRSNaiwNE1KTk4ySzZKMbMwNTa0tDKoMDNIsUwzSTVJskxOM7CwNPDiSM9JVihJTc4AAEoAElE&oq=glc+&gs_lp=Egdnd3Mtd2l6IgRnbGMgKgIIATIEECMYJzIQEC4YgAQYxwEYJxiKBRivATIEECMYJzIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigVI3StQswZY6AtwAXgAkAEAmAH8BaAB9g6qAQ0wLjEuMC4xLjAuMS4xuAEDyAEA-AEBmAIFoAKwEKgCCsICBxAjGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIHEC4YJxjqAsICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAAGIAEGLEDGIMBmANGkgcLMS4wLjEuMS4wLjKgB-gv&sclient=gws-wiz#lrd=0x95bccb6c2d685319:0x60d9f4e4b9cf0890,1,,,,"
              }
            >
              <figure className=" flex justify-center  ">
                <img
                  loading="lazy"
                  className="lg:w-[90%] lg:rounded-3xl 2xl:w-[95%] shadow-lg shadow-zinc-800 "
                  src={imagesData[0]?.images?.google?.secure_url}
                  alt=""
                />
              </figure>
            </Link>
          </div>
        </article>

        <div
          id="line-stats"
          className="w-[50%] lg:w-[35%] absolute h-[1px] bg-white top-0 left-0"
        ></div>
        <div
          id="line-stats2"
          className="w-[50%] lg:w-[35%] absolute z-0 h-[1px] bg-white bottom-0 right-0 "
        ></div>
      </section>

      <section
        style={bgHome2}
        className="w-full flex flex-col justify-center items-center pt-12 xl:pt-20 pb-6 xl:pb-8 2xl:pt-28 "
      >
        <Link target="blank" to={"https://acoyteservice.com.ar"}>
          <figure className=" flex justify-center  ">
            <img
              loading="lazy"
              className="lg:w-[90%] lg:rounded-3xl 2xl:w-[80%] shadow-lg shadow-zinc-800 "
              src={banner}
              alt=""
            />
          </figure>
        </Link>
      </section>
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
