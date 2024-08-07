import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Loader from "../components/Loader";
import ImageGallery from "react-image-gallery";
import CardSimilarProd from "../components/CardSimilarProd";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [ARSPrice, setARSPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  const images2 = [
    {
      original: productDetail?.images
        ? productDetail?.images[0]?.secure_url
        : productDetail?.image?.secure_url,
      thumbnail: productDetail?.images
        ? productDetail?.images[0]?.secure_url
        : productDetail?.image?.secure_url,
    },
    {
      original: productDetail?.images
        ? productDetail?.images[1]?.secure_url
        : productDetail?.image?.secure_url,
      thumbnail: productDetail?.images
        ? productDetail?.images[1]?.secure_url
        : productDetail?.image?.secure_url,
    },
    {
      original: productDetail?.images
        ? productDetail?.images[2]?.secure_url
        : productDetail?.image?.secure_url,
      thumbnail: productDetail?.images
        ? productDetail?.images[2]?.secure_url
        : productDetail?.image?.secure_url,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductData = async () => {
      try {
        setIsLoading(true);
        const productResponse = await axios.get(`/products/${id}`);
        setProductDetail(productResponse?.data);
        const priceResponse = await axios.get("/usdPrice");
        setARSPrice(priceResponse?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  useEffect(() => {
    console.log(productDetail.images);
    if (productDetail?.category) {
      axios
        .get(`/products/category/${productDetail?.category}`)
        .then((res) => setSimilarProducts(res?.data))
        .catch((error) => console.error(error));
    }
  }, [productDetail.category]);

  return (
    <section className="relative bg-gray-300 dark:bg-[#212121] pb-12  w-full pt-3  flex flex-col items-center  overflow-hidden xl:pt-4 2xl:min-h-screen">
      <nav className="w-full flex items-center justify-between px-3 xl:px-8 2xl:px-12 2xl:pt-2 ">
        <ul className="text-gray-500 text-base flex  pl-3 items-center font-normal md:font-semibold 2xl:text-lg">
          <li>{productDetail.category}</li>
          <li>
            <i className="bx bx-chevron-right text-3xl mt-1 font-light text-[rgba(75,30,133,1)]"></i>
          </li>
          <li>{productDetail.name?.toUpperCase()?.substring(0, 14)}</li>
        </ul>
        <Link to={"/"}>
          <button className="btn-home2 flex items-center text-gray-500 text-base font-normal border-[2px] rounded-[1rem] px-5 py-1 border-white mt-[3px] xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold ">
            Volver
          </button>
        </Link>
      </nav>
      {isLoading && <Loader />}
      <section className="p-1 flex flex-col items-center xl:flex-row xl:justify-evenly xl:gap-12 xl:w-[90%] 2xl:w-[80%] xl:mt-7 2xl:py-2">
        <div className="flex flex-col justify-center items-center  xl:justify-start">
          <article id="title-product-detail" className="font-title flex flex-col justify-center items-center  mt-10 xl:mt-2   rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.25)] backdrop-blur-[12px] pt-3 pb-5 md:py-6 shadow-lg xl:shadow-2xl shadow-gray-800">
            <h5 className="text-3xl  font-bold xl:text-4xl  py-2 px-8 2xl:text-5xl bg-gradient-to-t from-stone-100 to-stone-400 inline-block text-transparent bg-clip-text ">
              {productDetail.name?.toUpperCase()?.substring(0, 19)}
            </h5>
            <div className="flex justify-center items-center gap-3 sm:gap-10 2xl:mt-3 ">
              <p className=" py-2 px-4 text-3xl font-bold xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl bg-gradient-to-br from-white to-gray-300 inline-block text-transparent bg-clip-text">
                $USD {productDetail.price}
              </p>
              <p className=" py-2 px-4  text-3xl font-bold xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl bg-gradient-to-br from-white to-gray-300  inline-block text-transparent bg-clip-text">
                $ {productDetail.price * ARSPrice[0]?.usdPrice}
              </p>
            </div>
            <Link
              to="https://api.whatsapp.com/send/?phone=541125043539"
              target="blank"
            >
              <button className="btn-home2 mt-3 py-2 px-6 xl:py-[9px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider font-title font-bold text-stone-100 border-[2px] border-white 2xl:text-xl 2xl:mt-7 bg-gradient-to-br from-[#051937d0] to-[#845ec218] ">
                <span>COMPRAR</span>
              </button>
            </Link>
          </article>

          <div className="mt-6 sm:mt-8 xl:mt-8 2xl:mt-12 w-full  flex justify-center object-cover items-center overflow-hidden ">
            <picture
              loading="lazy"
              className="imgs w-[95%] flex items-center justify-center xl:w-full"
            >
              <ImageGallery
                items={images2}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true}
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col  rounded-2xl mt-8 pt-3 pb-5 shadow-lg xl:shadow-2xl shadow-gray-800 w-[99%] sm:w-[95%]  xl:justify-start xl:gap-6 xl:pt-4 xl:pb-6 bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.25)] backdrop-blur-[12px] lg:max-w-[550px]">
          <div className="mt-2 w-full flex justify-center text-sm text-white font-semibold font-title 2xl:text-lg ">
            <ul className="rounded-lg w-[95%] flex flex-col gap-3 py-2  max-w-[500px]  2xl:w-full ">
              <li className="flex items-center justify-between border-[2px] border-white py-[7px]  px-2 rounded-xl 2xl:px-3 ">
                <div className="flex gap-2 items-center text-stone-400">
                  Procesador
                </div>
                <div>
                  {productDetail.procesador
                    ? productDetail.procesador
                    : productDetail.description}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl 2xl:px-3">
                <div className="flex gap-2 items-center text-stone-400">
                  Cámara
                </div>
                <div>
                  {productDetail.camara
                    ? productDetail.camara
                    : "FRONTAL 5MP - TRASERA 8MP"}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl 2xl:px-3">
                <div className="flex gap-2 items-center text-stone-400">
                  Pantalla
                </div>
                <div>
                  {productDetail.pantalla
                    ? productDetail.pantalla
                    : "PANTALLA FLUIDA DE 6,71 Y 90 HZ"}
                </div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl 2xl:px-3">
                <div className="flex gap-2 items-center text-stone-400">
                  Memoria
                </div>
                <div>{productDetail.description}</div>
              </li>
              <li className="flex items-center justify-between border-[2px] border-white py-[7px] px-2 rounded-xl 2xl:px-3">
                <div className="flex gap-2 items-center text-stone-400">
                  Batería
                </div>
                <div>
                  {productDetail.bateria ? productDetail.bateria : "5000MAH"}
                </div>
              </li>
            </ul>
          </div>

          <p className="text-center self-center  text-base font-semibold font-title text-white mt-6 px-3 sm:px-4  lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 xl:mt-0  2xl:max-w-[470px]">
            {productDetail.description2}
          </p>
        </div>
      </section>
      <div className="my-3 w-full mt-7 flex justify-center items-center xl:mt-20 ">
        <iframe
          id="ytplayer"
          className="w-[98%] h-[270px] rounded-lg max-w-[500px] md:max-w-[600px] md:h-[330px] 2xl:max-w-[700px] 2xl:h-[350px]"
          src={
            productDetail.youtube?.replace("watch?v=", "embed/")?.split("&")[0]
          }
        ></iframe>
      </div>

      <p className="text-white mb-5 2xl:mb-7 font-title font-bold text-lg mt-7  py-[3px] px-7 rounded-xl  xl:mt-12 2xl:text-2xl 2xl:mt-16 bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.25)] shadow-xl shadow-gray-800">
        SIMILARES
      </p>
      <div className="w-full mt-2 gap-x-5 sm:gap-x-5 md:gap-6 xl:gap-10 2xl:gap-12 flex flex-wrap justify-center items-center ">
        {similarProducts?.slice(4, 8)?.map((product) => (
          <Link key={product._id} to={`/${product._id}`}>
            <CardSimilarProd product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
