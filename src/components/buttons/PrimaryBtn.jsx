import "./primarybtn.css";

const PrimaryBtn = ({ btnname }) => {
  return (
    <>
      <button className="animated-button flex  rounded-3xl w-[170px] pl-12 py-1 2xl:py-[6px] 2xl:px-16 shadow-lg shadow-zinc-900 border border-stone-500 xl:w-[200px] 2xl:pl-14 2xl:w-[210px]">
        <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-rose-600 2xl:text-4xl"></i>
        <span className="text font-title text-base font-medium lg:text-lg 2xl:text-xl">
          {btnname}
        </span>
        <span className="circle bg-zinc-800"></span>
        <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-rose-600 2xl:text-4xl"></i>
      </button>
    </>
  );
};

export default PrimaryBtn;
