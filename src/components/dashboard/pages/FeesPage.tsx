'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

export default function FeesPage() {
  const { t } = useLanguage();

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">💳</span>
          {t.feeStructure}
        </h3>
        
        <div className="alert alert-info mb-4">
          <i className="bi bi-info-circle me-2"></i>
          <strong>Note:</strong> {t.loginNote}
        </div>
        
        <Row>
          <Col md={6}>
            <Card className="mb-3 border-primary">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">{t.academicYear}</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.tuitionFee}</span>
                  <strong>₹25,000</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.developmentFee}</span>
                  <strong>₹5,000</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.activityFee}</span>
                  <strong>₹3,000</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.libraryFee}</span>
                  <strong>₹1,500</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.sportsFee}</span>
                  <strong>₹2,000</strong>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                  <strong>{t.totalAnnualFee}</strong>
                  <strong>₹36,500</strong>
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
                  <h6 className="fw-bold">{t.installmentPlans}</h6>
                  <ul className="list-unstyled">
                    <li>• {t.annual}</li>
                    <li>• {t.quarterly}</li>
                    <li>• {t.monthly}</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">{t.paymentMethods}</h6>
                  <ul className="list-unstyled">
                    <li>• {t.onlinePayment}</li>
                    <li>• {t.bankTransfer}</li>
                    <li>• {t.cheque}</li>
                    <li>• {t.cash}</li>
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
                  <span>{t.feeDueDate}</span>
                  <strong>10th of each month</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t.lateFee}</span>
                  <strong>₹500 after due date</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>{t.annualDiscount}</span>
                  <strong>5% if paid by April 30</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}