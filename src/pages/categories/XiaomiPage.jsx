import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import CardPhone from "./CardPhone";
import Footer from "../../components/Footer";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import ShareBtn from "../../components/buttons/ShareBtn";

const XiaomiPage = ({ arsPrice }) => {
  const [allProductsXiaomi, setAllProductsXiaomi] = useState([]);

  useEffect(() => {
    getProductsByCategory();
  }, []);

  const getProductsByCategory = async () => {
    try {
      const res = await axios.get(`/products/category/Xiaomi`);
      setAllProductsXiaomi(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleShare = () => {
    const shareUrl = "https://www.grupolacomunidad.com.ar/xiaomi.html";
    const brandText = `
    ¡Descubre todos nuestros celulares Xiaomi disponibles aquí!
    ${shareUrl}
  
    Encuentra el celular perfecto para ti. 
    ¡Contáctanos si tienes alguna duda! 
    Visita nuestra web para más información.
    `;

    const message = encodeURIComponent(brandText);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <>
      <section className="w-full min-h-screen relative flex flex-col justify-start bg-zinc-900">
        <nav className="fixed z-[100] w-full flex justify-end items-center mt-1 mr-2 xl:mr-3 xl:mt-3 2xl:mt-6 lg:pr-9 2xl:pr-12 ">
          <Link
            target="blank"
            to={"/"}
            className="text-white bg-zinc-800 rounded-3xl"
          >
            <PrimaryBtn btnname="TIENDA" />
          </Link>
        </nav>

        <article className="flex flex-col items-center pt-16 pb-6 gap-4 text-balance text-center xl:pt-12 2xl:pt-20 bg-white">
          {/*  <figure className="w-[90%] lg:w-[40%] xl:w-[45%]">
            <img src={logoInfinix} alt="logoInfinix" className="w-full" />
          </figure> */}
          <p className="text-stone-500  text-base font-semibold px-3 leading-4 font-title lg:text-lg xl:text-xl 2xl:text-2xl">
            Aquí encontraras todos nuestros dispositivos Infinix.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
          <Link className="mt-2 xl:mt-3">
            <ShareBtn handleShare={handleShare} />
          </Link>
        </article>

        <section className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-10 px-2 md:px-12 lg:px-12 lg:gap-y-16 xl:gap-x-12  xl:mt-14 2xl:mt-16 xl:px-[15%]">
          {allProductsXiaomi?.map((productXiaomi, i) => (
            <CardPhone key={i} product={productXiaomi} arsPrice={arsPrice} />
          ))}
        </section>
        <Footer />
      </section>
    </>
  );
};

export default XiaomiPage;
