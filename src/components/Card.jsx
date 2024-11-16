import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ product, arsPrice }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, []);

  return (
    <>
      <div className="card-container w-[180px] min-h-[20rem] sm:w-[192px] sm:h-[20rem] md:w-[220px] md:h-[26.5rem]  lg:w-[240px] lg:h-[26.6rem] xl:w-[255px] xl:h-[27.6rem] hover:scale-105 duration-500 2xl:w-[270px] 2xl:h-[28rem]">
        <Link to={`/${product?._id}`}>
          <picture className="w-full">
            <img
              loading="lazy"
              className="rounded-xl w-full h-[170px] md:h-[260px] object-cover"
              src={product.image?.secure_url}
              alt="phone-img"
            />
          </picture>
        </Link>

        <article className="relative flex flex-col mt-[8px] md:mt-[6px] font-title">
          <h6 className="text-rose-800 font-bold leading-4 text-[1.05rem] self-start md:text-lg lg:font-bold lg:text-[1.3rem] 2xl:text-[1.40rem] w-full pl-2">
            { windowWidth > 500
              ? product.name?.toUpperCase()?.substring(0, 19)
              : product.name?.toUpperCase()?.substring(0, 17)}
          </h6>
          <p className="text-stone-600 pl-2 font-bold text-[.95rem] mt-[2px]  md:text-[1.1rem] lg:text-[1.2rem] lg:mt-[2px] 2xl:text-[1.20rem] 2xl:mt-[3px]">
            <Link to={`/${product._id}`}>{product.category}</Link>
          </p>
          <p className="text-stone-600 pl-2 text-[.95rem] sm:text-[0.95rem] pr-1  md:text-[1.1rem] lg:text-[1.2rem]  font-bold 2xl:text-[1.20rem]">
            <Link to={`/${product._id}`}>
              {product.description?.substring(0, 20)}
            </Link>
          </p>
          <div className="flex  justify-between w-full px-2  mt-[1px] sm:mt-[1.5px] self-center text-[1.04rem] text-white font-extrabold md:mt-[3px]  md:text-[1.25rem] lg:text-[1.5rem]   2xl:text-[1.50rem]">
          {/*   <p className="">
              <Link to={`/${product?._id}`}>usd {product?.price}</Link>
            </p> */}
            <p className="">
              <Link to={`/${product._id}`}>
                $ {product?.price * arsPrice[0]?.usdPrice}
              </Link>
            </p>
          </div>
          <button
            className="bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border border-stone-600 w-[98%] mt-[5px] text-stone-200 shadow-sm shadow-gray-700 text-[1rem] font-medium py-[3.5px] rounded-br-xl self-start md:text-[1.1rem] lg:py-[5px] md:mt-[9px] 2xl: xl:font-semibold xl:text-[1.25rem]   hover:text-stone-400 hover:scale-105 duration-500"
          >
            <Link
              className="flex items-center  justify-center gap-2 "
              to={"https://api.whatsapp.com/send/?phone=541125043539"}
              target="blank"
            >
              {" "}
              COMPRAR
              {/*  <i className="bx bxl-whatsapp text-[1.55rem] text-green-600 "></i> */}
            </Link>
          </button>
        </article>
      </div>
    </>
  );
};

export default Card;
