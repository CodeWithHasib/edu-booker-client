import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { BarLoader } from 'react-spinners';
import MyCollegeComponents from '../../components/MyCollage/MyCollegeComponent';

const MyCollege = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/admission/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [user?.email]);

    if (loading) return <div className="h-screen w-full flex flex-col justify-center items-center">
        <BarLoader color="#36d7b7" />
    </div>

    else return (
        <div className='grid lg:grid-cols-2 mt-10 pt-10 bg-gray-100'>
            {
                data.map((item, index) => <MyCollegeComponents key={index} userData={item} />)
            }
        </div>
    );
};

export default MyCollege;