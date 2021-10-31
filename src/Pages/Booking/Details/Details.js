import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Details.css'

const Details = (props) => {
    const { name, careTeam, description, img, cost } = props?.details || {};
    const { user } = useAuth();
    // console.log(name);
    const addressRef = useRef();
    const travellersRef = useRef();

    const handleAddUser = e => {
        const address = addressRef.current.value;
        const travellers = travellersRef.current.value;

        const newUser = { name, address, travellers, description, img, cost, careTeam, userEmail, userName };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User added Successfully.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    // need to sent user email
    const userEmail = user?.email;
    const userName = user?.displayName;

    return (
        <div>
            <h1 className="my-5 d-flex justify-content-center text-danger">{name}</h1>
            <div className="card mb-5 container card-style">
                <div className="row g-0 mb-3">
                    <div className="col-md-4">
                        <img className="mt-3 img-fluid" src={img} alt="..." />
                        <br />
                        <div className="d-flex justify-content-between">
                            <form onSubmit={handleAddUser}>
                                <input className="btn btn-warning mt-5" type="submit" value="Press for Booking" />
                            </form>
                            <button className="btn btn-danger mt-5">Call Emergency</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{description}</p>
                            <p className="card-text"><strong>Country:</strong> {careTeam}</p>
                            {/* <div className="mb-3">
                                <form action="/action_page.php">
                                    <label for="birthdaytime" className="me-3"><strong>Booking Schedule:</strong> </label>
                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                </form>
                            </div> */}
                            <h3 className="mb-3">Charge: {cost}</h3>
                            <form className="d-flex">
                                <div>
                                    <p className="card-text"><strong>Address:</strong></p>
                                    <input className="mb-3 me-5" type="text" ref={addressRef} />
                                </div>
                                <div>
                                    <p className="card-text"><strong>Total Travellers:</strong></p>
                                    <input type="text" ref={travellersRef} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;