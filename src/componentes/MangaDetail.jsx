import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Link as Anchor} from "react-router-dom";
import mangaActions from "../redux/actions/manga";
import axios from "axios";

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
    axios(`http://localhost:8000/api/mangas/${id}`, headers)
    .then((res) => dispatch(mangaActions.datos_manga(res.data.response)))
    .catch((err) => console.log(err));
}
useEffect(() => {
 getManga()
}, []);

return (
    <div className='flex flex-col w-screen h-[95vh] lg:h-[90vh] bg-[black] lg:flex-row'>
    <div className='lg:w-[50%] lg:h-[90vh] flex flex-col h-[40vh] lg:flex-row justify-center items-center w-screen'>
        <img className='h-[15rem] w-[12rem] lg:h-[70vh] lg:w-[25rem] rounded-[5px]' src={manga?.cover_photo} alt="img" />
    </div>
    <div className='lg:w-[50%] lg:h-[90vh] flex  justify-center items-center '>
        <div className='w-[30rem] h-[40vh] flex flex-col  px-[1.5rem]'>
        <div className='w-[100%] h-[10vh] flex justify-between items-center'>
            <p className='text-[#ffffff93] text-[0.8rem] '>{manga?.category_id?.name}</p>
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
);
}
