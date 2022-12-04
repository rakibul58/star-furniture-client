import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../../Components/Contact/Contact';
import Home from '../../Components/Home/Home';
import Main from '../../layout/Main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
]);

export default routes;