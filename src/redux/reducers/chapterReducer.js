import { createReducer } from "@reduxjs/toolkit";
import chapterActions from "../actions/chapterActions.js";
const { get_chapters_data, update_chapters_data, delete_chapters_data } =
  chapterActions;
const initialState = {
  chapters: [],
};

const chaptersEditReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(get_chapters_data.fulfilled, (state, action) => {
      const newState = {
        ...state,
        chapters: action.payload,
      };
      return newState;
    })
    .addCase(update_chapters_data.fulfilled, (state, action) => {
      // Actualizar el estado local con los datos actualizados del capítulo
      const updatedChapter = state.chapters?.map((chapter) => {
        if (chapter?._id === action.payload?._id) {
          return action.payload; //devuelve el actualizado//
        }
        return chapter; //devuelve el no actualizado//
      });
      return {
        ...state,
        chapters: updatedChapter,
      };
    })
    .addCase(delete_chapters_data.fulfilled, (state, action) => {
      // Eliminar el capítulo del estado local después de eliminarlo en el servidor
      const filteredChapters = state.chapters.filter(
        (chapter) => chapter._id !== action.payload._id
      );
      return {
        ...state,
        chapters: filteredChapters,
      };
    });
});

export default chaptersEditReducer;
