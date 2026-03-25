import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="in-footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="in-footer-brand">✦ DevNotes</div>
                        <p className="in-footer-text">Securely store and organize your thoughts with DevNotes’ cloud-synced storage.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="in-footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <a href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                        </div>
                        <div className="in-footer-copy">
                            &copy; {new Date().getFullYear()} DevNotes. Created with passion.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
