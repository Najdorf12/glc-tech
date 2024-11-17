import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import CardInfinix from "./CardPhone";
import logoInfinix from "/InfinixLogo.png";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import ShareBtn from "../../components/buttons/ShareBtn";
import Footer from "../../components/Footer";

const InfinixPage = ({ arsPrice }) => {
  const [allProductsInfinix, setAllProductsInfinix] = useState([]);

  useEffect(() => {
    getProductsByCategory();
  }, []);

  const getProductsByCategory = async () => {
    try {
      const res = await axios.get(`/products/category/Infinix`);
      setAllProductsInfinix(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleShare = () => {
    const shareUrl = "https://www.grupolacomunidad.com.ar/infinix.html";
    const brandText = `
    ¡Descubre todos nuestros celulares Infinix disponibles aquí!
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

        <article className="flex flex-col items-center pt-16 pb-6 gap-4 text-balance text-center xl:pt-14 xl:pb-9 2xl:pt-20 bg-white 2xl:pb-14">
          <h6 className="text-6xl font-title  bg-gradient-to-t bg-clip-text from-zinc-800 to-zinc-500 text-transparent md:text-7xl font-semibold xl:text-[7.5rem] 2xl:text-[9rem]">INFINIX</h6>
          <p className="text-zinc-400 text-base font-semibold px-3 leading-4 font-text2 lg:text-lg xl:text-xl xl:mt-2 xl:max-w-[700px] 2xl:text-2xl 2xl:max-w-[800px] 2xl:mt-3">
            Explora nuestra colección exclusiva de dispositivos Infinix.
            Descubre sus características y elige el que más te convenga.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
          <Link className="mt-4 xl:mt-6 ">
            <ShareBtn handleShare={handleShare} />
          </Link>
        </article>

        <section className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-10 px-2 md:px-12 lg:px-12 lg:gap-y-16 xl:gap-x-12  xl:mt-14 2xl:mt-16 xl:px-[15%]">
          {allProductsInfinix?.map((productInfinix, i) => (
            <CardInfinix key={i} product={productInfinix} arsPrice={arsPrice} />
          ))}
        </section>
        <Footer />
      </section>
    </>
  );
};

export default InfinixPage;
