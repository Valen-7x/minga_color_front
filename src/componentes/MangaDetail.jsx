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
    if(manga == null){
    getManga()
    }
}, []);

return (
    <div className='w-screen h-[90vh] bg-[black] flex'>
    <div className='w-[50%] h-[90vh] flex justify-center items-center'>
        <img className='h-[70vh] w-[25rem] rounded-[5px]' src={manga?.cover_photo} alt="img" />
    </div>
    <div className='w-[50%] h-[90vh] flex justify-center items-center'>
        <div className='w-[30rem] h-[40vh] flex flex-col'>
        <div className='w-[100%] h-[10vh] flex justify-between items-center'>
            <p className='text-[#ffffff93]'>{manga?.category_id.name}</p>
            <div className='flex items-center w-[7rem] justify-around'>
            <img className='w-[1.5rem] h-[1.5rem]' src={manga?.author_id.photo} alt="photo-profile" />
            <p className='text-[#ffffff93]'>{manga?.author_id.name}</p>
            <p className='text-[#ffffff93]'>{manga?.author_id.last_name}</p>
            </div>
        </div>
        <div className='w-[100%] h-auto flex flex-col justify-between gap-7'>
            <h1 className='text-[1.8rem] font-bold text-[white]'>{manga?.title}</h1>
            <p className='text-[white]'>{manga?.description}</p>
            <Anchor to={`/chapter/${id}/1`} className='bg-[#9d24ff] text-[white] w-[100%] py-[0.5rem] rounded-[5px]'>View chapters</Anchor>
        </div>
        </div>
    </div>
    </div>
);
}
