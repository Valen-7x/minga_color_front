import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../utils/api";

import Swal from "sweetalert2";

const ChapterForm = () => {
  let {manga_id} = useParams();
  let coverPhoto=useRef();
  let title = useRef();
  let order = useRef();
  let pages = useRef([]);
  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    let array = pages.current.value;
    let listpage = array.split(",");
    let data = {
      manga_id,
      cover_photo:coverPhoto.current.value,
      title: title.current.value,
      order: order.current.value,
      pages: listpage,
    
    };
    console.log(data);

    axios
      .post(apiUrl + "chapters/chapterC", data, headers)
      .then((res) => {
        console.log(res);
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Chapter successfully!",
        });
      })
      .catch((error) => {
        const err = error.response.data.message;

        Swal.fire({
          icon: "error",
          title: err,
        });
      });
  }

  let role = localStorage.getItem("role");
  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  return (
    <div className="h-auto w-screen p-0 bg-[black]">
      <div className="w-[full] h-screen flex flex-col lg:flex-row px-[4rem] gap-3 sm:items-center">
        <h1 className="text-[#FFF] lg:hidden text-[1.7rem] mb-[3rem] mt-[4rem]">
          New Chapter
        </h1>
        <form className="flex flex-col" onSubmit={handleForm}>
          <input
            ref={title}
            type="text"
            placeholder="Insert title"
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
          <input
            ref={coverPhoto}
            type="text"
            placeholder="Insert URL photo"
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
          <input
            ref={order}
            type="text"
            placeholder="Insert order"
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
          <input
            ref={pages}
            type="text"
            placeholder="Insert pages"
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
          <button
            type="submit"
            className="text-[black] bg-[#FFF] rounded-[5px] h-[2.5rem] sm:w-[50%] lg:hidden mt-[2rem] font-bold"
          >
            Send
          </button>
        </form>
        <div
          id="Form"
          className="hidden lg:flex lg:flex-col lg:w-[50%] lg:items-center lg:h-[65vh] lg:justify-center lg:block"
        >
          <h1 className="lg:block text-[#FFF] text-[1.8rem] hidden mt-[2rem]">
            New chapter
          </h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col w-[40%] gap-5 mt-[2rem]"
          >
            <input
              ref={title}
              type="text"
              placeholder="Insert title"
              className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <input
            ref={coverPhoto}
            type="text"
            placeholder="Insert URL photo"
            className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
            <input
              ref={order}
              type="text"
              placeholder="Insert order"
              className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <input
              ref={pages}
              type="text"
              placeholder="Insert pages"
              className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <button
              type="submit"
              className="mt-[2rem] bg-[#34D399] w-[30%] rounded-[5px] text-[#FFF] text-[1.1rem] mb-[15rem] font-bold"
            >
              Send
            </button>
          </form>
        </div>
        <div
          id="Naruto"
          className="lg:w-[50%] lg:flex lg:flex-col items-center gap-3 py-[4.65rem] hidden lg:block"
        >
          <img
            src="/naruto.png"
            alt="naruto"
            className="lg:h-[50vh] lg:w-[30rem] lg:block hidden mb-[10rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterForm;