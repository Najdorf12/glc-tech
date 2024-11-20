import CardQuote from "../components/CardQuote";
import imgTestimonial1 from "/googlereviews/testimonial1.jpeg"
import imgTestimonial2 from "/googlereviews/testimonial2.jpeg"
import imgTestimonial3 from "/googlereviews/testimonial3.jpeg"
import imgTestimonial4 from "/googlereviews/testimonial4.jpeg"
import imgTestimonial5 from "/googlereviews/testimonial5.jpeg"

const Review = () => {
  /* #AB2343 */
  const testimonials = [
    {
      name: "Erick Machado",
      content: imgTestimonial1
    },
    {
      name: "Gerardo César Vallet",
      content: imgTestimonial2
    },
    {
      name: "Brian Ulla",
      content: imgTestimonial3
    },
    {
      name: "Claudio Javier Paludi",
      content: imgTestimonial4
    },
    {
      name: "Marcela Barzola",
      content: imgTestimonial5
    },
  ];
  return (
    <>
      <section className="relative flex overflow-hidden items-center justify-center gap-4 z-30 w-full pt-7 pb-20 bg-zinc-900 xl:pt-12 xl:pb-24 2xl:pt-16 2xl:pb-28">
      <a href="https://www.google.com/search?q=grupo+la+comunidad&oq=grupo+la&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBAuGEDSAQg0OTU3ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x95bccb6c2d685319:0x60d9f4e4b9cf0890,1,,,," target="_blank"
      className="absolute  z-50 bottom-0">
      <button className="border-[2px] border-stone-500  flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:w-[260px] text-base xl:text-lg 2xl:text-xl 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-500  group">
        VER OPINIONES
        <i className='bx bxl-google text-stone-500 text-3xl border-l-[2px] border-stone-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500'></i>
        </button>
        </a>
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
