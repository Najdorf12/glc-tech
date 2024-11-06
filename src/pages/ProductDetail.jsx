import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Loader from "../components/Loader";
import ImageGallery from "react-image-gallery";
import CardSimilarProd from "../components/CardSimilarProd";
import banner2 from "../assets/banner2.png";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail = ({ theme }) => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [ARSPrice, setARSPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  const bgProductDetail =
    theme === "dark"
      ? {
          backgroundImage:
            "linear-gradient(to right, #301b55, #291c4b, #231c40, #1e1b35, #1b1a2a, #1a1925, #191920, #18181b, #18181b, #18181b, #18181b, #18181b)",
        } //dark
      : {
          backgroundImage:
            "linear-gradient(to right, #482e71, #67528c, #8778a7, #a89fc1, #ccc7dc, #d8d6e5, #e6e5ee, #f4f4f6, #ececef, #e3e4e8, #dadde2, #d1d5db)",
        };

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
    if (productDetail?.category) {
      axios
        .get(`/products/category/${productDetail?.category}`)
        .then((res) => setSimilarProducts(res?.data))
        .catch((error) => console.error(error));
    }
  }, [productDetail.category]);

  const handleShare = () => {
    const productName = productDetail?.name || "Producto";
    const productImage =
      "Puedes seguirnos en Instagram: https://www.instagram.com/grupolacomunidad/ Facebook: https://www.facebook.com/grupolacomunidadtech y Youtube:https://www.youtube.com/@GlcTech-GrupolaComunidad. Tambien encontraras mas productos como este en https://www.grupolacomunidad.com.ar/" ||
      "";

    // Codificar los datos para la URL
    const message = `*${productName}*%0A${productImage}`;
    const whatsappUrl = `https://wa.me/?text=${message}`;

    // Abrir la URL en una nueva ventana
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative bg-zinc-900 pb-12  w-full pt-3  flex flex-col items-center  overflow-hidden xl:pt-4 2xl:min-h-screen">
      <div className="fixed bottom-3 left-0 z-[100] lg:bottom-8">
        <Link
          target="blank"
          to={"https://api.whatsapp.com/send/?phone=541125043539"}
        >
          <button
            style={{
              boxShadow: "3px 3px 9px #f1f1f1, -3px -3px 9px #666",
            }}
            className=" z-50 border-[1.5px]  ml-4 border-white  outline-none w-10 h-10 rounded-full text-[1.5rem] flex justify-center font-bold items-center  lg:mr-0  hover:scale-105 duration-400 lg:left-0 lg:ml-5  lg:text-2xl lg:h-12 lg:w-12 xl:text-[32px]  2xl:ml-7 bg-gray-200 text-stone-600  "
          >
            <i class="bx bxl-whatsapp"></i>
          </button>
        </Link>
      </div>
      <nav className="w-full flex items-center justify-between px-1 xl:px-8 2xl:px-12 2xl:pt-2 ">
        <ul className="text-white  text-base flex  pl-3 items-center font-normal md:font-semibold 2xl:text-lg">
          <Link to={"/#store"}>
            <li>{productDetail.category?.toUpperCase()}</li>
          </Link>
          <li>
            <i className="bx bx-chevron-right text-3xl mt-1 font-light text-white"></i>
          </li>
          <li>{productDetail.name?.toUpperCase()?.substring(0, 14)}</li>
        </ul>
        <Link to={"/"}>
          <button className="btn-home2 flex items-center text-stone-500  text-base font-normal border-[2px] rounded-[1rem] px-5 py-1 border-white mt-[3px] xl:px-8 2xl:text-lg 2xl:px-8  xl:font-semibold hover:scale-105 ">
            Volver
          </button>
        </Link>
      </nav>
     {/*  {isLoading && <Loader />} */}
      <section className=" relative p-1  flex flex-col items-center xl:flex-row xl:items-start xl:justify-evenly  xl:gap-12 xl:w-[90%] 2xl:w-[80%] xl:mt-7 2xl:py-2">
        <div className="flex flex-col justify-center items-center  xl:justify-start   ">
          <article
            id="title-product-detail"
            className="font-title flex flex-col justify-center items-center  mt-10 
             bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border-[2px] border-stone-600 rounded-2xl  pt-3 pb-5   md:py-6 xl:mt-4   "
          >
            <h5 className="text-3xl  font-bold   py-2 px-8 xl:text-5xl 2xl:text-6xl bg-gradient-to-t from-stone-100 to-stone-300 inline-block text-transparent bg-clip-text ">
              {productDetail.name?.toUpperCase()?.substring(0, 19)}
            </h5>

            <div className="flex justify-center items-center  gap-3 sm:gap-10 2xl:mt-3 text-white">
              <p className=" py-2 px-4 text-3xl font-bold xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl ">
                $USD {productDetail.price}
              </p>
              <p className=" py-2 px-4  text-3xl font-bold xl:text-4xl 2xl:px-7 md:tracking-wide 2xl:text-5xl ">
                $ {productDetail.price * ARSPrice[0]?.usdPrice}
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                to="https://api.whatsapp.com/send/?phone=541125043539"
                target="blank"
              >
                <button className="btn-home2 bg-gradient-to-br from-zinc-900 via-zinc-700 shadow-sm shadow-gray-700 to-zinc-900 border border-stone-500 mt-3 py-1 px-6 xl:py-[6px] xl:px-12 hover:scale-105 hover:duration-500 tracking-wider font-title font-bold text-stone-100 2xl:text-xl 2xl:mt-7 ">
                  <span>COMPRAR</span>
                </button>
              </Link>
              <button
                onClick={handleShare}
                className="btn-home2 bg-gradient-to-br from-zinc-900 via-zinc-700 shadow-sm shadow-gray-700 to-zinc-900 border border-stone-500 mt-3 px-4 xl:py-[3px] xl:px-8 hover:scale-105 hover:duration-500 tracking-wider font-title font-semibold text-stone-300    2xl:mt-7  flex items-center gap-1 "
              >
                <i className="bx bxs-share-alt text-xl font-normal"></i>
                COMPARTIR
              </button>
            </div>
          </article>

          <div className="mt-6 sm:mt-8 xl:mt-8 2xl:mt-12 w-full  flex justify-center object-cover items-center overflow-hidden ">
            <picture
              loading="lazy"
              className="imgs w-[95%] flex items-center justify-center xl:w-full"
            >
              <ImageGallery
                items={images2?.reverse()}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true}
              />
            </picture>
          </div>
        </div>
        <section className=" flex flex-col items-center justify-start   2xl:self-center">
          <div className="bg-gradient-to-tr from-zinc-900 via-rose-800 to-zinc-900 border-[2px] border-stone-600 flex flex-col   rounded-2xl mt-8 pt-3 pb-5 shadow-lg xl:shadow-2xl shadow-gray-800 w-[96%]  sm:w-[95%]  xl:justify-start xl:gap-6 xl:pt-4 xl:pb-6  lg:w-[510px] xl:mt-4 2xl:w-[610px]">
            <div className="mt-2 w-full flex justify-center text-sm text-white font-semibold font-title 2xl:text-lg ">
              <ul className="rounded-lg w-[95%] flex flex-col gap-3 py-2 px-2 2xl:px-4  2xl:w-full ">
                <li className="flex items-center justify-between border-[2px] border-stone-500 py-[7px]  px-2 rounded-xl 2xl:px-3 ">
                  <div className="flex gap-2 items-center text-stone-400 xl:text-base">
                    Procesador
                  </div>
                  <div>
                    {productDetail.procesador
                      ? productDetail.procesador
                      : productDetail.description}
                  </div>
                </li>
                <li className="flex items-center justify-between border-[2px] border-stone-500 py-[7px] px-2 rounded-xl 2xl:px-3">
                  <div className="flex gap-2 items-center text-stone-400 xl:text-base">
                    Cámara
                  </div>
                  <div>
                    {productDetail.camara
                      ? productDetail.camara
                      : "FRONTAL 5MP - TRASERA 8MP"}
                  </div>
                </li>
                <li className="flex items-center justify-between border-[2px] border-stone-500 py-[7px] px-2 rounded-xl 2xl:px-3">
                  <div className="flex gap-2 items-center text-stone-400 xl:text-base">
                    Pantalla
                  </div>
                  <div>
                    {productDetail.pantalla
                      ? productDetail.pantalla
                      : "PANTALLA FLUIDA DE 6,71 Y 90 HZ"}
                  </div>
                </li>
                <li className="flex items-center justify-between border-[2px] border-stone-500 py-[7px] px-2 rounded-xl 2xl:px-3">
                  <div className="flex gap-2 items-center text-stone-400 xl:text-base">
                    Memoria
                  </div>
                  <div>{productDetail.description}</div>
                </li>
                <li className="flex items-center justify-between border-[2px] border-stone-500 py-[7px] px-2 rounded-xl 2xl:px-3">
                  <div className="flex gap-2 items-center text-stone-400 xl:text-base">
                    Batería
                  </div>
                  <div>
                    {productDetail.bateria ? productDetail.bateria : "5000MAH"}
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-center self-center  text-base font-semibold font-title text-stone-300 mt-6 px-3 sm:px-4  lg:px-0 sm:max-w-[500px] xl:max-w-[420px] 2xl:text-lg 2xl:leading-6 xl:mt-0  2xl:max-w-[520px]">
              {productDetail.description2}
            </p>
          </div>
        </section>
      </section>
      <div className="my-8 w-full relative flex flex-col justify-center items-center gap-4 xl:mt-20 xl:flex-row  xl:pb-0 xl:justify-center xl:items-start xl:gap-20 ">
        <div className="flex flex-col justify-center items-center">
          <iframe
            id="ytplayer"
            className="w-[96%] h-[270px] rounded-lg border border-stone-600  max-w-[500px] md:h-[330px] lg:max-w-[700px] lg:h-[420px]  2xl:max-w-[920px] 2xl:h-[500px] aspect-w-16 aspect-h-9 "
            src={
              productDetail.youtube
                ?.replace("watch?v=", "embed/")
                ?.split("&")[0]
            }
          ></iframe>
          <Link target="blank" to={"https://acoyteservice.com.ar"}>
            <picture className="flex justify-center  mt-3 max-w-[500px] lg:max-w-[700px] 2xl:max-w-[900px] xl:mt-5 2xl:mt-5">
              <img
                loading="lazy"
                className="w-full lg:rounded-3xl shadow-sm shadow-gray-700 "
                src={banner2}
                alt=""
              />
            </picture>
          </Link>
        </div>

        <iframe
          id="ytplayer"
          className="w-[85%] h-[530px] rounded-lg border border-stone-600   max-w-[300px] xl:max-w-[330px] xl:h-[612px] 2xl:max-w-[400px] 2xl:h-[740px] shadow-sm shadow-gray-700 "
          src={
            productDetail.youtubeShort?.includes("shorts/")
              ? productDetail.youtubeShort?.replace("shorts/", "embed/")
              : "https://www.youtube.com/embed/usxUFrrvgio"
          }
        ></iframe>
      </div>

      <p className="mt-2 w-[90%] lg:mt-14 mb-6 text-2xl px-4 max-w-[350px] border border-stone-500   text-stone-400 font-title font-semibold  text-center 2xl:text-2xl 2xl:max-w-[410px]  p-3 rounded-xl bg-gradient-to-br from-zinc-900 via-rose-800 to-zinc-900  shadow-sm shadow-gray-700">
        Descubre mas reviews en nuestro canal de
        <span className="text-gray-100 cursor-pointer font-bold duration-500 ml-[2px] 2xl:ml-[3px]  ">
          <Link
            to={"https://www.youtube.com/@GlcTech-GrupolaComunidad"}
            target="_blank"
          >
            Youtube
          </Link>{" "}
        </span>
      </p>
      <p
        className="bg-gradient-to-br from-zinc-900 via-rose-800 to-transparent  shadow-sm shadow-gray-700 text-white border-stone-600 mb-5 2xl:mb-7 font-title font-bold text-2xl mt-6  py-[3px] px-12 rounded-xl  xl:mt-12 2xl:text-2xl 2xl:mt-16  
      "
      >
        SIMILARES
      </p>
      <div className="w-full mt-2 gap-x-5 gap-y-6 sm:gap-x-5 md:gap-6 xl:gap-8 2xl:gap-9 flex flex-wrap justify-center items-center  xl:w-[90%] 2xl:w-[80%]">
        {similarProducts?.slice(0, 6)?.map((product) => (
          <Link key={product._id} to={`/${product._id}`}>
            <CardSimilarProd product={product} ARSPrice={ARSPrice} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
