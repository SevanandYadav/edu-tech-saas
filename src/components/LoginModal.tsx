'use client';

import { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';
import { useUser } from '@/contexts/UserContext';

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
  loginType: string;
}

export default function LoginModal({ show, onHide, loginType }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { login } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Demo credentials validation
    if (username === 'demo' && password === 'demo') {
      setTimeout(() => {
        login(username, loginType);
        setLoading(false);
        onHide();
        setUsername('');
        setPassword('');
      }, 1000);
    } else {
      setTimeout(() => {
        setError('Invalid credentials. Use demo/demo to login.');
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="bi bi-person-circle me-2"></i>
          {loginType}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}