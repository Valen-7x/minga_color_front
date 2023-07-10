import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../utils/api";

import Swal from "sweetalert2";

const MangaForm = () => {
  let title = useRef();
  let category = useRef();
  let description = useRef();
  let navigate = useNavigate();
  let [categorys, setCategorys] = useState();
  useEffect(() => {
    axios
      .get(apiUrl + "categories/")
      .then((res) => {
        setCategorys(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(categorys);
  function handleForm2(e) {
    e.preventDefault();
    let data = {
      title: inputTitle.current.value,
      category: inputCategory.current.value,
      description: inputDescription.current.value,
    };
    console.log(data);

    axios
      .post(apiUrl + "mangas/mangaC", data, headers)
      .then((res) => {
        console.log(res);
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Manga successfully!",
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
          New Manga
        </h1>
        <form className="flex flex-col" onSubmit={handleForm2}>
          <input
            ref={title}
            type="text"
            placeholder="Insert title"
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
          />
          <select
            ref={category}
            className="sm:w-[20rem] lg:hidden bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            name=""
            id=""
          >
            {categorys?.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
          </select>
          <input
            ref={description}
            type="text"
            placeholder="Insert description"
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
            New Manga
          </h1>
          <form
            onSubmit={handleForm2}
            className="flex flex-col w-[40%] gap-5 mt-[2rem]"
          >
            <input
              ref={title}
              type="text"
              placeholder="Insert title"
              className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <select
              ref={category}
              className="bg-transparent border-b-[1px] py-2 text-[#FFFF]"
              name=""
              id=""
            >
               {categorys?.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
            </select>
            <input
              ref={description}
              type="text"
              placeholder="Insert descrption"
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
            src="public\2mi6dcnw_1.png"
            alt="naruto"
            className="lg:h-[50vh] lg:w-[15rem] lg:block hidden mb-[10rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default MangaForm;
