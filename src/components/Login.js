import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const host = process.env.REACT_APP_BACKEND_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.token) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.token);
            navigate("/");
            props.showAlert("Logged in Successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
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

                <h1 className="in-auth-title">Welcome back</h1>
                <p className="in-auth-subtitle">Sign in to access your notes</p>

                <form onSubmit={handleSubmit}>
                    <div className="in-form-group" style={{marginBottom:'1rem'}}>
                        <label className="in-label" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            className="in-input"
                            value={credentials.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                        />
                        <p className="in-auth-help">We'll never share your email with anyone else.</p>
                    </div>
                    <div className="in-form-group" style={{marginBottom:'1.5rem'}}>
                        <label className="in-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="in-input"
                            value={credentials.password}
                            onChange={onChange}
                            id="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="in-btn-primary in-btn-primary-full">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                    </button>
                </form>

                <div className="in-auth-footer">
                    Don't have an account? <Link to="/signup">Create one</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
