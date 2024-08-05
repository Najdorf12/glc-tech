import { Link, useNavigate } from "react-router-dom";
import CardProductsAdmin from "../components/CardProductsAdmin";
import ArsPriceForm from "../components/ArsPriceForm";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../components/arsPrice.css";
import axios from "../api/axios";
import Loader from "../components/Loader";
import { useCookies } from "react-cookie";

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
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState({});
  const [images, setImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    verifyAuth();
    getProducts();
  }, []);

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

  const getProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("/products")
        .then((res) => setAllProducts(res.data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, 2000);
  };
  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  const verifyAuth = async () => {
    try {
      const res = await axios
        .get("/auth/verify")
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          if (error) {
            navigate("/login");
          }
        });
    } catch (error) {
      console.error(error);
    }
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

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "glcTech");
    data.append("folder", "glcTech");

    setLoadingImage(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/najdorf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImages([...images, {
        public_id: file.public_id,
        secure_url: file.secure_url,
      }]);
      setImage({
        public_id: file.public_id,
        secure_url: file.secure_url,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImage(false);
    }
  }
  function handleDelete(event) {
    setImages(images.filter((e) => e !== event));
  }

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
        image: image,
        images: images,
      };
      axios
        .post("/products", newProduct)
        .then(() => getProducts())
        .catch((error) => console.error(error));
    }
    alert("Su producto se creó exitosamente")
  };
  return (
    <section className="relative w-full bg-[#212121] min-h-screen flex flex-col items-center  pb-10">
      {isLoading && <Loader />}
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
                <div className="flex flex-col items-center gap-5 ">
                  <label className="font-light text-white text-xl">
                    Imágenes
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => handleImage(e)}
                    className=" rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-amber-600  text-white placeholder-white text-sm focus:outline-none focus:border-transparent"
                  />
                  {loadingImage ? (
                    <h3>Cargando imagen...</h3>
                  ) : (
                    <div className="lg:flex gap-5 xl:gap-10">
                     { images?.map((el) => (
                      <div key={el?.public_id} className="relative">
                        <button
                          key={el?.public_id}
                          type="button"
                          onClick={() => handleDelete(el)}
                          className="absolute right-0 px-2 border-2 border-black flex items-center rounded-sm font-bold text-white bg-red-500"
                        >
                          X
                        </button>
                        <img
                          className="w-32 h-32 object-cover 2xl:w-36 2xl:h-36"
                          src={el?.secure_url}
                          alt=""
                          width="300px"
                        />
                      </div>
                      ))}
                    </div>
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
