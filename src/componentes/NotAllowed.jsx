import React from 'react';
import SignIn from './SignIn';
import { Link as Anchor } from "react-router-dom";

export default function NotAllowed() {
  return (
    <div className='flex flex-col justify-center items-center  gap-10 w-full h-[87vh] bg-[white]'>
      <h1 className="hidden md:w-[100%] md:flex md:self-center font-bold md:text-6xl md:text-center md:justify-center relative z-10">
        Tenes que estar Logueado para acceder 
      </h1>
<Anchor to="/signup"
                /*</div>onClick={handleFormSubmit}*/
                className="w-[50vh] bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Crea una cuenta 
              </Anchor>
    </div>
  );
}