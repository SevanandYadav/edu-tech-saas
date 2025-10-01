'use client';

import { School } from '@/lib/schools';
import { useState, useEffect } from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';
import NewsSlideshow from './NewsSlideshow';

interface DashboardSidebarProps {
  school: School;
}

export default function DashboardSidebar({ school }: DashboardSidebarProps) {
  const { t } = useLanguage();
  const [readNotifications, setReadNotifications] = useState<Set<number>>(new Set());

  const notifications = [
    t.feePaymentExtended,
    t.parentTeacherMeeting,
    t.newLibraryBooks,
    t.busRouteChanges,
    t.homeworkDeadline,
    t.annualFunctionRehearsals,
    t.medicalCheckup,
    t.newAdmissionForms
  ];

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
    <Col lg={3} className="bg-white shadow-sm p-4">
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">
          <span className="me-2">📰</span>
          {t.latestNews}
        </h5>
        <NewsSlideshow school={school} />
      </div>

      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">
          <span className="me-2">🔔</span>
          {t.notifications}
          <Badge bg="danger" className="ms-2">{notifications.length - readNotifications.size}</Badge>
        </h5>
        
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
      </div>

      <Card className="border-warning bg-warning bg-opacity-10">
        <Card.Body>
          <Card.Title className="h6 fw-bold">
            <span className="me-2">👨🏫</span>
            {t.principalMessage}
          </Card.Title>
          <Card.Text className="small mb-3">
            {t.principalMessageText}
          </Card.Text>
          <small className="text-muted fw-medium">{t.principalName}</small>
        </Card.Body>
      </Card>
    </Col>
  );
}