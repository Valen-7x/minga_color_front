import { createBrowserRouter } from "react-router-dom";

import SignIn from "../src/componentes/SignIn";
import SignUp from "../src/componentes/SignUp";
import Main from "../src/layouts/Main";
import App from "../src/App";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[            
            {
                path:'/',
                element: <App/>
            }
        ]
    },
    {
    path:"/",
    element:<Main/>,
    children:[            
        {
            path:'/signup',
            element: <SignUp/>
        }
    ]}
])
export default router