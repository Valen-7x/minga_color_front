import { createBrowserRouter } from "react-router-dom";
import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ChapterForm from "../src/componentes/ChapterForm";
import Chapters from "../src/componentes/Chapters";
import MangaForm from "../src/componentes/MangaForm";
import MangaDetail from "../src/componentes/MangaDetail";
import ProtectedLoger from "./ProtectedLoger";
import Mangas from "../src/componentes/mangas";
import ProtectedLogin from "./ProtectedLogin";

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
                path: "/not-allow",
                element:  <NotAllowed/> ,
              },
              {
                path:"/:manga_id/chapther-form",
                element: (<NotAllowedProtected><ChapterForm/></NotAllowedProtected>),
              },
              {
                path:"/mangasForm",
                element: (<NotAllowedProtected><MangaForm/></NotAllowedProtected>),
             },
             
              {
                path:"/manga",
                element: <Mangas/>
              },
              {
                path:"/manga/:id",
                element:(<ProtectedLoger><MangaDetail/></ProtectedLoger>),
              },
              {
                path:"/chapters/:id/:page",
                element:(<ProtectedLoger><Chapters/></ProtectedLoger>),
              },
                
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