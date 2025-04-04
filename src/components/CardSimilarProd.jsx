import  {Link} from "react-router-dom";
import imgPhone from "../assets/phone-images/MOTOROLA/MOTO G14.jpg";
const CardSimilarProd = ({ product, ARSPrice }) => {
  return (
    <div className=" w-40 h-[256px]  p-2 flex flex-col gap-1 rounded-br-3xl rounded-t-lg xl:w-[175px] 2xl:w-52 lg:h-[320px] duration-500 hover:scale-105">
      <div className="w-full flex justify-center items-center ">
        <img
          src={product?.image?.secure_url ? product?.image?.secure_url : imgPhone}
          alt="img-similar-prod"
          className="w-36 xl:w-52 2xl:w-48 rounded-lg"
        />
      </div>
      <div className="flex flex-col xl:pl-[3px] 2xl:mt-[2px]">
        <span className="text-base  text-primary font-bold xl:text-[1.02rem] 2xl:text-[1.2rem]">
          {product?.name?.toUpperCase()?.substring(0, 14)}
        </span>
        <div className="text-stone-500  text-sm sm:text-[0.8rem] pr-1 sm:-mt-[.3px] md:text-[.92rem] font-semibold xl:mt-[2px]  2xl:mt-[4px] 2xl:text-[1.05rem]">
          {product?.description}
        </div>
        <div className="flex flex-row text-stone-200 justify-start items-center mt-[2px] text-[1.05rem] xl:mt-[4px] xl:text-[1.1rem] 2xl:text-[1.25rem] font-bold xl:font-bold  2xl:mt-[4px]">
          {/* <p>usd {product?.price} </p> */}
          <p>$ {product?.price * ARSPrice[0]?.usdPrice}</p>
        </div>
        <Link to={"https://api.whatsapp.com/send/?phone=541125043539"}>
          <button className="bg-gradient-to-br from-zinc-700 via-rose-800 to zinc-700 w-full mt-[4px] xl:mt-[7px] 2xl:mt-[9px] text-gray-100 font-medium py-1 rounded-br-xl self-start 2xl:text-[1.1rem] ">
           COMPRAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSimilarProd;
/* duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100  bg-[#bd8f2db4]*/
