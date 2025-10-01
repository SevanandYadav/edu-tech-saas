import { getAllSchools, getSchoolByName } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';
import { notFound } from 'next/navigation';

interface SchoolPageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function SchoolPage({ params }: SchoolPageProps) {
  const { name } = await params;
  const school = getSchoolByName(name);
  
  if (!school) {
    notFound();
  }

  return <SchoolDashboard school={school} />;
}

export function generateStaticParams() {
  const schools = getAllSchools();
  return schools.map((school) => ({
    name: school.name,
  }));
}