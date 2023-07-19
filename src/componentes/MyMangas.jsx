//sprint 3 --->
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, apiUrl, endpoints } from "../../utils/api";
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
} from "../redux/actions/mangas.js";
import { Link } from "react-router-dom";
import mangaActions from "../redux/actions/mangaActions";
import { LS } from "../../utils/localStorageUtils";
const Mangas = () => {
  //hook useDispatch p/ obtener la función dispatch, despachar acciones de Redux en componentes.
  let dispatch = useDispatch();
  let { filters, categories, mangas, pagination } = useSelector(
    (state) => state.mangas
  );
  //desestructuración del objeto devuelto por useSelector
  //useSelector, estás seleccionando y extrayendo las propiedades específicas
  //(filters, categories, mangas y pagination) del estado de Redux (state.mangas)
  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;
  //getMangas realiza una solicitud HTTP al servidor para obtener los mangas,
  // actualiza el estado de Redux con los datos recibidos y maneja los errores si los hay.
  const getMangasAction = (title) => {
    dispatch(mangaActions.read_mangas())
  }
  const deleteManga = (id) => {
    let newMangas = mangas.filter(manga => manga._id !== id)
    dispatch(mangaActions.delete_mangas({id, newMangas}))
  }
  const getMangas = async () => {
    try {
      const { data } = await api.get(
        apiUrl +
          endpoints.read_mangas +
          `?title=${title}&category=${categoriesSelected}&page=${page}`
      );
      dispatch(setMangas(data.mangas));
      dispatch(setPagination(data.pagination));
    } catch (error) {
      console.log(error);
    }
  };
  //traigo las categorias
  const getCategories = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_categories);
      dispatch(setCategories(data.categories));
    } catch (error) {
      console.log(error);
    }
  };
  //actualiza las categorías seleccionadas en los filtros y
  // despacha una acción para actualizar el estado de Redux con los nuevos filtros
  const selectCategory = (value) => {
    console.log(categoriesSelected);
    console.log(value);
    let updatedCategories = [];
    if (categoriesSelected?.includes(value)) {
      updatedCategories = categoriesSelected?.filter(
        (category) => category !== value
      );
    } else {
      updatedCategories = [...categoriesSelected, value];
    }
    const updatedFilters = {
      ...filters,
      categoriesSelected: updatedCategories,
      page: 1,
    };
    dispatch(setFilters(updatedFilters));
  };
  // hook useEffect para ejecutar ciertas acciones cuando se producen cambios en title,etc.
  useEffect(() => {
    getMangasAction();
    getMangas();
    getCategories();
  }, [title, categoriesSelected, page]);

  //se ejecuta producido un clic en un botón para ir a la página anterior
  //Verifica si la propiedad prev tiene un valor, si es asi despacha la accion setFilters
  const handlePrevPage = () => {
    if (prev) {
      dispatch(setFilters({ ...filters, page: prev }));
    }
  };
  //se ejecuta producido un clic en un botón para ir a la página siguiente.
  //Verifica si la propiedad next tiene un valor, si es asi despacha la accion setFilters
  const handleNextPage = () => {
    if (next) {
      dispatch(setFilters({ ...filters, page: next }));
    }
  };
  // Esta función se ejecuta cuando se produce un cambio en el campo de texto .
  // para acceder al valor del campo de entrada e.target.value
  const handleTextChange = (e) => {
    dispatch(setFilters({ ...filters, title: e.target.value, page: 1 }));
  };
  console.log(mangas);
  return (
    <div className="flex flex-col items-center flex-wrap m-[0px] min-h-screen w-screen items-center justify-center">
      <div className="flex flex-wrap gap-[70px] min-h-[40vh] justify-center items-center flex-col w-[100%]">
        <h1 className="text-white flex-wrap text-[20px] md:text-[40px] font-semibold sm:ml-[12.5rem] sm:self-start">
          My Mangas❤
        </h1>
        <input
          value={title}
          onChange={handleTextChange}
          className="w-[290px] rounded-md h-10 text-center gap-16  bg-[#1d1d1de4] sm:ml-[12.5rem] lg:text-center sm:self-start sm:w-[390px]"
          type="search"
          name="search-mangas"
          id="search"
          placeholder="Search Mangas"
        />
      </div>
      <div className="flex w-[100%] ">
        <div className="flex text-white w-[10vw] flex-col  gap-5 ">
          <p className="text[16px]">Categories</p>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => selectCategory(category?._id)}
              className={`md:p-4   ${
                categoriesSelected.includes(category?._id)
                  ? "text-white"
                  : "text-white/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <div className=" flex gap-4 flex-row flex-wrap justify-center pl-[4rem]">
            {mangas?.length > 0 ? (
              mangas.map((manga, index) => (
                <div
                  key={manga._id}
                  className={`flex flex-col md:h-[23rem] rounded-[10px] justify-center
                `}
                >
                  <Link to={`/manga/${manga._id}`}>
                    <img
                      className="inline-flex flex-wrap h-[6rem] w-[6rem] md:h-[20rem] md:w-[15rem]"
                      src={manga?.cover_photo}
                      alt=""
                    />
                    <p className="text-[20px] md:text-2xl text-white text-center flex-wrap min-w-[12rem] md:min-w-[17 rem] ">
                      {manga?.title}
                    </p>
                  </Link>
                  <div className="flex justify-center gap-16 mt-[0.2rem] ">
                    <svg onClick={()=>deleteManga(manga._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:bg-red-700">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg> 
                    <Link to={`/${manga._id}/chapther-form`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white hover:bg-sky-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>  
                    </Link>
                   
                    <Link to={`/edit/${manga._id}`} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white hover:bg-green-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    </Link>
                    </div>    
                </div>
              ))
            ) : (
              <p className="md:text-[40px] flex-wrap text-center text-white">
                No se encontraron mangas que coincidan con los filtros
                seleccionados.
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={!prev}
              className={`rounded-md px-4 py-2 mr-2 mt-[2rem] mb-[1rem] ${
                !prev
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 border-rounded"
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={!next}
              className={`rounded-md px-4 py-2 mt-[2rem] mb-[1rem] ${
                !next
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangas;
