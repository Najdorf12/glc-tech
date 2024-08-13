import  {Link} from "react-router-dom";

const CardSimilarProd = ({ product, ARSPrice }) => {
  return (
    <div className=" w-40 h-[256px]  p-2 flex flex-col gap-1 rounded-br-3xl rounded-t-lg">
      <div className="w-full flex justify-center items-center ">
        <img
          src={product?.image?.secure_url}
          alt="img-similar-prod"
          className="w-36 2xl:w-48 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base  text-white font-bold">
          {product?.name?.toUpperCase()?.substring(0, 14)}
        </span>
        <div className="flex flex-row justify-between items-center text-[0.95rem] 2xl:text-[1rem] font-semibold xl:font-bold text-gray-500 dark:text-stone-400">
          <p>$ {product?.price * ARSPrice[0]?.usdPrice}</p>
          <p>{product?.price} USD</p>
        </div>
        <Link to={"https://api.whatsapp.com/send/?phone=541125043539"}>
          <button className="bg-gradient-to-br from-[#051937] to-[#845EC2] w-full mt-[5px] text-gray-100 font-medium py-1 rounded-br-xl self-start">
           VER DETALLE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSimilarProd;
/* duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100  bg-[#bd8f2db4]*/
