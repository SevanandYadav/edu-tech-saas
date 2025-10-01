'use client';

import { School } from '@/lib/schools';
import Link from 'next/link';
import { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';
import { languageNames } from '@/lib/i18n';
import { useUser } from '@/contexts/UserContext';
import LoginModal from '../LoginModal';
import UserMenu from '../UserMenu';

interface DashboardHeaderProps {
  school: School;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  onPhotosUploaded?: (photos: any[]) => void;
}

export default function DashboardHeader({ school, activeMenu, setActiveMenu, onPhotosUploaded }: DashboardHeaderProps) {
  const { language, changeLanguage, t } = useLanguage();
  const { isLoggedIn } = useUser();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedLoginType, setSelectedLoginType] = useState('');

  const handleLoginClick = (loginType: string) => {
    setSelectedLoginType(loginType);
    setShowLoginModal(true);
  };

  const menuItems = [
    { id: 'home', label: t.home, icon: '🏠' },
    { id: 'fees', label: t.fees, icon: '💳' },
    { id: 'admission', label: t.admission, icon: '📝' },
    { id: 'about', label: t.aboutUs, icon: 'ℹ️' },
    { id: 'awards', label: t.awards, icon: '🏆' },
    { id: 'student-life', label: t.studentLife, icon: '🎓' }
  ];

  return (
    <div className="bg-white shadow-sm border-bottom">
      <div className="text-center py-3 border-bottom" style={{ backgroundColor: `${school.primaryColor}15` }}>
        <div className="d-flex align-items-center justify-content-center mb-2 position-relative">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
            style={{ 
              backgroundColor: school.primaryColor,
              width: '50px',
              height: '50px',
              fontSize: '1.2rem'
            }}
          >
            {school.displayName.charAt(0)}
          </div>
          <div className="position-absolute end-0 me-2 me-md-3 d-flex gap-1 gap-md-2">
            <Dropdown>
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="fw-semibold px-2 px-md-3 py-1 py-md-2"
              >
                <i className="bi bi-translate me-2"></i>
                {languageNames[language]}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>{t.language}</Dropdown.Header>
                {Object.entries(languageNames).map(([code, name]) => (
                  <Dropdown.Item 
                    key={code}
                    onClick={() => changeLanguage(code as any)}
                    className={language === code ? 'active' : ''}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            
            {isLoggedIn ? (
              <UserMenu school={school} onPhotosUploaded={onPhotosUploaded} />
            ) : (
              <Dropdown>
                <Dropdown.Toggle 
                  variant="primary" 
                  className="fw-semibold px-2 px-md-4 py-1 py-md-2 shadow-sm"
                  style={{ backgroundColor: school.primaryColor, borderColor: school.primaryColor }}
                >
                  <i className="bi bi-person-circle me-2"></i>
                  {t.portalLogin}
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg border-0 mt-2" style={{ minWidth: '200px' }}>
                  <Dropdown.Header className="text-muted small fw-bold">{t.selectLoginType}</Dropdown.Header>
                  <Dropdown.Item onClick={() => handleLoginClick(t.studentPortal)} className="py-2">
                    <i className="bi bi-mortarboard-fill me-2 text-primary"></i>
                    {t.studentPortal}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLoginClick(t.teacherPortal)} className="py-2">
                    <i className="bi bi-person-workspace me-2 text-success"></i>
                    {t.teacherPortal}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLoginClick(t.parentPortal)} className="py-2">
                    <i className="bi bi-people-fill me-2 text-info"></i>
                    {t.parentPortal}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLoginClick(t.adminPanel)} className="py-2">
                    <i className="bi bi-gear-fill me-2 text-warning"></i>
                    {t.adminPanel}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} href="/" className="py-2 text-muted">
                    <i className="bi bi-house-fill me-2"></i>
                    {t.backToHome}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
        <h1 className="h4 h-md-3 fw-bold text-dark mb-1">{school.displayName}</h1>
        <p className="text-muted mb-0 small">{school.location}</p>
      </div>
      
      <Nav className="justify-content-center bg-light py-2 overflow-auto">
        <div className="d-flex flex-nowrap" style={{ minWidth: 'max-content' }}>
          {menuItems.map((item) => (
            <Nav.Link
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`px-2 px-md-3 py-2 rounded mx-1 text-nowrap small ${
                activeMenu === item.id ? 'text-white' : 'text-dark'
              }`}
              style={activeMenu === item.id ? { backgroundColor: school.primaryColor } : {}}
            >
              <span className="me-1 d-block d-sm-inline">{item.icon}</span>
              <span className="d-none d-sm-inline">{item.label}</span>
            </Nav.Link>
          ))}
        </div>
      </Nav>
      
      <LoginModal 
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        loginType={selectedLoginType}
      />
    </div>
  );
}