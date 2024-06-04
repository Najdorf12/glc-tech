import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import imgProduct from "../assets/phone-images/MOTOROLA/MOTO G13.webp";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    axios
      .get(`https://glctech-backend.onrender.com/api/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="relative bg-zinc-900 h-dvh w-full pt-6 flex flex-col items-center gap-14 lg:pt-0 lg:justify-center xl:flex-row  xl:gap-24 2xl:gap-40">
      <article className="font-title flex flex-col justify-center items-center gap-3 xl:gap-5">
        <h5 className="text-3xl text-[#92856e] font-semibold xl:text-4xl 2xl:text-5xl">
          {productDetail.name}
        </h5>
        <p className="text-center  text-base text-zinc-300 sm:px-3 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 2xl:max-w-[470px] 2xl:mt-3">
          {productDetail.description}
        </p>
        <p className="mt-4 border border-[#92856e] py-2 px-4 rounded-lg text-2xl font-bold text-[#92856e] 2xl:text-3xl 2xl:px-7">
          $USD {productDetail.price}
        </p>
      </article>
      <picture className="w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px]">
        <img
          className="w-full rounded-lg"
          src={productDetail.image?.secure_url}
          alt=""
        />
      </picture>
      <div className=" flex justify-center items-center text-xl font-title font-bold text-[#92856e] xl:absolute xl:bottom-20 xl:left-12 xl:text-3xl">
        <Link to={"/"}><i class='bx bx-left-arrow-alt text-4xl xl:text-6xl'></i></Link>
        Home
      </div>
      <div className="text-6xl font-title font-bold text-[#92856e] xl:absolute  xl:top-0 xl:left-0 xl:mt-10 xl:ml-10">
        GLC TECH
      </div>
    </section>
  );
};

export default ProductDetail;
