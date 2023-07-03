import { createBrowserRouter } from "react-router-dom";

import ChapterForm from "../src/componentes/ChapterForm";
import Main from "../src/layouts/Main";
import App from "../src/App";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element: <App/>
            }
        ]
    },
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/ChapterForm',
                element: <ChapterForm/>
            }
        ]
    },
])
export default router
