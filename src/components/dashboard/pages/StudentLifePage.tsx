'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel, Modal } from 'react-bootstrap';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadContent } from '@/lib/contentLoader';


interface Photo {
  img: string;
  title: string;
  desc: string;
}

interface StudentLifePageProps {
  uploadedPhotos?: Photo[];
  school?: any;
}

interface StudentLifeData {
  extracurricularActivities: {
    category: string;
    activities: string[];
  }[];
  facilities: {
    name: string;
    description: string;
  }[];
}

export default function StudentLifePage({ uploadedPhotos = [], school }: StudentLifePageProps) {
  const { t } = useLanguage();
  const [studentLifeData, setStudentLifeData] = useState<StudentLifeData | null>(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadContent<StudentLifeData>(school.slug, 'student-life')
        .then(data => {
          setStudentLifeData(data);
          setDataLoading(false);
        })
        .catch(err => {
          console.error('Failed to load student life data:', err);
          setDataLoading(false);
        });
    }
  }, [school?.slug]);
  
  const [defaultPhotos, setDefaultPhotos] = useState<Photo[]>([]);
  const [photosLoading, setPhotosLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadContent<Photo[]>(school.slug, 'photos')
        .then(data => {
          setDefaultPhotos(data || []);
          setPhotosLoading(false);
        })
        .catch(err => {
          console.error('Failed to load photos data:', err);
          setPhotosLoading(false);
        });
    }
  }, [school?.slug]);

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

  // Load default photos from data branch
  useEffect(() => {
    if (!photosLoading) {
      setAllPhotos(defaultPhotos);
    }
  }, [defaultPhotos, photosLoading]);

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
          {t.studentLife || 'Student Life'}
        </h3>
        
        <div className="mb-5">
          <h5 className="fw-bold text-dark mb-3">
            <span className="me-2">📷</span>
            {t.lifeAtSchool || 'Life at School'}
          </h5>
          {photosLoading ? (
            <div className="text-center py-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading photos...</span>
              </div>
            </div>
          ) : photos.length > 0 ? (
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
          ) : (
            <div className="text-center py-4">
              <p className="text-muted">No photos available</p>
            </div>
          )}
        </div>
        
        {dataLoading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading activities...</span>
            </div>
          </div>
        ) : studentLifeData ? (
          <Row>
            {studentLifeData.extracurricularActivities.map((category, index) => {
              const colors = ['primary', 'success', 'info'];
              const icons = ['🎨', '⚽', '🔬'];
              return (
                <Col md={4} key={index} className="mb-4">
                  <Card className={`h-100 border-${colors[index % colors.length]}`}>
                    <Card.Header className={`bg-${colors[index % colors.length]} text-white`}>
                      <h6 className="mb-0">{icons[index % icons.length]} {category.category}</h6>
                    </Card.Header>
                    <Card.Body>
                      <ul className="list-unstyled">
                        {category.activities.map((activity, actIndex) => (
                          <li key={actIndex}>• {activity}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="text-center py-4">
            <p>Unable to load student life activities</p>
          </div>
        )}
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