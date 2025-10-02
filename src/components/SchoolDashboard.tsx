'use client';

import { School } from '@/lib/schools';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { UserProvider } from '@/contexts/UserContext';
import DashboardHeader from './dashboard/DashboardHeader';
import DashboardSidebar from './dashboard/DashboardSidebar';
import DashboardContent from './dashboard/DashboardContent';

// Add Bootstrap JS for dropdown functionality
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}

interface SchoolDashboardProps {
  school: School;
}

export default function SchoolDashboard({ school }: SchoolDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [uploadedPhotos, setUploadedPhotos] = useState<any[]>([]);

  const handlePhotosUploaded = (photos: any[]) => {
    setUploadedPhotos(prev => [...photos, ...prev]);
  };

  return (
    <LanguageProvider>
      <UserProvider>
        <div className="min-vh-100 bg-light">
          <DashboardHeader 
            school={school} 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
            onPhotosUploaded={handlePhotosUploaded}
          />
          <Container fluid>
            <Row>
              <Col lg={9} className="p-2 p-md-4">
                <DashboardContent 
                  school={school} 
                  activeMenu={activeMenu} 
                  uploadedPhotos={uploadedPhotos}
                />
              </Col>
              <Col lg={3} className="mt-3 mt-lg-0">
                <DashboardSidebar school={school} />
              </Col>
            </Row>
          </Container>
        </div>
      </UserProvider>
    </LanguageProvider>
  );
}