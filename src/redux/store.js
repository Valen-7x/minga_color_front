import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import authReducer from "./reducers/auth.js";
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapter"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mangas: mangasReducer,
    manga:mangaReducer,
    chapters:chapterReducer
  },
})
