import React, { useState } from 'react'
// import "./Login.css"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div>
        <h1
        className='logo'
        >The Townie</h1>
        <div className='auth-form-container'>
            <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='test123@email.com' id='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Password' id='password' name='password' />
            <button className='login-btn' type='submit'>Log In</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}