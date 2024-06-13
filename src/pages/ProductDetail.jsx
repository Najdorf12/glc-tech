import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [ARSPrice,setARSPrice] = useState([])

  useEffect(() => {
    getProductDetail();
    getARSPrice();
  }, []);
console.log(productDetail)
  const getARSPrice = () => {
    axios
    .get("https://glctech-backend.onrender.com/api/usdPrice")
    .then((res) => setARSPrice(res.data))
    .catch((error) => console.error(error));
  }
  const getProductDetail = () => {
    axios
      .get(`https://glctech-backend.onrender.com/api/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="relative bg-zinc-900 pb-12 xl:h-dvh w-full pt-6 lg:pt-12 flex flex-col items-center gap-14  lg:justify-center xl:flex-row  xl:gap-24 2xl:gap-40 overflow-hidden">
      <article className="font-title flex flex-col justify-center items-center gap-3 xl:gap-4">
        <h5 className="text-3xl text-[#92856e] font-semibold lg:self-start xl:text-4xl 2xl:text-5xl">
          {productDetail.name}
        </h5>
        <p className="text-center lg:text-start text-lg text-zinc-400 font-semibold  sm:max-w-[500px] lg:self-start xl:max-w-[420px] md:text-xl  2xl:max-w-[470px] ">
          {productDetail.description}
        </p>
        <p className="text-center lg:text-start text-base text-zinc-300 sm:px-3 lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 2xl:max-w-[470px] 2xl:mt-3">
          {productDetail.description2}
        </p>
        <p className="text-center lg:self-start  ">
          <Link to={`${productDetail.youtube}`}>
             <i className='bx bxl-youtube text-5xl sm:text-5xl text-[#FF0000]'></i>
          </Link>
        </p>
        <div className="flex justify-center items-center gap-3 sm:gap-10 lg:self-start">
          <p className="mt-2 border border-[#92856e] py-2 px-4 rounded-lg text-xl font-bold text-[#92856e] 2xl:text-2xl 2xl:px-7 md:tracking-wide">
            $USD {productDetail.price}
          </p>
          <p className="mt-2 border border-[#92856e] py-2 px-4 rounded-lg text-xl font-bold text-[#92856e] 2xl:text-2xl 2xl:px-7 md:tracking-wide">
          $ {productDetail.price * ARSPrice[0]?.usdPrice}
          </p>
        </div>
      </article>
      <picture className="w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px]">
        <img
          className="w-full rounded-lg"
          src={productDetail.image?.secure_url}
          alt=""
        />
      </picture>
      <Link to={"/"}>
        <div className=" flex justify-center items-center text-xl font-title font-bold text-[#92856e] xl:absolute xl:bottom-12 xl:left-12 xl:text-3xl">
          <i class="bx bx-left-arrow-alt text-4xl xl:text-6xl"></i>
          Home
        </div>
      </Link>
      <div className="text-6xl font-title font-bold text-[#92856e] xl:absolute  xl:top-0 xl:left-0 xl:mt-6 xl:ml-6">
        GLC TECH
      </div>
    </section>
  );
};

export default ProductDetail;
