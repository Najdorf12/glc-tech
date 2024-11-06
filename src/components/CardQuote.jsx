import quote from "/quote1.png";

const CardQuote = ({testimonial}) => {
  return (
    <>
      <div className="w-[350px] h-[280px] bg-gradient-to-br from-pink-800 via-pink-900 to-zinc-800 relative rounded-xl xl:w-[450px] xl:h-[350px] 2xl:w-[500px] 2xl:h-[400px]">
        <figure className="w-20 mt-2 ml-2 xl:w-28">
          <img src={quote} alt="quote-icon" className="w-full" />
        </figure>
        <article className="flex flex-col justify-center items-center text-balance text-center px-6  mt-3">
          <p className="z-50 text-sm text-zinc-400 font-title xl:text-base 2xl:text-xl">{testimonial?.content}</p>
          <span className="w-[80%] h-[1px] bg-stone-500 mt-6 xl:mt-8 2xl:mt-10"></span>
          <p className="font-text mt-1 text-white text-lg xl:text-xl xl:mt-2 2xl:text-2xl 2xl:mt-3">{testimonial?.name}</p>
        </article>
      </div>
    </>
  );
};

export default CardQuote;
