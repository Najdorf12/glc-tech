const CardSimilarProd = ({ product }) => {
  return (
    <div className=" w-40 h-[256px] 2xl:w-60 2xl:h-[320px] p-2 flex flex-col gap-1 rounded-br-3xl rounded-t-lg">
      <div className="w-full flex justify-center items-center ">
        <img
          src={product?.image?.secure_url}
          alt="img-similar-prod"
          className="w-36 2xl:w-48 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base 2xl:text-xl text-white font-bold">
        {product?.name?.toUpperCase()?.substring(0, 14)}
        </span>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm font-semibold text-gray-500">
            {product?.description}
          </p>
        </div>
        <button className="hover:bg-amber-600 w-full mt-[5px] text-gray-100 font-medium bg-[#bd8f2db4] py-1 rounded-br-xl self-start">
          {product?.price} USD
        </button>
      </div>
    </div>
  );
};

export default CardSimilarProd;
/* duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100 */
