'use client';

import { useState } from 'react';
import { Modal, Form, Button, Row, Col, Alert } from 'react-bootstrap';

interface OnlineApplicationFormProps {
  show: boolean;
  onHide: () => void;
  schoolName: string;
}

export default function OnlineApplicationForm({ show, onHide, schoolName }: OnlineApplicationFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    class: '',
    parentName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate email sending (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onHide();
        setFormData({
          studentName: '',
          dateOfBirth: '',
          gender: '',
          class: '',
          parentName: '',
          email: '',
          phone: '',
          address: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Failed to submit application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Online Application - {schoolName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? (
          <Alert variant="success" className="text-center">
            <h5>Application Submitted Successfully!</h5>
            <p>We will contact you within 2-3 business days.</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Student Name *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => handleChange('studentName', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth *</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender *</Form.Label>
                  <Form.Select
                    required
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Class Applying For *</Form.Label>
                  <Form.Select
                    required
                    value={formData.class}
                    onChange={(e) => handleChange('class', e.target.value)}
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Parent/Guardian Name *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => handleChange('parentName', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Address *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Modal.Body>
      {!success && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}