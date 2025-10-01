'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';

interface StudentLifePageProps {
  uploadedPhotos?: any[];
  school?: any;
}

export default function StudentLifePage({ uploadedPhotos = [], school }: StudentLifePageProps) {
  const { t } = useLanguage();
  const defaultPhotos = [
    { img: '/jj-english-medium-school/Interschool_Competition.png', title: 'Inter-School Competition', desc: 'Students participating in various competitions' },
    { img: '/jj-english-medium-school/Science_Project.png', title: 'Science Project', desc: 'Innovative science projects and experiments' },
    { img: '🎨', title: 'Art Exhibition', desc: 'Creative artwork displayed by talented students' },
    { img: '🎭', title: 'Cultural Program', desc: 'Students performing in annual cultural festival' },
    { img: '📚', title: 'Library Session', desc: 'Students engaged in reading and research activities' },
    { img: '🌱', title: 'Environmental Day', desc: 'Tree plantation and environmental awareness activities' }
  ];

  const [allPhotos, setAllPhotos] = useState(defaultPhotos);

  // Load default photos only for static site
  useEffect(() => {
    setAllPhotos(defaultPhotos);
  }, []);

  useEffect(() => {
    if (uploadedPhotos.length > 0) {
      setAllPhotos(prev => [...uploadedPhotos, ...prev]);
    }
  }, [uploadedPhotos]);

  const photos = allPhotos;


  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-2 p-md-4">
        <h3 className="fw-bold text-dark mb-4">
          <span className="me-2">🎓</span>
          {t.studentLife}
        </h3>
        
        <div className="mb-4">
          <h5 className="fw-bold text-dark mb-3">
            <span className="me-2">📷</span>
            {t.lifeAtSchool}
          </h5>
          <Carousel indicators={true} controls={true} interval={3000}>
            {photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '250px', minHeight: '200px' }}>
                  <div className="text-center px-2">
                    {photo.img.startsWith('/') ? (
                      <div className="mb-2">
                        <Image 
                          src={photo.img} 
                          alt={photo.title}
                          width={300}
                          height={150}
                          style={{ objectFit: 'cover', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    ) : (
                      <div className="display-4 display-md-1 mb-2">{photo.img}</div>
                    )}
                    <h6 className="h6 h-md-5 fw-bold">{photo.title}</h6>
                    <p className="text-muted small">{photo.desc}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-primary">
              <Card.Header className="bg-primary text-white">
                <h6 className="mb-0">🎨 {t.extracurricularActivities}</h6>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>• {t.artCraft}</li>
                  <li>• {t.musicDance}</li>
                  <li>• {t.dramaSociety}</li>
                  <li>• {t.photographyClub}</li>
                  <li>• {t.debateSociety}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-success">
              <Card.Header className="bg-success text-white">
                <h6 className="mb-0">⚽ {t.sportsGames}</h6>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>• {t.footballCricket}</li>
                  <li>• {t.basketball}</li>
                  <li>• {t.swimmingPool}</li>
                  <li>• {t.tableTennis}</li>
                  <li>• {t.athleticsTrack}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-info">
              <Card.Header className="bg-info text-white">
                <h6 className="mb-0">🔬 {t.academicClubs}</h6>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>• {t.scienceClub}</li>
                  <li>• {t.mathOlympiad}</li>
                  <li>• {t.roboticsClub}</li>
                  <li>• {t.computerProgramming}</li>
                  <li>• {t.environmentalClub}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}