import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

let spinner = true;

const Services = () => {
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

    return (
        <div className="mx-5">
            <h1 className="text-danger mt-5 text-center mb-5 display-2">Resort Services</h1>
            <div>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                            spinner={spinner}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;