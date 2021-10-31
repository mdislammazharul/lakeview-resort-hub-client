import React, { useEffect, useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';

let spinner = true;

const FAQ = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://scary-wizard-25137.herokuapp.com/faq')
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