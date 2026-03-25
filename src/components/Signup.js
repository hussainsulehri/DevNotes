import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const host = process.env.REACT_APP_BACKEND_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`${host}/api/auth/create_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.token) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.token);
            navigate("/");
            props.showAlert("Account Created Successfully", "success");
        }
        else {
            props.showAlert("Invalid Details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="in-auth-page">
            <div className="in-auth-card">
                <div className="in-auth-logo">
                    <span className="in-auth-logo-text">✦ DevNotes</span>
                    <span className="in-auth-logo-sub">Your secure, personal notebook</span>
                </div>

                <h1 className="in-auth-title">Create account</h1>
                <p className="in-auth-subtitle">Start organizing your thoughts in seconds</p>

                <form onSubmit={handleSubmit}>
                    <div className="in-form-group" style={{marginBottom:'1rem'}}>
                        <label className="in-label" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            className="in-input"
                            id="name"
                            name="name"
                            onChange={onChange}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="in-form-group" style={{marginBottom:'1rem'}}>
                        <label className="in-label" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            className="in-input"
                            id="email"
                            name="email"
                            onChange={onChange}
                            placeholder="you@example.com"
                        />
                        <p className="in-auth-help">We'll never share your email with anyone else.</p>
                    </div>
                    <div className="in-form-group" style={{marginBottom:'1rem'}}>
                        <label className="in-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="in-input"
                            id="password"
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Min. 5 characters"
                        />
                    </div>
                    <div className="in-form-group" style={{marginBottom:'1.5rem'}}>
                        <label className="in-label" htmlFor="cpassword">Confirm Password</label>
                        <input
                            type="password"
                            name="cpassword"
                            className="in-input"
                            id="cpassword"
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Repeat your password"
                        />
                    </div>
                    <button type="submit" className="in-btn-primary in-btn-primary-full">
                        <i className="fa-solid fa-user-plus"></i> Create Account
                    </button>
                </form>

                <div className="in-auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
