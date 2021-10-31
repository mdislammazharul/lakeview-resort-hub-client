import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../../images/banner/11.jpg'
import second from '../../../images/banner/12.jpg'
import third from '../../../images/banner/13.jpg'
import fourth from '../../../images/banner/14.jpg'
import fifth from '../../../images/banner/15.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel className="text-center" indicators={false}>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block img-fluid"
                            src={first}
                            alt="First slide"
                        />
                        <h1 className="center text-danger fw-bold">The Lind Boracay</h1>
                        <p className="center-p text-dark fw-bold">Book your favourite resorts from anywhere.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block img-fluid"
                            src={second}
                            alt="Second slide"
                        />
                        <h1 className="center text-danger fw-bold">SereneStay Resort</h1>
                        <p className="center-p text-dark fw-bold">Book your favourite resorts from anywhere.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block img-fluid"
                            src={third}
                            alt="Third slide"
                        />
                        <h1 className="center text-danger fw-bold">Harborview Resort</h1>
                        <p className="center-p text-dark fw-bold">Book your favourite resorts from anywhere.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block img-fluid"
                            src={fourth}
                            alt="Fourth slide"
                        />
                        <h1 className="center text-danger fw-bold">Night In Paradise</h1>
                        <p className="center-p text-dark fw-bold">Book your favourite resorts from anywhere.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block img-fluid"
                            src={fifth}
                            alt="Fifth slide"
                        />
                        <h1 className="center text-danger fw-bold">Paradise Inn</h1>
                        <p className="center-p text-dark fw-bold">Book your favourite resorts from anywhere.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;