import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    let location = useLocation();
    return (
        <nav className="in-navbar navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">✦ DevNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2">
                        {!localStorage.getItem('token') ? (
                            <>
                                <Link className="in-btn-auth" to="/login">Login</Link>
                                <Link className="in-btn-auth-primary" to="/signup">Get Started</Link>
                            </>
                        ) : (
                            <button onClick={handleLogout} className="in-btn-logout">
                                <i className="fa-solid fa-right-from-bracket me-1"></i> Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar