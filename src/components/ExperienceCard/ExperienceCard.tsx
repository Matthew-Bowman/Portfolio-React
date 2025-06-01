import React from 'react';
import { Card } from 'react-bootstrap';

type ExperienceCardProps = {
  title: string;
  period: string;
  description: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, period, description }) => (
  <Card className="shadow mb-3">
    <Card.Header>
      <h3 className="fw-bold m-0">{title}</h3>
      <h6 className="fw-bold m-0">{period}</h6>
    </Card.Header>
    <Card.Body>
      <p className="card-text">{description}</p>
    </Card.Body>
  </Card>
);

export default ExperienceCard;
