import { getAllSchools, getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  const school = getSchoolBySlug(params.name);
  return {
    title: school ? school.displayName : 'School Not Found',
  };
}

export default function SchoolPage({ params }) {
  const school = getSchoolBySlug(params.name);
  
  if (!school) {
    notFound();
  }

  return <SchoolDashboard school={school} />;
}

export function generateStaticParams() {
  const schools = getAllSchools();
  return schools.map((school) => ({
    name: school.slug,
  }));
}