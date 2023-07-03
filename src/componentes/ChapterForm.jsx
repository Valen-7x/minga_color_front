import React from 'react';

export default function ChapterForm() {
  return (
    <div className="h-auto w-full  p-0 bg-[black]">
    
   <div className=' w-[full] h-screen flex flex-col lg:flex-row px-[4rem] gap-3'>
<h1 className='text-[#FFF] lg:hidden text-[1.7rem] mb-[3rem] mt-[4rem]'>New Chapter</h1>
<input type="text" placeholder='Insert title' className='lg:hidden bg-transparent border-b-[1px] py-2'/>
<input type="text" placeholder='Insert order' className='lg:hidden bg-transparent border-b-[1px] py-2'/>
<input type="text" placeholder='Insert pages' className='lg:hidden bg-transparent border-b-[1px] py-2'/>
<button className='text-[black] bg-[#FFF] rounded-[5px] h-[2.5rem] lg:hidden mt-[2rem] font-bold'>Send</button>
    <div id='Form' className='hidden lg:flex lg:flex-col lg:w-[50%] lg:items-center lg:h-[65vh] lg:justify-around lg:block '>
<h1 className='lg:block  text-[#FFF] text-[1.8rem] hidden mt-[2rem]'>Edit Chapter</h1>
<form  className='flex flex-col w-[40%] gap-5 mt-[2.5rem]'>
    <input type="text" placeholder='Name of the manga' className='bg-transparent border-b-[1px] py-2 text-[#FFFF]'/>
    <select name="" className='text-white bg-transparent border-b-[1px] py-2'>
        <option value="chapter" className=''>Select chapter</option>
    </select>
    <select name="" id="data" className='text-white bg-transparent border-b-[1px] py-2'>
        <option value="data">Select data</option>
    </select>
    <input type="text" placeholder='Data to edit'className='bg-transparent border-b-[1px] py-2'/>
</form>
<button className=' mt-[2.5rem] bg-[#34D399] w-[30%] h-[3rem] rounded-[5px] text-[#FFF] text-[1.1rem] mb-[1rem]'>Edit</button>
<button className=' bg-[#EE8380] w-[30%] h-[3rem] rounded-[5px] text-[#FFF] text-[1.1rem] '>Delete</button>
    </div>
    <div id='Naruto' className='lg:w-[50%] lg:flex lg:flex-col items-center gap-3 py-[4.65rem] hidden lg:block'>
     <p className='hidden lg:block lg:text-[#FFF]'>Chapter #1 - Discover the word</p>   
    <img src="/naruto.png" alt="naruto" className='lg:h-[50vh] lg:w-[30rem] lg:block hidden' />
    </div>
   </div>
   
   </div>
  );
}
