import { Link } from "react-router-dom";

const NavBar = ({ navItems }: { navItems: string[] }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    POS
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                className="nav-link active"
                                aria-current="page"
                                to={item}
                            >
                                {item}
                            </Link>
                        ))}
                    </ul>
                    <div className="avatar-container nav-item">
                        <div className="avatar">
                            <img src="assets/img/avatar.png" alt="img" />
                        </div>
                        <h3>Dilshan</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
