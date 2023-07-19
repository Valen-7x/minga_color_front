import { createReducer } from "@reduxjs/toolkit"
import mangaActions from "../actions/mangaActions";
let { read_mangas, delete_mangas } = mangaActions
let initialState = {
    mangas: []
}
const mangaReducer = createReducer(initialState, (builder) => builder
    .addCase(read_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    })
    .addCase(delete_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    }))
export default mangaReducer