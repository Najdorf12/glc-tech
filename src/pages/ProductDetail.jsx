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
    <section className="relative bg-gray-300 pb-12  2xl:h-dvh w-full pt-3 lg:pt-12 flex flex-col items-center   lg:justify-center xl:flex-row  overflow-hidden">
      <nav className="w-full flex items-center justify-between px-3">
        <ul className="text-[#838282ab] text-base flex  pl-3 items-center font-semibold">
          <li>Todos</li>
          <li>
            <i className="bx bx-chevron-right text-3xl mt-1"></i>
          </li>
          <li>{productDetail.name}</li>
        </ul>
        <Link to={"/"}>
          <button className="flex items-center text-[#838282ab] text-base font-semibold border-[2px] rounded-[1rem] px-5 py-1 border-white">
            Volver
          </button>
        </Link>
      </nav>
      {isLoading && <Loader />}
      <article className="font-title flex flex-col justify-center items-center gap-3 xl:gap-3  mt-10">
        <h5 className="text-3xl text-stone-500 font-bold lg:self-start xl:text-4xl 2xl:text-5xl">
          {productDetail.name}
        </h5>
        <div className="flex justify-center items-center gap-3 sm:gap-10 lg:self-start">
          <p className=" py-2 px-4 text-2xl font-bold text-stone-600 2xl:text-2xl 2xl:px-7 md:tracking-wide">
            $USD {productDetail.price}
          </p>
          <p className=" py-2 px-4  text-2xl font-bold text-stone-600 2xl:text-2xl 2xl:px-7 md:tracking-wide">
            $ {productDetail.price * ARSPrice[0]?.usdPrice}
          </p>
        </div>
        <button className="btn-home2 mt-1 py-2 px-6 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider font-title font-bold text-stone-500">
          <span>COMPRAR</span>
        </button>
      </article>
      <picture className="mt-5 w-[300px] sm:w-[350px] md:w-[400px] xl:w-[400px]  ">
        <img
          className="w-full rounded-lg"
          src={productDetail.image?.secure_url}
          alt=""
        />
      </picture>
      <div className="mt-4 w-full flex justify-center text-sm text-stone-600 font-semibold font-title">
        <ul className="rounded-lg w-[90%] flex flex-col gap-3 py-2  ">
          <li className="flex items-center justify-between border-[2px] border-white py-[6px]  px-2 rounded-xl">
            <div className="flex gap-2 items-center text-gray-500">Procesador</div>
            <div>
              {productDetail.procesador
                ? productDetail.procesador
                : productDetail.description}
            </div>
          </li>
          <li className="flex items-center justify-between border-[2px] border-white py-[6px] px-2 rounded-xl">
            <div className="flex gap-2 items-center text-gray-500">Cámara</div>
            <div>
              {productDetail.camara
                ? productDetail.camara
                : "FRONTAL 5MP - TRASERA 8MP"}
            </div>
          </li>
          <li className="flex items-center justify-between border-[2px] border-white py-[6px] px-2 rounded-xl">
            <div className="flex gap-2 items-center text-gray-500">Pantalla</div>
            <div>
              {productDetail.pantalla
                ? productDetail.pantalla
                : "PANTALLA FLUIDA DE 6,71 Y 90 HZ"}
            </div>
          </li>
          <li className="flex items-center justify-between border-[2px] border-white py-[6px] px-2 rounded-xl">
            <div className="flex gap-2 items-center text-gray-500">Memoria</div>
            <div>{productDetail.description}</div>
          </li>
          <li className="flex items-center justify-between border-[2px] border-white py-[6px] px-2 rounded-xl">
            <div className="flex gap-2 items-center text-gray-500">Batería</div>
            <div>
              {productDetail.bateria ? productDetail.bateria : "5000MAH"}
            </div>
          </li>
        </ul>
      </div>
      <p className="text-center lg:text-start text-base font-semibold font-title text-stone-600 mt-4 px-3 sm:px-4 lg:self-start lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 2xl:max-w-[470px] 2xl:mt-2">
        {productDetail.description2}
      </p>
      <div className="my-3 mt-5 flex justify-center items-center lg:justify-start lg:my-[3%] 2xl:bg-teal-800 2xl:self-start">
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
