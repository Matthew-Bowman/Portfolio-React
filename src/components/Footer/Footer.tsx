import { type FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { footerCategories } from '../../data/footerLinks';

const Footer: FC = () => {
    return (
        <footer className="py-5 mt-4 bg-dark text-light">
            <Container>
                <Row className="justify-content-between align-items-start">
                    <Col md="auto" className="mb-4 mb-md-0 text-center text-md-start">
                        <h2 className="fw-bold">Matthew Bowman</h2>
                        <p className="mb-0">© {new Date().getFullYear()} Matthew Bowman. All rights reserved.</p>
                    </Col>

                    {footerCategories.map(({ title, links }) => (
                        <Col key={title} xs={6} md="auto" className="mb-4 mb-md-0">
                            <h3 className="fw-semibold">{title}</h3>
                            <ul className="list-unstyled">
                                {links.map(({ label, path, external }) => (
                                    <li key={path} className="mb-2">
                                        {external ? (
                                            <a
                                                href={path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-light text-decoration-none"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={path}
                                                className="text-light text-decoration-none"
                                            >
                                                {label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    ))}

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
