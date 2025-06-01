import React from "react";
import { Link } from "react-router-dom";

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to={'/'} className="navbar-brand fw-bold">Matthew Bowman</Link>
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
                        {navLinks.map(({ name, href }) => (
                            <li key={name} className="nav-item">
                                <Link to={href} className="nav-link">{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;