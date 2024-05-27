import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";

const Card = ({product}) => {
  return (
    <>
      <div className="card-container w-[260px] h-[26.1rem] hover:scale-105 duration-500">
        <picture className="w-full ">
          <img className="rounded-t-lg" src={imgPhone} alt="" />
        </picture>
        <article className="relative flex flex-col gap-1 pt-2 pl-2 font-title">
          <h6 className="text-[#f1a415] font-semibold text-lg ">
            {product.name}
          </h6>
          <p className="text-gray-500 font-semibold text-base">{product.category}</p>
          <p className="text-gray-300 text-sm pr-1 mt-1 font-medium">
          {product.description}
          </p>
          <button className="w-[55%] border border-[#f1a415] self-start mt-3  rounded-[6px] font-title  font-medium  text-zinc-400 hover:scale-105 duration-500">
            <a className="flex items-center  pl-2 gap-4 text-[.9rem]" href="https://api.whatsapp.com/send/?phone=541125043539" target="blank" > Contacto
              <i className="bx bxl-whatsapp text-2xl text-[#f1a415] opacity-80 "></i>
            </a>
          </button>
        </article>
      </div>
    </>
  );
};

export default Card;
