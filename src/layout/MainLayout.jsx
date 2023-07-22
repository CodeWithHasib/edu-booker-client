import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;