'use client';

import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

export default function AdmissionPage() {
  const { t } = useLanguage();

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">📝</span>
          {t.admissionInfo}
        </h3>
        <Row>
          <Col md={8}>
            <h5>{t.admissionProcess} 2024-25</h5>
            <p className="text-muted mb-4">Join our prestigious institution and be part of excellence in education.</p>
            
            <div className="mb-4">
              <h6 className="fw-bold">{t.admissionRequirements}</h6>
              <ul>
                <li>{t.applicationForm}</li>
                <li>{t.academicRecords}</li>
                <li>{t.birthCertificate}</li>
                <li>{t.photographs}</li>
                <li>{t.transferCertificate}</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h6 className="fw-bold">{t.importantDates}:</h6>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>{t.applicationStart}</span>
                <strong>1st January 2024</strong>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>{t.applicationDeadline}</span>
                <strong>31st March 2024</strong>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span>{t.admissionTest}</span>
                <strong>15th April 2024</strong>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Card className="border-info">
              <Card.Header className="bg-info text-white">
                <h6 className="mb-0">{t.quickApply}</h6>
              </Card.Header>
              <Card.Body>
                <Button variant="primary" className="w-100 mb-2">{t.downloadApplication}</Button>
                <Button variant="outline-primary" className="w-100 mb-2">{t.onlineApplication}</Button>
                <Button variant="outline-secondary" className="w-100">{t.contactAdmission}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}