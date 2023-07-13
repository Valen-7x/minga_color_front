import { createBrowserRouter } from "react-router-dom";
import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ChapterForm from "../src/componentes/ChapterForm";
import MangaForm from "../src/componentes/MangaForm";

import Mangas from "../src/componentes/mangas";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedLoger from "./ProtectedLoger";
import MangaDetail from "../src/componentes/MangaDetail";
import Chapters from "../src/componentes/Chapters";

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
                path: "/Mangas",
                element: <Manga/>
              },
              {
                path:"/:manga_id/chapther-form",
                element: (<NotAllowedProtected><ChapterForm/></NotAllowedProtected>),
              },
              {
                 path:"/mangaForm",
                 element: (<NotAllowedProtected><MangaForm/></NotAllowedProtected>),
              },
              {

                path:"/manga",
                element: <Mangas/>
              }  
        ]

                path:"/not-allow",
                element:<NotAllowed/>
              },
              {
                path:"/manga/:id",
                element:(<ProtectedLoger><MangaDetail/></ProtectedLoger>),
              },
              {
                path:"/chapters/:id/:page",
                element:(<ProtectedLoger><Chapters/></ProtectedLoger>),
              }
              
]

    },
          
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path: "/SignIn",
            element: (<ProtectedLogin><SignIn /></ProtectedLogin>),
        
          },
          
])
export default router