import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [ARSPrice, setARSPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  
  const getProductsByCategory = () => {
   axios
      .get(`/products/category/${productDetail.category}`)
      .then((res) => setSimilarProducts(res.data))
      .catch((error) => console.error(error));
      
  };

  useEffect(() => {
    getProductsByCategory();
    getProductDetail();
    getARSPrice();
  }, [id]);

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
    }, 1200);
  };

 

  return (
    <section className="relative bg-gray-300 pb-12  w-full pt-3  flex flex-col items-center  overflow-hidden xl:pt-4 2xl:min-h-screen">
      <nav className="w-full flex items-center justify-between px-3 xl:px-8 2xl:px-12 2xl:pt-2 ">
        <ul className="text-gray-500 text-base flex  pl-3 items-center font-normal md:font-semibold 2xl:text-lg">
          <li>{productDetail.category}</li>
          <li>
            <i className="bx bx-chevron-right text-3xl mt-1 font-light"></i>
          </li>
          <li>{productDetail.name}</li>
        </ul>
        <Link to={"/"}>
          <button className="btn-home2 flex items-center text-gray-500 text-base font-normal border-[2px] rounded-[1rem] px-5 py-1 border-white mt-[3px] xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold">
            Volver
          </button>
        </Link>
      </nav>
      {isLoading && <Loader />}
      <section className=" p-1 xl:flex xl:justify-evenly xl:w-[90%] 2xl:w-[80%] xl:mt-10  2xl:py-6">
        <div className="flex flex-col justify-center items-center  xl:justify-start">
          <article className="font-title flex flex-col justify-center items-center  mt-10 xl:mt-2">
            <h5 className="text-3xl text-stone-500 font-bold xl:text-4xl  py-2 px-8 2xl:text-5xl bg-gradient-to-t from-stone-700 to-stone-400 inline-block text-transparent bg-clip-text ">
              {productDetail.name}
            </h5>
            <div className="flex justify-center items-center gap-3 sm:gap-10 2xl:mt-3">
              <p className=" py-2 px-4 text-3xl font-bold text-stone-600 xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl">
                $USD {productDetail.price}
              </p>
              <p className=" py-2 px-4  text-3xl font-bold text-stone-600 xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl">
                $ {productDetail.price * ARSPrice[0]?.usdPrice}
              </p>
            </div>
            <button className="btn-home2 mt-6 py-2 px-6 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider font-title font-bold text-stone-500 border-[2px] border-white 2xl:text-xl 2xl:mt-7">
              <span>COMPRAR</span>
            </button>
          </article>

          <picture className="mt-7 xl:mt-8 2xl:mt-12">
            <img
              className="w-full rounded-lg max-w-[350px] 2xl:max-w-[400px]"
              src={productDetail.image?.secure_url}
              alt=""
            />
          </picture>
        </div>
        <div className="flex flex-col  xl:justify-center xl:gap-6 xl:pt-10">
          <div className="mt-6 w-full flex justify-center text-sm text-stone-600 font-semibold font-title 2xl:text-base">
            <ul className="rounded-lg w-[90%] flex flex-col gap-3 py-2  max-w-[500px] ">
              <li className="flex items-center justify-between border-[2px] border-white py-[7px]  px-2 rounded-xl 2xl:px-3">
                <div className="flex gap-2 items-center text-gray-500">
                  Procesador
                </div>
                <div>
                  {productDetail.procesador
                    ? productDetail.procesador
                    : productDetail.description}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl">
                <div className="flex gap-2 items-center text-gray-500">
                  Cámara
                </div>
                <div>
                  {productDetail.camara
                    ? productDetail.camara
                    : "FRONTAL 5MP - TRASERA 8MP"}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl">
                <div className="flex gap-2 items-center text-gray-500">
                  Pantalla
                </div>
                <div>
                  {productDetail.pantalla
                    ? productDetail.pantalla
                    : "PANTALLA FLUIDA DE 6,71 Y 90 HZ"}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl">
                <div className="flex gap-2 items-center text-gray-500">
                  Memoria
                </div>
                <div>{productDetail.description}</div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl">
                <div className="flex gap-2 items-center text-gray-500">
                  Batería
                </div>
                <div>
                  {productDetail.bateria ? productDetail.bateria : "5000MAH"}
                </div>
              </li>
            </ul>
          </div>

          <p className="text-center  text-base font-semibold font-title text-stone-600 mt-6 px-3 sm:px-4  lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 xl:mt-0  2xl:max-w-[470px]">
            {productDetail.description2}
          </p>
        </div>
      </section>
      <div className="my-3 mt-7 flex justify-center items-center xl:mt-20 xl:w-[600px] xl:self-center 2xl:w-[670px]">
        <iframe
          className="aspect-video w-full h-[250px]  xl:h-[300px] 2xl:h-[350px] rounded-lg"
          src={
            productDetail.youtube?.replace("watch?v=", "embed/")?.split("&")[0]
          }
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-stone-500 font-title font-bold text-lg mt-7 border-[2px] border-white py-[3px] px-7 rounded-xl  xl:mt-12 2xl:text-2xl 2xl:mt-16">SIMILARES</p>
      <div className="w-full mt-2 flex justify-center items-center gap-2 max-w-[500px] xl:gap-6 2xl:max-w-[600px] ">
        {similarProducts.slice(5,8).map((product) => (
          <Link key={product._id} to={`/${product._id}`}>
          <picture className="w-56 flex flex-col justify-center items-center gap-2 xl:mt-3 2xl:mt-5 xl:gap-[12px]">
            <p className="text-stone-600 font-title font-semibold xl:font-semibold 2xl:text-xl">{product.name}</p>
            <img
              className="w-28 max-w-56 2xl:max-w-60 rounded-xl"
              src={product.image?.secure_url}
              alt=""
            />
          </picture>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
