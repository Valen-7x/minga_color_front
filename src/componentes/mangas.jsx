//sprint 3 --->
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, apiUrl, endpoints } from "../../utils/api";
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
} from "../redux/actions/mangas.js";
import { Link } from "react-router-dom";
import { LS } from '../../utils/localStorageUtils';
const Mangas = () => {
  //hook useDispatch p/ obtener la funci贸n dispatch, despachar acciones de Redux en componentes.
  const dispatch = useDispatch();
  const { filters, categories, mangas, pagination } = useSelector(
    (state) => state.mangas 
  );
  //desestructuraci贸n del objeto devuelto por useSelector
  //useSelector, est谩s seleccionando y extrayendo las propiedades espec铆ficas 
  //(filters, categories, mangas y pagination) del estado de Redux (state.mangas)

  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;

//getMangas realiza una solicitud HTTP al servidor para obtener los mangas,
// actualiza el estado de Redux con los datos recibidos y maneja los errores si los hay.
  const getMangas = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_mangas+ `?title=${title}&category=${categoriesSelected}&page=${page}`, 
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
      const { data } = await api.get(apiUrl + endpoints.read_categories,
       );
      dispatch(setCategories(data.response));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
//actualiza las categor铆as seleccionadas en los filtros y
// despacha una acci贸n para actualizar el estado de Redux con los nuevos filtros
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
    getMangas();
    getCategories();
  }, [title, categoriesSelected, page]);

//se ejecuta producido un clic en un bot贸n para ir a la p谩gina anterior
//Verifica si la propiedad prev tiene un valor, si es asi despacha la accion setFilters
  const handlePrevPage = () => {
    if (prev) {
      dispatch(setFilters({ ...filters, page: prev }));
    }
  };
//se ejecuta producido un clic en un bot贸n para ir a la p谩gina siguiente.
//Verifica si la propiedad next tiene un valor, si es asi despacha la accion setFilters
  const handleNextPage = () => {
    if (next) {
      dispatch(setFilters({ ...filters, page: next }));
    }
  };
// Esta funci贸n se ejecuta cuando se produce un cambio en el campo de texto .
// para acceder al valor del campo de entrada e.target.value
  const handleTextChange = (e) => {
    dispatch(setFilters({ ...filters, title: e.target.value, page: 1 }));
  };
  console.log(mangas);
  return (
    <div className="flex flex-col items-center flex-wrap m-[0px] min-h-screen w-screen items-center justify-center">
      <div className="flex flex-wrap gap-[70px] min-h-[40vh] justify-center items-center flex-col w-[100%]">
        <h1 className="text-white flex-wrap text-[20px] md:text-[40px] font-semibold sm:ml-[12.5rem] sm:self-start">Search your next manga 馃い</h1>
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
        {categories?.map((category) => (
          <button
            key={category._id}
            onClick={() => selectCategory(category?._id)}
            className={`md:p-4   ${
              categoriesSelected.includes(category?._id) ? "text-white" : "text-white/50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
      <div className=" flex gap-4 flex-row flex-wrap justify-center pl-[4rem]">
        {mangas?.length > 0 ? (
          mangas?.map((manga, index) => (
            <div
              key={manga._id}
              className={`flex md:h-[23rem] rounded-[10px] justify-center
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
            </div>
          ))
        ) : (
          <p className="md:text-[40px] flex-wrap text-center text-white">
            No se encontraron mangas que coincidan con los filtros seleccionados.
          </p>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={!prev}
          className={`px-4 py-2 mr-2 mt-[2rem] mb-[1rem] ${
            !prev ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={!next}
          className={`px-4 py-2 mt-[2rem] mb-[1rem] ${
            !next ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
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

export default Mangas