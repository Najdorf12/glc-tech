import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [ARSPrice, setARSPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProductDetail();
    getARSPrice();
  }, []);

  const getARSPrice = () => {
    axios
      .get("/usdPrice")
      .then((res) => setARSPrice(res.data))
      .catch((error) => console.error(error));
  };
  const getProductDetail = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`/products/${id}`)
        .then((res) => {
          setProductDetail(res.data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, 2600);
  };

  return (
    <section className="relative bg-zinc-900 pb-12  2xl:h-dvh w-full pt-3 lg:pt-12 flex flex-col items-center gap-14  lg:justify-center xl:flex-row  xl:gap-24 2xl:gap-40 overflow-hidden">
      <nav className="w-full">
        <ul className="text-gray-200 text-lg flex  pl-3 items-center font-semibold">
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <li>
            <i className="bx bx-chevron-right text-3xl mt-1"></i>
          </li>

          <li>Detalle</li>
        </ul>
      </nav>
      {isLoading && <Loader />}
      <article className="font-title flex flex-col justify-center items-center gap-3 xl:gap-3">
        <h5 className="text-3xl text-[#92856e] font-semibold lg:self-start xl:text-4xl 2xl:text-5xl">
          {productDetail.name}
        </h5>
        <div className="flex justify-center items-center gap-3 sm:gap-10 lg:self-start">
          <p className="mt-2 py-2 px-4 text-xl font-bold text-[#92856e] 2xl:text-2xl 2xl:px-7 md:tracking-wide">
            $USD {productDetail.price}
          </p>
          <p className="mt-2 py-2 px-4  text-xl font-bold text-[#92856e] 2xl:text-2xl 2xl:px-7 md:tracking-wide">
            $ {productDetail.price * ARSPrice[0]?.usdPrice}
          </p>
        </div>
        <p className="text-center lg:text-start text-lg text-zinc-400 font-semibold  sm:max-w-[500px] lg:self-start xl:max-w-[420px] md:text-xl  2xl:max-w-[470px] ">
          {productDetail.description}
        </p>
        <p className="text-center lg:text-start text-base text-zinc-300 px-3 sm:px-4 lg:self-start lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 2xl:max-w-[470px] 2xl:mt-2">
          {productDetail.description2}
        </p>
      </article>
      <picture className="w-[300px] sm:w-[350px] md:w-[400px] xl:w-[400px] ">
        <img
          className="w-full rounded-lg"
          src={productDetail.image?.secure_url}
          alt=""
        />
      </picture>
      <div className="w-full flex justify-center  text-base text-gray-300 font-semibold font-title">
        <ul className="bg-red-500 w-[90%] flex flex-col gap-2 py-2 px-2">
          <li>
            <img src="" alt="" />
            Procesador
          </li>
          <li>
            <img src="" alt="" />
            Cámara
          </li>
          <li>
            <img src="" alt="" />
            Pantalla
          </li>
          <li>
            <img src="" alt="" />
            RAM - MEMORIA
          </li>
          <li>
            <img src="" alt="" />
            Batería
          </li>
        </ul>
      </div>
      <div className="my-3 flex justify-center items-center lg:justify-start lg:my-[3%] 2xl:bg-teal-800 2xl:self-start">
        <iframe
          className="aspect-video w-full h-[250px]  xl:h-[230px]"
          src={
            productDetail.youtube?.replace("watch?v=", "embed/")?.split("&")[0]
          }
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ProductDetail;
