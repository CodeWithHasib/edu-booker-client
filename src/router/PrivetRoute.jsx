import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
};

export default PrivetRoute;