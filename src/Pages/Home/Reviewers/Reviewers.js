import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const Reviewers = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
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