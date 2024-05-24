import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";

const Card = () => {
  return (
    <>
      <div className="card-container w-[260px] h-[26.3rem] hover:scale-105 duration-500">
        <picture className="w-full ">
          <img className="rounded-t-lg" src={imgPhone} alt="" />
        </picture>
        <article className="relative flex flex-col gap-1 pt-2 pl-2 font-title">
          <h6 className="text-[#f1a415] font-semibold text-lg ">
            REDMI NOTE 13 5G
          </h6>
          <p className="text-gray-500 font-semibold text-base">Xiaomi</p>
          <p className="text-gray-300 text-sm pr-1 mt-1 font-medium">
            REDMI NOTE 13 5G (6/128 8/256)
          </p>
          <button className="w-[55%] border border-[#f1a415] self-start mt-3  rounded-[6px] font-title  font-medium  text-zinc-400 hover:scale-105 duration-500">
            <a className="flex items-center justify-center gap-3 text-[.9rem]" href=""> Contacto
              <i className="bx bxl-whatsapp text-2xl text-[#f1a415] opacity-80 "></i>
            </a>
          </button>
        </article>
      </div>
    </>
  );
};

export default Card;
