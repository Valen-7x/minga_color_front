
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_chapters_data = createAsyncThunk(
  'get_chapters_data',
  async (manga_id) => {
   let token = JSON.parse(localStorage.getItem("token"));
        let headers = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }; 
        try {
        
      const { data } = await axios.get(`http://localhost:8000/api/chapters/me?manga_id=${manga_id}`,headers);
      
      return data.response;
     
    } catch (error) {
      console.log(error);
      console.log(error.message);
      return null;
    }
  }
);
const update_chapters_data = createAsyncThunk(
  'update_chapters_data',
  async (datos) => {
    console.log(datos);

    try {
      
        const formData = new FormData();
        formData.append("id", datos.id);
          formData.append("cover_photo",datos.cover_photo);
    
      let token = JSON.parse(localStorage.getItem("token"));
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
console.log(datos.id, datos.cover_photo);
      const { data } = await axios.put(`http://localhost:8000/api/chapters/${datos.id}`,formData ,headers );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

const delete_chapters_data = createAsyncThunk(
  'delete_chapters_data',
  async (id) => {

    try {
      let token = JSON.parse(localStorage.getItem("token"));
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }; 

      const { data } = await axios.delete(`http://localhost:8000/api/chapters/${id}`, headers);
      console.log(data);
      console.log(id);
      return data.response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);
const chapterActions= {get_chapters_data, update_chapters_data, delete_chapters_data}
export default chapterActions
