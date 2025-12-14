'use client';

import { School } from '@/lib/schools';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
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

function SchoolDashboardContent({ school }: SchoolDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [uploadedPhotos, setUploadedPhotos] = useState<any[]>([]);
  const { setSchool } = useLanguage();

  useEffect(() => {
    if (school?.slug) {
      setSchool(school.slug);
    }
  }, [school?.slug, setSchool]);

  const handlePhotosUploaded = (photos: any[]) => {
    setUploadedPhotos(prev => [...photos, ...prev]);
  };

  return (
    <UserProvider>
      <div className="min-vh-100 bg-light">
        <DashboardHeader 
          school={school} 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu}
          onPhotosUploaded={handlePhotosUploaded}
        />
        <Container fluid className="px-2 px-md-3">
          <Row className="g-2 g-md-3">
            <Col xs={12} lg={9} className="order-1">
              <div className="p-2 p-md-4">
                <DashboardContent 
                  school={school} 
                  activeMenu={activeMenu} 
                  uploadedPhotos={uploadedPhotos}
                />
              </div>
            </Col>
            <Col xs={12} lg={3} className="order-2">
              <DashboardSidebar school={school} />
            </Col>
          </Row>
        </Container>
      </div>
    </UserProvider>
  );
}

export default function SchoolDashboard({ school }: SchoolDashboardProps) {
  return (
    <LanguageProvider>
      <SchoolDashboardContent school={school} />
    </LanguageProvider>
  );
}