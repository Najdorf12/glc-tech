import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import CardInfinix from "../../components/CardInfinix";
import logoInfinix from "/InfinixLogo.png";
import imgbg from "/bg20.jpg";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import ShareBtn from "../../components/buttons/ShareBtn";
import shareImg from "/share/shareinfinix.webp";

const SamsungPage = ({ arsPrice }) => {
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
    const productName = shareImg;
    const productImage = `
  ¡Descubre todos nuestros celulares Infinix disponibles aquí:
  https://www.grupolacomunidad.com.ar/products/infinix
  
  Encuentra el celular perfecto para ti. 
  ¡Contáctanos si tienes alguna duda! 
  Visita nuestra web para más información.
  https://www.grupolacomunidad.com.ar
  `;

    // Codificar los datos para la URL
    const message = `*${productName}*%0A${encodeURIComponent(productName)}`;
    const whatsappUrl = `https://wa.me/?text=${message}`;

    // Abrir la URL en una nueva ventana
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
          <figure className="w-[90%] lg:w-[40%] xl:w-[45%]">
            <img src={logoInfinix} alt="logoInfinix" className="w-full" />
          </figure>
          <p className="text-stone-500  text-base font-semibold px-3 leading-4 font-title lg:text-lg xl:text-xl 2xl:text-2xl">
            Aquí encontraras todos nuestros dispositivos Infinix.
            {/*   <i className="bx bx-log-in-circle text-3xl  text-white 2xl:text-4xl"></i> */}
          </p>
          <Link className="mt-2 xl:mt-3">
            <ShareBtn handleShare={handleShare} />
          </Link>
        </article>

        <section className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-10 px-2 md:px-12 lg:px-12 lg:gap-y-20 xl:gap-x-6  xl:mt-14 2xl:mt-16 xl:px-[15%]">
          {allProductsInfinix?.map((productInfinix, i) => (
            <CardInfinix key={i} product={productInfinix} arsPrice={arsPrice} />
          ))}
        </section>
        <figure className="w-full mt-16  h-[40vh] md:h-[70vh] relative">
          <img src={imgbg} alt="" className="object-cover w-full h-full" />
          <div className="flex justify-center items-center  gap-3 2xl:gap-4 absolute left-0 rounded-tr-2xl bottom-0 pt-2 pl-3  pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-900 z-50">
            <p className="text-zinc-300 font-title text-lg xl:text-xl 2xl:text-2xl">
              Visita nuestra Tienda
            </p>
            <button className="button">
              <a href="https://www.grupolacomunidad.com.ar" target="_blank">
                <div className="button__circle">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon"
                    width="14"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon button__icon--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
        </figure>
      </section>
    </>
  );
};

export default SamsungPage;