import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { EXTERNAL_LINKS } from '../../data/routes';

const Hero: React.FC = () => {
    return (
        <header className="py-5 mb-4 bg-dark text-light">
            <div className="p-5 mb-4">
                <Container className="text-center">
                    <h1 className="display-4 fw-bold">Matthew Bowman</h1>
                    <p className="fs-5">Structured Systems Analyst & Full Stack Developer</p>
                    <Button
                        variant="outline-primary"
                        size="lg"
                        href={EXTERNAL_LINKS.GitHub.path}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Button>
                </Container>
            </div>
        </header>
    );
};

export default Hero;
