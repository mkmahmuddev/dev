import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home';


const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />

    );
};

export default Router;