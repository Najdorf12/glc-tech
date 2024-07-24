import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";
import { Link } from "react-router-dom";

const Card = ({ product, arsPrice }) => {
  return (
    <>
      <div className="card-container w-[175px] h-[19.45rem] sm:w-[190px] sm:h-[19.5rem] md:w-[220px] md:h-[26.3rem]  lg:w-[240px] lg:h-[26.6rem] hover:scale-105 duration-500">
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
        <article className="relative flex flex-col    gap-1 pt-2 font-title ">
          <h6 className="text-gray-600 font-semibold leading-4 text-base self-center sm:text-[0.9rem] md:text-lg lg:font-bold">
            {product.name?.toUpperCase()?.substring(0, 21)}
          </h6>
          <p className="text-stone-500 pl-2 font-semibold text-sm sm:text-[0.9rem] md:text-base">
            {product.category}
          </p>
          <p className="text-stone-500 pl-2 text-xs sm:text-sm pr-1  font-medium md:text-[0.9rem] lg:font-semibold">
            {product.description?.substring(0, 20)}
          </p>
          <div className="flex gap-3 mt-[1px] self-center text-[.90rem] text-gray-600 font-bold lg:text-[1rem] ">
            <p className="">
              usd {product?.price}
            </p>
            <p className="">
              $ {product.price * arsPrice[0]?.usdPrice}
            </p>
          </div>
          <button className="w-[70%] mt-1  border border-[#92856e] bg-[#464444]  px-3 py-[2px] self-center rounded-[6px] font-title font-bold text-[.98rem] text-gray-100 hover:scale-105 duration-500">
            <a
              className="flex items-center  justify-center  gap-2 "
              href="https://api.whatsapp.com/send/?phone=541125043539"
              target="blank"
            >
              {" "}
              COMPRAR
              <i className="bx bxl-whatsapp text-[1.57rem] text-green-600 font-bold opacity-80 -mt-[1px] "></i>
            </a>
          </button>
        </article>
      </div>
    </>
  );
};

export default Card;
