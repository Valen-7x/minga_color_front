import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import authReducer from "./reducers/auth.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mangas: mangasReducer,
  },
})

export default store;
