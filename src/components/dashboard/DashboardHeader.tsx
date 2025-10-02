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
      <div className="text-center py-3 border-bottom" style={{ backgroundColor: `${school.primaryColor}15` }}>
        {/* Mobile buttons - above school info */}
        <div className="d-flex d-md-none justify-content-end mb-3 px-3">
          <div className="d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="fw-semibold px-2 py-1"
                style={{ width: '60px', height: '32px' }}
              >
                <i className="bi bi-translate"></i>
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
                className="btn btn-primary btn-sm fw-semibold px-2 py-1"
                onClick={handleLoginClick}
                style={{ backgroundColor: school.primaryColor, borderColor: school.primaryColor, width: '60px', height: '32px' }}
              >
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
            )}
          </div>
        </div>
        
        {/* School info */}
        <div className="d-flex align-items-center justify-content-center mb-2 position-relative">
          <div className="d-flex flex-column align-items-center position-relative school-info" style={{ left: '-8%', maxWidth: '85%' }}>
          <style>{`
            .school-info {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            @media (min-width: 992px) {
              .school-info {
                left: -8% !important;
                max-width: 70% !important;
              }
            }
          `}</style>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-2"
              style={{ 
                backgroundColor: school.primaryColor,
                width: '50px',
                height: '50px',
                fontSize: '1.2rem'
              }}
            >
              {school.displayName.charAt(0)}
            </div>
            <h1 className="h4 h-md-3 fw-bold text-dark mb-1">{school.displayName}</h1>
            <p className="text-muted mb-0 small">{school.location}</p>
          </div>
          
          {/* Desktop buttons - positioned absolutely */}
          <div className="d-none d-md-flex position-absolute end-0 me-3 gap-2">
            <Dropdown>
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="fw-semibold px-3 py-2"
                style={{ height: '38px' }}
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
              <button
                className="btn btn-primary fw-semibold px-3 py-2 shadow-sm"
                onClick={handleLoginClick}
                style={{ backgroundColor: school.primaryColor, borderColor: school.primaryColor, height: '38px' }}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                {t.login || 'Login'}
              </button>
            )}
          </div>
        </div>

      </div>
      
      <Nav className="justify-content-start bg-light py-2 overflow-auto" style={{ paddingLeft: '10%' }}>
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