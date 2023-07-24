import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CollegeDetails from '../../components/details/CollegeDetails';

const Details = () => {
    const college = useLoaderData();

    return (
        <div>
            <CollegeDetails id={college._id} college={college} />
        </div>
    );
};

export default Details;