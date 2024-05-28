import axios from "axios";
import imgCardProduct from "../assets/phone-images/MOTOROLA/MOTO G32.jpg";

const CardProductsAdmin = ({ product, getProducts }) => {
  const { _id, name, description, category, price, image } = product;

  const deleteProduct = (id) => {
    axios
      .delete(`https://glctech-backend.onrender.com/api/products/${id}`)
      .then(() => getProducts())
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section className="relative bg-[#212121] w-[95%] border border-[#92856e]  sm:w-[400px] xl:w-[400px] rounded-md h-32 flex justify-center items-center">
       {/*  <p className="absolute top-0 right-0 mt-3 mr-6 py-2 px-4 border border-[#f1a415] font-semibold font-title text-gray-300 rounded-md">
          ${price}
        </p> */}
        <picture className="mr-2  sm:mr-4 lg:mr-6 ">
          <img
            className="max-w-28 rounded-md lg:w-full object-cover"
            src={image?.secure_url}
          />
        </picture>

        <article className="w-[80%] lg:w-[70%]">
          <p className="text-lg  font-text font-semibold text-zinc-300">
            {name}
          </p>
          <p className="mt-1 text-sm  font-text text-zinc-400 leading-6">
            {description}
          </p>
          <div className="flex  justify-between pr-4  w-full items-center mt-2">
            <span className="font-text  font-base text-md  text-zinc-300  tracking-wide rounded-lg mb-1">
              {category}
            </span>
            <section>
             {/*  <i className="bx bx-plus text-4xl mr-3  text-[#f1a415] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"></i> */}
              <i
                onClick={() => deleteProduct(_id)}
                className="bx bxs-trash-alt text-3xl  text-[#f1a415] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"
              ></i>
            </section>
          </div>
        </article>
      </section>
    </>
  );
};

export default CardProductsAdmin;
