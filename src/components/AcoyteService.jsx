import imgAcoyteService from "/banneracoyte.png";
import { Link } from "react-router-dom";
import bannerXiaomi from "/bannerxiaomi.png";

const AcoyteService = () => {
  return (
    <div className="w-full relative  flex justify-center flex-col items-center bg-zinc-900">
      <Link target="_blank" to={"https://acoyteservice.com.ar"}>
        <figure className="w-full h-full flex justify-center items-center py-4  lg:py-5 ">
          <img
            src={imgAcoyteService}
            alt="imgAcoyteService"
            className="w-full h-full object-contain object-center rounded-xl z-40 lg:w-[80%]  "
          />
        </figure>
      </Link>
      <div className="w-full relative  flex justify-center items-center bg-zinc-900">
          <Link target="_blank" to={"https://serviciotecnicoxiaomi.com.ar"}>
            <figure className="w-full h-full flex justify-center items-center  self-center">
              <img
                src={bannerXiaomi}
                alt="imgAcoyteService"
                className="w-full h-full object-contain object-center z-40 rounded-xl lg:w-[80%] "
              />
            </figure>
          </Link>
        </div>
      {/*  <picture className="absolute inset-0 w-full  overflow-hidden flex justify-center items-center">
        <img
          src={imgAcoyteService}
          alt="imgAcoyteService"
          className="w-full h-full object-cover object-center z-40   "
        />
      </picture> */}

      {/* <section className="z-50 flex flex-col justify-center items-center mt-6 lg:w-full xl:mt-[3%]">
       <article className="flex flex-col justify-center items-center text-balance text-center  lg:self-end lg:mr-[6%]">
          <h6 className="text-4xl bg-gradient-to-t from-stone-300 via-stone-200 to-white bg-clip-text text-transparent inline-block font-title font-semibold xl:text-7xl 2xl:text-8xl">
            ACOYTESERVICE
          </h6>
          <p className="text-xl text-stone-200 font-semibold  bg-gradient-to-t from-stone-300 via-stone-200 to-white bg-clip-text text-transparent inline-block xl:text-3xl xl:mt-1 2xl:text-4xl">
            SERVICIO TECNICO MULTIMARCA
          </p>
          <ul className=" text-stone-700 text-base  flex items-center justify-center gap-5 font-title font-semibold mt-2 xl:text-stone-500 xl:text-lg xl:mt-3 xl:gap-7 2xl:text-xl 2xl:mt-4">
            <li>NOTEBOOKS</li>
            <li>CONSOLAS</li>
            <li>SMARTPHONES</li>
          </ul>
        </article> 
      </section> */}

      {/* <div className="flex justify-center items-center  gap-3 xl:gap-4 2xl:gap-6 absolute left-0 rounded-tr-2xl bottom-0 border-t-[2px] border-r-[2px] bg-zinc-900 border-stone-500 pt-2 px-6 pb-1 lg:pb-3 lg:px-8 z-50 xl:px-12 xl:pt-3 ">
        <p className="font-title text-lg font-semibold text-stone-300 xl:text-2xl xl:font-medium">Visitar sitio</p>
        <button className="button3">
          <a href="https://www.grupolacomunidad.com.ar" target="_blank">
            <div className="button__circle3">
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
      </div> */}
    </div>
  );
};

export default AcoyteService;
