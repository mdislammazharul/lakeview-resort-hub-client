import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="mx-5 row d-flex align-items-center">
            <div className="col col-lg-6 col-12">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col col-lg-6 col-12">
                <h2 className="mt-5 mb-3 text-primary">Login In With</h2>
                <div className="d-flex mb-3">
                    <button onClick={handleGoogleLogin} className="btn btn-warning me-5"><i class="fab fa-google"></i> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;