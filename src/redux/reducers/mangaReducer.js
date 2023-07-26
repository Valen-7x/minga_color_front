import { createReducer } from "@reduxjs/toolkit"
import mangaActions from "../actions/mangaActions";
// desestructuración para extraer las acciones
let { read_mangas, delete_mangas, update_mangas } = mangaActions
let initialState = {
    mangas: []
}
const mangaReducer = createReducer(initialState, (builder) => builder
    .addCase(read_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload //se actualiza tomando la lista de mangas proporcionada por la acción
        }
        return newState
    })
    .addCase(delete_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    })
    .addCase(update_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    })
    )
export default mangaReducer