import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G13.webp";
import { Link } from "react-router-dom";

const Card = ({ product, arsPrice }) => {
  return (
    <>
      <div className="card-container w-[185px] h-[19.70rem] sm:w-[192px] sm:h-[19.85rem] md:w-[220px] md:h-[26.5rem]  lg:w-[240px] lg:h-[26.6rem] xl:w-[255px] xl:h-[27.6rem] hover:scale-105 duration-500">
        <Link to={`/${product._id}`}>
          <picture className="w-full">
            <img
              loading="lazy"
              className="rounded-xl w-full h-[170px] md:h-[260px] object-cover"
              src={product.image?.secure_url}
              alt="phone-img"
            />
          </picture>
        </Link>

        <article className="relative flex flex-col   gap-1 pt-2 font-title">
          <h6 className="text-white font-bold leading-4 text-[1.1rem] self-start md:text-lg lg:font-extrabold lg:text-[1.2rem] 2xl:text-[1.3rem] w-full  pl-2">
            {product.name?.toUpperCase()?.substring(0, 19)}
          </h6>
          <p className="text-stone-500 pl-2 font-bold text-sm sm:mt-[1px] md:text-[1rem] md:text-base 2xl:text-[1.1rem]">
            <Link to={`/${product._id}`}>{product.category}</Link>
          </p>
          <p className="text-stone-500 pl-2 text-sm sm:text-[0.8rem] pr-1 sm:-mt-[.3px] md:text-[1rem] font-bold 2xl:text-[1.1rem]">
            <Link to={`/${product._id}`}>
              {product.description?.substring(0, 20)}
            </Link>
          </p>
          <div className="flex  justify-between w-full px-2 gap-3 mt-[1px] sm:mt-[1.5px] self-center text-[1.1rem] text-[#60438f] font-extrabold md:text-[1rem] lg:text-[1.25rem] 2xl:text-[1.4rem]">
            <p className="">
              <Link to={`/${product._id}`}>usd {product?.price}</Link>
            </p>
            <p className="">
              <Link to={`/${product._id}`}>
                $ {product.price * arsPrice[0]?.usdPrice}
              </Link>
            </p>
          </div>
          <button className="bg-gradient-to-br from-[#051937] to-[#845EC2] w-[98%] mt-[3px] text-gray-100 text-[.9rem] font-medium py-[3.5px] rounded-br-xl self-start lg:text-[1.1rem] lg:py-[5px] lg:mt-[5px] xl:font-semibold shadow-lg shadow-gray-400 dark:shadow-inherit hover:text-stone-400 hover:scale-105 duration-500">
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
