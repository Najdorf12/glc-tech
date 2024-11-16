import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CardInfinix = ({ product ,arsPrice}) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, []);

  return (
    <>
      <div className="card-container  w-[180px] min-h-[19.70rem] sm:w-[192px] sm:h-[19.85rem] md:w-[220px] md:h-[26.5rem]  lg:w-[240px] lg:h-[26.6rem] xl:w-[285px] xl:h-[27.6rem] hover:scale-105 duration-500 2xl:w-[290px] 2xl:h-[28rem]">
        <Link to={`/${product?._id}`}>
          <picture className="w-full ">
            <img
              loading="lazy"
              className="rounded-xl text-rose-800 rounded-b-none w-full h-[170px] md:h-[260px] object-cover border-[2px] border-b-0 border-stone-500"
              src={product.image?.secure_url} 
              alt="phone-img"
            />
          </picture>
        </Link>

        <article className="relative flex flex-col  font-title bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 pt-3 pb-3 rounded-b-xl border-[2px] border-stone-400">
          <h6 className="text-stone-100  font-bold leading-4 text-[1.05rem] self-start md:text-lg lg:font-bold lg:text-[1.3rem] 2xl:text-[1.40rem] w-full pl-2">
            { windowWidth > 500
              ? product.name?.toUpperCase()?.substring(0, 19)
              : product.name?.toUpperCase()?.substring(0, 15)}
          </h6>
          <p className="text-stone-400  pl-2 font-bold text-[.95rem] mt-[4px]  md:text-[1.1rem] lg:text-[1.2rem] lg:mt-[2px] 2xl:text-[1.20rem] 2xl:mt-[3px]">
            <Link to={`/${product._id}`}>{product.category}</Link>
          </p>
          <p className="text-stone-400  pl-2 text-[.95rem] sm:text-[0.95rem] pr-1  md:text-[1.1rem] lg:text-[1.2rem]  font-bold 2xl:text-[1.20rem]">
            <Link to={`/${product._id}`}>
              {product.description?.substring(0, 20)}
            </Link>
          </p>
          <div className="flex  justify-between w-full px-2  mt-[4px] sm:mt-[1.5px] self-center text-[1.04rem]  text-stone-100 font-extrabold md:mt-[3px]  md:text-[1.25rem] lg:text-[1.5rem]   2xl:text-[1.50rem]">
           
            <p className="">
              <Link to={`/${product._id}`}>
                $ {product?.price * arsPrice[0]?.usdPrice}
              </Link>
            </p>
          </div>
          <button
            className="bg-gradient-to-tr from-rose-600 via-zinc-800 to-zinc-700 border-[2px] border-stone-400 w-[90%] ml-2 mt-[6px] text-stone-300 text-[1rem] font-semibold py-[3.5px] rounded-br-xl self-start md:text-[1.1rem] lg:py-[5px] md:mt-[9px] 2xl: xl:font-semibold xl:text-[1.25rem]  hover:text-white  hover:border-rose-500 hover:from-rose-800 duration-500"
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

export default CardInfinix;
