import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

let spinner = true;

const ManageAllOrders = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://scary-wizard-25137.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setUsers(data))
        if (users) {
            spinner = false;
        }
    }, [])

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }

    // delete an user
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://scary-wizard-25137.herokuapp.com/orders/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <h2 className="my-5 d-flex justify-content-center">Total Resort Booked: {users.length}</h2>

            <ul>
                {
                    users.map(item => <div
                        key={item._id}>
                        <div className="card mb-5 container card-style">
                            <div className="row g-0 mb-3">
                                <div className="col-md-4">
                                    <img className="mt-3 img-fluid" src={item.img} alt="..." />
                                    <br />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-warning mt-5" onClick={() => handleDeleteUser(item._id)}>Delete Order</button>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text"><strong>User Name: </strong>{item.userName}</p>
                                        <p className="card-text"><strong>Resort Name: </strong>{item.name}</p>
                                        <p className="card-text"><strong>Description:</strong>{item.description}</p>
                                        <p className="card-text"><strong>Country:</strong> {item.careTeam}</p>
                                        <p className="card-text"><strong>Address:</strong> {item.address}</p>
                                        <p className="card-text"><strong>No. of Travellers:</strong> {item.travellers}</p>
                                        <h3>Charge: {item.cost}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default ManageAllOrders;