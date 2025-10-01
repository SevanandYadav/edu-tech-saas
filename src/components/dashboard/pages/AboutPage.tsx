'use client';

import { School } from '@/lib/schools';
import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface AboutPageProps {
  school: School;
}

export default function AboutPage({ school }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">ℹ️</span>
          {t.aboutUs} {school.displayName}
        </h3>
        <Row>
          <Col md={8}>
            <h5>{t.ourMission}</h5>
            <p className="text-muted mb-4">
              {t.missionText}
            </p>
            
            <h5>{t.ourVision}</h5>
            <p className="text-muted mb-4">
              {t.visionText}
            </p>
            
            <h5>{t.coreValues}</h5>
            <Row>
              <Col md={6}>
                <ul>
                  <li>{t.excellenceEducation}</li>
                  <li>{t.integrityHonesty}</li>
                  <li>{t.respectDiversity}</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>{t.innovationCreativity}</li>
                  <li>{t.communityService}</li>
                  <li>{t.environmentalResponsibility}</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Card className="border-warning">
              <Card.Header className="bg-warning">
                <h6 className="mb-0">{t.quickFacts}</h6>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.established}</span>
                  <strong>1995</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.students}</span>
                  <strong>1,200+</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.teachers}</span>
                  <strong>80+</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>{t.campusSize}</span>
                  <strong>5 Acres</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}