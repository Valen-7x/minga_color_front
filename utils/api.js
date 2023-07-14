import axios from "axios";

export const apiUrl = "http://localhost:8000/api/";
export const api = axios.create({ baseURL: apiUrl });
export const endpoints = {
  signin: "users/signin",
  register: "users/register",
  read_categories: "categories",
  read_mangas: "mangas",
  signout: "users/signout",
  ChapterForm: "chapters/",
  MangaForm: "mangas/mangaC",
};
