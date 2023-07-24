import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl,api, endpoints } from "../../utils/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MangaForm = () => {

  const [selectedOption, setSelected] = useState("Select category");
  const [mangaTitle, setTitle] = useState("");
  const [mangaImage, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [mangaDescription, setMangaDescription] = useState("");

  //two way binding

  let manga_title = useRef("");
  let manga_image = useRef("");
  let manga_category = useRef("");
  let manga_descr = useRef("");

  async function handleFormSubmit(event) {
    event.preventDefault();

    let data = {
      title: manga_title.current.value,
      description: manga_descr.current.value,
      cover_photo: manga_image.current.value,
      Category_id: manga_category.current.value,
    };

    console.log(data);

    let token = localStorage.getItem("token");
    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await api.post(apiUrl + endpoints.MangaForm, data, configs);
      Swal.fire({
        icon: "success",
        title: "Manga uploaded successfully!",
      });
    } catch (error) {
      const er = error.response.data.message;
      console.log(error);
      Swal.fire({
        icon: "error",
        title: er,
      });
    }
  }

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    api
      .get(apiUrl + endpoints.read_categories)
      .then((res) => setCategories(res.data.response));
  }, []);

  let role = localStorage.getItem("role");
  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  return (
    <div className="h-auto w-full p-0 bg-[black]">
      <div className="w-[full] h-screen flex flex-col lg:flex-row px-[4rem] gap-3 sm:items-center">
      <div className="flex flex-col h-[80vh] items-center lg:ml-[12rem] sm:items-center" > 
          <h1 className="text-[#FFF]  text-[1.7rem] mb-[3rem] mt-[4rem]">
            New Manga
          </h1>
          <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
            <input
              ref={manga_title}
              onChange={(event)=> setTitle(event.target.value)}
              type="text"
              placeholder="Insert title"
              className="sm:w-[20rem]  bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <select
                ref={manga_category}
                value={selectedOption}
                onChange={handleOptionChange}
                className="sm:w-[20rem]  bg-transparent border-b-[1px] py-2 text-[white]"
              >
                {categories?.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
              </select>
            <input
              ref={manga_descr}
              onChange={(event)=> setMangaDescription(event.target.value)}
              type="text"
              placeholder="Insert description"
              className="sm:w-[20rem]  bg-transparent border-b-[1px] py-2 text-[#FFFF]"
            />
            <button
              type="submit"
              className="text-[black] bg-[#FFF] rounded-[5px] h-[2.5rem] sm:w-[50%]  mt-[2rem] font-bold"
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
};

export default MangaForm;