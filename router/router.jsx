import { createBrowserRouter } from "react-router-dom";

import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ChapterForm from "../src/componentes/ChapterForm";
import MangaForm from "../src/componentes/MangaForm";
import Manga from "../src/componentes/mangas";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[            
            {
                path:'/',
                element: <App/>
            },
            {
                path: "/not-allowed",
                element:  <NotAllowed/> ,
              },
              {
                path:"/:manga_id/chapther-form",
                element: <ChapterForm/>,
              },
              {
                path:"/mangas",
                element: <MangaForm/>
              },
              {
                path:"/manga",
                element: <Manga/>
              }    
        ]
    },
          
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path: "/SignIn",
            element: <SignIn />,
        
          },
          
])
export default router