import React from 'react';

export default function Chapters() {
  return (
    <div className='bg-[black] h-auto w-screen flex flex-col items-center'>
    <div className=' bg-[url("/public/goku-bg.png")] w-[90%] h-[45vh] bg-cover mt-[2rem] flex flex-col items-center justify-around py-[2rem]'>
        <p className='text-[white]'>Chapters of</p>
        <p className='font-bold text-[2rem] text-[white]'>Dragon ball super</p>
    <label htmlFor="search2" className=' w-[30%] h-[5.5vh] flex bg-[#131212c9] py-[0.5rem] rounded-[5px] justify-around border-solid border-[2px] border-[#ffffff42] '>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 37 37" fill="none">
        <circle cx="16.9582" cy="16.9582" r="10.7917" stroke="white" strokeWidth="2"/>
        <path d="M30.8335 30.8335L26.2085 26.2085" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <input type="text" id='search2' className='bg-[#131212c9] w-[85%] text-center placeholder:text-[#ffffff4f]' placeholder='Search chapter' />
</label>
    </div>
    <div className='h-auto w-screen flex gap-10 flex-wrap px-[20rem] justify-center py-[7rem]'>
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
        <img className='w-[12rem] h-[20rem]' src="/public/goku.png" alt="" />
    </div>  
    </div>
  );
}
