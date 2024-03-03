import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {GenresPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            },
            {
                path:'overview/:id', element:<MovieInfoPage/>
            }
        ]
    }
])

export {router}