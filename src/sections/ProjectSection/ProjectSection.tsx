import {type FC} from 'react'

import Section from '../../components/Section/Section';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import type { ProjectType } from '../../data/projects';

type ProjectSectionProps = {
    title: string;
    projects: ProjectType[];
};

const ProjectSection: FC<ProjectSectionProps> = ({
    title,
    projects
}) => {
    return (
        <Section title={title}>
            <Container className="mt-3 text-center">
                <Row className="gy-4 justify-content-center">
                    {projects.map((project) => (
                        <Col key={project.title} xs={12} md={6} xl={4}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Section>
    );
};

export default ProjectSection;
