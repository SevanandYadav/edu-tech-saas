'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { School } from '@/lib/schools';
import { loadContent } from '@/lib/contentLoader';

interface AwardsPageProps {
  school: School;
}

interface Award {
  title: string;
  year: string;
  description: string;
  icon: string;
}

export default function AwardsPage({ school }: AwardsPageProps) {
  const { t } = useLanguage();
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadContent<Award[]>(school.slug, 'awards')
        .then(data => {
          setAwards(data || []);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load awards data:', err);
          setLoading(false);
        });
    }
  }, [school?.slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading awards...</span>
        </div>
      </div>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">🏆</span>
          Awards & Achievements
        </h3>
        <Row>
          {awards.map((award, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="border-warning">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div style={{ fontSize: '2rem' }}>{award.icon}</div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{award.title}</h6>
                      <small className="text-muted">{award.description}</small>
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