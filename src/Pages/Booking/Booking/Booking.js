import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const Booking = () => {
    const { serviceId } = useParams();
    const id = parseInt(serviceId);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const details = services.find(detail => detail.id === id)
    return (
        <div>
            {
                <Details details={details}></Details>
            }
        </div>
    );
};

export default Booking;