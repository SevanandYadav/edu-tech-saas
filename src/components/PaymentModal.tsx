'use client';

import { useState } from 'react';
import { Modal, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface PaymentModalProps {
  show: boolean;
  onHide: () => void;
}

export default function PaymentModal({ show, onHide }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const { t } = useLanguage();

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', icon: 'bi-phone' },
    { id: 'card', name: 'Credit/Debit Card', icon: 'bi-credit-card' },
    { id: 'netbanking', name: 'Net Banking', icon: 'bi-bank' },
    { id: 'wallet', name: 'Digital Wallet', icon: 'bi-wallet2' }
  ];

  const generateQRCode = () => {
    // Simple QR code placeholder - in real app, use proper QR library
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZiIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0Ij5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4K";
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="bi bi-credit-card me-2"></i>
          Pay School Fees
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <h6 className="fw-bold">Fee Amount: ₹36,500</h6>
          <small className="text-muted">Academic Year 2024-25</small>
        </div>

        <h6 className="fw-bold mb-3">Select Payment Method:</h6>
        <Row>
          {paymentMethods.map((method) => (
            <Col md={6} key={method.id} className="mb-3">
              <Card 
                className={`h-100 cursor-pointer ${selectedMethod === method.id ? 'border-primary bg-primary bg-opacity-10' : ''}`}
                onClick={() => setSelectedMethod(method.id)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="text-center">
                  <i className={`${method.icon} fs-2 mb-2`}></i>
                  <div className="fw-bold">{method.name}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedMethod === 'upi' && (
          <div className="mt-4 text-center">
            <h6 className="fw-bold mb-3">Scan QR Code to Pay</h6>
            <div className="d-flex justify-content-center mb-3">
              <img 
                src={generateQRCode()} 
                alt="UPI QR Code" 
                className="border"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            <div className="text-muted small">
              <p>UPI ID: school@paytm</p>
              <p>Amount: ₹36,500</p>
              <p>Scan with any UPI app to pay</p>
            </div>
          </div>
        )}

        {selectedMethod && selectedMethod !== 'upi' && (
          <div className="mt-4 text-center">
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              {selectedMethod === 'card' && 'You will be redirected to secure card payment gateway.'}
              {selectedMethod === 'netbanking' && 'You will be redirected to your bank\'s website.'}
              {selectedMethod === 'wallet' && 'You will be redirected to wallet payment page.'}
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        {selectedMethod && (
          <Button variant="primary">
            {selectedMethod === 'upi' ? 'Verify Payment' : 'Proceed to Pay'}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}