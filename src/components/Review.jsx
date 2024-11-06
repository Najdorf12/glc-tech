import { Link } from "react-router-dom";
import CardQuote from "../components/CardQuote";
const Review = ({ imagesData }) => {
  /* #AB2343 */
  const testimonials = [
    {
      name: "Marcos Lorem",
      content:
        "La mejor compra que he hecho. Precio súper cómodo y con garantía. Buena atención.  Siempre me sentí seguro durante la compra. Yo compré el Moto G84. Los recomiendo porque tienen mucha variedad y al precio que vale, no a los que otras compañías más grandes te arrancan la cabeza. A mucho más de lo que vale, realmente. Le pongo 5 estrellas.",
    },
    {
      name: "Enrique Lorem",
      content:
        "Excelente y desinteresada atención. Asesoran, explican, sugieren. Los precios son los mejores por lejos.  Son muy buena gente y honesta por eso los recomiendo. Además, venden accesorios a muy buenos precios. Ofrecen servicio técnico y salimos con el teléfono listo. SON MUY RECOMENDABLES.",
    },
    {
      name: "Juan Pablo Lorem",
      content:
        "Excelente servicio y atención. Soy del interior y estaba dudando por la compra , y si el producto iba a llegar a destino, la verdad que me sorprendió el precio del producto, por debajo de varios lugares donde estuve averiguando. El tema de la atención, impecable, te das cuenta del compromiso que tienen con la gente.",
    },
    {
      name: "Gabriel Gonzalez",
      content:
        "Quería agradecer el excelente asesoramiento y atención.Además de recomendar a Grupo La Comunidad a todas aquellas personas que estén buscando cambio de celular, que es lo que yo hice, pero dudaba en donde comprar. Equipos nuevos en caja cerrada y con garantía simplemente MUCHAS GRACIAS!!!",
    },
    {
      name: "Soledad Martinez",
      content:
        "Mi esposo compró un equipo con todos los temores de tener que depositar dinero (hoy todo es mucho) y esperar el envio. Pero quedó más que satisfecho. Recibió el t.e. en tiempo pactado, asesoramiento telefónico por parte del vendedor. La verdad, totalmente recomendable.Excelentes precios",
    },
  ];
  return (
    <>
      <section className="flex overflow-hidden items-center justify-center gap-4 z-50 w-full py-7 bg-zinc-900 xl:py-12 2xl:py-16 ">
        <section className="slider lg:w-full flex justify-center items-center">
          <div className="slide-track">
            {testimonials?.map((testimonial, i) => (
              <div key={i} className="slide">
                <CardQuote testimonial={testimonial} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Review;

{
  /* <p className=" text-about font-text2 px-[8px]  text-[.9rem] font-semibold sm:text-[.95rem]  xl:px-8 2xl:text-lg bg-gradient-to-br from-stone-800 to-[#5c3f8b] dark:from-stone-400 dark:to-[#845EC2] inline-block text-transparent bg-clip-text lg:mt-3 z-50">
          Puedes encontrar mas informacion sobre nosotros y opiniones de
          nuestros clientes
          <Link
            target="blank"
            to={
              "https://www.google.com/search?q=glc+tech&sca_esv=11b9b55d5edba133&sca_upv=1&sxsrf=ADLYWIIPWK1hNt4Gu4HcexptVpTqzn-uAA%3A1727195653956&source=hp&ei=BeryZvihNvDe1sQP8duBqA4&iflsig=AL9hbdgAAAAAZvL4FTjaWgYkOvh6b1IUQmVsCo0irI_o&gs_ssp=eJzj4tVP1zc0rDTOLSg3NC0xYLRSNaiwNE1KTk4ySzZKMbMwNTa0tDKoMDNIsUwzSTVJskxOM7CwNPDiSM9JVihJTc4AAEoAElE&oq=glc+&gs_lp=Egdnd3Mtd2l6IgRnbGMgKgIIATIEECMYJzIQEC4YgAQYxwEYJxiKBRivATIEECMYJzIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigVI3StQswZY6AtwAXgAkAEAmAH8BaAB9g6qAQ0wLjEuMC4xLjAuMS4xuAEDyAEA-AEBmAIFoAKwEKgCCsICBxAjGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIHEC4YJxjqAsICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAAGIAEGLEDGIMBmANGkgcLMS4wLjEuMS4wLjKgB-gv&sclient=gws-wiz#lrd=0x95bccb6c2d685319:0x60d9f4e4b9cf0890,1,,,,"
            }
          >
            <span className="text-stone-600 ml-1 dark:text-gray-100 xl:ml-2">
              aquí.
            </span>
          </Link>
        </p>
        <Link
          target="blank"
          to={
            "https://www.google.com/search?q=glc+tech&sca_esv=11b9b55d5edba133&sca_upv=1&sxsrf=ADLYWIIPWK1hNt4Gu4HcexptVpTqzn-uAA%3A1727195653956&source=hp&ei=BeryZvihNvDe1sQP8duBqA4&iflsig=AL9hbdgAAAAAZvL4FTjaWgYkOvh6b1IUQmVsCo0irI_o&gs_ssp=eJzj4tVP1zc0rDTOLSg3NC0xYLRSNaiwNE1KTk4ySzZKMbMwNTa0tDKoMDNIsUwzSTVJskxOM7CwNPDiSM9JVihJTc4AAEoAElE&oq=glc+&gs_lp=Egdnd3Mtd2l6IgRnbGMgKgIIATIEECMYJzIQEC4YgAQYxwEYJxiKBRivATIEECMYJzIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigVI3StQswZY6AtwAXgAkAEAmAH8BaAB9g6qAQ0wLjEuMC4xLjAuMS4xuAEDyAEA-AEBmAIFoAKwEKgCCsICBxAjGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIHEC4YJxjqAsICChAjGIAEGCcYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAAGIAEGLEDGIMBmANGkgcLMS4wLjEuMS4wLjKgB-gv&sclient=gws-wiz#lrd=0x95bccb6c2d685319:0x60d9f4e4b9cf0890,1,,,,"
          }
        >
          <figure className=" flex justify-center mt-2 ">
            <img
              loading="lazy"
              className="lg:w-[90%] border-[3px] border-white rounded-lg 2xl:w-[95%] shadow-lg shadow-zinc-800 lg:border-[6px] lg:border-l-[8px] "
              src={imagesData[0]?.images?.google?.secure_url}
              alt=""
            />
          </figure>
        </Link> */
}
