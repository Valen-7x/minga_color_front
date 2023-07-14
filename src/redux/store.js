import { configureStore } from "@reduxjs/toolkit";

import mangasReducer from "../redux/reducers/mangas.js";
import authReducer from "./reducers/auth.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mangas: mangasReducer,
  },
})



