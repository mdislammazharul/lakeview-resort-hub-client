import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Login = () => {
    const { email, password, setError, handleRegistration, isLogin, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword, processLogin, signInUsingGoogle, signInUsingGithub, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // console.log(history);
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    const handleProcessLogin = () => {
        processLogin(email, password)
            .then(result => {
                setError('');
                console.log(result)
                if (result?.user !== undefined) {
                    history.push(redirect_uri);
                }
            })
    }

    return (
        <div className="mx-5 row d-flex align-items-center">
            <div className="col col-lg-6 col-12">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col col-lg-6 col-12">
                <form onSubmit={handleRegistration}>
                    <h2 className="text-primary mb-5">Please {isLogin ? 'Login' : 'Register'}</h2>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-7">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-7">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-7">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="d-flex">
                        <button onClick={handleProcessLogin} type="submit" className="btn btn-primary me-3">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <button type="button" onClick={handleResetPassword} className="btn btn-danger">Reset Password</button>
                    </div>

                </form>
                <h2 className="mt-5 mb-3 text-primary">Login In With</h2>
                <div className="d-flex mb-3">
                    <button onClick={handleGoogleLogin} className="btn btn-warning me-5"><i class="fab fa-google"></i> Google Sign In</button>
                    <button onClick={handleGithubLogin} className="btn btn-warning"><i class="fab fa-github"></i> Github Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;