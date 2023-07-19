import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <>
            <Outlet />
            <Footer bgcolor="gainsboro" textColor="#000000" />
        </>
    );
};

export default Layout;