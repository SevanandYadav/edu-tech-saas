'use client';

import { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/hooks/useLanguage';
import PaymentModal from './PaymentModal';
import ResultsModal from './ResultsModal';
import PhotoUploadModal from './PhotoUploadModal';

interface UserMenuProps {
  school: any;
  onPhotosUploaded?: (photos: any[]) => void;
}

export default function UserMenu({ school, onPhotosUploaded }: UserMenuProps) {
  const { user, logout } = useUser();
  const { t } = useLanguage();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false);

  if (!user) return null;

  const getRoleIcon = () => {
    switch (user.role) {
      case 'student': return 'bi-mortarboard-fill text-primary';
      case 'parent': return 'bi-people-fill text-info';
      case 'teacher': return 'bi-person-workspace text-success';
      case 'admin': return 'bi-gear-fill text-warning';
      default: return 'bi-person-circle';
    }
  };

  const getRoleFeatures = () => {
    switch (user.role) {
      case 'student':
      case 'parent':
        return (
          <>
            <Dropdown.Item onClick={() => setShowPaymentModal(true)}>
              <i className="bi bi-credit-card me-2"></i>
              Pay Fees
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setShowResultsModal(true)}>
              <i className="bi bi-file-text me-2"></i>
              View Results
            </Dropdown.Item>
          </>
        );
      case 'teacher':
        return (
          <>
            <Dropdown.Item onClick={() => setShowPhotoUploadModal(true)}>
              <i className="bi bi-upload me-2"></i>
              Upload Event Photos
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="bi bi-journal-plus me-2"></i>
              Add News
            </Dropdown.Item>
          </>
        );
      case 'admin':
        return (
          <>
            <Dropdown.Item>
              <i className="bi bi-gear me-2"></i>
              Site Settings
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="bi bi-people me-2"></i>
              Manage Users
            </Dropdown.Item>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle 
        variant="success" 
        className="fw-semibold px-4 py-2 shadow-sm"
      >
        <i className={`${getRoleIcon()} me-2`}></i>
        {user.displayName}
      </Dropdown.Toggle>
      <Dropdown.Menu className="shadow-lg border-0 mt-2" style={{ minWidth: '200px' }}>
        <Dropdown.Header className="text-muted small fw-bold">
          {user.role.toUpperCase()} FEATURES
        </Dropdown.Header>
        {getRoleFeatures()}
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout} className="text-danger">
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
      
      <PaymentModal 
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
      />
      
      <ResultsModal 
        show={showResultsModal}
        onHide={() => setShowResultsModal(false)}
      />
      
      <PhotoUploadModal 
        show={showPhotoUploadModal}
        onHide={() => setShowPhotoUploadModal(false)}
        schoolSlug={school?.slug || 'jj-english-medium-school'}
        onUploadSuccess={(photos) => {
          onPhotosUploaded?.(photos);
          setShowPhotoUploadModal(false);
        }}
      />
    </Dropdown>
  );
}