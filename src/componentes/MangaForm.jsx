import React from 'react';

export default function MangaForm() {
  return (
    <div className="h-auto w-full  p-0 bg-[black]">
    
   <div className=' w-[full] h-screen flex flex-col lg:flex-row px-[4rem] gap-3 sm:items-center'>
<h1 className='text-[#FFF] lg:hidden text-[1.7rem] mb-[3rem] mt-[4rem]'>New Manga</h1>
<input type="text" placeholder='Insert title' className=' sm:w-[50%] lg:hidden bg-transparent border-b-[1px] py-2'/>
<select  className='sm:w-[50%] lg:hidden bg-transparent border-b-[1px] py-2 text-[grey]' name="" id=""><option value="category">Insert category</option></select>
<input type="text" placeholder='Insert description' className='sm:w-[50%] lg:hidden bg-transparent border-b-[1px] py-2'/>
<button className='text-[black] bg-[#FFF] rounded-[5px] h-[2.5rem] sm:w-[50%] lg:hidden mt-[2rem] font-bold'>Send</button>
    <div id='Form' className='hidden lg:flex lg:flex-col lg:w-[50%] lg:items-center lg:h-[65vh] lg:justify-center lg:block'>
<h1 className='lg:block  text-[#FFF] text-[1.8rem] hidden mt-[2rem]'>New chapter</h1>
<form  className='flex flex-col w-[40%] gap-5 mt-[2rem]'>
    <input type="text" placeholder='Insert title' className=' bg-transparent border-b-[1px] py-2 text-[#FFFF] placeholder-[white]'/>
    <select className=' bg-transparent border-b-[1px] py-2 text-[white]' name="" id=""><option value="category">Insert category</option></select>
    <input type="text" placeholder='Insert description'className='bg-transparent border-b-[1px] py-2 text-[#FFFF] placeholder-[white]'/>
</form>
<button className=' mt-[2rem] bg-[#34D399] w-[30%] rounded-[5px] text-[#FFF] text-[1.1rem] mb-[15rem] font-bold'>Send</button>

    </div>
    <div id='Naruto' className='lg:w-[50%] lg:flex lg:flex-col items-center gap-3 py-[4.65rem] hidden lg:block'>
     
    <img src="\hero.png" alt="naruto" className='lg:h-[50vh] lg:w-[18rem] lg:block hidden mb-[10rem]' />
    </div>
   </div>
   
   </div>
  );
}
