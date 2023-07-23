import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{to : location.pathname}} />
    } else {
        return children;
    }
};

export default PrivetRoute;