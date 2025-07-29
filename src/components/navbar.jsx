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
                            <a className="nav-link" href="/journey">Journey</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/works">Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/connect">Connect</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}
