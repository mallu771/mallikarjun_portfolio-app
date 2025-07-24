import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+, Highcharts Library)', 'Bootstrap 5', 'Responsive Design'],
  },
  {
    category: 'React.js Ecosystem',
    items: ['React.js', 'React Router', 'Redux', 'React Hooks', 'Axios'],
  },
  {
    category: 'Backend & Databases',
    items: ['Express.js',  'MongoDB', 'MySQL', 'JDBC (Java)'],
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
  },
  {
    category: 'Deployment & Platforms',
    items: ['Vercel', 'Render', 'Netlify', 'Docker (Basic)', 'GitHub Actions (CI/CD)'],
  },
  {
    category: 'Testing & Methodologies',
    items: ['Jest', 'React Testing Library', 'Agile Methodology', 'Jira (Task/Project Tracking)'],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-3 bg-light">
      <Container>
        <h2 className="text-center mb-3">Technical Skills</h2>
        <Row>
          {skills.map((skillGroup, index) => (
            <Col key={index} md={4} className="mb-2">
              <Card className="h-100 shadow-sm bg-primary">
                <Card.Body>
                  <Card.Title>{skillGroup.category}</Card.Title>
                  <ul className="list-unstyled mt-3">
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx}><i class="bi bi-circle-fill"></i> {item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
