import { getAllSchools, getSchoolByName } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';
import { notFound } from 'next/navigation';

export default function SchoolPage({
  params,
}: {
  params: { name: string };
}) {
  const school = getSchoolByName(params.name);
  
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