import "./sharebtn.css";
import iconShare from "/icon-share.png";

const ShareBtn = ({ handleShare }) => {
  return (
    <>
      <button onClick={handleShare} className="button-share bg-gradient-to-tl from-zinc-800 via-zinc-600 to-zinc-400">
        <span className="text text-zinc-100 font-semibold font-title xl:text-lg xl:font-bold ">
          Compartir
        </span>
        <span className="icon">
          <img src={iconShare} alt="icon-share" className="w-10 mr-1" />
        </span>
      </button>
    </>
  );
};

export default ShareBtn;
