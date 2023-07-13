import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../redux/actions/chapter";
import mangaActions from "../redux/actions/manga";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Chapters() {
  const { id, page } = useParams();
  const chapters = useSelector((store) => store.chapters.chapters);

  const manga = useSelector((store) => store.manga.manga);
  const dispatch = useDispatch();

  let token = JSON.parse(localStorage.getItem("token"));
  let headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function getManga() {
    axios(`http://localhost:8000/api/mangas/${id}`, headers)
      .then((res) => dispatch(mangaActions.datos_manga(res.data.response)))
      .catch((err) => console.log(err));
  }

  function getChapters() {
    axios
      .get(`http://localhost:8000/api/chapters/?manga_id=${id}&page=${page}`, headers)
      .then((res) => {
        dispatch(
          chapterActions.chapters_manga({
            chapters: res.data.chapters,
            prev: res.data.prev,
            next: res.data.next,
            currentPage: res.data.currentPage,
          })
        );
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (manga === null) {
      getManga();
    }
  }, []);

  useEffect(() => {
    getChapters();
  }, [page]);

  const nextPage = Number(page) + 1;
  const prevPage = Number(page) - 1;
  const isLastPageWithChapters = chapters.length === 0 && nextPage > 1;
  const isPageTwo = Number(page) === 2;

  return (
    <div className='bg-[black] h-auto w-screen flex flex-col items-center lg:py-[3rem] '>
      <div
        className='w-[90%] h-[45vh] bg-cover mt-[2rem] flex flex-col items-center justify-around lg:py-[2rem] bg-cover'
        style={{ backgroundImage: `url(${manga?.cover_photo})` }}
      >
        <p className='text-[white] bg-[#808080a4] p-2 rounded-[5px]'>Chapters of</p>
        <p className='font-bold text-[2rem] text-[white] bg-[#808080a4] p-2 rounded-[5px]'>{manga?.title}</p>
        <label
          htmlFor='search2'
          className='hidden lg:w-[30%] lg:h-[5.5vh] lg:flex bg-[#131212c9] lg:py-[0.5rem] lg:rounded-[5px] lg:justify-around lg:border-solid lg:border-[2px] lg:border-[#ffffff42]'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 37 37' fill='none'>
            <circle cx='16.9582' cy='16.9582' r='10.7917' stroke='white' strokeWidth='2' />
            <path d='M30.8335 30.8335L26.2085 26.2085' stroke='white' strokeWidth='2' strokeLinecap='round' />
          </svg>
          <input
            type='text'
            id='search2'
            className='bg-[#131212c9] w-[85%] text-center placeholder:text-[#ffffff4f]'
            placeholder='Search chapter'
          />
        </label>
      </div>
      <div className='gap-8 py-[2rem] flex sm:flex-wrap sm:gap-5 sm:py-[3rem] md:px-[8rem] sm:px-[8rem] sm:flex-row lg:h-auto lg:gap-[8rem] sm:justify-center lg:py-[3rem] flex-nowrap flex-col '>
      {chapters.map((chapter) => (
  <div key={chapter.id}>
    <p className="text-white">{chapter?.title}</p>
    <div className="hover:border-[#563fbd] hover:border-4">
      <Anchor to={`/chapter/${chapter.id}/page`}>
        <img
          className='sm:h-[13rem] sm:w-[8rem] lg:w-[12rem] lg:h-[20rem] w-[12rem] h-[15rem]'
          src={chapter.cover_photo}
          alt={manga?.title}
        />
      </Anchor>
    </div>
  </div>
))}
</div>
      <div className='flex lg:gap-5 py-[2rem] gap-5'>
        {prevPage >= 1 && (
          <Anchor to={`/chapters/${id}/${prevPage}`} className='rounded-[10px] p-2 bg-[white]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.25 5.25C10.25 5.00147 10.0465 4.8 9.79545 4.8L1.80192 4.8L5.11687 1.5182C5.29438 1.34246 5.29438 1.05754 5.11687 0.881802C4.93936 0.706066 4.65155 0.706066 4.47404 0.881802L0.383134 4.9318C0.205624 5.10754 0.205624 5.39246 0.383134 5.5682L4.47404 9.6182C4.65155 9.79393 4.93936 9.79393 5.11687 9.6182C5.29438 9.44246 5.29438 9.15754 5.11687 8.9818L1.80192 5.7L9.79545 5.7C10.0465 5.7 10.25 5.49853 10.25 5.25Z'
                fill='#333333'
              />
            </svg>
          </Anchor>
        )}
        <p className='text-[white]'>prev page / next page</p>
        {!isLastPageWithChapters && !isPageTwo && nextPage !== 0 && (
          <Anchor to={`/chapters/${id}/${nextPage}`} className='rounded-[10px] p-2 bg-[white]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.25 5.25C0.25 5.00147 0.453507 4.8 0.704545 4.8L8.69808 4.8L5.38313 1.5182C5.20562 1.34246 5.20562 1.05754 5.38313 0.881802C5.56064 0.706066 5.84845 0.706066 6.02596 0.881802L10.1169 4.9318C10.2944 5.10754 10.2944 5.39246 10.1169 5.5682L6.02596 9.6182C5.84845 9.79393 5.56064 9.79393 5.38313 9.6182C5.20562 9.44246 5.20562 9.15754 5.38313 8.9818L8.69808 5.7L0.704545 5.7C0.453507 5.7 0.25 5.49853 0.25 5.25Z'
                fill='#333333'
              />
            </svg>
          </Anchor>
        )}
      </div>
    </div>
  );
}
