import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <h1 className="ms-4 fw-semibold">yn_k</h1>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">   
                    <span className="navbar-toggler-icon"></span>                 
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-4">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">Experience</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/works">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/connect">Connect</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}
