import { createAction } from "@reduxjs/toolkit"
const datos_manga = createAction(
'datos_manga', //nombre de la accion
(objeto) => { //funcion que va a enviar datos al reductor 
               //el objeto debe tener todas las propiedades a guardarse en el estado global
               console.log(objeto)
return {
 payload: objeto 
}
}
)


const mangaActions = { datos_manga}
export default mangaActions