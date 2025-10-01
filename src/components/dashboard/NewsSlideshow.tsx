'use client';

import { School } from '@/lib/schools';
import { Card, Carousel } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
}

interface NewsSlideshowProps {
  school: School;
}

export default function NewsSlideshow({ school }: NewsSlideshowProps) {
  const { t } = useLanguage();
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: t.academicExcellenceAward,
      summary: t.academicExcellenceDesc,
      image: '🏆',
      date: '10 Dec 2024'
    },
    {
      id: 2,
      title: t.newComputerLab,
      summary: t.newComputerLabDesc,
      image: '💻',
      date: '8 Dec 2024'
    },
    {
      id: 3,
      title: t.interSchoolSports,
      summary: t.interSchoolSportsDesc,
      image: '🥇',
      date: '5 Dec 2024'
    }
  ];

  return (
    <Carousel indicators={true} controls={false} interval={4000}>
      {newsItems.map((item) => (
        <Carousel.Item key={item.id}>
          <Card className="border-0" style={{ height: '200px' }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">{item.image}</div>
                <Card.Title className="fs-6 fw-bold">{item.title}</Card.Title>
                <Card.Text className="small text-muted">{item.summary}</Card.Text>
              </div>
              <small className="text-muted">{item.date}</small>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}