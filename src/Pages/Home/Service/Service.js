import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, careTeam, description, img } = service;

    // console.log(service);
    return (
        <div id="services" className="service my-3 col-12 col-lg-4">
            <Card className="card-style text-center h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><strong>{name}</strong></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Country:</strong> {careTeam}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;