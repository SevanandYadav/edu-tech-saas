'use client';

import { School } from '@/lib/schools';
import { Card, Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { loadSchoolNews, NewsItem } from '@/lib/contentLoader';

interface NewsSlideshowProps {
  school: School;
}

const categoryIcons: Record<string, string> = {
  achievement: '🏆',
  infrastructure: '💻',
  sports: '🥇',
  environment: '🌱',
  academic: '📚'
};

export default function NewsSlideshow({ school }: NewsSlideshowProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (school?.slug) {
      loadSchoolNews(school.slug).then(schoolNews => {
        setNews(schoolNews);
        setLoading(false);
      });
    }
  }, [school?.slug]);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border spinner-border-sm text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Carousel indicators={true} controls={false} interval={4000}>
      {news.map((item) => (
        <Carousel.Item key={item.id}>
          <Card className="border-0" style={{ height: '200px' }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="fs-1 mb-2">{categoryIcons[item.category] || '📰'}</div>
                <Card.Title className="fs-6 fw-bold">{item.title}</Card.Title>
                <Card.Text className="small text-muted">{item.description}</Card.Text>
              </div>
              <small className="text-muted">{item.date}</small>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}