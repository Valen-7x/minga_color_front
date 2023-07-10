import React, { useRef } from 'react';
import { api, apiUrl, endpoints } from '../../utils/api.js';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function SigninForm() {
  let navigate = useNavigate();
  let inputEmail = useRef('');
  let inputPassword = useRef('');
  

  const signin = async (event) => {
    event.preventDefault();
    let datos = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    try {
      let {data} = await api.post(apiUrl+ endpoints.signin, datos);
      console.log(data);
     
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        
      
        
        let token = JSON.stringify(data.response.token)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(data.response.user));
        localStorage.setItem('photo', JSON.stringify(data.response.user.photo));
        navigate('/'); 
    } catch (error) {

      console.log(error)
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
      
    }
    /* axios.post("http://localhost:8000/api/users/Signin",data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    }); */
    
  };
  const isUserSignedIn = localStorage.getItem('token') !== null;

  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center justify-start sm:w-1/2 w-[30] bg-white">
        <img
          src="Logo 2 1.png"
          alt=""
          className="w-1/4 object-cover mt-[2rem]"
        />
        <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
          Welcome!
        </h2>
        <p className="text-xs font-inter font-semibold leading-normal tracking-wider m-[.2rem]">
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form onSubmit={signin} className="flex flex-col rounded sm:w-[30]">
          <div className="mb-4 flex flex-col">
            <label
              className="flex text-gray-400 text-sm font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={inputEmail}
              className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="flex  text-gray-400 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={inputPassword}
              className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <div className="mb-4 flex items-center"></div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-[30vh] bg-gradient-to-r from-[#363636] to-[#000] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit" // Cambiado a type="submit" para que el formulario se envÃ­e al hacer clic
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-[30hv] flex align-center justify-evenly mt-[1rem] bg-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <img src="Google.png" alt="" /> Sign Up With Google
            </button>
          </div>
          <div className="mt-4 flex">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <span className="text-red-500">Sign Up</span>
            </p>
          </div>
        </form>
      </div>
      <img
        className="hidden lg:flex lg:w-[50%] lg:h-[100vh] max-h-screen object-cover"
        src="public\fondo-signin1.jpg"
        alt="fondo"
      />
    </div>
  );
}