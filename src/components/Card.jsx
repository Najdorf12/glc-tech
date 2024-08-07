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
              className="rounded-t-lg w-full h-[170px] md:h-[260px] object-cover"
              src={product.image?.secure_url}
              alt="phone-img"
            />
          </picture>
        </Link>

        <article className="relative flex flex-col   gap-1 pt-2 font-title">
          <h6 className="text-stone-600 font-bold leading-4 text-base self-center sm:text-[1rem] md:text-lg lg:font-bold border-b w-[90%] pb-[4px] flex items-center justify-center">
            {product.name?.toUpperCase()?.substring(0, 18)}
          </h6>
          <p className="text-stone-500 pl-3 font-semibold text-sm sm:mt-[1px] md:text-[1rem] md:text-base xl:mt-[3px]">
            <Link to={`/${product._id}`}>{product.category}</Link>
          </p>
          <p className="text-stone-500 pl-3 text-sm sm:text-[0.8rem] pr-1 sm:-mt-[.3px] md:text-[1rem] font-semibold">
            <Link to={`/${product._id}`}>
              {product.description?.substring(0, 20)}
            </Link>
          </p>
          <div className="flex gap-3 mt-[1px] sm:mt-[1.5px] self-center text-[1rem] text-[#60438f] font-bold md:text-[1rem] lg:text-[1.2rem]  ">
            <p className="">
              <Link to={`/${product._id}`}>usd {product?.price}</Link>
            </p>
            <p className="">
              <Link to={`/${product._id}`}>
                $ {product.price * arsPrice[0]?.usdPrice}
              </Link>
            </p>
          </div>
          <button className="bg-gradient-to-br from-[#051937] to-[#845EC2] w-[60%] mt-[3px] text-gray-100 text-[.9rem] font-medium py-[2px] rounded-full self-center lg:text-base lg:py-[5px] lg:mt-[5px] xl:font-semibold">
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
