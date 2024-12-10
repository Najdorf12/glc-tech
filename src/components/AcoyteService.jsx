import imgAcoyteService from "/banneracoyte.png";
import { Link } from "react-router-dom";
import bannerXiaomi from "/bannerxiaomi.png";

const AcoyteService = () => {
  return (
    <div className="w-full relative  flex justify-center flex-col gap-5 items-center bg-zinc-900 py-10 lg:py-20 lg:gap-12">
      <Link target="_blank" to={"https://acoyteservice.com.ar"}>
        <figure className="w-full h-full flex justify-center items-center ">
          <img
            src={imgAcoyteService}
            alt="imgAcoyteService"
            className="w-full h-full object-contain object-center rounded-sm z-40 lg:w-[80%]  "
          />
        </figure>
      </Link>
      <div className="w-full relative  flex justify-center items-center bg-zinc-900">
          <Link target="_blank" to={"https://serviciotecnicoxiaomi.com.ar"}>
            <figure className="w-full h-full flex justify-center items-center  self-center">
              <img
                src={bannerXiaomi}
                alt="imgAcoyteService"
                className="w-full h-full object-contain object-center z-40 rounded-sm lg:w-[80%] "
              />
            </figure>
          </Link>
        </div>
     
    </div>
  );
};

export default AcoyteService;
