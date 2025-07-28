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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Capabilities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Connect</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}
