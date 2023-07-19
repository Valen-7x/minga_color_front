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
import EditChapter from "../src/componentes/EditChapter";
import ProtectedEdit from "../router/ProtectedEditChapter"
import MyMangas from "../src/componentes/MyMangas";
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
                path:"/:manga_id/chapther-form",
                element: (<NotAllowedProtected><ChapterForm/></NotAllowedProtected>),
              },
              {
                 path:"/mangasForm",
                 element: (<NotAllowedProtected><MangaForm/></NotAllowedProtected>),
              },
              {
                path:"/mangas",
                element: <Mangas/>
              } , 
              {
                path:"/mymangas",
                element: <MyMangas/>
              },
              {
                path:"/manga/:id",
                element:(<ProtectedLoger><MangaDetail/></ProtectedLoger>),
              },
              {
                path:"/chapters/:id/:page",
                element:(<ProtectedLoger><Chapters/></ProtectedLoger>),
              },
              {
                path:"/edit/:id_manga",
                element:(<ProtectedEdit><EditChapter/></ProtectedEdit>)
              }
              
        ],
      },
              {  
              path:"/not-allow",
                element:<NotAllowed/>
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