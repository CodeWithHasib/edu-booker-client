import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer';
import { useAuth } from '../hooks/useAuth';
import { BarLoader } from 'react-spinners'
const MainLayout = () => {
    const { loader } = useAuth();
    useEffect(() => {
        AOS.init();
    }, []);

    if (loader) {
        return <div className="h-screen w-full flex flex-col justify-center items-center">
            <BarLoader color="#36d7b7" />
        </div>
    }


    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;