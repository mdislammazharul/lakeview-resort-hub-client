import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Details from '../Details/Details';

let spinner = true;

const Booking = () => {
    const { serviceId } = useParams();
    const id = parseInt(serviceId);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://scary-wizard-25137.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
        if (services) {
            spinner = false;
        }
    }, []);

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }

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