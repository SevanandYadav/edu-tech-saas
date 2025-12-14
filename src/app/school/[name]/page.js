import { getAllSchools, getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const school = await getSchoolBySlug(params.name);
  return {
    title: school ? school.displayName : 'School Not Found',
  };
}

export default async function SchoolPage({ params }) {
  const school = await getSchoolBySlug(params.name);
  
  if (!school) {
    notFound();
  }

  return <SchoolDashboard school={school} />;
}

export async function generateStaticParams() {
  const schools = await getAllSchools();
  return schools.map((school) => ({
    name: school.slug,
  }));
}