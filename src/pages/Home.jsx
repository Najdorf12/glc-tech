import imgHome from "../assets/imgHome.png";
import Store from "../pages/Store";

const Home = () => {
 
  return (
    <>
      <main className="w-full h-screen overflow-hidden bg-gray-300  flex flex-col items-center pt-8 md:pt-10 lg:pt-0 lg:justify-center">
        <section className="relative flex flex-col items-center lg:flex-row lg:gap-28  xl:gap-44 2xl:gap-72">
          <span className="z-10 absolute top-0 font-title font-extrabold text-[8rem]  sm:text-[9rem] w-full -mt-[4.3rem] flex justify-end items-center text-gray-200 mr-4 sm:-mr-16 sm:-mt-[4.7rem]  md:-mt-[82px] md:-mr-36 md:text-[10.5rem] lg:justify-center lg:text-[15rem] lg:-mt-[60px] lg:mr-0 lg:-ml-3 xl:-mt-[50px] xl:text-[16rem] 2xl:-mt-[18px] 2xl:-ml-20 2xl:text-[17rem]">
            GLC
          </span>

          <article className="flex flex-col  justify-center items-center z-50 ">
            <h1 className="text-zinc-600 text-[4.2rem] font-extrabold font-title sm:text-[5rem]  md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] ">
              GLC TECH
            </h1>
            <h2 className="text-zinc-500 text-[1.25rem] font-semibold mt-1  font-text2 sm:text-2xl md:text-[1.5rem] md:font-semibold lg:-mt-2 lg:text-[1.7rem] 2xl:text-[1.8rem]">
              GRUPO LA COMUNIDAD
            </h2>
            <div className="mt-8 flex justify-center">
              <button className="btn-home font-text2 border-[2px] border-[#92856e] text-[#92856e]  bg- lg:font-semibold lg:py-[0.8rem] lg:px-[1.5rem] lg:mt-3  2xl:text-[1.3rem]  hover:text-gray-100">
                <a href="#store">Nuestros Productos</a>
              </button>
            </div>
          </article>

          <picture className="z-50  pl-8 lg:-mr-20">
            <img
              className="mt-20 h-auto max-w-96 lg:mt-0 xl:max-w-[420px]  2xl:max-w-[500px]"
              src={imgHome}
              alt=""
            />
          </picture>
        </section>
      </main>
      <Store />
    </>
  );
};

export default Home;
