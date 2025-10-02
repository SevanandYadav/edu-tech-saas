import { getAllSchools, getSchoolByName } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';
import { notFound } from 'next/navigation';

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const school = getSchoolByName(name);
  
  if (!school) {
    notFound();
  }

  return <SchoolDashboard school={school} />;
}

export async function generateStaticParams() {
  const schools = getAllSchools();
  return schools.map((school) => ({
    name: school.name,
  }));
}