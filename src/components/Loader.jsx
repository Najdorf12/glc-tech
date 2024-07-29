import "./loader.css";
const Loader = () => {
  return (
    <section className="w-full h-screen fixed bg-[#e8e8e8] inset-0 z-50 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center justify-center font-title text-lg text-[#838282ab] font-semibold  h-1/2 -mt-[20%] lg:-mt-[2%] 2xl:text-xl">
        Cargando ...
      </div>

      <div className="loader-container -mt-[25%] lg:-mt-[3%]">
        <div className="loaders ">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
        <div className="loadersB">
          <div className="loaderA">
            <div className="ball0"></div>
          </div>
          <div className="loaderA">
            <div className="ball1"></div>
          </div>
          <div className="loaderA">
            <div className="ball2"></div>
          </div>
          <div className="loaderA">
            <div className="ball3"></div>
          </div>
          <div className="loaderA">
            <div className="ball4"></div>
          </div>
          <div className="loaderA">
            <div className="ball5"></div>
          </div>
          <div className="loaderA">
            <div className="ball6"></div>
          </div>
          <div className="loaderA">
            <div className="ball7"></div>
          </div>
          <div className="loaderA">
            <div className="ball8"></div>
          </div>
        </div>
      </div>
      <div className=" text-stone-500 text-4xl 2xl:text-5xl font-bold w-full h-1/2 flex justify-center items-center "> GLC TECH </div>
    </section>
  );
};

export default Loader;
