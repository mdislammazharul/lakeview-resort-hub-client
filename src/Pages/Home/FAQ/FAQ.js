import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faq')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="faq">
            <div className="row mx-5 mb-5">
                <h2 className="text-danger text-center my-5 display-2">Frequently Asked Questions</h2>
                {
                    services.map(service =>
                        // console.log(service)
                        <Accordion className="text-center">
                            <Accordion.Item eventKey={service.id}>
                                <Accordion.Header>{service.name}</Accordion.Header>
                                <Accordion.Body>
                                    {service.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
            </div>
        </div >
    );
};

export default FAQ;