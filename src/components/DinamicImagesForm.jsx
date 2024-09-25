import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "../api/axios";

import "./arsPrice.css";

const DinamicImagesForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [dinamicImages, setDinamicImages] = useState(null);

const getDinamicImages = () => {
    axios
      .get("/dinamicImages")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }; 

/*   useEffect(() => {
    getDinamicImages();
  }, []);
 */
  const submitDinamicImages = (data) => {
    // Filtra solo las redes sociales que tienen una imagen con public_id y secure_url
    const filteredImages = Object.keys(images).reduce((acc, social) => {
      if (images[social]?.public_id && images[social]?.secure_url) {
        acc[social] = images[social];
      }
      return acc;
    }, {});
  
    // Si no hay imágenes válidas, muestra un error o detén el envío
    if (Object.keys(filteredImages).length === 0) {
      console.error("No hay imágenes válidas para enviar");
      return;
    }
  
    // Realiza la solicitud al backend para crear o actualizar las imágenes
    axios
      .post("/dinamicImages", { images: filteredImages })
      .then(() => getDinamicImages()) // Actualiza las imágenes en el frontend después de la subida
      .catch((error) => console.error(error));
  };
  

  const [selectedSocial, setSelectedSocial] = useState("");
  const [image, setImage] = useState({});
  const [images, setImages] = useState({
    facebook: null,
    instagram: null,
    tiktok: null,
    youtube: null,
    google: null,
  });

  // Función para subir imágenes
  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "glcTech");
    data.append("folder", "glcTech");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/najdorf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImage({
        public_id: file.public_id,
        secure_url: file.secure_url,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Actualiza las imágenes para la red social seleccionada
  useEffect(() => {
    if (image.public_id && selectedSocial) {
      setImages((prevImages) => ({
        ...prevImages,
        [selectedSocial]: image,
      }));
    }
  }, [image, selectedSocial]);

  // Manejar la eliminación de imágenes
  function handleDelete(social) {
    setImages((prevImages) => ({
      ...prevImages,
      [social]: null,
    }));
  }

  return (
    <>
      <div className="container-ars w-full mt-6 lg:self-start lg:mt-10">
        <form onSubmit={handleSubmit(submitDinamicImages)} className="form-ars">
          <div className="form_front pt-5 pb-8 px-6 w-[320px] xl:w-[380px]">
            <div className="form_details flex flex-col justify-center items-center gap-1 text-xl text-white font-bold font-title">
              Imgs dinámicas - Home
            </div>

            {/* Select para la red social */}
            <select
              name="socialNetwork"
              onChange={(e) => setSelectedSocial(e.target.value)}
              className="rounded-lg w-full py-2 px-4 bg-stone-500 mt-3 text-white text-sm"
            >
              <option value="">Selecciona una red social</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">Tiktok</option>
              <option value="youtube">YouTube</option>
              <option value="google">Google</option>
            </select>

            {/* Input de archivo para subir imágenes */}
            <div className="mt-4">
              <label className="block text-white">Sube una imagen</label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={handleImage}
                disabled={!selectedSocial} // Desactiva si no se ha seleccionado una red social
                className={`rounded-lg w-full py-2 px-4 bg-amber-600 text-white text-sm mt-2 ${
                  !selectedSocial ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Mostrar imágenes subidas */}
            <div className="lg:flex gap-5 xl:gap-10 mt-5">
              {Object.keys(images).map((social) => (
                <div key={social} className="relative">
                  {images[social]?.secure_url && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleDelete(social)}
                        className="absolute right-0 px-2 border-2 border-black flex items-center rounded-sm font-bold text-white bg-red-500"
                      >
                        X
                      </button>
                      <img
                        className="w-32 h-32 object-cover 2xl:w-36 2xl:h-36"
                        src={images[social]?.secure_url}
                        alt={social}
                        width="300px"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Botón de subir */}
            <button
              type="submit"
              className="btn text-[#92856e] font-semibold px-12 text-xl mt-5"
            >
              SUBIR
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default DinamicImagesForm;
