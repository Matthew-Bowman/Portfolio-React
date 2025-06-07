import { type FC } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "../../data/navbarLinks";
import { ROUTES } from "../../data/routes";

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={ROUTES.Home.path} className="navbar-brand fw-bold">
          Matthew Bowman
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {NAVBAR_LINKS.map(({ label, path }) =>
              path ? (
                <li key={path} className="nav-item">
                  <Link to={path} className="nav-link">
                    {label}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
