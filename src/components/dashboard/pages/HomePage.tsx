'use client';

import { School } from '@/lib/schools';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { loadSchoolEvents, loadSchoolTestimonials, EventItem, TestimonialItem } from '@/lib/contentLoader';

interface HomePageProps {
  school: School;
}

export default function HomePage({ school }: HomePageProps) {
  const { t } = useLanguage();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      setLoading(true);
      Promise.all([
        loadSchoolEvents(school.slug),
        loadSchoolTestimonials(school.slug)
      ]).then(([schoolEvents, schoolTestimonials]) => {
        setEvents(schoolEvents);
        setTestimonials(schoolTestimonials);
        setLoading(false);
      });
    }
  }, [school?.slug]);



  return (
    <>
      <Card className="text-white mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Card.Body className="p-4">
          <Card.Title className="h3 fw-bold mb-2">{t.welcomeMessage || 'Welcome to Our School'}</Card.Title>
          <Card.Text className="opacity-75">Excellence in Education • Shaping Future Leaders</Card.Text>
        </Card.Body>
      </Card>

      <div className="mb-4">
        <h4 className="fw-bold text-dark mb-3">
          <span className="me-2">📅</span>
          {t.upcomingEvents || 'Upcoming Events'}
        </h4>
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading events...</span>
            </div>
          </div>
        ) : (
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
                        <Card.Text className="small text-muted">{event.description}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>



      <div className="mb-4">
        <h4 className="fw-bold text-dark mb-3">
          <span className="me-2">💬</span>
          {t.whatCommunitySays || 'What Our Community Says'}
        </h4>
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading testimonials...</span>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}