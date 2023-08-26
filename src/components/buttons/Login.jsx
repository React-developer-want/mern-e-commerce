import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Login = () => {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prev)=> ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userDetails;
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const token = result.user.accessToken;
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            console.log('Successfully logged in!');
            window.location.reload();
        } catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage);   
        }
    }
    const isFormFilled = !Object.values(userDetails).reduce((acc, item)=> (acc && !!item), true);

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" name='password' onChange={handleChange} className="form-label">Password</label>
                                    <input type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" disabled={isFormFilled}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
