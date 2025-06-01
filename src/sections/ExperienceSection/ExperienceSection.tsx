import React from 'react';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../../components/Section/Section';

const experiences = [
    {
        title: 'University of Worcester',
        period: 'September 2021 - June 2024',
        description:
            'At the University of Worcester, I have pursued a comprehensive Computing degree, developing both theoretical knowledge and practical skills. My studies involved hands-on projects, collaborative teamwork, and research, equipping me with a strong foundation to tackle real-world challenges in technology and software development.',
    },
    {
        title: 'Huws Gray',
        period: 'June 2024 - Now',
        description:
            'At Huws Gray, I have contributed as both a web developer and an app developer, designing and implementing solutions to improve digital experiences and streamline business processes. My role involves full-stack development, collaborating across teams to deliver efficient and user-friendly applications.',
    },
];

const ExperienceSection: React.FC = () => {
    return (
        <Section title="Professional Experience">
            <Container className="mt-3">
                <Row className="gy-4 justify-content-center">
                    <Col xs={12} md={6} xl={4}>
                        {experiences.map((exp, index) => (
                            <React.Fragment key={exp.title}>
                                <ExperienceCard {...exp} />
                                {index < experiences.length - 1 && (
                                    <div className="my-2 mx-auto bg-primary rounded" style={{ height: '64px', width: '3px' }} />
                                )}
                            </React.Fragment>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default ExperienceSection;
