import { createBrowserRouter } from "react-router-dom";

import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import ChapterForm from "../src/componentes/ChapterForm";
import Main from "../src/layouts/Main";
import App from "../src/App";
import MangaForm from "../src/componentes/mangaForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/ChapterForm",
        element: <ChapterForm />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/MangaForm",
        element: <MangaForm />,
      },
    ],
  },
]);

export default router;



