'use client';

import { School } from '@/lib/schools';
import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { loadContent } from '@/lib/contentLoader';

interface AboutPageProps {
  school: School;
}

interface AboutData {
  mission: { title: string; text: string };
  vision: { title: string; text: string };
  coreValues: string[];
  quickFacts: {
    established: string;
    students: string;
    teachers: string;
    campusSize: string;
  };
}

export default function AboutPage({ school }: AboutPageProps) {
  const { t } = useLanguage();
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadContent<AboutData>(school.slug, 'about')
        .then(data => {
          setAboutData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load about data:', err);
          setLoading(false);
        });
    }
  }, [school?.slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading about...</span>
        </div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="text-center py-5">
        <h4>Unable to load about information</h4>
      </div>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">ℹ️</span>
          About {school.displayName}
        </h3>
        <Row>
          <Col md={8}>
            <h5>{aboutData.mission.title}</h5>
            <p className="text-muted mb-4">
              {aboutData.mission.text}
            </p>
            
            <h5>{aboutData.vision.title}</h5>
            <p className="text-muted mb-4">
              {aboutData.vision.text}
            </p>
            
            <h5>Core Values</h5>
            <Row>
              <Col md={6}>
                <ul>
                  {aboutData.coreValues.slice(0, Math.ceil(aboutData.coreValues.length / 2)).map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  {aboutData.coreValues.slice(Math.ceil(aboutData.coreValues.length / 2)).map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Card className="border-warning">
              <Card.Header className="bg-warning">
                <h6 className="mb-0">Quick Facts</h6>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Established:</span>
                  <strong>{aboutData.quickFacts.established}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Students:</span>
                  <strong>{aboutData.quickFacts.students}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Teachers:</span>
                  <strong>{aboutData.quickFacts.teachers}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Campus Size:</span>
                  <strong>{aboutData.quickFacts.campusSize}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}