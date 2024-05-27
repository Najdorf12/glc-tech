import { Link } from "react-router-dom";
import CardProductsAdmin from "../components/CardProductsAdmin";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
 
  const [allProducts, setAllProducts] = useState([]);
  
  const getProducts = () => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.error(error));
  };

  useEffect (()=>{
    getProducts();
  },[])

  const changeUploadImage = (e) =>{
    console.log(e)
  }
  const submit = (e) => {
    console.log(e)
   /*  axios
      .post("http://localhost:3000/api/products", data)
      .then((res) => console.log(res))
      .catch((error) => console.error(error)); */
  };

  return (
    <section className="relative w-full bg-zinc-900 min-h-screen flex flex-col items-center pt-6 pb-10 lg:pb-0 xl:flex-row xl:justify-start xl:gap-6 2xl:gap-24">
      <Link to="/">
        <h2 className="font-title text-6xl font-bold text-gray-300 xl:self-start xl:absolute xl:top-0 m-16">
          GLC TECH
        </h2>
      </Link>
      <div className="form-container mt-10">
        <form
          onSubmit={handleSubmit(submit)}
          className="form"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input name="name" id="name" {...register("name")} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <input
              name="category"
              id="category"
              {...register("category", {
                required: {
                  value: true,
                  message: "Category is required",
                },
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input
              name="description"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Precio</label>
            <input name="Price" id="Price" {...register("price")} />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={changeUploadImage}
              {...register("image")}
            />
          </div>
          <section className="flex justify-between">
            <button type="submit" className="form-submit-btn">
              Crear
            </button>
          </section>
        </form>
      </div>

      <section id="products-container_admin" className="mt-12 pt-6 lg:mt-24 xl:mt-8 flex flex-wrap gap-3 items-center justify-center w-full overflow-hidden lg:gap-6 lg:w-[65%] xl:w-[60%] 2xl:w-[55%] xl:justify-center xl:items-center xl:overflow-y-scroll lg:h-[90vh] xl:overflow-visible 2xl:gap-x-16 bg-zinc-900 rounded-lg xl:pt-6 xl:pb-12">
        { allProducts.map((product,i)=>(
          <CardProductsAdmin key={i} product={product} getProducts={getProducts} />
        ))}
      </section>
    </section>
  );
};

export default AdminForm;
