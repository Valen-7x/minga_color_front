import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapter"
export const store= configureStore({
    reducer: {
        manga:mangaReducer,
        chapters:chapterReducer
    }
})