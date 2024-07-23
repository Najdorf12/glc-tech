import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "../api/axios";

import "./arsPrice.css";

const ArsPriceForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [ARSPrice, setARSPrice] = useState([]);

  const getARSPrice = () => {
    axios
      .get("/usdprice")
      .then((res) => {
        setARSPrice(res?.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getARSPrice();
  }, []);

  const submitArs = (data) => {
    const newArsPrice = {
      usdPrice: data.arsPrice,
    };
    axios
      .post("/usdprice", newArsPrice)
      .then(() => getARSPrice())
      .catch((error) => console.error(error));
  };
  const deleteLastPrice = () => {
    axios
      .delete(`/usdprice/${ARSPrice[ARSPrice?.length - 1]?._id}`)
      .then(() => getARSPrice())
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container-ars w-full mt-6 lg:self-start lg:mt-10  ">
        <form onSubmit={handleSubmit(submitArs)} className="form-ars">
          <div className="form_front pt-5 pb-8 px-6 w-[320px] xl:w-[380px]">
            {/* <div className=" absolute top-[130%] flex justify-center items-center">
              <div className="w-[200px] h-[200px] rounded-[50%] absolute flex justify-center items-center text-2xl font-title font-bold text-gray-300 border-t-[3px] border-b-[3px] border-gray-300">
                GLC TECH
              </div>
              <div className="w-[250px] h-[250px] border-[2px] border-[#92856e] rounded-[50%]"></div>
            </div> */}
            <div className="form_details flex flex-col justify-center items-center gap-1 text-2xl text-white font-bold font-title">
              ARS - USD
              <div className="text-amber-600 text-lg font-title font-semibold">
                ACTUAL : $ {ARSPrice[ARSPrice?.length - 1]?.usdPrice}
              </div>
            </div>

            <input
              name="arsPrice"
              id="arsPrice"
              type="text"
              className="input mt-4 w-[90%] "
              placeholder="Ingrese valor"
              {...register("arsPrice")}
            />

            <div className="flex flex-col gap-5 mt-5 text-[#92856e] font-semibold">
              <p onClick={() => deleteLastPrice()} className="btn">
                Eliminar último{" "}
              </p>
              <button type="submit" className="btn">
                Cargar nuevo
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ArsPriceForm;
