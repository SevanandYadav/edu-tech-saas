'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

export default function AwardsPage() {
  const { t } = useLanguage();

  const awards = [
    { year: '2024', title: t.bestSchoolAward, org: 'State Education Board' },
    { year: '2023', title: t.excellenceScience, org: 'National Science Foundation' },
    { year: '2023', title: t.sportsChampionship, org: 'Inter-School Sports League' },
    { year: '2022', title: t.digitalInnovation, org: 'Education Technology Council' },
    { year: '2022', title: t.environmentalExcellence, org: 'Green Schools Initiative' },
    { year: '2021', title: t.academicExcellence, org: 'Regional Education Authority' }
  ];

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">🏆</span>
          {t.awards} & {t.achievements}
        </h3>
        <Row>
          {awards.map((award, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="border-warning">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-trophy-fill text-warning" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{award.title}</h6>
                      <small className="text-muted">{award.org}</small>
                      <div className="badge bg-primary ms-2">{award.year}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}