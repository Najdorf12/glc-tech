const CardSimilarProd = ({ product }) => {
  return (
    <div className=" w-44 h-[250px] 2xl:w-60 2xl:h-[320px] bg-stone-600 p-3 flex flex-col gap-1 rounded-br-3xl">
      <div className="w-full flex justify-center items-center ">
        <img src={product?.image?.secure_url} 
        alt="img-similar-prod" 
        className="w-32 2xl:w-48 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base 2xl:text-xl text-white font-bold">{product?.name} </span>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm font-semibold text-stone-300">{product?.description}</p>
          
        </div>
        <button className="hover:bg-amber-600 mt-1 text-gray-100 font-medium bg-[#92856e] py-2 rounded-br-xl">
            Ver detalle
        </button>
      </div>
    </div>
  );
};

export default CardSimilarProd;
/* duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100 */