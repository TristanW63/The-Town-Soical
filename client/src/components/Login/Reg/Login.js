import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import { Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Login.css"
import Register from './Register';

export const Login = (props) => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, {error}] = useMutation(LOGIN_USER);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userData },
            });
            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserData({
            username: "",
            email: "",
            password: "",
        });
    };
//       const [currentForm, setCurrentForm] = useState( 'login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName)
//   }
    return (
        <div className='App'>
        <h1
        className='logo'
        >The Townie</h1>
        <div className='auth-form-container'>
            <h2>Login</h2>
        <form noValidate validated={validated} className='login-form' onSubmit={handleSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                Something went wrong with your login credentials!
            </Alert>
            <label htmlFor='email'>Email</label>
            <input required value={userData.email} onChange={handleInput} type='email' placeholder='test123@email.com' id='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input required value={userData.password} onChange={handleInput} type='password' placeholder='Password' id='password' name='password' />
            <button disabled={!(userData.email && userData.password)} className='login-btn' type='submit'>Log In</button>
        </form>
        <Link to="/register" className='Logintext'>
										{"Don't have an account? Sign Up"}
									</Link>
        {/* <button className='link-btn'  onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
        </div>
    );
};

export default Login;