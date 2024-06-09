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

  const submit = (data) => {
    console.log(data);
    const newArsPrice = {
      usdPrice: data.arsPrice,
    };
    axios
      .post("https://glctech-backend.onrender.com/api/usdprice", newArsPrice)
      .then(() => getARSPrice())
      .catch((error) => console.error(error));
  };
  const deleteArsPrice = () => {
    axios
      .delete(
        `https://glctech-backend.onrender.com/api/usdprice/${ARSPrice[0]._id}`
      )
      .then(() => getARSPrice())
      .catch((error) => console.error(error));
  };
  return (
    <section className="form-container mt-5">
      <form onSubmit={handleSubmit(submit)}>
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
          <button
            onClick={deleteArsPrice}
            className="py-2 px-3 bg-zinc-900 text-zinc-300 border border-[#f1a415]  mt-2 rounded-lg font-text text-base  "
          >
            Eliminar Ultimo
          </button>
        </div>
      </form>
    </section>
  );
};

export default ArsPriceForm;
