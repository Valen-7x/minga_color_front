import { Link as Anchor} from "react-router-dom";
import React, { useState } from 'react';
import DonationModal from "./product/DonationModal";
export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className=" h-[30vh] w-screen flex flex-col items-center bg-black sm:h-[35vh]">
    <div className="w-screen sm-[25vh]">
      <img className="h-24 w-full rounded-b-full" src="/cswc5oyv 1.png" alt=""/>
    </div>
    <div className="h-[30vh] flex-wrap sm:flex sm:items-center sm:justify-center w-screen mt-2 sm:gap-40">
    <div className="flex justify-center gap-8">
        <Anchor to={'/'} className="text-white">Home</Anchor>
        <Anchor to={'/mangas'} className="text-white">Mangas</Anchor>
      </div>
      <img className="flex w-[3.5rem]" src="/public/Logo 2 1.png" alt="logo"/>
     <div className="flex justify-center gap-5 ">
     <button
          onClick={() => setShowModal(true)}
          className="w-[8rem] bg-red-700 hover:bg-indigo-600 h-10 rounded-[4px] flex items-center justify-center space-x-2 text-white text-sm font-medium"
        >
          <p className="">Donate</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M21.5 8.75C21.5 6.26472 19.4013 4.25 16.8125 4.25C14.8769 4.25 13.2153 5.37628 12.5 6.98342C11.7847 5.37628 10.1231 4.25 8.1875 4.25C5.59867 4.25 3.5 6.26472 3.5 8.75C3.5 15.9706 12.5 20.75 12.5 20.75C12.5 20.75 21.5 15.9706 21.5 8.75Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
     </div>
    </div>
    <div className="h-px bg-white"></div>
     {/* Modal */}
     {showModal && <DonationModal onClose={() => setShowModal(false)} />}
  </footer>
  );
}
