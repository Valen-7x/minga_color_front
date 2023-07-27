import React, { useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';




let user = JSON.parse(localStorage.getItem("user"))
console.log(localStorage.getItem("user"));
let role = user?.role
/* console.log(user.email) */

let userEmail = user?.email
let photoUser = user?.photo

function NavBar() {
  let token = localStorage.getItem('token');
  console.log(token);
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const logout = () => {
    navigate("/");
    localStorage.removeItem('user');
    localStorage.removeItem('photo');
    localStorage.removeItem('token');
  };

  return (

    <nav className="flex items-center w-100vw w-[100%] h-[auto] justify-between md:w-[100%] md:h-[auto] relative z-20 ">
      <div className="max-w-screen mx-auto px-4 w-[100%] z-10 border-solid border-b-[0.2px] border-[#ffffff30]">

        <div className="flex items-center justify-between h-[100%] w-[100%] z-20">
          <div className="flex w-[100%] ">
            <button
              onClick={toggleNavbar}
              className="bg-[#ffffff15] w-[60px] h-[60px]  z-1 flex items-center justify-center rounded-md lg:text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out z-10"
            >
              <svg
                className=" flex items-center m-[21px] md:mt-[27px] lg:w-[57px] lg:h-[55px] w-[35px]"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path className='flex items-center m-[21px] md:mt-[27px] md:w-[57px] md:h-[55px]'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="flex items-center m-[21px] w-auto h-[32px] md:h-[40px] md:mt-[27px]"
                src="/Logo 2 1.png"
                alt="Logo" />
            </div>
          </div>
          <div className="flex md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add your navigation links here */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[50%] md:w-[35%] lg:w-[32%] fixed left-0 top-0 h-screen bg-gray-900 z-10 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Add your drawer content here */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Cerrar"
            onClick={closeNavbar}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        
        <div className='text-[0.8rem] sm:text-[1.2rem] sm:mt-[2.5rem] flex flex-col justify-around h-[40vh] items-start px-[1rem] text-[#FFF] lg:text-[1.5rem]'>
          <div className='flex flex-col gap-3 mb-4 py-[2rem]'>
            {token && <img src={`http://localhost:8000/${photoUser}`} alt="photo_user" className='w-[70px] mt-[5rem] '/>}
            {token && <p>{userEmail}</p>}
            
          </div>
          <Anchor className='hover:bg-black/50 p-2'>Home</Anchor>
          {!token && <Anchor to="/signin" className='hover:bg-black/50 p-2'>Login</Anchor>}
          {!token && <Anchor to="/signup" className='hover:bg-black/50 p-2'>Register</Anchor>}
          {token && <Anchor to="/mangas" className='hover:bg-black/50 p-2'>Mangas</Anchor>}
          {token && <Anchor to="/mymangas" className='hover:bg-black/50 p-2'>My Mangas</Anchor>}
          {token && <Anchor to="/edit/:id_manga" className='hover:bg-black/50 p-2'>Edit Chapters</Anchor>}
          {token && <Anchor to="/:manga_id/chapther-form" className='hover:bg-black/50 p-2'>New Chapters</Anchor>}
          {token && <Anchor to="/mangasForm" className='hover:bg-black/50 p-2'>New Manga</Anchor>}
          {token && <Anchor onClick={logout} className='hover:bg-black/50 p-2'>Log Out </Anchor>}
          </div>
      </div>
    </nav>
  );
}
export default NavBar;