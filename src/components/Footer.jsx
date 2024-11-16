import imgbg from "/bg20.jpg";

const Footer = () => {
    return (
        <>
         <section className="flex flex-col justify-center items-center mt-24 lg:w-full xl:mt-[200px] relative">
        <figure className="w-full  h-[40vh] md:h-[60vh]  bg-zinc-900 absolute inset-0">
          <img src={imgbg} alt="" className="object-cover w-full h-full" />
          <div className="flex justify-center items-center  gap-3 2xl:gap-4 absolute left-0 rounded-tr-2xl bottom-0 pt-2 pl-3  pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-900 z-50">
            <p className="text-zinc-300 font-title text-lg xl:text-xl 2xl:text-2xl">
              Visita nuestra Tienda
            </p>
            <button className="button">
              <a href="https://www.grupolacomunidad.com.ar" target="_blank">
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
          <article className="flex mt-3 flex-col justify-center items-center text-balance text-center xl:mt-6  z-50">
            <h6 className="text-5xl bg-gradient-to-t from-stone-300 via-stone-100 to-stone-600  bg-clip-text text-transparent inline-block font-title font-semibold xl:text-8xl 2xl:text-9xl">
              GLC TECH
            </h6>
            <p className="text-lg leading-5 mt-3 text-stone-200 font-semibold  xl:text-3xl xl:mt-4 2xl:mt-6 2xl:text-4xl">
              GRUPO LA COMUNIDAD
            </p>
           
          </article>
        </section>
        </>
    )
}

export default Footer; 