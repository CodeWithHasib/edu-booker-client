import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AuthContext } from '../../context/AuthProvider';
const navLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'College',
        route: '/college'
    },
    {
        name: 'Classes',
        route: '/classes'
    }
];

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [, setIsLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navBg, setNavBg] = useState('bg-black');
    const [, setIsFixed] = useState(false);
    const { logout } = useAuth();
    const { user, setUser } = useContext(AuthContext)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handelLogout = () => {
        // e.preventDefault();
        Swal.fire({
            title: 'Are you sure to logout ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout.!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire(
                            'Logged out!',
                            'You are logged out successful.',
                            'success'
                        )
                        setUser(null);
                    })
                    .catch(err => {
                        Swal.fire(
                            'Error!',
                            err.message,
                            'error'
                        )
                    })
            }
        })
    }

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            if (isHome) {
                setNavBg('bg-black backdrop-filter backdrop-blur-xl bg-opacity-0  text-white text-black');
            }
            else {
                setNavBg('bg-white  text-white text-black');
            }
        } else {
            // setNavBg(`text-white ${isHome ? 'text-white bg-transparent' : 'text-black text-white '}`);
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white '} text-white text-white`);

        }
    }, [isHome, location.pathname, scrollPosition]);


    return (
        <motion.nav
            className={`bg-black  backdrop-blur-2xl  fixed  top-0 transition-colors duration-500 ease-in-out  w-full z-50`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="flex px-4 items-center justify-between py-4">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center">
                        <div className={`text-white`}>
                            <h1 className='text-2xl  inline-flex gap-3  items-center font-bold'>EduBooker</h1>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <FaBars className="h-6  hover:text-primary w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden  text-black md:block">
                        <div className="flex">
                            <ul className="ml-10 flex items-center space-x-4 pr-4">
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-blue-600' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-white'}`} hover:text-secondary duration-300`}
                                            to={link.route}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>


                                    </li>
                                ))}
                                {
                                    user && <li>
                                        <NavLink
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-blue-600' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-white'}`} hover:text-secondary duration-300`}
                                            to='/my-college'
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                           My College
                                        </NavLink>

                                    </li>
                                }
                                {
                                    user && <li>
                                        <span className='text-blue-500'>{user?.displayName}</span>
                                    </li>
                                }

                                {
                                    user ? <li>
                                        <button onClick={() => handelLogout()} className='px-3 py-1 bg-blue-500 rounded-lg text-white font-bold'>Logout</button>
                                    </li> : <li>
                                        <NavLink
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-blue-600' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-white'}`} hover:text-secondary duration-300`}
                                            to='/login'
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                }
                            </ul>

                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-2 w-full bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {navLinks.map((link) => (
                                <li key={link.route}>
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black'}`} hover:text-secondary duration-300`}
                                        to={link.route}
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        {link.name}
                                    </NavLink>


                                </li>
                            ))}

                            {/* Add more mobile menu links as needed */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default NavBar;
