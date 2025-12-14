'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { School } from '@/lib/schools';
import { loadContent } from '@/lib/contentLoader';

interface FeesPageProps {
  school: School;
}

interface FeesData {
  academicYear: string;
  feeStructure: {
    tuitionFee: string;
    developmentFee: string;
    activityFee: string;
    libraryFee: string;
    sportsFee: string;
    totalAnnualFee: string;
  };
  paymentOptions: {
    annual: { title: string; amount: string };
    quarterly: { title: string; amount: string };
    monthly: { title: string; amount: string };
  };
  paymentMethods: string[];
  importantDates: {
    feeDueDate: string;
    lateFee: string;
    annualDiscount: string;
  };
}

export default function FeesPage({ school }: FeesPageProps) {
  const { t } = useLanguage();
  const [feesData, setFeesData] = useState<FeesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadContent<FeesData>(school.slug, 'fees')
        .then(data => {
          setFeesData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load fees data:', err);
          setLoading(false);
        });
    }
  }, [school?.slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading fees...</span>
        </div>
      </div>
    );
  }

  if (!feesData) {
    return (
      <div className="text-center py-5">
        <h4>Unable to load fees information</h4>
      </div>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">💳</span>
          {t.feeStructure || 'Fee Structure'}
        </h3>
        
        <div className="alert alert-info mb-4">
          <i className="bi bi-info-circle me-2"></i>
          <strong>Note:</strong> {t.loginNote || 'Please login to view your personalized fee details and make payments.'}
        </div>
        
        <Row>
          <Col md={6}>
            <Card className="mb-3 border-primary">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">Academic Year {feesData.academicYear}</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tuition Fee (Annual):</span>
                  <strong>{feesData.feeStructure.tuitionFee}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Development Fee:</span>
                  <strong>{feesData.feeStructure.developmentFee}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Activity Fee:</span>
                  <strong>{feesData.feeStructure.activityFee}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Library Fee:</span>
                  <strong>{feesData.feeStructure.libraryFee}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sports Fee:</span>
                  <strong>{feesData.feeStructure.sportsFee}</strong>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                  <strong>Total Annual Fee:</strong>
                  <strong>{feesData.feeStructure.totalAnnualFee}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3 border-info">
              <Card.Header className="bg-info text-white">
                <h5 className="mb-0">{t.paymentOptions}</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <h6 className="fw-bold">Installment Plans:</h6>
                  <ul className="list-unstyled">
                    <li>• {feesData.paymentOptions.annual.title}</li>
                    <li>• {feesData.paymentOptions.quarterly.title}</li>
                    <li>• {feesData.paymentOptions.monthly.title}</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Payment Methods:</h6>
                  <ul className="list-unstyled">
                    {feesData.paymentMethods.map((method, index) => (
                      <li key={index}>• {method}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="border-warning">
              <Card.Header className="bg-warning">
                <h6 className="mb-0">{t.importantDates}</h6>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Fee Due Date:</span>
                  <strong>{feesData.importantDates.feeDueDate}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Late Fee:</span>
                  <strong>{feesData.importantDates.lateFee}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Annual Discount:</span>
                  <strong>{feesData.importantDates.annualDiscount}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}