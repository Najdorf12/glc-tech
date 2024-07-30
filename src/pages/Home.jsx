import imgHome from "../assets/imgHome.png";
import Store from "../pages/Store";

const Home = () => {
  return (
    <>
      <main className="w-full h-screen overflow-hidden bg-gray-300  flex flex-col items-center pt-10 pr-1 md:pt-10 lg:pt-0 lg:justify-center 2xl:h-[90dvh]">
        <section className="relative flex flex-col items-center lg:flex-row lg:gap-28  xl:gap-44 2xl:gap-72">
          <span className="z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center text-gray-200 mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:-mt-[82px] md:-mr-36 md:text-[10.5rem] lg:justify-center lg:text-[15rem] lg:-mt-[38px] lg:mr-0 lg:-ml-3 xl:-mt-[36px] xl:text-[16rem] 2xl:-mt-[5px] 2xl:-ml-20 2xl:text-[17rem]">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50 ">
            <h1 className="text-stone-600 text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] ">
              GLC TECH
            </h1>
            <h2 className="text-stone-500 text-[1.25rem] font-semibold   font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold lg:-mt-2 lg:text-[1.7rem] 2xl:text-[1.8rem]">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-4 flex font-title text-sm text-stone-500 font-bold justify-start gap-5 2xl:gap-12 xl:text-base 2xl:text-xl xl:mt-6 2xl:mt-8 ">
              <button className="btn-home2 py-2 px-5 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider">
                <span>SOBRE NOSOTROS</span>
              </button>
            </div>
          </article>

          <picture className="z-50  pl-8 lg:-mr-20">
            <img
              id="img-home"
              className="mt-14 h-auto max-w-96 lg:mt-0 xl:max-w-[420px]  2xl:max-w-[500px]"
              src={imgHome}
              alt=""
            />
          </picture>
        </section>
      </main>
      <section
        className="relative w-full h-[70vh] bg-gray-300 z-50 flex justify-center items-center px-2 sm:px-4 text-gray-300 -mt-[10%] md:mt-0 xl:h-[80dvh] 2xl:h[70dvh] "
      >
        <article className="relative z-50 flex flex-col  justify-center items-center gap-8 lg:gap-5 text-center sm:max-w-[600px] lg:max-w-[800px]  xl:gap-8 2xl:gap-10 ">
          <h6
         
            className="font-title text-4xl  text-stone-600  font-bold md:text-6xl lg:text-[9dvh]"
          >
            LOREM IMPSUM
          </h6>
          <p
            className="font-text2 px-3  text-zinc-500 text-[.9rem] font-semibold sm:text-base  xl:px-8 2xl:text-lg  "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            impedit sit aliquam laborum incidunt consectetur dicta temporibus
            libero, illum provident nobis, veniam sed! Voluptatem nulla rerum
            earum dolores alias quibusdam. Voluptatem nulla rerum earum dolores
            alias quibusdam. Voluptatem nulla rerum earum dolores
            alias.
          </p>
          <ul className="text-white text-4xl flex gap-10 mt-2 xl:text-5xl xl:gap-12 2xl:text-6xl 2xl:gap-16">
            <li><i class='bx bxl-instagram'></i></li>
            <li><i class='bx bxl-facebook-circle'></i></li>
            <li><i class='bx bxl-youtube'></i></li>
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
