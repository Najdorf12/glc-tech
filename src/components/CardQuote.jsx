const CardQuote = ({ testimonial }) => {
  return (
    <>
      <div className="w-[520px] h-[380px]  relative rounded-xl xl:w-[720px] xl:h-[430px]">
        <figure className="w-full h-full">
          <img
            src={testimonial?.content}
            alt="quote-icon"
            className="w-full h-full object-cover object-center xl:object-[center_-20px] rounded-lg border-[2px] border-stone-600 "
          />
        </figure>
      </div>
    </>
  );
};

export default CardQuote;
