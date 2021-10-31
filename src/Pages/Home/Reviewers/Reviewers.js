import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';

let spinner = true;

const Reviewers = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://scary-wizard-25137.herokuapp.com/users')
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
        <div id="reviewers">
            <div className="row mx-5 mb-5">
                <h2 className="text-danger text-center my-5 display-2">Customer Review</h2>
                {
                    services.map(service =>
                        <div className="col-12 col-lg-2 mb-3">
                            <Card className="card-style text-center h-100">
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer>
                                    <small className="text-muted">Rating: {service.rating}</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviewers;