import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imgAbout from "/bg/bg6.webp";

const About = ({imagesData}) => {

  const images = [
    imagesData[0]?.images?.instagram?.secure_url,
    imagesData[0]?.images?.facebook?.secure_url,
    imagesData[0]?.images?.youtube?.secure_url,
    imagesData[0]?.images?.tiktok?.secure_url,
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <>
      <section className="relative w-full h-[65vh]  z-50 flex justify-center items-center  text-gray-300  bg-white  lg:h-[80vh] xl:items-start xl:pt-[5%]  xl:h-[90vh]  ">
        <div className="h-full w-full  absolute inset-0 z-10 flex items-start justify-center  xl:justify-start">
          <figure className="w-full h-full flex justify-center items-center grayscale-[.0] xl:w-[50%] ">
            <img
              src={imgAbout}
              alt=""
              className="w-full h-full object-cover object-[-140px] lg:object-center  "
            />
          </figure>
        </div>
        <article className="relative z-50 flex flex-col  justify-center items-center gap-4 lg:gap-5 text-center sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] 2xl:max-w-[1300px]  xl:gap-8 2xl:gap-12 ">
          <h6 className="font-title text-[2.35rem] sm:text-[2.45rem]  font-bold md:text-6xl lg:text-[9dvh] xl:text-[12dvh] bg-gradient-to-br from-stone-500 via-stone-300 to-stone-600    inline-block text-transparent bg-clip-text ">
            SOBRE NOSOTROS
          </h6>
          <p className="text-about text-stone-400 font-title text-balance text-center px-[8px] font-semibold text-sm xl:text-lg xl:px-8 2xl:text-2xl  ">
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
            <ul className="text-stone-400 text-[2.5rem] flex gap-8 mt-2 xl:text-6xl xl:gap-[4rem] 2xl:text-6xl 2xl:gap-20 ">
              <li
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={"https://www.instagram.com/grupolacomunidad/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram hover:scale-105 hover:text-rose-300 duration-500"></i>
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
                  <i className="bx bxl-facebook-circle hover:scale-105 hover:text-rose-300 duration-500"></i>
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
                  <i className="bx bxl-youtube hover:scale-105 hover:text-rose-300 duration-500"></i>
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
                  <i className="bx bxl-tiktok hover:scale-105 hover:text-rose-300 duration-500"></i>
                </Link>
              </li>
            </ul>
            <div className="absolute   w-full flex justify-center items-center left-0 z-50">
              {hoveredIndex !== null && (
                <img
                  src={images[hoveredIndex]}
                  alt="img-social"
                  className="max-w-[550px] 2xl:max-w-[650px] rounded-xl"
                />
              )}
            </div>
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

      
    </>
  );
};

export default About;