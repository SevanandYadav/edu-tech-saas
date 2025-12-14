'use client';

import { School } from '@/lib/schools';
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

  const handleLoginClick = () => {
    setSelectedLoginType('Login');
    setShowLoginModal(true);
  };

  const menuItems = [
    { id: 'home', label: t.home, icon: '🏠' },
    { id: 'admission', label: t.admission, icon: '📝' },
    { id: 'fees', label: t.fees, icon: '💳' },
    { id: 'awards', label: t.awards, icon: '🏆' },
    { id: 'student-life', label: t.studentLife, icon: '🎓' },
    { id: 'about', label: t.aboutUs, icon: 'ℹ️' }
  ];

  return (
    <div className="bg-white shadow-sm border-bottom">
      <div className="text-center py-2 border-bottom" style={{ backgroundColor: `${school.primaryColor}15` }}>
        {/* School info - centered */}
        <div className="d-flex align-items-center justify-content-center mb-2 position-relative">
          <div className="d-flex flex-column align-items-center school-info">
          <style>{`
            .school-info {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              max-width: 60%;
            }
          `}</style>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-2"
              style={{ 
                backgroundColor: school.primaryColor,
                width: '40px',
                height: '40px',
                fontSize: '1rem'
              }}
            >
              {school.displayName.charAt(0)}
            </div>
            <h1 className="h5 h-md-4 fw-bold text-dark mb-0">{school.displayName}</h1>
            <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>{school.location}</p>
          </div>
          
          {/* All buttons - positioned absolutely on right */}
          <div className="position-absolute end-0 me-2 me-md-3">
            <div className="d-flex gap-2">
              <Dropdown>
                <Dropdown.Toggle 
                  variant="outline-secondary" 
                  size="sm"
                  className="fw-semibold px-2 px-md-3 py-1 py-md-2"
                  style={{ height: '32px', minHeight: '32px' }}
                >
                  <i className="bi bi-translate d-md-none"></i>
                  <span className="d-none d-md-inline">
                    <i className="bi bi-translate me-2"></i>
                    {languageNames[language]}
                  </span>
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
                <button
                  className="btn btn-primary fw-semibold px-2 px-md-3 py-1 py-md-2"
                  onClick={handleLoginClick}
                  style={{ backgroundColor: school.primaryColor, borderColor: school.primaryColor, height: '32px', minHeight: '32px' }}
                >
                  <i className="bi bi-box-arrow-in-right d-md-none"></i>
                  <span className="d-none d-md-inline">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    {t.login || 'Login'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
      
      <Nav className="justify-content-start bg-light py-1 overflow-auto" style={{ paddingLeft: '5%' }}>
        <div className="d-flex flex-nowrap" style={{ minWidth: 'max-content' }}>
          {menuItems.map((item) => (
            <Nav.Link
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`px-2 px-md-3 py-1 rounded mx-1 text-nowrap small ${
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