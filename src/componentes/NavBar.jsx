import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center w-[100%] h-[auto] justify-between md:w-[100%] md:h-[auto] relative z-10">
      <div className="max-w-screen mx-auto px-4 w-[100%]">
        <div className="flex items-center justify-between h-[100%] w-[100%]">
          <div className="flex w-[100%] ">
            <button
              onClick={toggleNavbar}
              className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="flex items-center m-[21px] md:mt-[27px] md:w-[57px] md:h-[55px] "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path className='flex items-center m-[21px] md:mt-[27px] md:w-[57px] md:h-[55px]'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="flex items-center m-[21px] w-auto h-[32px] md:h-[40px] md:mt-[27px]"
                src="/Logo 2 1.png"
                alt="Logo"
              />
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
        className={`fixed left-0 top-0 h-screen w-1/2 bg-gray-900 z-10 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
