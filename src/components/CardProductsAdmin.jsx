import axios from "../api/axios";
import { Link } from "react-router-dom";

const CardProductsAdmin = ({ product, getProducts, selectProduct }) => {
  const { _id, name, description, category, price, image, gama } = product;

  const deleteProduct = (id) => {
    axios
      .delete(`/products/${id}`)
      .then(() => getProducts())
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section className="relative bg-[#212121] w-[95%] border border-[#92856e]  sm:w-[400px] xl:w-[400px] rounded-md h-[138px] flex justify-center items-center hover:scale-105 duration-500">
        <picture className="h-full mr-1 sm:mr-3 lg:mr-5">
          <Link to={`/${_id}`}>
            <img
              loading="lazy"
              className="w-[130px] md:max-w-[120px] h-full rounded-md lg:w-full object-cover"
              src={image?.secure_url}
            />
          </Link>
        </picture>

        <article className="w-[80%] lg:w-[70%] pl-2  h-full pt-2">
          <p className="text-lg  font-text font-semibold text-amber-500 leading-5 mb-1">
            {name?.toUpperCase()?.substring(0, 20)}
          </p>
          <div className="font-text mt-2 font-base text-md  text-gray-400 tracking-wide rounded-lg flex items-center justify-between pr-4">
            <span className="text-gray-400">{category}</span>
            <p>
              Gama: <span className="text-gray-100">{gama}</span>
            </p>
          </div>

          <p className="text-sm mt-1 font-text text-gray-200 leading-6">
            {description}
          </p>
          <div className="flex justify-between pr-4  w-full items-center mt-2">
            <section className="flex gap-5 text-3xl  text-stone-600">
              <i
                onClick={() => selectProduct(product)}
                className="bx bxs-edit-alt cursor-pointer hover:scale-110 hover:text-gray-100 duration-300"
              ></i>
              <i
                onClick={() => deleteProduct(_id)}
                className="bx bxs-trash-alt  cursor-pointer hover:scale-110 hover:text-gray-100 duration-300"
              ></i>
            </section>
            <p className="py-1 w-32 flex items-center justify-center self-end px-4 border border-[#92856e] font-semibold font-title text-[#92856e] rounded-md">
              $USD {price}
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default CardProductsAdmin;
