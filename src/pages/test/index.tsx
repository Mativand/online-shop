import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);
export const Routing = () => {
    return (
        <RouterProvider router={router} />
    );
};
