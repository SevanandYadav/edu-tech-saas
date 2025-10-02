'use client';

import { School } from '@/lib/schools';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface HomePageProps {
  school: School;
}

export default function HomePage({ school }: HomePageProps) {
  const { t } = useLanguage();

  const getSchoolContent = () => {
    if (school?.slug === 'jj') {
      return {
        events: [
          { date: '15 Jan', title: 'Republic Day Celebration', desc: 'Patriotic program with flag hoisting and cultural performances' },
          { date: '20 Jan', title: 'Science Fair 2024', desc: 'Students showcase innovative science projects and experiments' },
          { date: '25 Jan', title: 'Parent-Teacher Meeting', desc: 'Quarterly progress discussion with parents' },
          { date: '30 Jan', title: 'Inter-School Quiz', desc: 'Participating in district-level quiz competition' }
        ],
        testimonials: [
          {
            id: 1,
            name: 'Mrs. Sunita Desai',
            role: 'English Teacher',
            text: 'J.J. School provides excellent facilities and a supportive environment for both teachers and students.',
            rating: 5
          },
          {
            id: 2,
            name: 'Arjun Patil',
            role: 'Grade 9 Student',
            text: 'I love studying here! The teachers are helpful and the school has great sports facilities.',
            rating: 5
          },
          {
            id: 3,
            name: 'Mr. Rajesh Kumar',
            role: 'Parent',
            text: 'My daughter has shown remarkable improvement since joining J.J. School. Highly recommended!',
            rating: 5
          }
        ]
      };
    } else if (school?.slug === 'demo') {
      return {
        events: [
          { date: '18 Jan', title: 'Cultural Fest 2024', desc: 'Three-day cultural festival featuring music, dance, and drama' },
          { date: '22 Jan', title: 'Career Guidance Session', desc: 'Expert counselors guide students on career choices' },
          { date: '28 Jan', title: 'Health Check-up Camp', desc: 'Free health screening for all students' },
          { date: '02 Feb', title: 'Alumni Meet', desc: 'Former students share their success stories' }
        ],
        testimonials: [
          {
            id: 1,
            name: 'Dr. Priya Sharma',
            role: 'Science Teacher',
            text: 'Demo School encourages innovative teaching methods and provides excellent resources for educators.',
            rating: 5
          },
          {
            id: 2,
            name: 'Sneha Reddy',
            role: 'Grade 11 Student',
            text: 'The school offers amazing opportunities for extracurricular activities along with quality education.',
            rating: 4
          },
          {
            id: 3,
            name: 'Mrs. Kavita Singh',
            role: 'Parent',
            text: 'Demo School has helped my son develop confidence and leadership skills. Great school community!',
            rating: 5
          }
        ]
      };
    }
    return { events: [], testimonials: [] };
  };

  const content = getSchoolContent();

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
          {content.events.map((event, index) => (
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
          {content.testimonials.map((testimonial) => (
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