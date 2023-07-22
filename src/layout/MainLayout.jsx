import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;