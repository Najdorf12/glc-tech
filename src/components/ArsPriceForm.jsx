import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

const ArsPriceForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [ARSPrice, setARSPrice] = useState([]);

  const getARSPrice = () => {
    axios
      .get("https://glctech-backend.onrender.com/api/usdPrice")
      .then((res) => setARSPrice(res.data))
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
      .post("https://glctech-backend.onrender.com/api/usdprice", newArsPrice)
      .then(() => getARSPrice())
      .catch((error) => console.error(error));
  };

  return (
    <section className="form-container mt-5">
      <form onSubmit={handleSubmit(submitArs)}>
        <div className="form-group">
          <label htmlFor="arsPrice">
            Peso Argentino - ACTUAL : {ARSPrice[0]?.usdPrice}
          </label>
          <input name="arsPrice" id="arsPrice" {...register("arsPrice")} />
        </div>
        <div className="flex justify-between items-center mt-2">
          <button type="submit" className="form-submit-btn">
            Subir nuevo
          </button>
          <p
          onClick={() =>
             axios
              .delete(
                `https://glctech-backend.onrender.com/api/usdprice/${ARSPrice[ARSPrice.length - 1]._id}`
              )
              .then(() => getARSPrice())
              .catch((error) => console.error(error)) 
          }
          className="py-2 w-[160px] px-3 bg-zinc-900 text-zinc-300 border border-[#f1a415]  mt-2 rounded-lg font-text text-base flex items-center justify-center cursor-pointer "
        >
          Eliminar Ultimo
        </p>
        </div>
       
      </form>
    </section>
  );
};

export default ArsPriceForm;
