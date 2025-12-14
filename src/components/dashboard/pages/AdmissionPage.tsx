'use client';

import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { School } from '@/lib/schools';
import { loadAdmissionData, AdmissionData } from '@/lib/contentLoader';
import OnlineApplicationForm from '@/components/OnlineApplicationForm';

interface AdmissionPageProps {
  school: School;
}

export default function AdmissionPage({ school }: AdmissionPageProps) {
  const { t } = useLanguage();
  const [admissionData, setAdmissionData] = useState<AdmissionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleActionClick = async (action: any) => {
    if (action.action === 'download') {
      try {
        const response = await fetch(action.link);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'admission-form.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
      }
    } else if (action.action === 'link' && action.title.includes('Online')) {
      setShowApplicationForm(true);
    } else if (action.action === 'contact') {
      window.location.href = action.link;
    } else {
      // Handle regular links
      window.open(action.link, '_blank');
    }
  };

  useEffect(() => {
    if (school?.slug) {
      loadAdmissionData(school.slug)
        .then(data => {
          setAdmissionData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load admission data:', err);
          setLoading(false);
        });
    }
  }, [school?.slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading admission info...</span>
        </div>
      </div>
    );
  }

  if (!admissionData) {
    return (
      <div className="text-center py-5">
        <h4>Unable to load admission information</h4>
      </div>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">📝</span>
          {t.admissionInfo || 'Admission Information'}
        </h3>
        <Row>
          <Col md={8}>
            <h5>{admissionData.title}</h5>
            <p className="text-muted mb-4">{admissionData.description}</p>
            
            <div className="mb-4">
              <h6 className="fw-bold">Admission Requirements:</h6>
              <ul>
                {admissionData.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h6 className="fw-bold">Important Dates:</h6>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Application Start</span>
                <strong>{admissionData.importantDates.applicationStart}</strong>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Application Deadline</span>
                <strong>{admissionData.importantDates.applicationDeadline}</strong>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span>Admission Test</span>
                <strong>{admissionData.importantDates.admissionTest}</strong>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Card className="border-info">
              <Card.Header className="bg-info text-white">
                <h6 className="mb-0">{t.quickApply || 'Quick Apply'}</h6>
              </Card.Header>
              <Card.Body>
                {admissionData.quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant={action.type} 
                    className="w-100 mb-2"
                    onClick={() => handleActionClick(action)}
                  >
                    {action.action === 'download' && '📥 '}
                    {action.action === 'contact' && '📞 '}
                    {action.action === 'link' && '🌐 '}
                    {action.title}
                  </Button>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
      
      <OnlineApplicationForm 
        show={showApplicationForm}
        onHide={() => setShowApplicationForm(false)}
        schoolName={school.name}
      />
    </Card>
  );
}