import React from 'react';
import { Link as Anchor } from 'react-router-dom';
export default function MangaDetail() {
  return (
    <div className='w-screen h-[90vh] bg-[black] flex'>
      <div className='w-[50%] h-[90vh] flex justify-center items-center'>
        <img className='h-[70vh] rounded-[5px]' src="/public/goku.png" alt="img" />
      </div>
      <div className='w-[50%] h-[90vh]  flex justify-center items-center'>
        <div className=' w-[30rem] h-[40vh] flex flex-col'>
            <div className='w-[100%] h-[10vh]  flex justify-between items-center'>
            <p  className='text-[#ffffff93]'>Shonen</p>
            <div className='flex items-center w-[8rem] justify-around'>
                <img className='w-[1.5rem] h-[1.5rem]' src="/public/Ellipse.png" alt="photo-profile" />
                <p className='text-[#ffffff93]'>silvi</p>
                <p className='text-[#ffffff93]'>Dardik</p>
            </div>
            </div>
            <div className='w-[100%] h-[30vh] flex flex-col justify-between'>
            <h1 className='text-[1.8rem] font-bold text-[white]'>Dragon Ball Super</h1>
            <p className='text-[white]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eligendi commodi itaque nam tempora. Adipisci, tempora!</p>
            <Anchor to={'/chapter/:id/:page'} className='bg-[#9d24ff] text-[white] w-[100%] py-[0.5rem] rounded-[5px]'>Read Now</Anchor>
            </div>
        </div>
      </div>
    </div>
  );
}
