'use client';

import { School } from '@/lib/schools';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface HomePageProps {
  school: School;
}

export default function HomePage({ school }: HomePageProps) {
  const { t } = useLanguage();

  const events = [
    { date: '15 Dec', title: 'Annual Sports Day', desc: 'Inter-house sports competition for all grades' },
    { date: '20 Dec', title: 'Science Exhibition', desc: 'Students showcase innovative science projects' },
    { date: '25 Dec', title: 'Christmas Celebration', desc: 'Festive celebration with cultural programs' },
    { date: '30 Dec', title: 'Winter Break Begins', desc: 'School closes for winter vacation' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Mathematics Teacher',
      text: 'The digital platform has transformed how I teach. Students are more engaged and I can track their progress effectively.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      role: 'Grade 10 Student',
      text: 'Online classes are amazing! I can access all my study materials anytime and the teachers are always available for help.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mrs. Priya Patel',
      role: 'Parent',
      text: 'I love being able to track my child\'s progress and communicate with teachers easily. The portal keeps me informed about everything.',
      rating: 4
    }
  ];

  return (
    <>
      <Card className="text-white mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Card.Body className="p-4">
          <Card.Title className="h3 fw-bold mb-2">{t.welcomeMessage} {school.displayName}</Card.Title>
          <Card.Text className="opacity-75">Excellence in Education • Shaping Future Leaders</Card.Text>
        </Card.Body>
      </Card>

      <div className="mb-4">
        <h4 className="fw-bold text-dark mb-3">
          <span className="me-2">📅</span>
          {t.upcomingEvents}
        </h4>
        <Row>
          {events.map((event, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex align-items-start">
                    <div 
                      className="rounded text-white text-center fw-bold me-3 flex-shrink-0"
                      style={{ 
                        backgroundColor: school.primaryColor,
                        width: '50px',
                        height: '50px',
                        fontSize: '0.7rem',
                        lineHeight: '1.2',
                        padding: '8px'
                      }}
                    >
                      {event.date.split(' ')[0]}<br/>{event.date.split(' ')[1]}
                    </div>
                    <div>
                      <Card.Title className="h6 fw-bold mb-1">{event.title}</Card.Title>
                      <Card.Text className="small text-muted">{event.desc}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Row>
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h6 fw-bold mb-3">
                <span className="me-2">📚</span>
                {t.academicResources}
              </Card.Title>
              <div className="d-grid gap-2">
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.digitalLibrary}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.onlineClasses}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.assignmentPortal}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h6 fw-bold mb-3">
                <span className="me-2">📊</span>
                {t.studentServices}
              </Card.Title>
              <div className="d-grid gap-2">
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.viewResults}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.attendanceReport}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.feePayment}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h6 fw-bold mb-3">
                <span className="me-2">🤝</span>
                {t.community}
              </Card.Title>
              <div className="d-grid gap-2">
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.parentPortalLink}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.teacherConnect}</Button>
                <Button variant="link" className="text-start p-0 text-decoration-none">• {t.schoolCalendar}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mb-4">
        <h4 className="fw-bold text-dark mb-3">
          <span className="me-2">💬</span>
          {t.whatCommunitySays}
        </h4>
        <Row>
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.id} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-3">
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`bi bi-star${i < testimonial.rating ? '-fill' : ''} text-warning me-1`}
                      ></i>
                    ))}
                  </div>
                  <Card.Text className="small mb-3 fst-italic">
                    "{testimonial.text}"
                  </Card.Text>
                  <div className="border-top pt-2">
                    <Card.Title className="h6 mb-0">{testimonial.name}</Card.Title>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}