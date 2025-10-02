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

  const getSchoolContent = () => {
    if (school?.slug === 'jj') {
      return {
        notifications: [
          'Fee payment deadline extended to January 20th',
          'Parent-Teacher meeting scheduled for January 25th',
          'New computer lab inaugurated - classes start Monday',
          'Republic Day celebration preparations underway',
          'Science fair registration open till January 15th',
          'Annual day rehearsals begin next week',
          'Health checkup camp on January 30th',
          'Merit scholarship applications now open'
        ],
        principalMessage: 'Dear students and parents, we are committed to providing quality education and creating a nurturing environment for all our students. Together, we will achieve excellence.',
        principalName: 'Dr. Rajesh Patil, Principal'
      };
    } else if (school?.slug === 'demo') {
      return {
        notifications: [
          'New sports complex now open for all students',
          'Digital classroom training for teachers completed',
          'Cultural fest 2024 registrations are now open',
          'Career guidance session on January 22nd',
          'Art competition winners announced - congratulations!',
          'Swimming pool maintenance scheduled for weekend',
          'Alumni meet preparations in progress',
          'Health and wellness week starts February 1st'
        ],
        principalMessage: 'Welcome to our school community! We believe in holistic education that nurtures not just academic excellence but also creativity, character, and leadership skills.',
        principalName: 'Mrs. Sunita Sharma, Principal'
      };
    }
    return { notifications: [], principalMessage: '', principalName: '' };
  };

  const content = getSchoolContent();
  const notifications = content.notifications;

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
            {content.principalMessage}
          </Card.Text>
          <small className="text-muted fw-medium">{content.principalName}</small>
        </Card.Body>
      </Card>
    </div>
  );
}