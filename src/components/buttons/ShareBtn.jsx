import "./sharebtn.css";
import iconShare from "/icon-share.png";

const ShareBtn = ({ handleShare }) => {
  return (
    <>
      <button onClick={handleShare} className="button-share ">
        <span className="text text-zinc-700 font-semibold font-title xl:text-lg xl:font-semibold">
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
