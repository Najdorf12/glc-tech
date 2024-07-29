import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";
import { Link } from "react-router-dom";

const Card = ({ product, arsPrice }) => {
  return (
    <>
      <div className="card-container w-[175px] h-[19.55rem] sm:w-[190px] sm:h-[19.80rem] md:w-[220px] md:h-[26.5rem]  lg:w-[240px] lg:h-[26.6rem] xl:w-[250px] xl:h-[26.85rem] hover:scale-105 duration-500">
        <picture className="w-full">
          <Link to={`/${product._id}`}>
            <img
              loading="lazy"
              className="rounded-t-lg w-full h-[170px] md:h-[260px] object-cover"
              src={product.image?.secure_url}
              alt="phone-img"
            />
          </Link>
        </picture>
        <article className="relative flex flex-col   gap-1 pt-2 font-title ">
          <h6 className="text-gray-600 font-bold leading-4 text-base self-center sm:text-[1rem] md:text-lg lg:font-bold border-b w-[90%] pb-[4px] flex items-center justify-center">
            {product.name?.toUpperCase()?.substring(0, 21)}
          </h6>
          <p className="text-stone-500 pl-3 font-semibold text-sm sm:mt-[1px] md:text-[0.9rem] md:text-base">
            {product.category}
          </p>
          <p className="text-stone-500 pl-3 text-xs sm:text-[0.8rem] pr-1 sm:-mt-[.3px] md:text-[0.9rem] font-semibold">
            {product.description?.substring(0, 20)}
          </p>
          <div className="flex gap-3 mt-[1px] sm:mt-[1.5px] self-center text-[.95rem] text-gray-600 font-bold md:text-[1rem] lg:text-[1.1rem] ">
            <p className="">
              usd {product?.price}
            </p>
            <p className="">
              $ {product.price * arsPrice[0]?.usdPrice}
            </p>
          </div>
          <button className="w-[70%] md:w-[60%] mt-1  bg-gradient-to-br from-stone-500 to-stone-800  py-[2px] self-center rounded-[1.3rem] font-title font-semibold text-[.85rem] md:text-[.90rem] lg:text-[.98rem] text-gray-100 hover:scale-105 duration-500  xl:py-[2.5px] ">
            <a
              className="flex items-center  justify-center gap-2 "
              href="https://api.whatsapp.com/send/?phone=541125043539"
              target="blank"
            >
              {" "}
              COMPRAR
              <i className="bx bxl-whatsapp text-[1.55rem] text-green-600 "></i>
            </a>
          </button>
        </article>
      </div>
    </>
  );
};

export default Card;
