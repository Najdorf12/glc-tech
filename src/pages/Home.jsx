import { useState, useEffect } from "react";
import imgHome from "../assets/imgHome.png";
import Store from "../pages/Store";
import { Link } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const dropShadowStyle =
    theme === "dark"
      ? { filter: "drop-shadow(12px 12px 16px #44403c)" } // sombra oscura para tema claro
      : { filter: "drop-shadow(20px 20px 20px rgba(255, 255, 255))" };

  const btnHomeShadow =
    theme === "dark"
      ? { boxShadow: "6px 6px 12px #666, -6px -6px 12px #f1f1f1" }
      : { boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #f1f1f1" };

  return (
    <>
      <main className="w-full h-screen overflow-hidden bg-gray-300  dark:bg-[#212121]  flex flex-col items-center pt-[85px] pr-1 md:pt-10 lg:pt-0 lg:justify-center 2xl:h-[90dvh]">
        <button
          onClick={handleChangeTheme}
          style={{
            boxShadow: "3px 3px 9px #f1f1f1, -3px -3px 9px #666",
          }}
          className=" z-50 border-[1.5px] mt-3 ml-3 border-white  outline-none absolute top-0 left-0 w-9 h-9 rounded-full text-[1.4rem] flex justify-center items-center text-stone-500 lg:mr-0  hover:scale-105 duration-400 lg:left-0 lg:ml-5 lg:mt-4 lg:text-2xl lg:h-10 lg:w-10 2xl:text-[29px] 2xl:h-14 2xl:w-14 2xl:mt-5 2xl:ml-7 dark:bg-gray-200  dark:text-stone-500"
        >
          {theme === "dark" ? (
            <i className="bx bxs-sun "></i>
          ) : (
            <i className="bx bxs-moon"></i>
          )}
        </button>
        <section className="relative flex flex-col items-center lg:flex-row lg:gap-28  xl:gap-44 2xl:gap-72">
          <span className="z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center text-gray-200 mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:-mt-[82px] md:-mr-36 md:text-[10.5rem] lg:justify-center lg:text-[15rem] lg:-mt-[38px] lg:mr-0 lg:-ml-3 xl:-mt-[36px] xl:text-[16rem] 2xl:-mt-[5px] 2xl:-ml-20 2xl:text-[17rem] dark:bg-gradient-to-br dark:text-transparent dark:from-stone-800 dark:to-stone-400 dark:bg-clip-text ">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50 ">
            <h1 className="text-stone-600 text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] bg-gradient-to-t from-stone-700 to-stone-400 inline-block text-transparent bg-clip-text  dark:text-gray-200">
              GLC TECH
            </h1>
            <h2 className="text-stone-500 text-[1.25rem] font-semibold   font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold lg:-mt-2 lg:text-[1.7rem] 2xl:text-[1.8rem]">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-4 flex font-title text-sm text-stone-500 font-bold justify-start gap-5 2xl:gap-12 xl:text-base 2xl:text-xl xl:mt-6 2xl:mt-8 ">
              <a href="#store">
                <button style={btnHomeShadow} className="py-2 px-5 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider dark:text-gray-200 rounded-3xl">
                  <span>NUESTRA TIENDA</span>
                </button>
              </a>
            </div>
          </article>

          <picture className="z-50  pl-8 lg:-mr-20">
            <img
              style={dropShadowStyle}
              className="img-home mt-10 h-auto max-w-96 lg:mt-0 xl:max-w-[420px]  2xl:max-w-[500px] "
              src={imgHome}
              alt=""
            />
          </picture>
        </section>
      </main>
      <section className="relative w-full h-[75vh] bg-gray-300 dark:bg-[#212121] z-50 flex justify-center items-center px-2 sm:px-4 text-gray-300 -mt-[8%] md:mt-0 xl:h-[80dvh] 2xl:h[70dvh] ">
        <article className="relative z-50 flex flex-col  justify-center items-center gap-8 lg:gap-5 text-center sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1000px]  xl:gap-8 2xl:gap-10 ">
          <h6  className="font-title text-[2.35rem] sm:text-[2.45rem]  font-bold md:text-6xl lg:text-[9dvh] bg-gradient-to-br from-[#051937] to-[#845EC2] dark:text-gray-200 inline-block text-transparent bg-clip-text ">
            SOBRE NOSOTROS
          </h6>
          <p className="font-text2 px-1   text-[.9rem] font-semibold sm:text-base  xl:px-8 2xl:text-lg bg-gradient-to-br from-[#051937] to-[#845EC2]  dark:from-stone-400 dark:to-[#845EC2] inline-block text-transparent bg-clip-text ">
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
          <ul className="text-white text-[2.5rem] flex gap-8 mt-2 xl:text-5xl xl:gap-[4rem] 2xl:text-6xl 2xl:gap-20 dark:text-gray-200">
            <li>
              <Link
                to={"https://www.instagram.com/grupolacomunidad/"}
                target="blank"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com/grupolacomunidadtech"}>
                <i className="bx bxl-facebook-circle"></i>
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.youtube.com/@GlcTech-GrupolaComunidad"}
                target="blank"
              >
                <i className="bx bxl-youtube"></i>
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.tiktok.com/@grupolacomunidad"}
                target="blank"
              >
               <i class='bx bxl-tiktok'></i>
              </Link>
            </li>
            
          </ul>
          {/*  <button className="btn-home2 py-[5px] px-8 xl:py-[6px] xl:px-12 hover:scale-105 hover:duration-500 lg:w-[200px]  bg-stone-600 text-stone-300 font-extrabold font-title xl:text-base 2xl:text-lg tracking-wider">CONTACTO</button> */}
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
      <Store />
    </>
  );
};

export default Home;
