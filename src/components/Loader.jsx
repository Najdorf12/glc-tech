import "./loader.css";
const Loader = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to right, #482e71, #67528c, #8778a7, #a89fc1, #ccc7dc, #d8d6e5, #e6e5ee, #f4f4f6, #ececef, #e3e4e8, #dadde2, #d1d5db)",
      }}
      className="w-full h-screen fixed  inset-0 z-50 flex flex-col items-center pt-24 gap-6  xl:pt-0 xl:justify-center "
    >
      <div className="w-full flex flex-col items-center justify-center font-title text-lg text-[#675479] font-semibold 2xl:text-2xl">
        Cargando ...
      </div>

      <div className="loader-container mt-20">
        <span class="loader"></span>
      </div>
      <div className="text-4xl text-[#291c4b] mt-40 2xl:text-6xl font-bold w-full flex justify-center items-center ">
        GLC TECH
      </div>
      <div className="w-full flex flex-col items-center justify-center font-title text-lg text-[#675479] font-semibold 2xl:text-2xl">
        Grupo La Comunidad
      </div>
    </section>
  );
};

export default Loader;
