'use client';

import { School } from '@/lib/schools';
import HomePage from './pages/HomePage';
import FeesPage from './pages/FeesPage';
import AdmissionPage from './pages/AdmissionPage';
import AboutPage from './pages/AboutPage';
import AwardsPage from './pages/AwardsPage';
import StudentLifePage from './pages/StudentLifePage';

interface DashboardContentProps {
  school: School;
  activeMenu: string;
  uploadedPhotos?: any[];
}

export default function DashboardContent({ school, activeMenu, uploadedPhotos = [] }: DashboardContentProps) {
  switch (activeMenu) {
    case 'home':
      return <HomePage school={school} />;
    case 'fees':
      return <FeesPage />;
    case 'admission':
      return <AdmissionPage />;
    case 'about':
      return <AboutPage school={school} />;
    case 'awards':
      return <AwardsPage />;
    case 'student-life':
      return <StudentLifePage uploadedPhotos={uploadedPhotos} school={school} />;
    default:
      return <div>Content not found</div>;
  }
}