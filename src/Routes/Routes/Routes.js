import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../../Components/AddServices/AddServices';
import UpdateModal from '../../Components/Card/UpdateModal';
import Contact from '../../Components/Contact/Contact';
import Banner from '../../Components/Home/Banner';
import FAQ from '../../Components/Home/FAQ';
import Home from '../../Components/Home/Home';
import Info from '../../Components/Home/Info';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Login/Register';
import Services from '../../Components/services/services';
import Main from '../../layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/banner',
                element: <Banner />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/updatemodal/:id',
                loader: async ({ params }) => fetch(`https://star-furniture-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><UpdateModal></UpdateModal></PrivateRoute>
            },
            {
                path: '/info',
                element: <Info></Info>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
        ]
    }
]);

export default routes;