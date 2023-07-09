import { Navigate, createBrowserRouter } from "react-router-dom";

import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ChapterForm from "../src/componentes/ChapterForm";
import MangaForm from "../src/componentes/MangaForm";

let token = localStorage.getItem('token');


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: "/not-allowed",
        element: <NotAllowed />,
      },
      {
        path: "/:manga_id/chapther-form",
        element: <ChapterForm />,
      },
      {
        path: "/mangas",
        element:  <MangaForm />
      }
    ]
  },

  {
    path: '/signup',
    element: !token ? <SignUp /> : <Navigate to="/not-allowed2" />
  },
  {
    path: "/SignIn",
    element: !token ? <SignIn /> : <Navigate to="/not-allowed2" />

  },
  {
    path: "/not-allowed2",
    element: <NotAllowed />,
  },



])
export default router