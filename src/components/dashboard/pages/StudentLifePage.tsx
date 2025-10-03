'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel, Modal } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';


interface Photo {
  img: string;
  title: string;
  desc: string;
}

interface StudentLifePageProps {
  uploadedPhotos?: Photo[];
  school?: any;
}

export default function StudentLifePage({ uploadedPhotos = [], school }: StudentLifePageProps) {
  const { t } = useLanguage();
  
  const getSchoolPhotos = () => {
    if (school?.slug === 'jj') {
      return [
        { img: '/jj-english-medium-school/Interschool_Competition.png', title: 'Inter-School Competition', desc: 'Students participating in various competitions' },
        { img: '/jj-english-medium-school/Science_Project.png', title: 'Science Project', desc: 'Innovative science projects and experiments' },
        { img: '🎨', title: 'Art Exhibition', desc: 'Creative artwork displayed by talented students' },
        { img: '🎭', title: 'Cultural Program', desc: 'Students performing in annual cultural festival' },
        { img: '📚', title: 'Library Session', desc: 'Students engaged in reading and research activities' },
        { img: '🌱', title: 'Environmental Day', desc: 'Tree plantation and environmental awareness activities' }
      ];
    } else if (school?.slug === 'demo') {
      return [
        { img: '🏆', title: 'Sports Day', desc: 'Annual sports competition and athletic events' },
        { img: '🎪', title: 'Annual Function', desc: 'Grand celebration with performances and awards' },
        { img: '🔬', title: 'Science Fair', desc: 'Students showcasing innovative science projects' },
        { img: '🎵', title: 'Music Concert', desc: 'Musical performances by talented students' },
        { img: '📖', title: 'Reading Club', desc: 'Promoting literacy and love for books' },
        { img: '🌍', title: 'Earth Day', desc: 'Environmental awareness and green initiatives' }
      ];
    }
    return [];
  };
  
  const defaultPhotos = getSchoolPhotos();

  const [allPhotos, setAllPhotos] = useState(defaultPhotos);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePhotoClick = (photo: Photo, index: number) => {
    if (photo.img.startsWith('/')) {
      setSelectedPhotoIndex(index);
      setShowModal(true);
    }
  };

  const navigatePhoto = (direction: number) => {
    const imagePhotos = photos.filter(p => p.img.startsWith('/'));
    const currentImageIndex = imagePhotos.findIndex((_, i) => i === selectedPhotoIndex);
    let newIndex = currentImageIndex + direction;
    
    if (newIndex < 0) newIndex = imagePhotos.length - 1;
    if (newIndex >= imagePhotos.length) newIndex = 0;
    
    setSelectedPhotoIndex(photos.findIndex(p => p === imagePhotos[newIndex]));
  };

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
        
        <div className="mb-5">
          <h5 className="fw-bold text-dark mb-3">
            <span className="me-2">📷</span>
            {t.lifeAtSchool}
          </h5>
          <div className="position-relative">
            <Carousel indicators={true} controls={false} interval={3000} activeIndex={activeIndex} onSelect={setActiveIndex}>
            {photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <div className="bg-light" style={{ height: '400px', position: 'relative' }}>
                  {photo.img.startsWith('/') ? (
                    <img 
                      src={photo.img} 
                      alt={photo.title}
                      onClick={() => handlePhotoClick(photo, index)}
                      style={{ 
                        width: '80%', 
                        height: '300px', 
                        objectFit: 'contain', 
                        borderRadius: '8px 8px 0 0',
                        backgroundColor: '#f8f9fa',

                        margin: '0 auto',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                      <div className="display-1">{photo.img}</div>
                    </div>
                  )}
                  <div className="p-3 bg-white text-center" style={{ borderRadius: '0 0 8px 8px', margin: '0 50px' }}>
                    <h6 className="fw-bold mb-1">{photo.title}</h6>
                    <p className="text-muted small mb-0">{photo.desc}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
            </Carousel>
            
            {/* Custom visible navigation arrows */}
            <button 
              className="btn position-absolute start-0 ms-2"
              onClick={() => setActiveIndex(activeIndex === 0 ? photos.length - 1 : activeIndex - 1)}
              style={{ 
                top: '0px',
                backgroundColor: 'rgba(37, 99, 235, 0.4)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                width: '40px',
                height: '300px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(37,99,235,0.6), inset 0 1px 0 rgba(255,255,255,0.3)',
                background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.4), rgba(29, 78, 216, 0.4))',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ‹
            </button>
            <button 
              className="btn position-absolute end-0 me-2"
              onClick={() => setActiveIndex(activeIndex === photos.length - 1 ? 0 : activeIndex + 1)}
              style={{ 
                top: '0px',
                backgroundColor: 'rgba(37, 99, 235, 0.4)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                width: '40px',
                height: '300px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(37,99,235,0.6), inset 0 1px 0 rgba(255,255,255,0.3)',
                background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.4), rgba(29, 78, 216, 0.4))',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ›
            </button>
          </div>
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
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body className="p-0 position-relative">
          {photos[selectedPhotoIndex] && (
            <>
              <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
                {/* Left Arrow */}
                <button 
                  className="btn me-3"
                  onClick={() => navigatePhoto(-1)}
                  style={{ 
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: '3px solid #ffffff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,123,255,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  ‹
                </button>
                
                {/* Image Container */}
                <div className="text-center flex-grow-1">
                  <img 
                    src={photos[selectedPhotoIndex].img} 
                    alt={photos[selectedPhotoIndex].title}
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      maxHeight: '60vh',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Right Arrow */}
                <button 
                  className="btn ms-3"
                  onClick={() => navigatePhoto(1)}
                  style={{ 
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: '3px solid #ffffff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,123,255,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  ›
                </button>
              </div>
              
              <div className="p-3 text-center bg-light">
                <h5 className="fw-bold">{photos[selectedPhotoIndex].title}</h5>
                <p className="text-muted mb-0">{photos[selectedPhotoIndex].desc}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Card>
  );
}