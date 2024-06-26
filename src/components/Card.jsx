import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";
import { Link } from "react-router-dom";

const Card = ({ product, arsPrice }) => {
  return (
    <>
      <div className="card-container w-[175px] h-[18.9rem] sm:w-[190px] sm:h-[19.5rem] md:w-[260px] md:h-[26.3rem] md: hover:scale-105 duration-500">
        <picture className="w-full">
          <Link to={`/${product._id}`}>
            <img
              className="rounded-t-lg w-full h-[170px] md:h-[260px] object-cover"
              src={product.image?.secure_url}
            />
          </Link>
        </picture>
        <article className="relative flex flex-col   gap-1 pt-2 pl-2 font-title">
          <h6 className="text-[#f1a415] font-semibold leading-4 text-sm sm:text-[0.9rem] md:text-lg">
            {product.name?.toUpperCase()?.substring(0, 21)}
          </h6>
          <p className="text-[#92856e] font-semibold text-sm sm:text-[0.9rem] md:text-base">
            {product.category}
          </p>
          <p className="text-gray-200 text-xs sm:text-sm pr-1 mt-1 font-medium md:text-[0.9rem]">
            {product.description?.substring(0, 20)}
          </p>
          <button className=" w-[85px] md:w-[110px] border border-[#92856e] self-start mt-2 sm:mt-3 lg:mt-3  rounded-[6px] font-title  font-medium  text-[#92856e] hover:scale-105 duration-500">
            <a
              className="flex items-center  pl-2 gap-1 text-xs md:text-base"
              href="https://api.whatsapp.com/send/?phone=541125043539"
              target="blank"
            >
              {" "}
              Comprar
              <i className="bx bxl-whatsapp text-xl text-green-700 opacity-80 md:text-2xl"></i>
            </a>
          </button>
          <p className="absolute right-0 bottom-2 sm:bottom-3 md:bottom-4 mr-2 mb-[5px] md:mb-[3px] text-[.80rem] sm:text-sm sm:mr-2 md:text-lg md:mr-4 font-semibold text-[#f1a415]">
            usd {product?.price}
          </p>
          <p className="absolute right-0 -bottom-2  mr-2 mb-[5px] md:mb-[3px] text-[.80rem] sm:text-sm sm:mr-2 md:text-lg md:mr-4 font-semibold text-[#f1a415]">
            $ {product.price * arsPrice[0]?.usdPrice}
          </p>
        </article>
      </div>
    </>
  );
};

export default Card;
