import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Link as Anchor} from "react-router-dom";
import mangaActions from "../redux/actions/manga";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MangaDetail() {
const { id } = useParams();
const manga = useSelector((store) => store.manga.manga); //hook -informacion desde

  // const title = useSelector((store) => store.manga.manga?.title);
  //console.log(title);
console.log(manga);
const dispatch = useDispatch();

  //dispatch(mangaActions.datos_manga(res.data.response));

let token = JSON.parse(localStorage.getItem("token"));
let headers = {
    headers: {
    Authorization: `Bearer ${token}`,
    },
};
function getManga(){
    console.log(headers);
    axios(`http://localhost:8000/api/mangas/${id}`)
    .then((res) => dispatch(mangaActions.datos_manga(res.data.response)))
    .catch((err) => console.log(err));
}
useEffect(() => {
 getManga()
}, [ ]);

return (
    <div className="flex flex-col">
    <div className='flex flex-col w-screen h-[95vh] lg:h-[90vh] bg-[black] lg:flex-row'>
    <div className='lg:w-[50%] lg:h-[90vh] flex flex-col h-[40vh] lg:flex-row justify-center items-center w-screen'>
        <img className='h-[15rem] w-[12rem] lg:h-[70vh] lg:w-[25rem] rounded-[5px]' src={manga?.cover_photo} alt="img" />
    </div>
    <div className='lg:w-[50%] lg:h-[90vh] flex  justify-center items-center '>
        <div className='w-[30rem] h-[40vh] flex flex-col  px-[1.5rem]'>
        <div className='w-[100%] h-[10vh] flex justify-between items-center'>
            <p className='text-[#ffffff93] text-[0.8rem] '>{manga?.category_id.name}</p>
            <div className='flex items-center w-[7rem] justify-around'>
            <img className=' w-[1.5rem] h-[1.5rem]' src={manga?.author_id.photo} alt="photo-profile" />
            <p className='text-[#ffffff93] text-[0.8rem]'>{manga?.author_id.name}</p>
            <p className='text-[#ffffff93] text-[0.8rem]'>{manga?.author_id.last_name}</p>
            </div>
        </div>
        <div className='w-[100%] h-auto flex flex-col justify-between items-center gap-7'>
            <h1 className='lg:text-[1.8rem] text-[1.2rem] font-bold text-[white]'>{manga?.title}</h1>
            <p className='text-[white] text-[0.7rem]'>{manga?.description}</p>
            <Anchor to={`/chapters/${id}/1`} className='bg-[#9d24ff] text-[white] lg:w-[100%] py-[0.5rem] rounded-[5px] w-[60%] '>View chapters</Anchor>
        </div>
        </div>
    </div> 
    </div>
    <div className="text-[white] flex justify-center gap-10 w[100%] bg-gray rounded-[5px] mb-[1rem] ">
        < Link to={`/mymangas`} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </Link>
        <Link to={`/`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
        </Link>
      </div>
    </div>
);
}
