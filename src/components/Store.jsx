import Card from "./Card";

const Store = () => {
  const btns = ["MOTOROLA", "XIAOMI", "SAMSUNG"];
  return (
    <>
      <section
        id="store"
        className=" relative w-full pb-24 bg-zinc-900  flex flex-wrap  gap-6 justify-center pt-52 sm:pt-44  lg:pt-52 lg:px-10 lg:gap-8 lg:pb-32 2xl:gap-10 2xl:px-20"
      >
        <div className="absolute top-0 flex flex-wrap justify-center items-center gap-5 mt-10 px-2 sm:mt-14 lg:gap-10 2xl:gap-14">
          {btns.map((btn, i) => (
            <button
              key={i}
              className="w-[160px] py-2 border border-[#f1a415] rounded-[6px] font-title  font-medium text-lg  text-gray-100 hover:scale-105 duration-500 2xl:font-semibold 2xl:text-xl lg:w-[200px]"
            >
              {btn}
              
            </button>
          ))}
        </div>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      
      </section>
    </>
  );
};

export default Store;
