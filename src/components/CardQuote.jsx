import quote from "/quote1.png";


const CardQuote = ({testimonial}) => {
  return (
    <>
      <div className="w-[520px] h-[380px]  relative rounded-xl xl:w-[720px] xl:h-[430px]">
       {/*  <figure className="w-20 mt-2 ml-2 xl:w-28">
          <img src={quote} alt="quote-icon" className="w-full" />
        </figure> */}
        <figure className="w-full h-full">
          <img src={testimonial?.content} alt="quote-icon" className="w-full h-full object-cover object-center xl:object-[center_-20px] rounded-lg border-[2px] border-stone-600 " />
        </figure>
       {/*  <article className="flex flex-col justify-center items-center text-balance text-center px-6  mt-3">
          <p className="z-50 text-sm text-zinc-400 font-title xl:text-base 2xl:text-xl">{testimonial?.content}</p>
          <span className="w-[80%] h-[1px] bg-stone-500 mt-6 xl:mt-8 2xl:mt-10"></span>
          <p className="font-text mt-1 text-white text-lg xl:text-xl xl:mt-2 2xl:text-2xl 2xl:mt-3">{testimonial?.name}</p>
        </article> */}
      </div>
    </>
  );
};

export default CardQuote;
