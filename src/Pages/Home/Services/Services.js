import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://scary-wizard-25137.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="mx-5">
            <h1 className="text-danger mt-5 text-center mb-5 display-2">Resort Services</h1>
            <div>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;