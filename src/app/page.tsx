'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllSchools } from '@/lib/schools';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { languageNames } from '@/lib/i18n';

function HomeContent() {
  const [schoolName, setSchoolName] = useState('');
  const router = useRouter();
  const schools = getAllSchools();
  const { language, changeLanguage, t } = useLanguage();

  const handleSchoolSelect = (name: string) => {
    router.push(`/school/${name}`);
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="position-absolute top-0 end-0 m-3">
              <Dropdown>
                <Dropdown.Toggle 
                  variant="outline-secondary" 
                  size="sm"
                  className="fw-semibold px-3 py-2"
                >
                  <i className="bi bi-translate me-2"></i>
                  {languageNames[language]}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>{t.language}</Dropdown.Header>
                  {Object.entries(languageNames).map(([code, name]) => (
                    <Dropdown.Item 
                      key={code}
                      onClick={() => changeLanguage(code as any)}
                      className={language === code ? 'active' : ''}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h1 className="display-4 fw-bold text-dark mb-4">
              EduTech Portal
            </h1>
            <p className="lead text-muted mb-5">
              Digital Learning Platform for Schools
            </p>
          </div>
        </Container>

        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="shadow-lg border-0">
                <Card.Body className="p-4">
                  <Card.Title className="h4 fw-bold text-center mb-4">
                    Access Your School Portal
                  </Card.Title>
                  
                  <div className="text-center">
                    <Dropdown className="d-grid">
                      <Dropdown.Toggle 
                        variant="primary" 
                        size="lg" 
                        className="fw-semibold py-3"
                      >
                        <i className="bi bi-building me-2"></i>
                        {t.selectSchool}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="w-100 shadow-lg">
                        <Dropdown.Header className="text-muted small fw-bold">
                          AVAILABLE SCHOOLS
                        </Dropdown.Header>
                        {schools.map((school) => (
                          <Dropdown.Item 
                            key={school.id}
                            onClick={() => handleSchoolSelect(school.name)}
                            className="py-3"
                          >
                            <div>
                              <div className="fw-bold">{school.displayName}</div>
                              <small className="text-muted">{school.location}</small>
                            </div>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}