import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

import "./login.css";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [registerError, setRegisterError] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (registerError.length > 0) {
      const timer = setTimeout(() => {
        setRegisterError([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [registerError]);

  const submit = (data) => {
    axios
      .post("http://localhost:1212/api/auth/register", data)
      .then((res) => {
        navigate("/admin");
      })
      .catch((error) => {
        setRegisterError(error.response.data);
      });
  };

  return (
    <>
      <main className="bg-gray-300 h-screen w-full flex justify-center items-center relative px-3 sm:px-4">
        <picture className="absolute w-32 bottom-0 mt-4 md:right-0 md:mr-10 xl:mr-20 md:w-44 lg:w-72">
          {/* <img src={imgLogo} alt="" /> */}
        </picture>

        <form onSubmit={handleSubmit(submit)} className="form lg:w-[400px] 2xl:w-[550px] ">
          {registerError.map((error, i) => (
            <div
              key={i}
              className="absolute  text-white text-base p-1 top-0 right-0 mr-1 rounded-md mt-16 lg:text-lg lg:-right-80"
            >
              <p>{error}</p>
            </div>
          ))}
          <p className="title">Regístrate </p>
          <p className="message text-gray-600 ">Signup now and get full access to our app. </p>
          <div className="w-full gap-6 flex">
            <label>
              <input
                required=""
                placeholder=""
                type="text"
                className="input"
                {...register("name")}
              />
              <span>Name</span>
            </label>

            <label className="relative">
              <input
                required=""
                placeholder=""
                type="text"
                className="input"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
              />
              <span>Username</span>
              <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 ">
                {" "}
                {errors.username?.message}{" "}
              </p>
            </label>
          </div>

          <label className="relative">
            <input
              required=""
              placeholder=""
              type="email"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <span>Email</span>
            <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 ">
              {" "}
              {errors.email?.message}{" "}
            </p>
          </label>

          <label className="relative">
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <span>Password</span>
            <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 ">
              {" "}
              {errors.password?.message}{" "}
            </p>
          </label>

          <button type="submit" className="submit">
            Enviar
          </button>
          <p className="signin text-gray-600 font-semibold">
            Ya tienes una cuenta :<Link to="/login"> Inicia sesión </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Register;
