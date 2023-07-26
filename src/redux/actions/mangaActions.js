import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const read_mangas = createAsyncThunk(//nos permite funciones en lugar de objetos y esto acciones funciones async
    'read_mangas',async (title) => {
        console.log(title)
        try {
            let {data} = await axios.get("http://localhost:8000/api/mangas/?title="+ title)
            console.log(data)
            return data.mangas
        } catch (error) {
            console.log(error)
            return null;
        }
    }
)
const delete_mangas = createAsyncThunk(
    'delete_mangas',async ({id, newMangas}) => {
        try {
            await axios.delete("http://localhost:8000/api/mangas/"+ id)
            return newMangas
            console.log(newMangas);
        } catch (error) {
            console.log(error)
            return null;
        }
    }
)
export const update_mangas = createAsyncThunk(
    'update_mangas',
    async (mangaData) => {
      try {
        const { data } = await axios.put(
          `http://localhost:8000/api/mangas/${mangaData._id}`,
          mangaData
        );
        return data.manga; // Devuelve el manga actualizado desde la respuesta de la API
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );

const mangaActions = { read_mangas, delete_mangas, update_mangas }
export default mangaActions