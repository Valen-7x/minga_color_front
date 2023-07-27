import { useRef, useState } from "react";

import { Link as Anchor, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function SignUp() {
  let navigate = useNavigate();

  const email = useRef();
  const photoInputRef = useRef(); // Corregir el nombre de la referencia a photoInputRef
  const password = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputEmail = email.current.value;
    let inputPassword = password.current.value;
    let inputPhoto = photoInputRef.current.files[0]; // Usar photoInputRef

    const formData = new FormData();
    formData.append("email", inputEmail);
    formData.append("password", inputPassword);
    formData.append("photo", inputPhoto);

console.log(formData);

    axios
      .post("http://localhost:8000/api/users/register", formData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/SignIn");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
        console.log(err.message);
      });
  };

  return (
    <div>
      <nav></nav>
      <body className="flex ">
        <img
          src="public\pexels-aleksandar-pasaric-2339009 1.png"
          alt=""
          className="min-h-[0vh] w-[0%] md:min-h-[100vh] md:w-[70%]"
        />
        <div className="flex flex-col items-center bg-white ">
          <img
            src="public\Logo 2 1.png"
            alt=""
            className="h-[3rem] w-[5rem] mt-[2rem]"
          />
          <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
            Welcome!
          </h2>
          <p className="text-xs font-inter font-semibold tracking-wider leading-normal tracking-wider m-[.2rem]">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>

          <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[100vw] md:w-[29vw]">
            <div className="mb-4 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                ref={email}
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                id="email"
                required
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="flex block text-gray-400 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                ref={photoInputRef}
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none "
                id="photo"
                required
                name="photo"
                type="file"
                placeholder="Url"
              />
            </div>
            <div className="mb-6">
              <label
                className="flex block text-gray-400 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                ref={password}
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none "
                required
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="notification" className="mr-2" />
                <label htmlFor="notification" className="text-sm text-gray-700">
                  Send notification to my email
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleFormSubmit}
                className="w-[50vh] bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-[50vh] flex align-center justify-evenly mt-[1rem] bg-white hover:bg-blue-700 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <img src="public\Google.png" alt="" /> Sign Up With Google
              </button>
            </div>
            <div className="mt-4 flex">
              <p className="text-sm text-gray-700">
                Already have an account?{" "}
                <Anchor to="/SignIn" className="text-red-500">
                  Log in!
                </Anchor>
              </p>
            </div>
          </form>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}
