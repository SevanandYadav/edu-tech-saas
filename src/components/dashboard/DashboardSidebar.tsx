'use client';

import { School } from '@/lib/schools';
import { useState, useEffect } from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadSchoolNotifications, loadPrincipalMessage, PrincipalMessage } from '@/lib/contentLoader';
import NewsSlideshow from './NewsSlideshow';

interface DashboardSidebarProps {
  school: School;
}

export default function DashboardSidebar({ school }: DashboardSidebarProps) {
  const { t } = useLanguage();
  const [readNotifications, setReadNotifications] = useState<Set<number>>(new Set());
  const [notifications, setNotifications] = useState<string[]>([]);
  const [principalMessage, setPrincipalMessage] = useState<PrincipalMessage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      setLoading(true);
      Promise.all([
        loadSchoolNotifications(school.slug),
        loadPrincipalMessage(school.slug)
      ]).then(([schoolNotifications, schoolPrincipal]) => {
        setNotifications(schoolNotifications);
        setPrincipalMessage(schoolPrincipal);
        setLoading(false);
      });
    }
  }, [school?.slug]);



  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.id = 'notification-scroll-style';
      style.textContent = `
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .notification-scroll {
          animation: scrollVertical 15s linear infinite;
        }
      `;
      if (!document.getElementById('notification-scroll-style')) {
        document.head.appendChild(style);
      }
    }
  }, []);

  const markAsRead = (index: number) => {
    setReadNotifications(prev => new Set([...prev, index]));
  };

  return (
    <div className="bg-white shadow-sm p-3 p-md-4 h-100">
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">
          <span className="me-2">📰</span>
          {t.latestNews || 'Latest News'}
        </h5>
        <NewsSlideshow school={school} />
      </div>

      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">
          <span className="me-2">🔔</span>
          {t.notifications || 'Notifications'}
          <Badge bg="danger" className="ms-2">{notifications.length - readNotifications.size}</Badge>
        </h5>
        
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border spinner-border-sm text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
            <div className="position-absolute w-100 notification-scroll">
              {[...notifications, ...notifications].map((notification, index) => (
                <Card 
                  key={index} 
                  className={`mb-2 border-0 ${readNotifications.has(index % notifications.length) ? 'bg-light opacity-75' : 'bg-white'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => markAsRead(index % notifications.length)}
                >
                  <Card.Body className="p-3" style={{ borderLeft: `3px solid ${readNotifications.has(index % notifications.length) ? '#6c757d' : school.primaryColor}` }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="small mb-0">{notification}</Card.Text>
                      {readNotifications.has(index % notifications.length) && <i className="bi bi-check text-success"></i>}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {principalMessage && (
        <Card className="border-warning bg-warning bg-opacity-10">
          <Card.Body>
            <Card.Title className="h6 fw-bold">
              <span className="me-2">👨🏫</span>
              {t.principalMessage || 'Principal\'s Message'}
            </Card.Title>
            <Card.Text className="small mb-3">
              {principalMessage.message}
            </Card.Text>
            <small className="text-muted fw-medium">{principalMessage.name}</small>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}