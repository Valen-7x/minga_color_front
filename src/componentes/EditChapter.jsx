import axios from 'axios';
import React from 'react';


export default function EditChapter() {

    
    return (
    <div className='bg-[black] h-[90vh] flex'>
    <div className=' w-[50%] h-[90vh] flex items-center justify-center'>
        <div className=' w-[50%] h-[55vh] flex flex-col justify-around items-center'>
        <p className='text-[white] text-[1.5rem]'>Edit chapter</p>
        <label  htmlFor="name"><input className=' border-b-2 border-[gray] bg-[black] text-[white] placeholder:text-[0.7rem] px-[1rem] ' type="text" id='name' placeholder='Name of the manga' /></label>
        <select className=' border-b-2 border-[gray] bg-[black] text-[gray] px-[1rem] w-[62%] text-[0.7rem] py-[0.2rem]' placeholder='Select chapter' name="" id="select">.
                <option value="">Select chapter</option>
                <option value=""></option>
                </select>
        <select className=' border-b-2 border-[gray] bg-[black] text-[gray] px-[1rem]  w-[62%] text-[0.7rem] py-[0.2rem]' placeholder='Select chapter' name="" id="select">.
                <option value="">Select data</option>
                <option value=""></option>
            </select>
        <label htmlFor="name"><input className=' border-b-2 border-[gray] bg-[black] text-[white] placeholder:text-[0.7rem] px-[1rem] ' type="text" id='name' placeholder='Data to edit' /></label>
        <div className='flex flex-col items-center gap-4 w-[60%] h-[12vh] justify-around mb-[0.5rem]'>
            <button className='bg-[#34D399] w-[100%] p-[0.5rem] rounded-[5px] text-[#FFF]'>Edit</button>
            <button className='bg-[#EE8380] w-[100%] p-[0.5rem] rounded-[5px] text-[#FFF]'>Delete</button>
        </div>
        </div>
    </div>
    <div className=' w-[50%] h-[90vh] flex justify-center items-center'>
    <div className='w-[85%] h-[75%] flex flex-col items-center justify-evenly'>
        <p className='text-[white]'>Chapter-{''}</p>
        <img className=' w-[70%] h-[55vh]' src={''} alt="" />
    </div>
    </div> 
    </div>
  );
}
