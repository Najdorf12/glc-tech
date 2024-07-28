import { Link, useNavigate } from "react-router-dom";
import CardProductsAdmin from "../components/CardProductsAdmin";
import ArsPriceForm from "../components/ArsPriceForm";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../components/arsPrice.css";
import axios from "../api/axios";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

const AdminForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);


  const [allProducts, setAllProducts] = useState([]);
  const [user, setUser] = useState({});
  const [productSelected, setProductSelected] = useState(null);

  const [urlImagen, setUrlImagen] = useState("");
  const [urlImagenPublicId, setUrlImagenPublicId] = useState("");

  const navigate = useNavigate();

  const getProducts = () => {
    axios
      .get("/products")
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.error(error));
  };
  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        removeCookie("token");
      })
      .catch((error) => console.error(error));
  };
  const verifyAuth = () => {
    axios
      .get("/auth/verify")
      .then((res) =>{ 
        console.log(res)
        setUser(res.data)
  })
      .catch((error) => {
        if (error) {
          console.error(error.response?.data?.message);
          navigate("/login");
        }
      });
  };
  const selectProduct = (user) => {
    setProductSelected(user);
    console.log(productSelected);
  };
  const editProduct = (product) => {
    axios
      .put(`/products/${product._id}`, product)
      .then(() => {
        getProducts();
        setProductSelected(null);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (productSelected !== null) {
      reset(productSelected);
    } else {
      reset({
        name: "",
        description: "",
        description2: "",
        category: "",
        price: "",
        camara: "",
        procesador: "",
        pantalla: "",
        bateria: "",
        youtube: "",
      });
    }
  }, [productSelected]);

  useEffect(() => {
    verifyAuth();
    getProducts();
  }, []);

  const changeUploadImage = async (e) => {
    const file = e.target?.files[0];
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "glcTech");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/najdorf/image/upload",
      data
    );
    setUrlImagen(response.data.secure_url);
    setUrlImagenPublicId(response.data.public_id);
  };
  const deleteImage = () => {
    setUrlImagen("");
  };

  const submit = (data) => {
    if (productSelected !== null) {
      editProduct(data);
    } else {
      const newProduct = {
        name: data.name,
        description: data.description,
        description2: data.description2,
        category: data.category,
        price: data.price,
        camara: data.camara,
        procesador: data.procesador,
        pantalla: data.pantalla,
        bateria: data.bateria,
        youtube: data.youtube,
        image: {
          public_id: urlImagenPublicId,
          secure_url: urlImagen,
        },
      };
      axios
        .post("/products", newProduct)
        .then(() => getProducts())
        .catch((error) => console.error(error));
    }
  };

  return (
    <section className="relative w-full bg-[#212121] min-h-screen flex flex-col items-center  pb-10">
      <nav className="font-title text-xl xl:text-xl flex gap-2 justify-between uppercase items-center  font-bold text-[#92856e] w-full px-4 py-2 xl:py-3 rounded-b-2xl xl:px-12 2xl:text-2xl">
        {user.username}
        <div className="flex gap-3 xl:gap-4 2xl:gap-8 ">
          <button className="text-sm border-[1px] border-[#92856e] px-3 py-1 font-normal rounded-lg text-zinc-100 xl:px-6 xl:text-[16px] xl:font-semibold ">
            <Link to="/">Home</Link>
          </button>
          <button
            onClick={() => logout()}
            className="text-sm border-[1px] border-[#92856e] px-3 py-1 font-normal rounded-lg text-zinc-100 xl:px-6 xl:text-[16px] xl:font-semibold"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <section className="flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-24 xl:gap-[5%] 2xl:gap-[8%] ">
        <ArsPriceForm />
        <div className="container-ars mt-10 ">
          <form
            onSubmit={handleSubmit(submit)}
            encType="multipart/form-data"
            className="form-ars"
          >
            <section className="form_front pt-5 pb-8 px-2 w-[330px] sm:w-[370px] lg:w-[400px] xl:w-[750px] xl:px-5">
              <section className="flex flex-col justify-center items-center w-full gap-[21px] xl:gap-[24px]">
                <div className="form_details text-2xl text-white font-semibold  mt-2 mb-3 font-title">
                  CREAR NUEVO
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-5  xl:flex-row xl:gap-7 ">
                  <input
                    placeholder="Nombre"
                    className="input w-[80%] xl:text-sm"
                    name="name"
                    id="name"
                    {...register("name")}
                  />
                  <input
                    placeholder="RAM - MEMORIA"
                    className="input w-[80%] xl:text-sm"
                    name="description"
                    id="description"
                    {...register("description")}
                  />
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-5 xl:flex-row xl:gap-7">
                  <input
                    placeholder="Categoría"
                    className="input w-[80%] xl:text-sm"
                    name="category"
                    id="category"
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category is required",
                      },
                    })}
                  />
                  <input
                    placeholder="Precio  (USD)"
                    className="input w-[80%] xl:text-sm"
                    name="Price"
                    id="Price"
                    {...register("price")}
                  />
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-5  xl:flex-row xl:gap-7">
                  <input
                    placeholder="Camara"
                    className="input w-[80%] xl:text-sm"
                    name="Camara"
                    id="Camara"
                    {...register("camara")}
                  />
                  <input
                    placeholder="Procesador"
                    className="input w-[80%] xl:text-sm"
                    name="Procesador"
                    id="Procesador"
                    {...register("procesador")}
                  />
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-5  xl:flex-row xl:gap-7">
                  <input
                    placeholder="Pantalla"
                    className="input w-[80%] xl:text-sm"
                    name="Pantalla"
                    id="Pantalla"
                    {...register("pantalla")}
                  />

                  <input
                    placeholder="Bateria"
                    className="input w-[80%] xl:text-sm"
                    name="Bateria"
                    id="Bateria"
                    {...register("bateria")}
                  />
                </div>

                <div className=" w-full flex flex-col justify-center items-center gap-5  xl:flex-row xl:gap-7 ">
                  <input
                    placeholder="Youtube link"
                    className="input w-[80%] xl:text-sm xl:self-start"
                    name="youtube"
                    id="youtube"
                    {...register("youtube")}
                  />
                  <textarea
                    placeholder="Descripcion detalle (max-200)"
                    className="input text-gray-200 bg-[#212121] border input w-[80%] xl:text-base rounded-lg p-2"
                    name="description2"
                    id="description2"
                    {...register("description2")}
                    rows="5"
                    cols="33"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-1 mb-3 text-sm xl:gap-3 text-[#717171] xl:self-start">
                  Imagen
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={changeUploadImage}
                  />
                  {urlImagen && (
                    <picture className="w-32">
                      <img src={urlImagen} alt="" />
                      <button
                        onClick={() => deleteImage()}
                        className="text-gray-400 rounded-sm border border-gray-300 py-1 px-2 mt-2"
                      >
                        Eliminar imagen
                      </button>
                    </picture>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn text-[#92856e] font-semibold px-12 text-xl"
                >
                  SUBIR
                </button>
              </section>
            </section>
          </form>
        </div>
      </section>

      <section
        id="products-container_admin"
        className="mt-12 pt-6  flex flex-wrap gap-3 items-center justify-center w-full overflow-hidden lg:gap-6  2xl:gap-x-16 xl:pt-6 "
      >
        {allProducts.map((product, i) => (
          <CardProductsAdmin
            key={i}
            product={product}
            getProducts={getProducts}
            selectProduct={selectProduct}
          />
        ))}
      </section>
    </section>
  );
};

export default AdminForm;
