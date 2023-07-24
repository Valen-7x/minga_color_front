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
import Modal from "./modal";
import mangaActions, { update_mangas } from "../redux/actions/mangaActions";
import Swal from "sweetalert2";
import { LS } from "../../utils/localStorageUtils";
const Mangas = () => {
  
  //hook useDispatch p/ obtener la función dispatch, despachar acciones de Redux en componentes.
  let dispatch = useDispatch();
  
  //useSelector, estás seleccionando y extrayendo las propiedades específicas
  //(filters, categories, mangas y pagination) del estado de Redux (state.mangas)
  let { filters, categories, mangas, pagination } = useSelector(
    (state) => state.mangas
  );
  //hook useState para crear una variable  estadoModal1 y una función para actualizarla cambiarEstadoModal1.
  const [estadoModal1, cambiarEstadoModal1] = useState(false); //--> el modal inicia cerrado
  const [editingManga, setEditingManga] = useState(null); //-->inicialmente ningun manga en proceso de edicion
  const openEditForm = (manga) => {
    setEditingManga(manga);
    cambiarEstadoModal1(true);
  };
  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;
  //getMangas realiza una solicitud HTTP al servidor para obtener los mangas,
  // actualiza el estado de Redux con los datos recibidos y maneja los errores si los hay.
  const getMangasAction = (title) => {
    dispatch(mangaActions.read_mangas());
  };
  const deleteManga = (id) => {
    let newMangas = mangas.filter((manga) => manga._id !== id);
    dispatch(mangaActions.delete_mangas({ id, newMangas }));
    Swal.fire({
      icon: "success",
      title: "Manga eliminado",
      text: "El manga se ha eliminado correctamente.",
    });
  };
  //manejo
  const handleEditFormSubmit = async (e) => {
    e.preventDefault(); // se previene que la página se recargue al enviar el formulario.
    try {
      dispatch(update_mangas(editingManga));
      Swal.fire({
        icon: "success",
        title: "Manga actualizado",
        text: "El manga se ha actualizado correctamente.",
      });
      cambiarEstadoModal1(false); //el modal se cerrardespués de que el manga se haya actualizado
    } catch (error) {
      console.log(error);
    }
  };
  //traigo los mangas, titulos, filtro por categorias seleccionadas, y pagino
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
    if (categoriesSelected.includes(value)) {
      updatedCategories = categoriesSelected.filter(
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
              onClick={() => selectCategory(category._id)}
              className={`md:p-4   ${
                categoriesSelected.includes(category._id)
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
            <Link
              to={`/mangasForm`}
              className="inline-flex flex-wrap bg-gray-700 h-[6rem] w-[6rem] md:h-[20rem] md:w-[15rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-15 h-15"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
            {mangas?.length > 0 ? (
              mangas.map((manga, index) => (
                <div
                  key={manga._id}
                  className={`flex flex-col md:h-[23rem] rounded-[10px] justify-center items-center
                `}
                >
                  <Link to={`/manga/${manga._id}`}>
                    <img
                      className="inline-flex flex-wrap h-[6rem] w-[6rem] md:h-[17rem] md:w-[15rem]"
                      src={manga?.cover_photo}
                      alt=""
                    />
                    <p className="text-[20px] md:text-2xl text-white text-center flex-wrap min-w-[12rem] md:min-w-[17 rem] ">
                      {manga?.title}
                    </p>
                  </Link>
                  <div className="flex flex-col justify-center  mt-[0.2rem] ">
                    <div className="flex flex-row gap-5">
                      <div className="flex justify-center gap-20 ">
                        <button
                          onClick={() => openEditForm(manga)}
                          className="px-3 py-2 text-white rounded-full bg-blue-600 hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </div>
                      <button
                        onClick={() => deleteManga(manga._id)}
                        className="px-1 py-2 text-white rounded-full bg-red-600 hover:bg-red-900"
                      >
                        Delete
                      </button>

                      <Link to={`/${manga._id}/chapther-form`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-white hover:bg-sky-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </Link>

                      <Link to={`/edit/${manga._id}`} className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-white hover:bg-green-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </Link>
                    </div>
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
      <div>
        {/* Modal #1 */}
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo="Edit Manga"
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={"center"}
          padding={"p-5"}
        >
          <div className="text-center">
            <h1 className="text-2xl font-medium text-black-600">Edit Manga</h1>
            <p className="text-lg my-4"></p>
            <form
              className="flex flex-col items-center"
              onSubmit={handleEditFormSubmit}
            >
              <input
                type="text"
                placeholder="Insert title"
                className="sm:w-[20rem]  bg-transparent border-b-[1px] py-2 text-black"
                value={editingManga?.title || ""}
                onChange={(e) =>
                  setEditingManga({ ...editingManga, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Insert cover photo URL"
                className="sm:w-[20rem]  bg-transparent border-b-[1px] py-2 text-black"
                value={editingManga?.cover_photo || ""}
                onChange={(e) =>
                  setEditingManga({
                    ...editingManga,
                    cover_photo: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className="text-[black] bg-[#FFF] rounded-[5px] h-[2.5rem] sm:w-[50%]  mt-[2rem] font-bold"
              >
                Send
              </button>
            </form>

            <button
              onClick={() => cambiarEstadoModal1(false)}
              className="px-6 py-2 mt-2 text-white rounded-full bg-red-600 hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Mangas;
